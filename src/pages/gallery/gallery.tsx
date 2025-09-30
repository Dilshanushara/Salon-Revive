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
      background: "linear-gradient(135deg, #f8f9fa 0%, #f3e9d2 50%, #ede0c4 100%)",
      width: "100vw",
      marginLeft: "calc(-50vw + 50%)",
      padding: "5rem 0",
      overflow: "hidden",
      position: "relative",
    }}
  >
    {/* Background decorative elements */}
    <div
      style={{
        position: "absolute",
        top: "15%",
        right: "10%",
        width: "120px",
        height: "120px",
        background: "linear-gradient(45deg, rgba(185,168,122,0.1), rgba(185,168,122,0.05))",
        borderRadius: "50%",
        zIndex: 1,
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: "20%",
        left: "8%",
        width: "80px",
        height: "80px",
        background: "linear-gradient(45deg, rgba(185,168,122,0.08), rgba(185,168,122,0.03))",
        borderRadius: "50%",
        zIndex: 1,
      }}
    />

    <div 
      className="container-fluid" 
      style={{ 
        maxWidth: "1400px",
        position: "relative",
        zIndex: 2,
      }}
    >
      {/* Header Section */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <div style={{ marginBottom: "1rem" }}>
          <span
            style={{
              background: "linear-gradient(90deg, #b9a87a, #d4c396)",
              color: "#fff",
              fontSize: "0.9rem",
              fontWeight: 600,
              padding: "0.5rem 1.5rem",
              borderRadius: "2rem",
              letterSpacing: "1px",
              textTransform: "uppercase",
              boxShadow: "0 4px 15px rgba(185,168,122,0.2)",
            }}
          >
            📸 Our Work
          </span>
        </div>
        <h2
          style={{
            color: "#2c2c2c",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: "3rem",
            letterSpacing: "0.5px",
            marginBottom: "1rem",
            background: "linear-gradient(135deg, #2c2c2c 0%, #b9a87a 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Gallery of Transformations
        </h2>
        <p
          style={{
            color: "#5a5a5a",
            fontSize: "1.2rem",
            fontWeight: 500,
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Witness the artistry and skill of our talented team through these stunning before-and-after transformations and beautiful moments.
        </p>
      </div>

      {/* Gallery Grid */}
      <div 
        className="gallery-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
          marginTop: "2rem",
        }}
      >
        {images.map((src, idx) => (
          <div 
            key={idx}
            className="gallery-item"
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "1.5rem",
              background: "#fff",
              padding: "0.5rem",
              boxShadow: "0 8px 30px rgba(185,168,122,0.12)",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "pointer",
              aspectRatio: "1/1",
            }}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-8px) scale(1.02)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 50px rgba(185,168,122,0.2)";
              
              const img = e.currentTarget.querySelector('img') as HTMLImageElement;
              if (img) {
                img.style.transform = "scale(1.1)";
              }
              
              const overlay = e.currentTarget.querySelector('.gallery-overlay') as HTMLElement;
              if (overlay) {
                overlay.style.opacity = "1";
              }
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0) scale(1)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(185,168,122,0.12)";
              
              const img = e.currentTarget.querySelector('img') as HTMLImageElement;
              if (img) {
                img.style.transform = "scale(1)";
              }
              
              const overlay = e.currentTarget.querySelector('.gallery-overlay') as HTMLElement;
              if (overlay) {
                overlay.style.opacity = "0";
              }
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "1rem",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src={src}
                alt={`Professional salon work showcasing ${idx % 2 === 0 ? 'hair styling' : 'beauty treatment'} ${idx + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              />
              
              {/* Hover Overlay */}
              <div
                className="gallery-overlay"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  right: "0",
                  bottom: "0",
                  background: "linear-gradient(135deg, rgba(185,168,122,0.8), rgba(44,44,44,0.6))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: "0",
                  transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  borderRadius: "1rem",
                }}
              >
                <div style={{ textAlign: "center", color: "#fff" }}>
                  <div
                    style={{
                      fontSize: "2rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    👁️
                  </div>
                  <div
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      letterSpacing: "0.5px",
                      textTransform: "uppercase",
                    }}
                  >
                    View Work
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image number badge */}
            <div
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "rgba(255,255,255,0.9)",
                color: "#b9a87a",
                fontSize: "0.8rem",
                fontWeight: 600,
                padding: "0.3rem 0.8rem",
                borderRadius: "1rem",
                backdropFilter: "blur(10px)",
              }}
            >
              {idx + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <p
          style={{
            color: "#666",
            fontSize: "1.1rem",
            marginBottom: "1.5rem",
          }}
        >
          Love what you see? Book your transformation today!
        </p>
        <a
          href="tel:+94704840024"
          style={{
            background: "linear-gradient(135deg, #b9a87a, #d4c396)",
            color: "#fff",
            padding: "1rem 2.5rem",
            borderRadius: "2rem",
            textDecoration: "none",
            fontSize: "1.1rem",
            fontWeight: 600,
            letterSpacing: "0.5px",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            textTransform: "uppercase",
          }}
          onMouseOver={(e) => {
            (e.target as HTMLElement).style.transform = "translateY(-3px)";
            (e.target as HTMLElement).style.boxShadow = "0 15px 35px rgba(185,168,122,0.3)";
          }}
          onMouseOut={(e) => {
            (e.target as HTMLElement).style.transform = "translateY(0)";
            (e.target as HTMLElement).style.boxShadow = "none";
          }}
        >
          <i className="bi bi-camera"></i>
          Start Your Transformation
        </a>
      </div>
    </div>

    {/* Responsive styles */}
    <style>
      {`
        @media (max-width: 768px) {
          #gallery-section {
            padding: 3rem 0 !important;
          }
          
          #gallery-section h2 {
            font-size: 2.2rem !important;
          }
          
          .gallery-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) !important;
            gap: 1rem !important;
          }
        }
        
        @media (max-width: 576px) {
          #gallery-section {
            padding: 2.5rem 0 !important;
          }
          
          #gallery-section h2 {
            font-size: 1.8rem !important;
          }
          
          .gallery-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
          }
          
          .gallery-item {
            padding: 0.3rem !important;
          }
        }
      `}
    </style>
  </section>
);

export default Gallery;
