import React from "react";

const AboutUs: React.FC = () => (
  <div className="container text-center my-5 py-5">
    <div className="row align-items-center">
      <div className="col-md-6 mb-4 mb-md-0">
        <img
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600"
          alt="Our Team"
          className="img-fluid rounded shadow"
        />
      </div>
      <div className="col-md-6">
        <h2 className="mb-3">About Us</h2>
        <p>
          We are a team of passionate stylists dedicated to making you look and
          feel your best. Our salon provides a relaxing and welcoming
          environment, using only high-quality products and the latest
          techniques.
        </p>
        <p>
          With years of experience and a focus on customer satisfaction, we
          strive to exceed your expectations every visit.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
