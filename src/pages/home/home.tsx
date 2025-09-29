import React from "react";
import { theme, createGradient } from "../../styles/theme";
import image2 from "../../assets/images/image2.jpg";
import image1 from "../../assets/images/image1.webp";
import image3 from "../../assets/images/image3.jpg";
import homeImage from "../../assets/images/homeImage.jpeg";

const heroImages = [image1, image2, image3, homeImage];

const Home: React.FC = () => {
  return (
    <section
      id="home-section"
      className="py-5"
      style={{
        background: createGradient(),
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left: Text Content */}
          <div className="col-lg-6 mb-5 mb-lg-0 text-center text-lg-start">
            <h1
              className="display-3 fw-bold"
              style={{
                color: theme.colors.primary,
                fontFamily: theme.typography.fontFamily,
                letterSpacing: "2px",
                lineHeight: "1.13",
                marginBottom: "1.5rem",
              }}
            >
              Welcome to <span style={{ color: theme.colors.text.primary }}>Salon Revive</span>
            </h1>
            <p
              className="lead"
              style={{
                color: theme.colors.text.accent,
                fontWeight: theme.typography.fontWeight.normal,
                marginBottom: "2rem",
                fontSize: "1.35rem",
              }}
            >
              Transform your look and revitalize your confidence. <br />
              Our team of beauty experts deliver premium hair, skin, and nail
              care experiences tailored to you.
            </p>
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-lg-start gap-3">
              <a
                href="#about-section"
                className="btn btn-lg home-btn-primary"
                style={{
                  background: `linear-gradient(90deg, ${theme.colors.primary} 40%, ${theme.colors.background.secondary} 100%)`,
                  color: theme.colors.text.primary,
                  fontWeight: theme.typography.fontWeight.semibold,
                  borderRadius: "2rem",
                  border: "none",
                  padding: "0.7rem 2.2rem",
                  fontSize: "1.15rem",
                  letterSpacing: "1px",
                  boxShadow: theme.shadows.light,
                  transition: `all ${theme.transitions.fast}`,
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = theme.shadows.medium;
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = theme.shadows.light;
                }}
              >
                About
              </a>
              <a
                href="#services-section"
                className="btn btn-outline-primary btn-lg px-4 home-btn-secondary"
                style={{
                  borderRadius: "2rem",
                  fontWeight: theme.typography.fontWeight.semibold,
                  fontSize: "1.15rem",
                  borderColor: theme.colors.primary,
                  color: theme.colors.primary,
                  transition: `all ${theme.transitions.fast}`,
                }}
                onMouseOver={(e) => {
                  const element = e.currentTarget as HTMLElement;
                  element.style.backgroundColor = theme.colors.primary;
                  element.style.color = theme.colors.text.primary;
                  element.style.transform = "translateY(-2px)";
                }}
                onMouseOut={(e) => {
                  const element = e.currentTarget as HTMLElement;
                  element.style.backgroundColor = "transparent";
                  element.style.color = theme.colors.primary;
                  element.style.transform = "translateY(0)";
                }}
              >
                Our Services
              </a>
            </div>
          </div>
          
          {/* Right: Image */}
          <div className="col-lg-6 d-flex justify-content-center">
            <div
              className="home-image-container"
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "540px",
                minHeight: "420px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={homeImage}
                alt="Modern salon interior showcasing our premium services"
                className="img-fluid rounded shadow-lg"
                style={{
                  maxHeight: 520,
                  objectFit: "cover",
                  width: "100%",
                  borderRadius: theme.borderRadius.large,
                  boxShadow: theme.shadows.heavy,
                  transition: `transform ${theme.transitions.slow}`,
                  transform: "scale(1.02)",
                  background: theme.colors.background.white,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Responsive styles */}
      <style>
        {`
          @media (max-width: ${theme.breakpoints.tablet}) {
            #home-section {
              min-height: 60vh !important;
            }
            #home-section .display-3 {
              font-size: 2.5rem !important;
            }
            #home-section .lead {
              font-size: 1.2rem !important;
            }
          }
          
          @media (max-width: ${theme.breakpoints.mobile}) {
            .home-image-container {
              padding-left: 16px;
              padding-right: 16px;
            }
            #home-section .display-3 {
              font-size: 2rem !important;
            }
            #home-section .lead {
              font-size: 1.1rem !important;
            }
            #home-section .btn {
              font-size: 1rem !important;
              padding: 0.6rem 1.8rem !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Home;
