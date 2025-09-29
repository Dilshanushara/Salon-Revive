import React from "react";

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

const accentColor = "#b9a87a";

const Services: React.FC = () => (
  <section
    id="services-section"
    style={{
      background: "linear-gradient(110deg, #f8f9fa 60%, #f3e9d2 100%)",
      width: "100vw",
      padding: "4rem 0 3.5rem 0",
      overflow: "hidden",
    }}
  >
    <div
      className="container-fluid"
      style={{
        maxWidth: "1250px",
        margin: "0 auto",
        borderRadius: "1.5rem",
        background: "rgba(255,255,255,0.88)",
        boxShadow: "0 8px 38px rgba(185,168,122,0.07)",
        padding: "2.7rem 2.2rem",
      }}
    >
      <div style={{ marginBottom: "2.2rem", textAlign: "center" }}>
        <h2
          style={{
            color: accentColor,
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: "2.5rem",
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
            backgroundColor: accentColor,
            borderRadius: "2px",
            margin: "6px auto 0",
          }}
        />
        <p
          className="mt-3"
          style={{
            color: "#4d3a00",
            fontSize: "1.1rem",
            fontWeight: 500,
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
          gap: "2rem",
          marginTop: "0.5rem",
        }}
      >
        {services.map((srv, idx) => (
          <div key={idx} style={{ display: "flex" }}>
            <div
              className="card h-100 text-center w-100 service-card"
              style={{
                borderRadius: "1.2rem",
                border: "none",
                background: "rgba(255,255,255,0.95)",
                boxShadow: "0 6px 32px rgba(185,168,122,0.12)",
                transition:
                  "transform 0.22s cubic-bezier(.4,2,.3,1), box-shadow 0.2s",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                minHeight: "270px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.04)";
                e.currentTarget.style.boxShadow =
                  "0 14px 40px rgba(185,168,122,0.20)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 6px 32px rgba(185,168,122,0.12)";
              }}
            >
              {/* Accent shape */}
              <div
                style={{
                  position: "absolute",
                  top: "-16px",
                  right: "-16px",
                  width: "38px",
                  height: "38px",
                  background: accentColor,
                  opacity: 0.12,
                  borderRadius: "50%",
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
                    color: accentColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(185,168,122,0.13)",
                    borderRadius: "50%",
                    width: "3.2rem",
                    height: "3.2rem",
                  }}
                >
                  {srv.icon}
                </span>
                <h5
                  className="card-title service-title"
                  style={{
                    fontWeight: 600,
                    fontSize: "1.13rem",
                    color: "#222",
                    marginBottom: "0.7rem",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {srv.name}
                </h5>
                <p
                  className="card-text service-desc"
                  style={{
                    color: "#7a6a2f",
                    fontSize: "1.02rem",
                    fontWeight: 500,
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
    {/* Enhanced responsive styles */}
    <style>
      {`
        @media (max-width: 1199px) {
          #services-section .container-fluid {
            padding: 2.2rem 1rem;
          }
          #services-section .services-grid {
            gap: 1.5rem;
          }
        }
        
        @media (max-width: 991px) {
          #services-section {
            padding: 3.5rem 0 3rem 0 !important;
          }
          
          #services-section .container-fluid {
            padding: 2rem 0.8rem;
          }
          
          #services-section .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.3rem;
          }
          
          #services-section h2 {
            font-size: 2.2rem !important;
          }
          
          #services-section .card.service-card {
            min-height: 180px;
            padding: 1rem;
          }
        }
        
        @media (max-width: 767px) {
          #services-section {
            padding: 3rem 0 2.5rem 0 !important;
          }
          
          #services-section .container-fluid {
            padding: 1.8rem 0.6rem;
          }
          
          #services-section .services-grid {
            grid-template-columns: 1fr;
            gap: 1.2rem;
          }
          
          #services-section h2 {
            font-size: 2rem !important;
            margin-bottom: 0.5rem !important;
          }
          
          #services-section .card.service-card {
            min-height: 160px;
            padding: 1rem 0.8rem;
            margin-bottom: 0;
          }
          
          #services-section .card-body {
            padding: 1rem 0.5rem !important;
          }
          
          #services-section .service-icon {
            font-size: 1.6rem !important;
            width: 2.5rem !important;
            height: 2.5rem !important;
          }
          
          #services-section .service-title {
            font-size: 1.05rem !important;
            margin-bottom: 0.5rem !important;
          }
          
          #services-section .service-desc {
            font-size: 0.98rem !important;
            line-height: 1.4 !important;
          }
        }
        
        @media (max-width: 575px) {
          #services-section {
            padding: 2.5rem 0 2rem 0 !important;
          }
          
          #services-section .container-fluid {
            padding: 1.5rem 0.5rem;
          }
          
          #services-section h2 {
            font-size: 1.8rem !important;
            letter-spacing: 1px !important;
          }
          
          #services-section p {
            font-size: 1rem !important;
            max-width: 100% !important;
          }
          
          #services-section .services-grid {
            gap: 1rem;
            margin-top: 1rem !important;
          }
          
          #services-section .card.service-card {
            min-height: 140px;
            padding: 0.8rem 0.6rem;
            font-size: 0.9rem;
          }
          
          #services-section .card-body {
            padding: 0.8rem 0.3rem !important;
          }
          
          #services-section .service-icon {
            font-size: 1.4rem !important;
            width: 2.2rem !important;
            height: 2.2rem !important;
          }
          
          #services-section .service-title {
            font-size: 1rem !important;
            margin-bottom: 0.4rem !important;
          }
          
          #services-section .service-desc {
            font-size: 0.9rem !important;
          }
        }
        
        @media (max-width: 480px) {
          #services-section .container-fluid {
            padding: 1.2rem 0.3rem;
          }
          
          #services-section h2 {
            font-size: 1.6rem !important;
          }
          
          #services-section .card.service-card {
            min-height: 130px;
            padding: 0.6rem 0.4rem;
          }
          
          #services-section .card-body {
            padding: 0.6rem 0.2rem !important;
          }
          
          #services-section .service-icon {
            font-size: 1.3rem !important;
            width: 2rem !important;
            height: 2rem !important;
          }
          
          #services-section .service-title {
            font-size: 0.95rem !important;
          }
          
          #services-section .service-desc {
            font-size: 0.85rem !important;
          }
        }
      `}
    </style>
  </section>
);

export default Services;
