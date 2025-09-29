import React from "react";
import { theme, sectionStyle, containerStyle } from "../../styles/theme";

const services = [
  { icon: "✂️", name: "Haircuts", desc: "Trendy styles for all ages." },
  { icon: "🎨", name: "Hair Coloring", desc: "Vibrant and lasting colors." },
  {
    icon: "🧖‍♀️",
    name: "Facials",
    desc: "Rejuvenate your skin with our premium facial treatments.",
  },
  {
    icon: "💅",
    name: "Manicure & Pedicure",
    desc: "Pamper your hands and feet.",
  },
  {
    icon: "👰‍♀️",
    name: "Bridal Packages",
    desc: "Special packages for your big day.",
  },
];

const Services: React.FC = () => (
  <section
    id="services-section"
    style={sectionStyle}
  >
    <div
      className="container-fluid"
      style={containerStyle}
    >
      {/* Consistent heading style */}
      <div style={{ marginBottom: "2.2rem", textAlign: "center" }}>
        <h2
          style={{
            color: theme.colors.primary,
            fontFamily: theme.typography.fontFamily,
            fontWeight: theme.typography.fontWeight.bold,
            fontSize: theme.typography.fontSize.heading,
            letterSpacing: "1.2px",
            marginBottom: "0.3rem",
            position: "relative",
            display: "inline-block",
          }}
        >
          Our Services
        </h2>
        <span
          style={{
            display: "block",
            height: "4px",
            width: "55px",
            backgroundColor: theme.colors.primary,
            borderRadius: "2px",
            margin: "6px auto 0",
          }}
        />
        <p
          className="mt-3"
          style={{
            color: theme.colors.text.secondary,
            fontSize: "1.1rem",
            fontWeight: theme.typography.fontWeight.normal,
            maxWidth: "430px",
            margin: "0 auto",
          }}
        >
          Discover our range of premium beauty and grooming services, tailored
          to elevate your style and well-being.
        </p>
      </div>

      {/* Responsive grid for service cards */}
      <div
        className="services-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: theme.spacing.grid,
          marginTop: "0.5rem",
        }}
      >
        {services.map((srv, idx) => (
          <div key={idx} style={{ display: "flex" }}>
            <div
              className="card h-100 text-center w-100 service-card"
              style={{
                borderRadius: theme.borderRadius.large,
                border: "none",
                background: theme.colors.background.white,
                boxShadow: theme.shadows.medium,
                transition: `all ${theme.transitions.medium}`,
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                minHeight: "270px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              onMouseOver={(e) => {
                const element = e.currentTarget as HTMLElement;
                element.style.transform = "translateY(-8px)";
                element.style.boxShadow = theme.shadows.hover;
              }}
              onMouseOut={(e) => {
                const element = e.currentTarget as HTMLElement;
                element.style.transform = "translateY(0)";
                element.style.boxShadow = theme.shadows.medium;
              }}
            >
              {/* Accent decoration */}
              <div
                style={{
                  position: "absolute",
                  top: "-16px",
                  right: "-16px",
                  width: "38px",
                  height: "38px",
                  background: theme.colors.primary,
                  opacity: 0.12,
                  borderRadius: theme.borderRadius.circle,
                  zIndex: 1,
                }}
              />
              
              <div
                className="card-body d-flex flex-column align-items-center justify-content-center py-4"
                style={{ position: "relative", zIndex: 2 }}
              >
                <span
                  className="mb-2 service-icon"
                  style={{
                    fontSize: "2.3rem",
                    color: theme.colors.primary,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(185,168,122,0.13)",
                    borderRadius: theme.borderRadius.circle,
                    width: "3.2rem",
                    height: "3.2rem",
                  }}
                >
                  {srv.icon}
                </span>
                
                <h5
                  className="card-title service-title"
                  style={{
                    fontWeight: theme.typography.fontWeight.semibold,
                    fontSize: "1.13rem",
                    color: theme.colors.text.primary,
                    marginBottom: "0.7rem",
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  {srv.name}
                </h5>
                
                <p
                  className="card-text service-desc"
                  style={{
                    color: theme.colors.text.accent,
                    fontSize: "1.02rem",
                    fontWeight: theme.typography.fontWeight.normal,
                  }}
                >
                  {srv.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    {/* Responsive styles */}
    <style>
      {`
        @media (max-width: 1100px) {
          #services-section .container-fluid {
            padding: ${theme.spacing.containerMobile} !important;
          }
          #services-section .services-grid {
            gap: 1.2rem;
          }
        }
        @media (max-width: ${theme.breakpoints.desktop}) {
          #services-section .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: ${theme.breakpoints.tablet}) {
          #services-section {
            padding: ${theme.spacing.sectionMobile} !important;
          }
          #services-section .services-grid {
            grid-template-columns: 1fr;
            gap: ${theme.spacing.gridMobile};
          }
          #services-section .card.service-card {
            min-height: 200px;
            font-size: 0.93rem;
            margin-bottom: 0.8rem;
            padding: 0.7rem 0.7rem;
          }
          #services-section .card-body {
            padding: 1rem 0.3rem !important;
          }
          #services-section .service-icon {
            font-size: 1.8rem !important;
            width: 2.5rem !important;
            height: 2.5rem !important;
          }
          #services-section .service-title {
            font-size: 1rem !important;
            margin-bottom: 0.4rem !important;
          }
          #services-section .service-desc {
            font-size: 0.92rem !important;
          }
          #services-section h2 {
            font-size: 2rem !important;
          }
        }
        @media (max-width: ${theme.breakpoints.mobile}) {
          #services-section .container-fluid {
            padding: 1rem 0.5rem !important;
          }
          #services-section .card.service-card {
            box-shadow: ${theme.shadows.light};
            min-height: 160px;
            padding: 0.4rem 0.3rem;
          }
          #services-section .card-body {
            padding: 0.7rem 0.1rem !important;
          }
          #services-section h2 {
            font-size: 1.5rem !important;
          }
        }
      `}
    </style>
  </section>
);

export default Services;
