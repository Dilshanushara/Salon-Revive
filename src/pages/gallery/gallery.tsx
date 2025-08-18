import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import image5 from "../../assets/images/image5.jpg";
import image6 from "../../assets/images/image6.jpg";
import image7 from "../../assets/images/image7.jpg";
import image8 from "../../assets/images/image8.jpg";

const images = [image3, image4, image5, image6, image7, image8];

const accentColor = "#b9a87a";

const Gallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = () => setLightboxIndex(null);
  const showPrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + images.length - 1) % images.length);
  };
  const showNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % images.length);
  };

  return (
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
          <div className="col-6 col-md-4 col-lg-3" key={idx}>
            <div
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
              onClick={() => setLightboxIndex(idx)}
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
      <Modal show={lightboxIndex !== null} onHide={close} centered size="lg">
        <Modal.Body className="bg-dark text-center" onClick={showNext} style={{ borderRadius: "1rem" }}>
          {lightboxIndex !== null && (
            <img src={images[lightboxIndex]} alt={`Selected ${lightboxIndex + 1}`} className="lightbox-img" />
          )}
          <div className="d-flex justify-content-between align-items-center mt-3">
            <Button variant="outline-light" onClick={showPrev} className="d-flex align-items-center gap-2">
              <i className="bi bi-chevron-left"></i> Prev
            </Button>
            <Button variant="outline-light" onClick={close} className="d-flex align-items-center gap-2">
              <i className="bi bi-x-lg"></i> Close
            </Button>
            <Button variant="outline-light" onClick={showNext} className="d-flex align-items-center gap-2">
              Next <i className="bi bi-chevron-right"></i>
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  </section>
  );
};

export default Gallery;
