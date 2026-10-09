const Booking = require("../models/Booking");
const nodemailer = require("nodemailer");

// Configure Nodemailer Transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Create a new booking inquiry
exports.createBooking = async (req, res) => {
  try {
    const { name, email, phone, addons, totalCost } = req.body;

    // Validate required fields
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, email, and phone number.",
      });
    }

    // 1. Save client details into Cloud Database (MongoDB Atlas)
    const newBooking = new Booking({
      name,
      email,
      phone,
      addons: {
        yacht: addons?.yacht || false,
        helicopter: addons?.helicopter || false,
        curatedDining: addons?.curatedDining || false,
      },
      totalCost: totalCost || 0,
    });

    await newBooking.save();

    // 2. Email alert sent directly to the CEO's inbox
    const mailOptions = {
      from: `"Wayra Hospitality System" <${process.env.EMAIL_USER}>`,
      to: process.env.CEO_EMAIL,
      subject: `🚨 New Lead Received: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; background-color: #f9f9f9;">
          <h2 style="color: #059669;">New Client Inquiry - Wayra Hospitality</h2>
          <p>You have received a new customer request from the website:</p>
          <hr />
          <p><strong>Client Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Estimated Total Quote:</strong> ₹${totalCost || 0}</p>
          <h3>Selected Add-ons:</h3>
          <ul>
            <li><strong>Curated Dining / Meal Upgrade:</strong> ${addons?.curatedDining ? "Yes" : "No"}</li>
            <li><strong>Airport / Station Pickup & Drop:</strong> ${addons?.helicopter ? "Yes" : "No"}</li>
            <li><strong>Yacht Upgrade:</strong> ${addons?.yacht ? "Yes" : "No"}</li>
          </ul>
          <hr />
          <p style="font-size: 0.85em; color: #666;">This inquiry has been saved to your online MongoDB Atlas cloud database automatically.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(201).json({
      success: true,
      message: "Booking request saved successfully and CEO notified!",
      data: newBooking,
    });
  } catch (error) {
    console.error("Booking Creation Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to process booking request. Please try again later.",
    });
  }
};

// Retrieve all bookings (Optional endpoint for admin dashboard)
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings,
    });
  } catch (error) {
    console.error("Fetch Bookings Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to retrieve bookings.",
    });
  }
};
