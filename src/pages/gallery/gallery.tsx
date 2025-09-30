import React from "react";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import image5 from "../../assets/images/image5.jpg";
import image6 from "../../assets/images/image6.jpg";
import image7 from "../../assets/images/image7.jpg";
import image8 from "../../assets/images/image8.jpg";

const images = [image3, image4, image5, image6, image7, image8];

const accentColor = "#b9a87a";

const Gallery: React.FC = () => (
  <section
    id="gallery-section"
    style={{
      background: "#ffffff",
      width: "100vw",
      marginLeft: "calc(-50vw + 50%)",
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
          Our Work
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
          Gallery
        </h2>
        <p
          style={{
            color: "#6b5d4f",
            fontSize: "1.1rem",
            fontWeight: 400,
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.7",
          }}
        >
          Explore our portfolio of transformations and be inspired by the
          artistry of our skilled team.
        </p>
      </div>
      <div className="row g-3 justify-content-center">
        {images.map((src, idx) => (
          <div className="col-6 col-md-4" key={idx}>
            <div
              style={{
                overflow: "hidden",
                borderRadius: "0.5rem",
                transition: "all 0.3s ease",
                cursor: "pointer",
                aspectRatio: "1/1",
                position: "relative",
              }}
              onMouseOver={(e) => {
                const img = e.currentTarget.querySelector("img");
                if (img) {
                  img.style.transform = "scale(1.1)";
                }
                const overlay = e.currentTarget.querySelector(
                  ".gallery-overlay"
                ) as HTMLElement;
                if (overlay) {
                  overlay.style.opacity = "1";
                }
              }}
              onMouseOut={(e) => {
                const img = e.currentTarget.querySelector("img");
                if (img) {
                  img.style.transform = "scale(1)";
                }
                const overlay = e.currentTarget.querySelector(
                  ".gallery-overlay"
                ) as HTMLElement;
                if (overlay) {
                  overlay.style.opacity = "0";
                }
              }}
            >
              <img
                src={src}
                alt={`Salon work ${idx + 1}`}
                className="img-fluid"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "0.5rem",
                  transition: "transform 0.4s ease",
                }}
              />
              <div
                className="gallery-overlay"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(135deg, rgba(185,168,122,0.7) 0%, rgba(44,36,22,0.5) 100%)",
                  borderRadius: "0.5rem",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i
                  className="bi bi-plus-lg"
                  style={{
                    fontSize: "2.5rem",
                    color: "#ffffff",
                  }}
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
