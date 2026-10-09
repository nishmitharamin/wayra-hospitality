import "./App.css";
import "./index.css";
import RotatingGlobe from "./RotatingGlobe";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#0b0f19",
        minHeight: "100vh",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      {/* Top Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 50px",
          borderBottom: "1px solid rgba(212, 175, 55, 0.2)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              background: "#d4af37",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#000",
              fontWeight: "bold",
            }}
          >
            W
          </div>
          <span
            style={{
              letterSpacing: "2px",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            WAYRA HOSPITALITY
          </span>
        </div>
        <div
          style={{
            display: "flex",
            gap: "30px",
            fontSize: "13px",
            color: "#d1d5db",
            cursor: "pointer",
          }}
        >
          <span>HOME</span>
          <span>DESTINATIONS</span>
          <span>TRIP CALCULATOR</span>
          <span>EXPERIENCES</span>
          <span>ABOUT US</span>
          <span>CONTACT</span>
        </div>
        <button
          style={{
            background: "linear-gradient(135deg, #d4af37, #aa8c2c)",
            border: "none",
            padding: "10px 22px",
            color: "#000",
            fontWeight: "bold",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          BOOK EXPEDITION
        </button>
      </nav>

      {/* Hero Section containing the Globe */}
      <section
        style={{
          textAlign: "center",
          padding: "40px 20px 80px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* The Globe Component */}
        <div className="globe-wrapper" style={{ margin: "10px 0" }}>
          <RotatingGlobe />
        </div>

        <h1
          style={{
            fontSize: "42px",
            fontFamily: "serif",
            fontWeight: "400",
            letterSpacing: "1px",
            margin: "20px 0 10px 0",
          }}
        >
          REDEFINING THE ART OF{" "}
          <span style={{ color: "#d4af37" }}>INDIAN LUXURY TRAVEL</span>
        </h1>
        <p
          style={{ color: "#9ca3af", fontSize: "15px", letterSpacing: "0.5px" }}
        >
          Himalayan snow chalets, Goan private beachfront villas...
        </p>
      </section>
    </div>
  );
}

export default App;
