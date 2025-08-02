import React from "react";

// Replace these URLs with your own salon/gallery images
const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400",
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
];

const Gallery: React.FC = () => (
  <div className="container text-center my-5 py-5">
    <h2 className="mb-4 text-center">Gallery</h2>
    <div className="row g-3">
      {images.map((src, idx) => (
        <div className="col-6 col-md-4" key={idx}>
          <img
            src={src}
            alt={`Salon work ${idx + 1}`}
            className="img-fluid rounded shadow"
          />
        </div>
      ))}
    </div>
  </div>
);

export default Gallery;
