import React from "react";

const accentColor = "#b9a87a";

const businessHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 7:00 PM" },
  { day: "Saturday - Sunday ", hours: "9:00 AM - 6:00 PM" },
  // { day: "Sunday", hours: "9:00 AM - 6:00 PM" },
];

const contactInfo = [
  {
    icon: "bi-geo-alt-fill",
    title: "Visit Us",
    info: "No 558 2nd Floor Galle Road",
    subInfo: "Pamburana Matara, Sri Lanka",
  },
  {
    icon: "bi-telephone-fill",
    title: "Call Us",
    info: "+94 70 484 0024",
    subInfo: "Available during business hours",
  },
  {
    icon: "bi-envelope-fill",
    title: "Email Us",
    info: "salonrevive@gmail.com",
    subInfo: "We'll respond within 24 hours",
  },
];

const Contact: React.FC = () => (
  <section
    id="contact-section"
    style={{
      background: "linear-gradient(135deg, #f8f9fa 0%, #f3e9d2 100%)",
      width: "100vw",
      padding: "5rem 0",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Background decorative elements */}
    <div
      style={{
        position: "absolute",
        top: "20%",
        left: "5%",
        width: "150px",
        height: "150px",
        background:
          "linear-gradient(45deg, rgba(185,168,122,0.08), rgba(185,168,122,0.03))",
        borderRadius: "50%",
        zIndex: 1,
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: "15%",
        right: "8%",
        width: "100px",
        height: "100px",
        background:
          "linear-gradient(45deg, rgba(185,168,122,0.06), rgba(185,168,122,0.02))",
        borderRadius: "50%",
        zIndex: 1,
      }}
    />

    <div
      className="container"
      style={{
        maxWidth: "1200px",
        position: "relative",
        zIndex: 2,
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <div style={{ marginBottom: "1rem" }}>
          <span
            style={{
              background: "linear-gradient(90deg, #b9a87a, #d4c396)",
              color: "#fff",
              fontSize: "0.9rem",
              fontWeight: 600,
              padding: "0.5rem 1.5rem",
              borderRadius: "2rem",
              letterSpacing: "1px",
              textTransform: "uppercase",
              boxShadow: "0 4px 15px rgba(185,168,122,0.2)",
            }}
          >
            📍 Visit & Contact
          </span>
        </div>
        <h2
          style={{
            color: "#2c2c2c",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: "3rem",
            letterSpacing: "0.5px",
            marginBottom: "1rem",
            background: "linear-gradient(135deg, #2c2c2c 0%, #b9a87a 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Get in Touch
        </h2>
        <p
          style={{
            color: "#5a5a5a",
            fontSize: "1.2rem",
            fontWeight: 500,
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Ready to book your appointment or have questions? We're here to help
          you look and feel your best.
        </p>
      </div>

      <div className="row g-4">
        {/* Contact Information */}
        <div className="col-lg-6">
          <div
            style={{
              background: "rgba(255,255,255,0.9)",
              borderRadius: "1.5rem",
              padding: "2.5rem",
              boxShadow: "0 10px 40px rgba(185,168,122,0.1)",
              backdropFilter: "blur(10px)",
              height: "100%",
            }}
          >
            <h3
              style={{
                color: "#2c2c2c",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                fontSize: "1.8rem",
                marginBottom: "2rem",
              }}
            >
              Contact Information
            </h3>

            <div style={{ marginBottom: "2rem" }}>
              {contactInfo.map((contact, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    marginBottom: "1.5rem",
                    padding: "1rem",
                    borderRadius: "1rem",
                    background: "rgba(185,168,122,0.05)",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  onMouseOver={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(185,168,122,0.1)";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateX(5px)";
                  }}
                  onMouseOut={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(185,168,122,0.05)";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateX(0)";
                  }}
                >
                  <div
                    style={{
                      background: "linear-gradient(135deg, #b9a87a, #d4c396)",
                      color: "#fff",
                      borderRadius: "1rem",
                      padding: "0.8rem",
                      marginRight: "1rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minWidth: "50px",
                      height: "50px",
                    }}
                  >
                    <i
                      className={contact.icon}
                      style={{ fontSize: "1.2rem" }}
                    ></i>
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: "1.1rem",
                        color: "#2c2c2c",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {contact.title}
                    </div>
                    <div
                      style={{
                        color: "#b9a87a",
                        fontWeight: 600,
                        fontSize: "1rem",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {contact.info}
                    </div>
                    <div
                      style={{
                        color: "#666",
                        fontSize: "0.9rem",
                      }}
                    >
                      {contact.subInfo}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Book Button */}
            <a
              href="tel:+94704840024"
              style={{
                background: "linear-gradient(135deg, #b9a87a, #d4c396)",
                color: "#fff",
                padding: "1rem 2rem",
                borderRadius: "1.5rem",
                textDecoration: "none",
                fontSize: "1.1rem",
                fontWeight: 600,
                letterSpacing: "0.5px",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                textTransform: "uppercase",
                width: "100%",
                justifyContent: "center",
              }}
              onMouseOver={(e) => {
                (e.target as HTMLElement).style.transform = "translateY(-3px)";
                (e.target as HTMLElement).style.boxShadow =
                  "0 15px 35px rgba(185,168,122,0.3)";
              }}
              onMouseOut={(e) => {
                (e.target as HTMLElement).style.transform = "translateY(0)";
                (e.target as HTMLElement).style.boxShadow = "none";
              }}
            >
              <i className="bi bi-telephone-fill"></i>
              Call to Book Now
            </a>
          </div>
        </div>

        {/* Business Hours */}
        <div className="col-lg-6">
          <div
            style={{
              background: "rgba(255,255,255,0.9)",
              borderRadius: "1.5rem",
              padding: "2.5rem",
              boxShadow: "0 10px 40px rgba(185,168,122,0.1)",
              backdropFilter: "blur(10px)",
              height: "100%",
            }}
          >
            <h3
              style={{
                color: "#2c2c2c",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                fontSize: "1.8rem",
                marginBottom: "2rem",
              }}
            >
              Business Hours
            </h3>

            <div style={{ marginBottom: "2rem" }}>
              {businessHours.map((schedule, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1rem 1.5rem",
                    marginBottom: "0.8rem",
                    borderRadius: "1rem",
                    background: "rgba(185,168,122,0.05)",
                    border: "1px solid rgba(185,168,122,0.1)",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  onMouseOver={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(185,168,122,0.1)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(185,168,122,0.2)";
                  }}
                  onMouseOut={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(185,168,122,0.05)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(185,168,122,0.1)";
                  }}
                >
                  <span
                    style={{
                      fontWeight: 600,
                      color: "#2c2c2c",
                      fontSize: "1.1rem",
                    }}
                  >
                    {schedule.day}
                  </span>
                  <span
                    style={{
                      color: "#b9a87a",
                      fontWeight: 600,
                      fontSize: "1rem",
                    }}
                  >
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>

            {/* Special Notice */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(185,168,122,0.1), rgba(185,168,122,0.05))",
                border: "1px solid rgba(185,168,122,0.2)",
                borderRadius: "1rem",
                padding: "1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "0.5rem",
                }}
              >
                <i
                  className="bi bi-info-circle-fill"
                  style={{
                    color: "#b9a87a",
                    fontSize: "1.2rem",
                    marginRight: "0.5rem",
                  }}
                ></i>
                <span
                  style={{
                    fontWeight: 600,
                    color: "#2c2c2c",
                    fontSize: "1rem",
                  }}
                >
                  Walk-ins Welcome
                </span>
              </div>
              <p
                style={{
                  color: "#666",
                  fontSize: "0.95rem",
                  margin: "0",
                  lineHeight: "1.5",
                }}
              >
                While appointments are recommended, we also accept walk-ins
                based on availability. Call ahead to ensure your preferred time
                slot.
              </p>
            </div>

            {/* Social Media Links */}
            {/* <div>
              <h4
                style={{
                  color: "#2c2c2c",
                  fontWeight: 600,
                  fontSize: "1.2rem",
                  marginBottom: "1rem",
                }}
              >
                Follow Us
              </h4>
              <div style={{ display: "flex", gap: "1rem" }}>
                {[
                  { icon: "bi-facebook", url: "https://web.facebook.com/salonrevivematara", label: "Facebook" },
                  { icon: "bi-instagram", url: "https://www.instagram.com/salonrevivematara/", label: "Instagram" },
                  { icon: "bi-tiktok", url: "https://www.tiktok.com/@salonrevive", label: "TikTok" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "linear-gradient(135deg, #b9a87a, #d4c396)",
                      color: "#fff",
                      padding: "0.8rem",
                      borderRadius: "1rem",
                      textDecoration: "none",
                      fontSize: "1.2rem",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minWidth: "50px",
                      height: "50px",
                    }}
                    onMouseOver={(e) => {
                      (e.target as HTMLElement).style.transform = "translateY(-3px) scale(1.1)";
                      (e.target as HTMLElement).style.boxShadow = "0 10px 25px rgba(185,168,122,0.3)";
                    }}
                    onMouseOut={(e) => {
                      (e.target as HTMLElement).style.transform = "translateY(0) scale(1)";
                      (e.target as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>

    {/* Responsive styles */}
    <style>
      {`
        @media (max-width: 768px) {
          #contact-section {
            padding: 3rem 0 !important;
          }
          
          #contact-section h2 {
            font-size: 2.2rem !important;
          }
          
          #contact-section .col-lg-6 > div {
            padding: 2rem !important;
          }
        }
        
        @media (max-width: 576px) {
          #contact-section {
            padding: 2.5rem 0 !important;
          }
          
          #contact-section h2 {
            font-size: 1.8rem !important;
          }
          
          #contact-section .col-lg-6 > div {
            padding: 1.5rem !important;
          }
          
          #contact-section h3 {
            font-size: 1.5rem !important;
          }
        }
      `}
    </style>
  </section>
);

export default Contact;
