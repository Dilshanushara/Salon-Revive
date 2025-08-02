import React from "react";

const navItems = [
  { id: "home-section", label: "Home" },
  { id: "about-section", label: "About Us" },
  { id: "services-section", label: "Services" },
  { id: "gallery-section", label: "Gallery" },
];

const Header: React.FC<{ activeSection: string }> = ({ activeSection }) => (
  <nav
    className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-lg"
    style={{
      backdropFilter: "blur(6px)",
      backgroundColor: "rgba(33,37,41,0.85)",
      borderBottom: "2px solid #b9a87a",
    }}
  >
    <div className="container">
      <a
        className="navbar-brand fw-bold fs-2"
        href="#home-section"
        style={{
          color: "#b9a87a",
          letterSpacing: "2px",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        <i className="bi bi-scissors me-2"></i>Salon Revive
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          {navItems.map((item) => (
            <li className="nav-item" key={item.id}>
              <a
                className={`nav-link px-3 position-relative ${
                  activeSection === item.id ? "active-link" : ""
                }`}
                href={`#${item.id}`}
                style={{
                  fontWeight: 500,
                  fontSize: "1.1rem",
                  color: activeSection === item.id ? "#b9a87a" : "#fff",
                  transition: "color 0.2s",
                }}
              >
                {item.label}
                {activeSection === item.id && (
                  <span
                    className="d-block mx-auto"
                    style={{
                      height: 3,
                      width: "70%",
                      backgroundColor: "#b9a87a",
                      borderRadius: 2,
                      position: "absolute",
                      bottom: 0,
                      left: "15%",
                    }}
                  ></span>
                )}
              </a>
            </li>
          ))}
        </ul>
        <div className="d-flex align-items-center ms-lg-4 mt-3 mt-lg-0">
          <a
            href="tel:+94704840024"
            className="btn btn-warning btn-lg fw-bold d-flex align-items-center gap-2 px-4 py-2"
            style={{
              backgroundColor: "#b9a87a",
              color: "#222",
              border: "none",
              fontSize: "1.1rem",
              boxShadow: "0 2px 10px rgba(185,168,122,0.18)",
            }}
          >
            <i className="bi bi-telephone-fill"></i>
            +94 70 484 0024
          </a>
        </div>
      </div>
    </div>
  </nav>
);
export default Header;
