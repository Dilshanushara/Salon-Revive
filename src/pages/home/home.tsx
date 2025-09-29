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
        background: "linear-gradient(120deg, #f8f9fa 60%, #f3e9d2 100%)",
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
                color: "#b9a87a",
                fontFamily: "Montserrat, sans-serif",
                letterSpacing: "2px",
                lineHeight: "1.13",
                marginBottom: "1.5rem",
              }}
            >
              Welcome to <span style={{ color: "#222" }}>Salon Revive</span>
            </h1>
            <p
              className="lead"
              style={{
                color: "#7a6a2f",
                fontWeight: 500,
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
                className="btn btn-lg"
                style={{
                  background: "linear-gradient(90deg,#b9a87a 40%,#f3e9d2 100%)",
                  color: "#222",
                  fontWeight: 600,
                  borderRadius: "2rem",
                  border: "none",
                  padding: "0.7rem 2.2rem",
                  fontSize: "1.15rem",
                  letterSpacing: "1px",
                  boxShadow: "0 2px 10px rgba(185,168,122,0.18)",
                }}
              >
                About
              </a>
              <a
                href="#services-section"
                className="btn btn-outline-primary btn-lg px-4"
                style={{
                  borderRadius: "2rem",
                  fontWeight: 600,
                  fontSize: "1.15rem",
                  borderColor: "#b9a87a",
                  color: "#b9a87a",
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
                alt="Salon interior"
                className="img-fluid rounded shadow-lg"
                style={{
                  maxHeight: 520,
                  objectFit: "cover",
                  width: "100%",
                  borderRadius: "1.5rem",
                  boxShadow: "0 8px 32px rgba(185,168,122,0.10)",
                  transition: "transform 0.5s cubic-bezier(.4,2,.3,1)",
                  transform: "scale(1.07)",
                  background: "#fff",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Enhanced responsive styles */}
      <style>
        {`
          @media (max-width: 575px) {
            #home-section {
              min-height: 70vh !important;
              padding: 2rem 0 !important;
            }
            
            #home-section .container {
              padding: 1.5rem 0 !important;
            }
            
            #home-section .display-3 {
              font-size: 2.2rem !important;
              line-height: 1.2 !important;
              margin-bottom: 1.2rem !important;
              letter-spacing: 1px !important;
            }
            
            #home-section .lead {
              font-size: 1.1rem !important;
              margin-bottom: 1.5rem !important;
              line-height: 1.4 !important;
            }
            
            .home-image-container {
              padding-left: 16px;
              padding-right: 16px;
              margin-top: 2rem;
              min-height: 300px !important;
            }
            
            .home-image-container img {
              max-height: 350px !important;
              transform: scale(1) !important;
            }
            
            #home-section .btn {
              font-size: 1rem !important;
              padding: 0.7rem 1.8rem !important;
              width: 100%;
              max-width: 280px;
              margin: 0 auto 0.8rem auto;
            }
            
            #home-section .gap-3 {
              gap: 0.8rem !important;
            }
          }
          
          @media (min-width: 576px) and (max-width: 767px) {
            #home-section {
              min-height: 75vh !important;
            }
            
            #home-section .display-3 {
              font-size: 2.6rem !important;
              line-height: 1.15 !important;
            }
            
            #home-section .lead {
              font-size: 1.25rem !important;
            }
            
            .home-image-container {
              margin-top: 1.5rem;
              min-height: 380px !important;
            }
            
            .home-image-container img {
              max-height: 420px !important;
            }
          }
          
          @media (min-width: 768px) and (max-width: 991px) {
            #home-section .display-3 {
              font-size: 2.8rem !important;
            }
            
            #home-section .lead {
              font-size: 1.3rem !important;
            }
            
            .home-image-container {
              min-height: 400px !important;
            }
            
            .home-image-container img {
              max-height: 460px !important;
            }
            
            #home-section .btn {
              font-size: 1.1rem !important;
              padding: 0.7rem 2rem !important;
            }
          }
          
          @media (min-width: 992px) and (max-width: 1199px) {
            #home-section .display-3 {
              font-size: 3rem !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Home;
