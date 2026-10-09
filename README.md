✈️ Wayra Hospitality — Luxury Travel & Expedition Platform

Wayra Hospitality is a full-stack, immersive luxury travel platform designed for high-end clientele looking for bespoke global expeditions. The application features a stunning glassmorphic UI, real-time dynamic trip calculators, secure database storage via MongoDB Atlas, and automated instant email alerts to the executive team using Nodemailer.

🚀 Key Features

Immersive Frontend Experience: Built with React, Vite, and custom CSS featuring cinematic video backgrounds and interactive tour/destination drawers.

Dynamic Global Trip Calculator: Instantly calculates estimated costs based on destination, travelers, and customized luxury preferences.

Secure Backend API: Powered by Node.js and Express.js to handle validated client booking requests.

MongoDB Atlas Integration: Safely stores all client inquiries, budgets, and travel preferences.

Automated Email Alerts (Nodemailer): Sends rich HTML-formatted priority email alerts directly to the CEO/management team immediately upon submission.


📂 Project Directory Structure

wayra-hospitality/
├── .gitignore               

├── wayra-backend/            # Node.js & Express Server
│   ├── controllers/          # Business logic handlers
│   ├── models/               # Mongoose schemas (Booking.js)
│   ├── routes/               # API endpoints (bookingRoutes.js)
│   ├── server.js             # Main server entry point
│   ├── package.json          # Backend dependencies
│   └── .env                  # Environment variables 


└── wayra-frontend/           # React & Vite Client App
    ├── public/               # Static assets (videos, icons)
    ├── src/                  # React components & stylesheets
    ├── index.html            # Main HTML wrapper
    ├── package.json          # Frontend dependencies
    └── vite.config.js        # Vite configuration

🛠️ Tech Stack

Frontend: React, Vite, Tailwind/Custom CSS, JavaScript (ES6+)

Backend: Node.js, Express.js, Mongoose

Database: MongoDB Atlas (NoSQL Cloud Database)

Email Service: Nodemailer (Gmail SMTP with App Passwords)

⚙️ Installation & Local Setup

To run this project locally on your machine, follow these step-by-step instructions:

1. Clone the Repository

git clone https://github.com/nishmitharamin/wayra-hospitality.git
cd wayra-hospitality


2. Set Up the Backend

Navigate into the backend folder, install dependencies, and configure your environment variables:

cd wayra-backend
npm install


Create a .env file inside the wayra-backend/ folder and add your credentials:

PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string_here
EMAIL_USER=your_gmail_address@gmail.com
EMAIL_PASS=your_gmail_app_password_here
CEO_EMAIL=ceo_destination_email@gmail.com


Start the backend server:

npm run dev
# or node server.js


(The backend server will run on http://localhost:5000)

3. Set Up the Frontend

Open a new terminal window, navigate to the frontend folder, and install dependencies:

cd wayra-frontend
npm install


Start the frontend development server:

npm run dev


(The frontend will run on a local Vite port like http://localhost:5173)

👤 Author

Nishmitha R Amin

GitHub: @nishmitharamin
