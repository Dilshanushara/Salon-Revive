import React from "react";
import homeImage2 from "../../assets/images/homeImage2.jpeg";
import aboutImage from "../../assets/images/aboutImage.jpeg";

const features = [
  { icon: "👩‍🎨", text: "Friendly, experienced professionals" },
  { icon: "🏡", text: "Relaxing, welcoming atmosphere" },
  { icon: "💎", text: "High-quality products & modern techniques" },
  { icon: "🧖‍♀️", text: "Personalized service every visit" },
];

const accentColor = "#b9a87a";

const About: React.FC = () => (
  <section
    id="about-section"
    style={{
      background: "linear-gradient(120deg, #f8f9fa 60%, #f3e9d2 100%)",
      width: "100vw",
      padding: "4.5rem 0 4rem 0",
      overflow: "hidden",
    }}
  >
    <div
      className="container-fluid"
      style={{
        maxWidth: "1250px",
        margin: "0 auto",
        borderRadius: "1.5rem",
        background: "rgba(255,255,255,0.88)",
        boxShadow: "0 8px 38px rgba(185,168,122,0.07)",
        padding: "2.7rem 2.2rem",
      }}
    >
      {/* Heading */}
      <div style={{ marginBottom: "2.2rem" }}>
        <h2
          style={{
            color: accentColor,
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: "2.5rem",
            letterSpacing: "1.2px",
            marginBottom: "0.3rem",
            position: "relative",
            display: "inline-block",
          }}
        >
          About Us
        </h2>
        <span
          style={{
            display: "block",
            height: "4px",
            width: "55px",
            backgroundColor: accentColor,
            borderRadius: "2px",
            margin: "6px 0 0",
          }}
        />
      </div>
      <div className="row align-items-center gy-4 gx-5">
        {/* Image */}
        <div className="col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center">
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "530px",
              borderRadius: "1.5rem",
              overflow: "hidden",
              boxShadow: "0 2px 28px rgba(185,168,122,0.18)",
            }}
          >
            <img
              src={aboutImage}
              alt="Smiling salon team"
              className="img-fluid"
              style={{
                borderRadius: "1.5rem",
                width: "100%",
                height: "410px",
                objectFit: "cover",
                transition: "transform .5s cubic-bezier(.4,2,.3,1)",
                transform: "scale(1.07)",
              }}
            />
            {/* Accent Small Square */}
            <div
              style={{
                position: "absolute",
                bottom: "18px",
                right: "24px",
                width: "32px",
                height: "32px",
                background: accentColor,
                borderRadius: "0.7rem",
                opacity: 0.12,
                zIndex: 2,
              }}
            />
          </div>
        </div>
        {/* Content */}
        <div className="col-lg-6 text-lg-start text-center">
          <p
            style={{
              fontWeight: 600,
              color: "#4d3a00",
              fontSize: "1.22rem",
              marginBottom: "1.35rem",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Welcome to Salon Revive! Our close-knit team is passionate about
            making you feel your best, inside and out.
          </p>
          <ul
            className="list-unstyled mb-4"
            style={{
              fontSize: "1.14rem",
              marginLeft: 0,
              marginBottom: "2.1rem",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "0.7rem",
            }}
          >
            {features.map((f, i) => (
              <li
                key={i}
                className="d-flex align-items-center"
                style={{
                  gap: "0.9rem",
                  background: "#f8f9fa",
                  borderRadius: "1rem",
                  padding: "0.75rem 1.1rem",
                  boxShadow: "0 2px 12px rgba(185,168,122,0.05)",
                  fontWeight: 500,
                  transition: "background .2s",
                }}
              >
                <span style={{ fontSize: "1.65rem" }}>{f.icon}</span>
                <span>{f.text}</span>
              </li>
            ))}
          </ul>
          <p
            style={{
              color: "#6c757d",
              fontSize: "1.07rem",
              fontWeight: 500,
            }}
          >
            With years of expertise and a focus on your satisfaction, we make
            every visit special. Whether you're seeking a fresh look or a moment
            to unwind, Salon Revive is here for you.
          </p>
        </div>
      </div>
    </div>
    {/* Reduce top/bottom padding on mobile for less space between sections */}
    <style>
      {`
        @media (max-width: 575px) {
          #about-section {
            padding: 1.4rem 0 1.2rem 0 !important;
          }
          #about-section .container-fluid {
            padding: 1.1rem 0.3rem !important;
          }
        }
      `}
    </style>
  </section>
);

export default About;
