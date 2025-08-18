import React, { useEffect, useState } from "react";
import image2 from "../../assets/images/image2.jpg";
import image1 from "../../assets/images/image1.webp";
import image3 from "../../assets/images/image3.jpg";
import homeImage from "../../assets/images/homeImage.jpeg";

const heroImages = [image1, image2, image3, homeImage];

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const currentImage = heroImages[currentIndex];

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
                className="btn btn-lg btn-accent"
              >
                About
              </a>
              <a
                href="#services-section"
                className="btn btn-outline-accent btn-lg px-4"
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
                key={currentIndex}
                src={currentImage}
                alt="Salon showcase"
                className="img-fluid rounded shadow-lg fade-in"
                style={{
                  maxHeight: 520,
                  objectFit: "cover",
                  width: "100%",
                  borderRadius: "1.5rem",
                  boxShadow: "0 8px 32px rgba(185,168,122,0.10)",
                  transition: "transform 0.5s cubic-bezier(.4,2,.3,1)",
                  transform: "scale(1.05)",
                  background: "#fff",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Responsive styles to add margin on mobile */}
      <style>
        {`
          @media (max-width: 575px) {
            .home-image-container {
              padding-left: 16px;
              padding-right: 16px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Home;
