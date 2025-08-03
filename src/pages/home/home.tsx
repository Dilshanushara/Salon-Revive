import React from "react";
import image2 from "../../assets/images/image2.jpg";
import image1 from "../../assets/images/image1.webp";
import image3 from "../../assets/images/image3.jpg";

const heroImages = [image1, image2, image3];

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
            {/* Carousel (optional): You can add react-bootstrap Carousel or Swiper for multiple images */}
            <div
              style={{
                position: "relative",
                width: "90%",
                maxWidth: "450px",
                minHeight: "340px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={image1}
                alt="Salon interior"
                className="img-fluid rounded shadow-lg"
                style={{
                  maxHeight: 400,
                  objectFit: "cover",
                  width: "100%",
                  borderRadius: "1.5rem",
                  boxShadow: "0 8px 32px rgba(185,168,122,0.10)",
                  transition: "transform 0.5s cubic-bezier(.4,2,.3,1)",
                  transform: "scale(1.03)",
                  background: "#fff",
                }}
              />
              {/* Optional: Add floating accent or overlay */}
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  width: "50px",
                  height: "50px",
                  background: "rgba(185,168,122,0.10)",
                  borderRadius: "50%",
                  zIndex: 1,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
