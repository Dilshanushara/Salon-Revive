import React from "react";

const services = [
  {
    icon: "✂️",
    name: "Haircut & Styling",
    desc: "Expert cuts and styling for all hair types, creating looks that complement your features.",
  },
  {
    icon: "🎨",
    name: "Color Services",
    desc: "From subtle highlights to bold transformations using premium color products.",
  },
  {
    icon: "🧖‍♀️",
    name: "Facial Treatments",
    desc: "Customized skincare treatments to cleanse, exfoliate, and rejuvenate your skin.",
  },
  {
    icon: "💅",
    name: "Nail Care",
    desc: "Manicures and pedicures with attention to detail and long-lasting results.",
  },
  {
    icon: "💆‍♀️",
    name: "Hair Treatments",
    desc: "Deep conditioning and repair treatments for healthy, lustrous hair.",
  },
  {
    icon: "👰‍♀️",
    name: "Bridal Services",
    desc: "Complete bridal packages for your special day, including hair, makeup, and more.",
  },
];

const accentColor = "#b9a87a";

const Services: React.FC = () => (
  <section
    id="services-section"
    style={{
      background: "linear-gradient(135deg, #fdfbf7 0%, #f5efe3 100%)",
      width: "100vw",
      padding: "6rem 0 5rem 0",
      overflow: "hidden",
    }}
  >
    <div className="container" style={{ maxWidth: "1200px" }}>
      <div style={{ marginBottom: "3.5rem", textAlign: "center" }}>
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
          What We Offer
        </div>
        <h2
          style={{
            color: "#2c2416",
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontSize: "2.8rem",
            letterSpacing: "0.5px",
            marginBottom: "1rem",
            lineHeight: "1.2",
          }}
        >
          Our Services
        </h2>
        <p
          className="mt-2"
          style={{
            color: "#6b5d4f",
            fontSize: "1.1rem",
            fontWeight: 400,
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.7",
          }}
        >
          Indulge in our comprehensive range of beauty services, each designed
          to enhance your natural elegance.
        </p>
      </div>
      {/* Responsive grid for service cards */}
      <div
        className="services-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2rem",
          marginTop: "0.5rem",
        }}
      >
        {services.map((srv, idx) => (
          <div
            key={idx}
            className="service-card"
            style={{
              background: "#ffffff",
              borderRadius: "0.5rem",
              border: "1px solid rgba(185,168,122,0.15)",
              padding: "2.5rem 2rem",
              transition: "all 0.3s ease",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 20px 40px rgba(44,36,22,0.12)";
              e.currentTarget.style.borderColor = "rgba(185,168,122,0.3)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "rgba(185,168,122,0.15)";
            }}
          >
            <div
              style={{
                fontSize: "2.5rem",
                marginBottom: "1.2rem",
                display: "inline-block",
              }}
            >
              {srv.icon}
            </div>
            <h5
              style={{
                fontWeight: 600,
                fontSize: "1.25rem",
                color: "#2c2416",
                marginBottom: "0.8rem",
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              {srv.name}
            </h5>
            <p
              style={{
                color: "#6b5d4f",
                fontSize: "0.95rem",
                fontWeight: 400,
                lineHeight: "1.7",
                marginBottom: 0,
              }}
            >
              {srv.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
    {/* Responsive styles */}
    <style>
      {`
        @media (max-width: 992px) {
          #services-section .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }
        @media (max-width: 650px) {
          #services-section {
            padding: 3rem 0 2rem 0 !important;
          }
          #services-section .services-grid {
            grid-template-columns: 1fr;
            gap: 1.2rem;
          }
          #services-section .service-card {
            padding: 1.8rem 1.5rem !important;
          }
        }
      `}
    </style>
  </section>
);

export default Services;
