import React from "react";

const Home: React.FC = () => {
  return (
    <section id="home-section" className="bg-light py-5">
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left: Text Content */}
          <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
            <h1 className="display-3 fw-bold text-dark mb-4">
              Welcome to <span className="text-primary">Salon Revive</span>
            </h1>
            <p className="lead text-secondary mb-4">
              Transform your look and revitalize your confidence. Our team of
              beauty experts deliver premium hair, skin, and nail care
              experiences.
            </p>
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-lg-start gap-3">
              <a href="#about-section" className="btn btn-primary btn-lg px-4">
                About
              </a>
              <a
                href="#services-section"
                className="btn btn-outline-primary btn-lg px-4"
              >
                Our Service
              </a>
            </div>
          </div>
          {/* Right: Image */}
          <div className="col-lg-6 d-flex justify-content-center">
            <img
              src="/images/hero/Heart-Land-Saloon-Interior.jpg"
              alt="Salon interior"
              className="img-fluid rounded shadow-lg"
              style={{ maxHeight: 400, objectFit: "cover", width: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
