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
    bg="dark"
    variant="dark"
    sticky="top"
    className="shadow-lg"
    style={{
      backdropFilter: "blur(6px)",
      backgroundColor: "rgba(33,37,41,0.85)",
      borderBottom: "2px solid #b9a87a",
    }}
  >
    <Container>
      <Navbar.Brand
        href="#home-section"
        className="fw-bold fs-2"
        style={{
          color: "#b9a87a",
          letterSpacing: "2px",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        <i className="bi bi-scissors me-2"></i>Salon Revive
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="ms-auto mb-2 mb-lg-0">
          {navItems.map((item) => (
            <Nav.Link
              key={item.id}
              href={`#${item.id}`}
              className={`px-3 position-relative ${
                activeSection === item.id ? "active-link" : ""
              }`}
              style={{
                fontWeight: 500,
                fontSize: "1.1rem",
                color: activeSection === item.id ? "#b9a87a" : "#fff",
                transition: "color 0.2s",
                position: "relative",
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
            </Nav.Link>
          ))}
        </Nav>
        <div className="d-flex align-items-center ms-lg-4 mt-3 mt-lg-0">
          <Button
            href="tel:+94704840024"
            variant="warning"
            size="lg"
            className="fw-bold d-flex align-items-center gap-2 px-4 py-2"
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
          </Button>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
