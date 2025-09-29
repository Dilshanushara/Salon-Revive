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
      background: "linear-gradient(120deg, #f8f9fa 60%, #f3e9d2 100%)",
      width: "100vw",
      marginLeft: "calc(-50vw + 50%)",
      padding: "5rem 0",
      overflow: "hidden",
    }}
  >
    <div className="container-fluid" style={{ maxWidth: "1400px" }}>
      <h2
        className="mb-4 text-center"
        style={{
          color: accentColor,
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 700,
          fontSize: "2.7rem",
          letterSpacing: "1.5px",
          position: "relative",
          display: "inline-block",
        }}
      >
        Gallery
        <span
          style={{
            display: "block",
            height: "4px",
            width: "60px",
            backgroundColor: accentColor,
            borderRadius: "2px",
            margin: "8px auto 0",
          }}
        />
      </h2>
      <div className="row g-4 justify-content-center mt-4">
        {images.map((src, idx) => (
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3" key={idx}>
            <div
              className="gallery-item"
              style={{
                overflow: "hidden",
                borderRadius: "1.5rem",
                boxShadow: "0 4px 24px rgba(185,168,122,0.14)",
                background: "#fff",
                transition: "transform 0.3s cubic-bezier(.4,2,.3,1)",
                cursor: "pointer",
                aspectRatio: "1/1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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
                  borderRadius: "1.5rem",
                  transition: "transform 0.4s cubic-bezier(.4,2,.3,1)",
                  boxShadow: "0 2px 8px rgba(185,168,122,0.10)",
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform =
                    "scale(1.09)";
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform =
                    "scale(1)";
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
    
    {/* Enhanced responsive styles for gallery */}
    <style>
      {`
        @media (max-width: 575px) {
          #gallery-section {
            padding: 2.5rem 0 !important;
          }
          
          #gallery-section .container-fluid {
            max-width: 100% !important;
            padding: 0 1rem !important;
          }
          
          #gallery-section h2 {
            font-size: 2rem !important;
            letter-spacing: 1.2px !important;
            margin-bottom: 0.5rem !important;
          }
          
          #gallery-section .row {
            gap: 0.8rem !important;
            margin-top: 1rem !important;
          }
          
          #gallery-section .col-6 {
            padding: 0 0.4rem !important;
          }
          
          .gallery-item {
            border-radius: 1rem !important;
            box-shadow: 0 3px 18px rgba(185,168,122,0.12) !important;
          }
          
          .gallery-item img {
            border-radius: 1rem !important;
          }
        }
        
        @media (min-width: 576px) and (max-width: 767px) {
          #gallery-section {
            padding: 3rem 0 !important;
          }
          
          #gallery-section .container-fluid {
            padding: 0 1.5rem !important;
          }
          
          #gallery-section h2 {
            font-size: 2.3rem !important;
          }
          
          #gallery-section .row {
            gap: 1rem !important;
          }
          
          #gallery-section .col-sm-6 {
            padding: 0 0.5rem !important;
          }
        }
        
        @media (min-width: 768px) and (max-width: 991px) {
          #gallery-section {
            padding: 4rem 0 !important;
          }
          
          #gallery-section .container-fluid {
            max-width: 90% !important;
            padding: 0 2rem !important;
          }
          
          #gallery-section h2 {
            font-size: 2.5rem !important;
          }
          
          #gallery-section .row {
            gap: 1.2rem !important;
          }
        }
        
        @media (min-width: 992px) and (max-width: 1199px) {
          #gallery-section .container-fluid {
            max-width: 95% !important;
          }
          
          #gallery-section .row {
            gap: 1.5rem !important;
          }
        }
        
        @media (min-width: 1200px) {
          #gallery-section .row {
            gap: 2rem !important;
          }
        }
      `}
    </style>
  </section>
);

export default Gallery;
