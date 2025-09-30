import React from "react";
import homeImage2 from "../../assets/images/homeImage2.jpeg";
import aboutImage from "../../assets/images/aboutImage.jpeg";

const features = [
  { icon: "✓", text: "Expert stylists with 10+ years experience" },
  { icon: "✓", text: "Luxurious, tranquil environment" },
  { icon: "✓", text: "Premium organic products" },
  { icon: "✓", text: "Personalized consultations" },
];

const accentColor = "#b9a87a";

const About: React.FC = () => (
  <section
    id="about-section"
    style={{
      background: "#ffffff",
      width: "100vw",
      padding: "6rem 0 5rem 0",
      overflow: "hidden",
    }}
  >
    <div className="container" style={{ maxWidth: "1200px" }}>
      <div className="row align-items-center gy-5 gx-5">
        {/* Image */}
        <div className="col-lg-6 mb-4 mb-lg-0">
          <div
            style={{
              position: "relative",
              width: "100%",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-20px",
                left: "-20px",
                width: "100%",
                height: "100%",
                background: "linear-gradient(135deg, #b9a87a 0%, #d4c4a0 100%)",
                borderRadius: "0.5rem",
                opacity: 0.15,
                zIndex: 0,
              }}
            />
            <img
              src={aboutImage}
              alt="Professional salon team"
              className="img-fluid"
              style={{
                borderRadius: "0.5rem",
                width: "100%",
                height: "500px",
                objectFit: "cover",
                boxShadow: "0 20px 60px rgba(44,36,22,0.15)",
                position: "relative",
                zIndex: 1,
              }}
            />
          </div>
        </div>
        {/* Content */}
        <div className="col-lg-6">
          <div
            style={{
              display: "inline-block",
              padding: "0.4rem 1.2rem",
              background: "rgba(185,168,122,0.12)",
              borderRadius: "2rem",
              marginBottom: "1rem",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#8b7355",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
            }}
          >
            Our Story
          </div>
          <h2
            style={{
              color: "#2c2416",
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: "2.8rem",
              letterSpacing: "0.5px",
              marginBottom: "1.5rem",
              lineHeight: "1.2",
            }}
          >
            Where Beauty
            <br />
            Meets Excellence
          </h2>
          <p
            style={{
              color: "#6b5d4f",
              fontSize: "1.1rem",
              marginBottom: "2rem",
              lineHeight: "1.8",
              fontWeight: 400,
            }}
          >
            At Salon Revive, we believe beauty is an art. Our team of skilled
            professionals is dedicated to creating stunning looks that enhance
            your natural beauty and boost your confidence.
          </p>
          <ul
            className="list-unstyled mb-4"
            style={{
              fontSize: "1.05rem",
              marginLeft: 0,
              marginBottom: "2rem",
            }}
          >
            {features.map((f, i) => (
              <li
                key={i}
                className="d-flex align-items-center mb-3"
                style={{
                  gap: "1rem",
                  color: "#2c2416",
                  fontWeight: 500,
                }}
              >
                <span
                  style={{
                    fontSize: "1.2rem",
                    color: "#b9a87a",
                    fontWeight: 700,
                  }}
                >
                  {f.icon}
                </span>
                <span>{f.text}</span>
              </li>
            ))}
          </ul>
          <p
            style={{
              color: "#6b5d4f",
              fontSize: "1.05rem",
              fontWeight: 400,
              lineHeight: "1.8",
              fontStyle: "italic",
            }}
          >
            "Every visit is an opportunity to create magic. We're committed to
            delivering exceptional service that exceeds your expectations."
          </p>
        </div>
      </div>
    </div>
    {/* Reduce top/bottom padding on mobile for less space between sections */}
    <style>
      {`
        @media (max-width: 575px) {
          #about-section {
            padding: 3rem 0 2rem 0 !important;
          }
        }
      `}
    </style>
  </section>
);

export default About;
