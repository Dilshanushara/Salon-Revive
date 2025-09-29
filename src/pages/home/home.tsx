import React from "react";
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
        background: "linear-gradient(135deg, #f8f9fa 0%, #f3e9d2 50%, #e6d7b3 100%)",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: "200px",
          height: "200px",
          background: "linear-gradient(45deg, rgba(185,168,122,0.1), rgba(185,168,122,0.05))",
          borderRadius: "50%",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "5%",
          width: "150px",
          height: "150px",
          background: "linear-gradient(45deg, rgba(185,168,122,0.08), rgba(185,168,122,0.03))",
          borderRadius: "50%",
          zIndex: 1,
        }}
      />
      
      <div className="container py-5" style={{ position: "relative", zIndex: 2 }}>
        <div className="row align-items-center">
          {/* Left: Text Content */}
          <div className="col-lg-6 mb-5 mb-lg-0 text-center text-lg-start">
            <div style={{ marginBottom: "1rem" }}>
              <span
                style={{
                  background: "linear-gradient(90deg, #b9a87a, #d4c396)",
                  color: "#fff",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  padding: "0.5rem 1.2rem",
                  borderRadius: "2rem",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  boxShadow: "0 4px 15px rgba(185,168,122,0.2)",
                }}
              >
                ✨ Premium Beauty Experience
              </span>
            </div>
            <h1
              className="display-2 fw-bold"
              style={{
                color: "#2c2c2c",
                fontFamily: "Montserrat, sans-serif",
                letterSpacing: "1px",
                lineHeight: "1.1",
                marginBottom: "1.5rem",
                background: "linear-gradient(135deg, #2c2c2c 0%, #b9a87a 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Transform Your Look at{" "}
              <span style={{ 
                color: "#b9a87a",
                WebkitTextFillColor: "#b9a87a",
                display: "block",
                marginTop: "0.5rem"
              }}>
                Salon Revive
              </span>
            </h1>
            <p
              className="lead"
              style={{
                color: "#5a5a5a",
                fontWeight: 500,
                marginBottom: "2.5rem",
                fontSize: "1.4rem",
                lineHeight: "1.6",
                maxWidth: "480px",
                margin: "0 auto 2.5rem auto",
              }}
            >
              Experience luxury beauty treatments with our expert stylists. From cutting-edge haircuts to rejuvenating spa services, we bring out your natural beauty.
            </p>
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-lg-start gap-3">
              <a
                href="tel:+94704840024"
                className="btn btn-lg"
                style={{
                  background: "linear-gradient(135deg, #b9a87a 0%, #d4c396 100%)",
                  color: "#fff",
                  fontWeight: 700,
                  borderRadius: "3rem",
                  border: "none",
                  padding: "1rem 2.5rem",
                  fontSize: "1.1rem",
                  letterSpacing: "0.5px",
                  boxShadow: "0 8px 25px rgba(185,168,122,0.3)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  textTransform: "uppercase",
                }}
                onMouseOver={(e) => {
                  (e.target as HTMLElement).style.transform = "translateY(-3px)";
                  (e.target as HTMLElement).style.boxShadow = "0 12px 35px rgba(185,168,122,0.4)";
                }}
                onMouseOut={(e) => {
                  (e.target as HTMLElement).style.transform = "translateY(0)";
                  (e.target as HTMLElement).style.boxShadow = "0 8px 25px rgba(185,168,122,0.3)";
                }}
              >
                <i className="bi bi-calendar-check me-2"></i>
                Book Appointment
              </a>
              <a
                href="#services-section"
                className="btn btn-outline-primary btn-lg px-4"
                style={{
                  borderRadius: "3rem",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  borderColor: "#b9a87a",
                  color: "#b9a87a",
                  borderWidth: "2px",
                  padding: "1rem 2rem",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseOver={(e) => {
                  (e.target as HTMLElement).style.background = "#b9a87a";
                  (e.target as HTMLElement).style.color = "#fff";
                  (e.target as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseOut={(e) => {
                  (e.target as HTMLElement).style.background = "transparent";
                  (e.target as HTMLElement).style.color = "#b9a87a";
                  (e.target as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                View Services
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-4 pt-3">
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start align-items-center gap-4">
                <div className="d-flex align-items-center">
                  <span style={{ color: "#b9a87a", fontSize: "1.2rem", marginRight: "0.5rem" }}>⭐⭐⭐⭐⭐</span>
                  <span style={{ fontSize: "0.95rem", color: "#666", fontWeight: 500 }}>500+ Happy Clients</span>
                </div>
                <div className="d-flex align-items-center">
                  <span style={{ color: "#b9a87a", fontSize: "1.1rem", marginRight: "0.5rem" }}>🏆</span>
                  <span style={{ fontSize: "0.95rem", color: "#666", fontWeight: 500 }}>Award Winning</span>
                </div>
                <div className="d-flex align-items-center">
                  <span style={{ color: "#b9a87a", fontSize: "1.1rem", marginRight: "0.5rem" }}>💎</span>
                  <span style={{ fontSize: "0.95rem", color: "#666", fontWeight: 500 }}>Premium Products</span>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Image */}
          <div className="col-lg-6 d-flex justify-content-center">
            <div
              className="home-image-container"
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "580px",
                minHeight: "450px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Decorative background shape */}
              <div
                style={{
                  position: "absolute",
                  top: "-20px",
                  right: "-20px",
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(135deg, rgba(185,168,122,0.1) 0%, rgba(185,168,122,0.05) 100%)",
                  borderRadius: "2rem",
                  zIndex: 1,
                }}
              />
              
              {/* Main image */}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  width: "100%",
                  borderRadius: "2rem",
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(185,168,122,0.15)",
                  background: "#fff",
                  padding: "8px",
                }}
              >
                <img
                  src={homeImage}
                  alt="Modern salon interior with professional styling stations"
                  className="img-fluid"
                  style={{
                    width: "100%",
                    height: "500px",
                    objectFit: "cover",
                    borderRadius: "1.5rem",
                    transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  onMouseOver={(e) => {
                    (e.target as HTMLImageElement).style.transform = "scale(1.05)";
                  }}
                  onMouseOut={(e) => {
                    (e.target as HTMLImageElement).style.transform = "scale(1)";
                  }}
                />
              </div>
              
              {/* Floating badge */}
              <div
                style={{
                  position: "absolute",
                  top: "30px",
                  left: "30px",
                  background: "rgba(255,255,255,0.95)",
                  padding: "1rem 1.5rem",
                  borderRadius: "2rem",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                  zIndex: 3,
                  backdropFilter: "blur(10px)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ fontSize: "1.2rem" }}>💎</span>
                  <div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#b9a87a", marginBottom: "2px" }}>
                      PREMIUM
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "#666", fontWeight: 500 }}>
                      Since 2020
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "30px",
                  right: "30px",
                  background: "rgba(185,168,122,0.95)",
                  color: "#fff",
                  padding: "0.8rem 1.2rem",
                  borderRadius: "1.5rem",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  zIndex: 3,
                  backdropFilter: "blur(10px)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <i className="bi bi-check-circle-fill"></i>
                Professional Team
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Responsive styles */}
      <style>
        {`
          @media (max-width: 991px) {
            .home-image-container {
              margin-top: 2rem;
            }
          }
          
          @media (max-width: 768px) {
            .display-2 {
              font-size: 2.5rem !important;
            }
            .lead {
              font-size: 1.2rem !important;
              text-align: center !important;
              margin-left: 0 !important;
              margin-right: 0 !important;
            }
            .home-image-container {
              padding-left: 16px;
              padding-right: 16px;
            }
            .home-image-container > div:first-child {
              top: -10px;
              right: -10px;
            }
          }
          
          @media (max-width: 575px) {
            .display-2 {
              font-size: 2rem !important;
            }
            .btn-lg {
              width: 100%;
              margin-bottom: 0.5rem;
            }
            .home-image-container div[style*="position: absolute"][style*="top: 30px"] {
              top: 15px !important;
              left: 15px !important;
              padding: 0.8rem 1.2rem !important;
            }
            .home-image-container div[style*="position: absolute"][style*="bottom: 30px"] {
              bottom: 15px !important;
              right: 15px !important;
              padding: 0.6rem 1rem !important;
              font-size: 0.8rem !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Home;
