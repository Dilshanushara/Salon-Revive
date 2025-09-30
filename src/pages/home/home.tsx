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
        background: "linear-gradient(135deg, #fdfbf7 0%, #f5efe3 50%, #e8dcc8 100%)",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Elements */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(185,168,122,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-15%",
          left: "-8%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(185,168,122,0.06) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left: Text Content */}
          <div className="col-lg-6 mb-5 mb-lg-0 text-center text-lg-start">
            <div
              style={{
                display: "inline-block",
                padding: "0.4rem 1.2rem",
                background: "rgba(185,168,122,0.12)",
                borderRadius: "2rem",
                marginBottom: "1.5rem",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "#8b7355",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              Premium Beauty Care
            </div>
            <h1
              className="display-2 fw-bold"
              style={{
                color: "#2c2416",
                fontFamily: "'Playfair Display', Georgia, serif",
                letterSpacing: "0.5px",
                lineHeight: "1.2",
                marginBottom: "1.8rem",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
              }}
            >
              Elevate Your
              <br />
              <span
                style={{
                  background: "linear-gradient(120deg, #b9a87a 0%, #d4c4a0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Natural Beauty
              </span>
            </h1>
            <p
              className="lead"
              style={{
                color: "#6b5d4f",
                fontWeight: 400,
                marginBottom: "2.5rem",
                fontSize: "1.2rem",
                lineHeight: "1.8",
                maxWidth: "500px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Experience luxury beauty services in our serene salon. From
              expert hair styling to rejuvenating treatments, we bring your
              vision to life.
            </p>
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-lg-start gap-3">
              <a
                href="#services-section"
                className="btn btn-lg"
                style={{
                  background: "#2c2416",
                  color: "#f5efe3",
                  fontWeight: 600,
                  borderRadius: "0.5rem",
                  border: "none",
                  padding: "0.9rem 2.5rem",
                  fontSize: "1.05rem",
                  letterSpacing: "0.5px",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 20px rgba(44,36,22,0.2)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "#1a150e";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 6px 25px rgba(44,36,22,0.3)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "#2c2416";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(44,36,22,0.2)";
                }}
              >
                Book Appointment
              </a>
              <a
                href="#about-section"
                className="btn btn-lg"
                style={{
                  background: "transparent",
                  color: "#2c2416",
                  fontWeight: 600,
                  borderRadius: "0.5rem",
                  border: "2px solid #2c2416",
                  padding: "0.85rem 2.5rem",
                  fontSize: "1.05rem",
                  letterSpacing: "0.5px",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "#2c2416";
                  e.currentTarget.style.color = "#f5efe3";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#2c2416";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Learn More
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
                maxWidth: "560px",
                minHeight: "450px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                  right: "-20px",
                  bottom: "-20px",
                  background: "linear-gradient(135deg, #b9a87a 0%, #d4c4a0 100%)",
                  borderRadius: "1rem",
                  opacity: 0.15,
                  zIndex: 0,
                }}
              />
              <img
                src={homeImage}
                alt="Salon interior"
                className="img-fluid rounded"
                style={{
                  maxHeight: 550,
                  objectFit: "cover",
                  width: "100%",
                  borderRadius: "1rem",
                  boxShadow: "0 20px 60px rgba(44,36,22,0.15)",
                  transition: "transform 0.4s ease",
                  position: "relative",
                  zIndex: 1,
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
