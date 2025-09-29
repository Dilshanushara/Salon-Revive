import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const navItems = [
  { id: "home-section", label: "Home" },
  { id: "about-section", label: "About" },
  { id: "services-section", label: "Services" },
  { id: "gallery-section", label: "Gallery" },
];

const Header: React.FC<{ activeSection: string }> = ({ activeSection }) => (
  <>
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
          className="fw-bold"
          style={{
            color: "#b9a87a",
            letterSpacing: "2px",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "1.8rem",
          }}
        >
          <i className="bi bi-scissors me-2"></i>Salon Revive
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="navbarNav"
          style={{
            borderColor: "#b9a87a",
            padding: "0.35rem 0.65rem",
          }}
        />
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
                  padding: "0.75rem 1rem",
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
              className="fw-bold d-flex align-items-center gap-2 header-phone-btn"
              style={{
                backgroundColor: "#b9a87a",
                color: "#222",
                border: "none",
                fontSize: "1.1rem",
                boxShadow: "0 2px 10px rgba(185,168,122,0.18)",
                padding: "0.65rem 1.5rem",
                borderRadius: "1.5rem",
              }}
            >
              <i className="bi bi-telephone-fill"></i>
              <span className="phone-text">+94 70 484 0024</span>
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    {/* Enhanced responsive styles for header */}
    <style>
      {`
        .navbar-toggler:focus {
          box-shadow: 0 0 0 0.2rem rgba(185, 168, 122, 0.25);
        }
        
        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%23b9a87a' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
        }
        
        @media (max-width: 991px) {
          .navbar-brand {
            font-size: 1.5rem !important;
          }
          
          .navbar-nav .nav-link {
            text-align: center;
            padding: 0.8rem 1rem !important;
            border-bottom: 1px solid rgba(185, 168, 122, 0.1);
          }
          
          .navbar-nav .nav-link:last-child {
            border-bottom: none;
          }
          
          .header-phone-btn {
            width: 100%;
            justify-content: center !important;
            margin-top: 1rem;
            padding: 0.8rem 1.5rem !important;
          }
        }
        
        @media (max-width: 576px) {
          .navbar-brand {
            font-size: 1.3rem !important;
            letter-spacing: 1px !important;
          }
          
          .phone-text {
            font-size: 0.95rem;
          }
          
          .navbar-nav .nav-link {
            font-size: 1.05rem !important;
            padding: 0.75rem 1rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .phone-text {
            display: none;
          }
          
          .header-phone-btn {
            padding: 0.7rem !important;
            width: auto !important;
          }
          
          .header-phone-btn i {
            margin: 0 !important;
          }
        }
      `}
    </style>
  </>
);

export default Header;
