import React from "react";
import { theme, sectionStyle, containerStyle } from "../../styles/theme";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import image5 from "../../assets/images/image5.jpg";
import image6 from "../../assets/images/image6.jpg";
import image7 from "../../assets/images/image7.jpg";
import image8 from "../../assets/images/image8.jpg";

const images = [image3, image4, image5, image6, image7, image8];

const Gallery: React.FC = () => (
  <section
    id="gallery-section"
    style={{
      ...sectionStyle,
      padding: "4rem 0", // Consistent with other sections
    }}
  >
    <div 
      className="container-fluid" 
      style={{
        ...containerStyle,
        maxWidth: "1400px", // Wider for gallery
      }}
    >
      {/* Consistent heading style */}
      <div style={{ marginBottom: "2.2rem", textAlign: "center" }}>
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
          Gallery
        </h2>
        <span
          style={{
            display: "block",
            height: "4px",
            width: "55px",
            backgroundColor: theme.colors.primary,
            borderRadius: "2px",
            margin: "6px auto 0",
          }}
        />
      </div>

      {/* Modern gallery grid */}
      <div className="row g-4 justify-content-center mt-4">
        {images.map((src, idx) => (
          <div className="col-6 col-md-4 col-lg-3" key={idx}>
            <div
              className="gallery-item"
              style={{
                overflow: "hidden",
                borderRadius: theme.borderRadius.large,
                boxShadow: theme.shadows.medium,
                background: theme.colors.background.white,
                transition: `all ${theme.transitions.medium}`,
                cursor: "pointer",
                aspectRatio: "1/1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
              onMouseOver={(e) => {
                const element = e.currentTarget as HTMLElement;
                element.style.transform = "translateY(-8px)";
                element.style.boxShadow = theme.shadows.hover;
                
                const img = element.querySelector('img') as HTMLImageElement;
                if (img) {
                  img.style.transform = "scale(1.05)";
                }
              }}
              onMouseOut={(e) => {
                const element = e.currentTarget as HTMLElement;
                element.style.transform = "translateY(0)";
                element.style.boxShadow = theme.shadows.medium;
                
                const img = element.querySelector('img') as HTMLImageElement;
                if (img) {
                  img.style.transform = "scale(1)";
                }
              }}
            >
              <img
                src={src}
                alt={`Professional salon work ${idx + 1}`}
                className="img-fluid"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: theme.borderRadius.large,
                  transition: `transform ${theme.transitions.slow}`,
                  display: "block",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
    
    {/* Responsive styles */}
    <style>
      {`
        @media (max-width: ${theme.breakpoints.tablet}) {
          #gallery-section {
            padding: ${theme.spacing.sectionMobile} !important;
          }
          #gallery-section .container-fluid {
            padding: ${theme.spacing.containerMobile} !important;
          }
          #gallery-section .gallery-item {
            margin-bottom: 1rem;
          }
          #gallery-section h2 {
            font-size: 2rem !important;
          }
        }
        
        @media (max-width: ${theme.breakpoints.mobile}) {
          #gallery-section .row {
            gap: 1rem !important;
          }
          #gallery-section h2 {
            font-size: 1.75rem !important;
          }
        }
      `}
    </style>
  </section>
);

export default Gallery;
