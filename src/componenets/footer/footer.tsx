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
    className="bg-dark text-light pt-5 pb-3 mt-auto"
    style={{
      borderTop: "2px solid #b9a87a33",
      boxShadow: "0 -2px 16px rgba(185,168,122,0.10)",
      fontFamily: "Montserrat, sans-serif",
      background: "linear-gradient(90deg, #222 70%, #b9a87a10 100%)",
    }}
  >
    <div className="container">
      <div className="row gy-4 justify-content-between align-items-center">
        {/* Brand & Contact Info */}
        <div className="col-12 col-md-6 text-center text-md-start">
          <h5
            style={{
              color: accentColor,
              fontWeight: 700,
              fontSize: "1.25rem",
              letterSpacing: "1px",
              marginBottom: "0.5rem",
            }}
          >
            Salon Revive
          </h5>
          <p
            className="mb-1"
            style={{
              fontSize: "1.07rem",
              color: "#e5e1d6",
              fontWeight: 500,
              lineHeight: 1.5,
            }}
          >
            <i
              className="bi bi-geo-alt-fill"
              style={{ color: accentColor, marginRight: 6 }}
            />
            No 558 2nd Floor Galle Road Pamburana Matara, Matara, Sri Lanka
          </p>
          <p
            className="mb-1"
            style={{
              fontSize: "1.07rem",
              color: "#e5e1d6",
              fontWeight: 500,
              lineHeight: 1.5,
            }}
          >
            <i
              className="bi bi-envelope-fill"
              style={{ color: accentColor, marginRight: 6 }}
            />
            <a
              href="mailto:salonrevive@gmail.com"
              className="text-decoration-none"
              style={{
                color: accentColor,
                fontWeight: 600,
                letterSpacing: "1px",
              }}
            >
              salonrevive@gmail.com
            </a>
          </p>
          <p
            className="mb-0"
            style={{
              fontSize: "0.98rem",
              color: "#a8a8a8",
              marginTop: "0.4rem",
            }}
          >
            &copy; {new Date().getFullYear()} Salon Revive. All rights reserved.
          </p>
        </div>
        {/* Social Icons */}
        <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end align-items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-light footer-social-icon"
              style={{
                fontSize: "2rem",
                background: "rgba(185,168,122,0.10)",
                padding: "0.5rem",
                borderRadius: "1.2rem",
                transition: "background 0.18s, color 0.18s, transform 0.2s",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(185,168,122,0.10)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = accentColor;
                e.currentTarget.style.color = "#222";
                e.currentTarget.style.transform = "scale(1.12)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(185,168,122,0.10)";
                e.currentTarget.style.color = "";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <i className={link.iconClass}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
