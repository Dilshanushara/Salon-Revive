import React from "react";

const socialLinks = [
  {
    href: "https://web.facebook.com/salonrevivematara",
    iconClass: "bi bi-facebook",
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/salonrevivematara/",
    iconClass: "bi bi-instagram",
    label: "Instagram",
  },
  {
    href: "https://www.tiktok.com/@salonrevive",
    iconClass: "bi bi-tiktok",
    label: "TikTok",
  },
];

const accentColor = "#b9a87a";

const Footer: React.FC = () => (
  <footer
    className="text-light pt-5 pb-4 mt-auto"
    style={{
      background: "#2c2416",
      borderTop: "1px solid rgba(185,168,122,0.2)",
    }}
  >
    <div className="container" style={{ maxWidth: "1200px" }}>
      <div className="row gy-4 justify-content-between">
        {/* Brand & Contact Info */}
        <div className="col-12 col-md-6">
          <h5
            style={{
              color: "#f5efe3",
              fontWeight: 700,
              fontSize: "1.5rem",
              letterSpacing: "0.5px",
              marginBottom: "1.2rem",
              fontFamily: "'Playfair Display', Georgia, serif",
            }}
          >
            <i
              className="bi bi-scissors me-2"
              style={{ color: accentColor }}
            ></i>
            Salon Revive
          </h5>
          <p
            className="mb-3"
            style={{
              fontSize: "0.95rem",
              color: "#c4b8a8",
              fontWeight: 400,
              lineHeight: 1.7,
              maxWidth: "350px",
            }}
          >
            Where beauty meets artistry. Experience the finest salon services in
            a luxurious, tranquil environment.
          </p>
          <div className="mb-2">
            <i
              className="bi bi-geo-alt-fill me-2"
              style={{ color: accentColor }}
            />
            <span
              style={{
                fontSize: "0.9rem",
                color: "#c4b8a8",
                fontWeight: 400,
              }}
            >
              No 558 2nd Floor Galle Road Pamburana Matara, Sri Lanka
            </span>
          </div>
          <div className="mb-2">
            <i
              className="bi bi-envelope-fill me-2"
              style={{ color: accentColor }}
            />
            <a
              href="mailto:salonrevive@gmail.com"
              className="text-decoration-none"
              style={{
                color: "#c4b8a8",
                fontWeight: 400,
                fontSize: "0.9rem",
                transition: "color 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = accentColor;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "#c4b8a8";
              }}
            >
              salonrevive@gmail.com
            </a>
          </div>
          <div>
            <i
              className="bi bi-telephone-fill me-2"
              style={{ color: accentColor }}
            />
            <a
              href="tel:+94704840024"
              className="text-decoration-none"
              style={{
                color: "#c4b8a8",
                fontWeight: 400,
                fontSize: "0.9rem",
                transition: "color 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = accentColor;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "#c4b8a8";
              }}
            >
              +94 70 484 0024
            </a>
          </div>
        </div>
        {/* Social Icons */}
        <div className="col-12 col-md-6 d-flex flex-column align-items-md-end">
          <h6
            style={{
              color: "#f5efe3",
              fontWeight: 600,
              fontSize: "1rem",
              marginBottom: "1rem",
              letterSpacing: "0.5px",
            }}
          >
            Follow Us
          </h6>
          <div className="d-flex gap-3 mb-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-light footer-social-icon"
                style={{
                  fontSize: "1.3rem",
                  background: "rgba(185,168,122,0.15)",
                  padding: "0.6rem",
                  borderRadius: "0.4rem",
                  transition: "all 0.3s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = accentColor;
                  e.currentTarget.style.color = "#2c2416";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "rgba(185,168,122,0.15)";
                  e.currentTarget.style.color = "";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <i className={link.iconClass}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
      <hr
        style={{
          borderTop: "1px solid rgba(185,168,122,0.2)",
          margin: "2rem 0 1.5rem 0",
        }}
      />
      <div className="text-center">
        <p
          className="mb-0"
          style={{
            fontSize: "0.85rem",
            color: "#8b7d6f",
            fontWeight: 400,
          }}
        >
          &copy; {new Date().getFullYear()} Salon Revive. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
