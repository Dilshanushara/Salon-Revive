import React from "react";
import "./gallery.css";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import image5 from "../../assets/images/image5.jpg";
import image6 from "../../assets/images/image6.jpg";
import image7 from "../../assets/images/image7.jpg";
import image8 from "../../assets/images/image8.jpg";

const images = [image3, image4, image5, image6, image7, image8];

const Gallery: React.FC = () => (
  <section id="gallery-section" className="gallerySection">
    {/* Decorative background blobs */}
    <div className="blob1" />
    <div className="blob2" />

    <div className="container">
      <div className="header">
        <span className="badge">📸 Our Work</span>
        <h2 className="title">Gallery of Transformations</h2>
        <p className="subtitle">
          Witness the artistry and skill of our talented team through these
          stunning before-and-after transformations and beautiful moments.
        </p>
      </div>

      <div className="grid">
        {images.map((src, idx) => (
          <figure className="item" key={idx} tabIndex={0}>
            <img
              src={src}
              className="image"
              alt={`Professional salon work showcasing ${
                idx % 2 === 0 ? "hair styling" : "beauty treatment"
              } ${idx + 1}`}
            />
            <span className="badgeNumber">{idx + 1}</span>
          </figure>
        ))}
      </div>

      <div className="ctaSection">
        <p className="ctaText">
          Love what you see? Book your transformation today!
        </p>
        <a href="tel:+94704840024" className="ctaButton">
          <i className="bi bi-camera"></i>
          Start Your Transformation
        </a>
      </div>
    </div>
  </section>
);

export default Gallery;
