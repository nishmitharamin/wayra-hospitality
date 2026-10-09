const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

// Define Booking Schema & Model
const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  budget: { type: String },
  travel_month: { type: String, required: true },
  preferred_contact: { type: String },
  message: { type: String, required: true },
  totalCost: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Booking =
  mongoose.models.Booking || mongoose.model("Booking", bookingSchema);

// Configure Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Your Gmail App Password
  },
});

// POST endpoint: maps to /api/bookings/submit
router.post("/submit", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      budget,
      travel_month,
      preferred_contact,
      message,
      totalCost,
    } = req.body;

    // Basic validation check
    if (!name || !email || !phone || !travel_month || !message) {
      return res.status(400).json({
        success: false,
        message: "Missing required booking fields.",
      });
    }

    // 1. Save to MongoDB Atlas
    const newBooking = new Booking({
      name,
      email,
      phone,
      budget,
      travel_month,
      preferred_contact,
      message,
      totalCost,
    });

    await newBooking.save();

    // 2. Prepare Email Notification for the CEO
    const mailOptions = {
      from: `"Wayra Hospitality Alert" <${process.env.EMAIL_USER}>`,
      to: process.env.CEO_EMAIL,
      subject: `🚨 New Luxury Expedition Enquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #0088cc; text-transform: uppercase; letter-spacing: 1px;">New Travel Enquiry Received</h2>
          <p>A new client has submitted an executive enquiry on <strong>Wayra Hospitality</strong>.</p>
          <hr style="border: none; border-top: 1px solid #eee;" />
          
          <table style="width: 100%; text-align: left; border-collapse: collapse; margin-top: 10px;">
            <tr><td style="padding: 8px 0; font-weight: bold;">Client Name:</td><td>${name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Phone / WhatsApp:</td><td>${phone}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Tentative Travel Month:</td><td>${travel_month}</td></tr>
            ${budget ? `<tr><td style="padding: 8px 0; font-weight: bold;">Budget:</td><td>${budget}</td></tr>` : ""}
            ${preferred_contact ? `<tr><td style="padding: 8px 0; font-weight: bold;">Preferred Contact Method:</td><td>${preferred_contact}</td></tr>` : ""}
            ${totalCost ? `<tr><td style="padding: 8px 0; font-weight: bold;">Estimated Trip Cost:</td><td>${totalCost}</td></tr>` : ""}
          </table>

          <div style="margin-top: 15px; padding: 12px; background-color: #f9f9f9; border-left: 4px solid #0088cc;">
            <strong>Expedition Vision / Requirements:</strong>
            <p style="margin-top: 5px; color: #333;">${message}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #eee; margin-top: 20px;" />
          <p style="font-size: 11px; color: #777;">This enquiry was saved into database: <code>wayra_db</code> on MongoDB Atlas.</p>
        </div>
      `,
    };

    // 3. Send Email and Await response to catch errors instantly
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("✅ CEO Email Alert Sent Successfully:", info.response);
    } catch (mailErr) {
      console.error("❌ Error sending CEO email alert:", mailErr.message);
    }

    return res.status(200).json({
      success: true,
      message:
        "Thank you! Our Executive will get in touch with you within next 24 Hours!",
    });
  } catch (error) {
    console.error("Database save error:", error);
    return res.status(500).json({
      success: false,
      message:
        error.message || "Internal server error while processing booking.",
    });
  }
});

module.exports = router;
