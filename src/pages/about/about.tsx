import React from "react";
import { theme, sectionStyle, containerStyle } from "../../styles/theme";
import homeImage2 from "../../assets/images/homeImage2.jpeg";
import aboutImage from "../../assets/images/aboutImage.jpeg";

const features = [
  { icon: "👩‍🎨", text: "Friendly, experienced professionals" },
  { icon: "🏡", text: "Relaxing, welcoming atmosphere" },
  { icon: "💎", text: "High-quality products & modern techniques" },
  { icon: "🧖‍♀️", text: "Personalized service every visit" },
];

const About: React.FC = () => (
  <section
    id="about-section"
    style={sectionStyle}
  >
    <div
      className="container-fluid"
      style={containerStyle}
    >
      {/* Consistent heading style */}
      <div style={{ marginBottom: "2.2rem" }}>
        <h2
          style={{
            color: theme.colors.primary,
            fontFamily: theme.typography.fontFamily,
            fontWeight: theme.typography.fontWeight.bold,
            fontSize: theme.typography.fontSize.heading,
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
            backgroundColor: theme.colors.primary,
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
              borderRadius: theme.borderRadius.large,
              overflow: "hidden",
              boxShadow: theme.shadows.heavy,
            }}
          >
            <img
              src={aboutImage}
              alt="Smiling salon team"
              className="img-fluid"
              style={{
                borderRadius: theme.borderRadius.large,
                width: "100%",
                height: "410px",
                objectFit: "cover",
                transition: `transform ${theme.transitions.slow}`,
                transform: "scale(1.02)",
              }}
            />
            {/* Accent decoration */}
            <div
              style={{
                position: "absolute",
                bottom: "18px",
                right: "24px",
                width: "32px",
                height: "32px",
                background: theme.colors.primary,
                borderRadius: theme.borderRadius.small,
                opacity: 0.15,
                zIndex: 2,
              }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="col-lg-6 text-lg-start text-center">
          <p
            style={{
              fontWeight: theme.typography.fontWeight.semibold,
              color: theme.colors.text.secondary,
              fontSize: "1.22rem",
              marginBottom: "1.35rem",
              fontFamily: theme.typography.fontFamily,
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
                  background: theme.colors.background.main,
                  borderRadius: theme.borderRadius.medium,
                  padding: "0.75rem 1.1rem",
                  boxShadow: theme.shadows.light,
                  fontWeight: theme.typography.fontWeight.normal,
                  transition: `all ${theme.transitions.fast}`,
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateX(8px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = theme.shadows.medium;
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = theme.shadows.light;
                }}
              >
                <span style={{ fontSize: "1.65rem" }}>{f.icon}</span>
                <span>{f.text}</span>
              </li>
            ))}
          </ul>
          
          <p
            style={{
              color: theme.colors.text.muted,
              fontSize: theme.typography.fontSize.body,
              fontWeight: theme.typography.fontWeight.normal,
            }}
          >
            With years of expertise and a focus on your satisfaction, we make
            every visit special. Whether you're seeking a fresh look or a moment
            to unwind, Salon Revive is here for you.
          </p>
        </div>
      </div>
    </div>
    
    {/* Responsive styles */}
    <style>
      {`
        @media (max-width: ${theme.breakpoints.tablet}) {
          #about-section {
            padding: ${theme.spacing.sectionMobile} !important;
          }
          #about-section .container-fluid {
            padding: ${theme.spacing.containerMobile} !important;
          }
        }
      `}
    </style>
  </section>
);

export default About;
