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
      marginLeft: "calc(-50vw + 50%)",
      padding: "4rem 0 3.5rem 0",
      overflow: "hidden",
    }}
  >
    <div className="container" style={{ maxWidth: "1200px" }}>
      <div className="text-center" style={{ marginBottom: "2.2rem" }}>
        <h2
          style={{
            color: accentColor,
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: "2.4rem",
            letterSpacing: "1px",
            marginBottom: "0.1rem",
            display: "inline-block",
          }}
        >
          Our Services
        </h2>
        <span
          style={{
            display: "block",
            height: "4px",
            width: "50px",
            backgroundColor: accentColor,
            borderRadius: "2px",
            margin: "7px auto 0",
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
      <div
        className="row justify-content-center g-4"
        style={{
          marginTop: "0.5rem",
        }}
      >
        {services.map((srv, idx) => (
          <div
            className="col-12 col-sm-6 col-lg-4 d-flex"
            key={idx}
            style={{
              display: "flex",
            }}
          >
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
                minHeight: "260px",
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
                  className="mb-2"
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
                  className="card-title"
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
                  className="card-text"
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
    {/* Responsive styles */}
    <style>
      {`
        @media (max-width: 767px) {
          #services-section .service-card {
            min-height: 210px;
            font-size: 0.97rem;
            margin-bottom: 1.2rem;
          }
          #services-section h2 {
            font-size: 1.55rem !important;
          }
        }
        @media (max-width: 575px) {
          #services-section .service-card {
            box-shadow: 0 2px 16px rgba(185,168,122,0.11);
            min-height: 170px;
          }
        }
      `}
    </style>
  </section>
);

export default Services;
