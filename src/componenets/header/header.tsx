import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const navItems = [
  { id: "home-section", label: "Home" },
  { id: "about-section", label: "About" },
  { id: "services-section", label: "Services" },
  { id: "gallery-section", label: "Gallery" },
];

const Header: React.FC<{ activeSection: string }> = ({ activeSection }) => (
  <Navbar
    expand="lg"
    variant="light"
    sticky="top"
    className="shadow-sm"
    style={{
      backdropFilter: "blur(10px)",
      backgroundColor: "rgba(253,251,247,0.95)",
      borderBottom: "1px solid rgba(185,168,122,0.2)",
      padding: "1rem 0",
    }}
  >
    <Container>
      <Navbar.Brand
        href="#home-section"
        className="fw-bold"
        style={{
          color: "#2c2416",
          letterSpacing: "0.5px",
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "1.6rem",
        }}
      >
        <i className="bi bi-scissors me-2" style={{ color: "#b9a87a" }}></i>
        Salon Revive
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" style={{ border: "none" }} />
      <Navbar.Collapse id="navbarNav">
        <Nav className="ms-auto mb-2 mb-lg-0 align-items-center">
          {navItems.map((item) => (
            <Nav.Link
              key={item.id}
              href={`#${item.id}`}
              className={`px-3 position-relative ${
                activeSection === item.id ? "active-link" : ""
              }`}
              style={{
                fontWeight: activeSection === item.id ? 600 : 500,
                fontSize: "1rem",
                color: activeSection === item.id ? "#2c2416" : "#6b5d4f",
                transition: "all 0.3s ease",
                position: "relative",
                letterSpacing: "0.3px",
              }}
              onMouseOver={(e) => {
                if (activeSection !== item.id) {
                  e.currentTarget.style.color = "#2c2416";
                }
              }}
              onMouseOut={(e) => {
                if (activeSection !== item.id) {
                  e.currentTarget.style.color = "#6b5d4f";
                }
              }}
            >
              {item.label}
              {activeSection === item.id && (
                <span
                  className="d-block mx-auto"
                  style={{
                    height: 2,
                    width: "60%",
                    backgroundColor: "#b9a87a",
                    borderRadius: 2,
                    position: "absolute",
                    bottom: 5,
                    left: "20%",
                  }}
                ></span>
              )}
            </Nav.Link>
          ))}
        </Nav>
        <div className="d-flex align-items-center ms-lg-4 mt-3 mt-lg-0">
          <Button
            href="tel:+94704840024"
            variant="dark"
            className="fw-semibold d-flex align-items-center gap-2"
            style={{
              backgroundColor: "#2c2416",
              color: "#f5efe3",
              border: "none",
              fontSize: "0.95rem",
              padding: "0.6rem 1.5rem",
              borderRadius: "0.4rem",
              boxShadow: "0 2px 10px rgba(44,36,22,0.15)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#1a150e";
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(44,36,22,0.25)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#2c2416";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 10px rgba(44,36,22,0.15)";
            }}
          >
            <i className="bi bi-telephone-fill"></i>
            +94 70 484 0024
          </Button>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
