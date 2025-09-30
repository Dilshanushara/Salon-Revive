import React from "react";

const services = [
  {
    icon: "✂️",
    name: "Haircuts & Styling",
    desc: "Transform your look with trendy cuts and professional styling for all hair types and ages.",
    features: ["Consultation", "Wash & Dry", "Styling"],
  },
  {
    icon: "🎨",
    name: "Hair Coloring",
    desc: "Expert coloring services with premium products for vibrant, long-lasting results.",
    features: ["Color Consultation", "Premium Products", "Aftercare"],
  },
  {
    icon: "🧖‍♀️",
    name: "Facial Treatments",
    desc: "Rejuvenating facial treatments using high-quality products to refresh and revitalize your skin.",
    features: ["Deep Cleansing", "Moisturizing", "Anti-Aging"],
  },
  {
    icon: "💅",
    name: "Manicure & Pedicure",
    desc: "Complete nail care services to pamper your hands and feet with attention to detail.",
    features: ["Nail Shaping", "Cuticle Care", "Polish Application"],
  },
  {
    icon: "👰‍♀️",
    name: "Bridal Packages",
    desc: "Complete bridal beauty packages to make your special day absolutely perfect.",
    features: ["Hair & Makeup", "Trial Session", "Touch-ups"],
  },
  // {
  //   icon: "💆‍♀️",
  //   name: "Spa Services",
  //   desc: "Relaxing spa treatments to unwind and rejuvenate your body and mind.",
  //   features: ["Massage Therapy", "Aromatherapy", "Relaxation"],
  // },
];

const accentColor = "#b9a87a";

const Services: React.FC = () => (
  <section
    id="services-section"
    style={{
      background:
        "linear-gradient(135deg, #f8f9fa 0%, #f3e9d2 50%, #ede0c4 100%)",
      width: "100vw",
      padding: "5rem 0 4rem 0",
      overflow: "hidden",
      position: "relative",
    }}
  >
    {/* Background decorative elements */}
    <div
      style={{
        position: "absolute",
        top: "20%",
        left: "5%",
        width: "120px",
        height: "120px",
        background:
          "linear-gradient(45deg, rgba(185,168,122,0.08), rgba(185,168,122,0.03))",
        borderRadius: "50%",
        zIndex: 1,
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: "25%",
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
      className="container-fluid"
      style={{
        maxWidth: "1300px",
        margin: "0 auto",
        position: "relative",
        zIndex: 2,
        padding: "0 1rem",
      }}
    >
      {/* Header Section */}
      <div style={{ marginBottom: "3rem", textAlign: "center" }}>
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
            💎 Our Services
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
          Premium Beauty Services
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
          Discover our comprehensive range of beauty and wellness services, each
          designed to enhance your natural beauty and boost your confidence.
        </p>
      </div>

      {/* Services Grid */}
      <div
        className="services-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
          gap: "2rem",
          marginTop: "1rem",
        }}
      >
        {services.map((srv, idx) => (
          <div key={idx} className="service-card-wrapper">
            <div
              className="card h-100 service-card"
              style={{
                borderRadius: "1.5rem",
                border: "none",
                background: "rgba(255,255,255,0.95)",
                boxShadow: "0 8px 30px rgba(185,168,122,0.1)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                padding: "1.5rem",
                backdropFilter: "blur(10px)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 50px rgba(185,168,122,0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 30px rgba(185,168,122,0.1)";
              }}
            >
              {/* Gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  width: "100px",
                  height: "100px",
                  background:
                    "linear-gradient(135deg, rgba(185,168,122,0.05), transparent)",
                  borderRadius: "0 1.5rem 0 100%",
                }}
              />

              <div className="card-body p-0">
                {/* Service Header */}
                <div className="d-flex align-items-center mb-3">
                  <div
                    style={{
                      fontSize: "2.5rem",
                      background: "linear-gradient(135deg, #b9a87a, #d4c396)",
                      borderRadius: "1rem",
                      padding: "0.8rem",
                      marginRight: "1rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minWidth: "70px",
                      height: "70px",
                      boxShadow: "0 4px 15px rgba(185,168,122,0.2)",
                    }}
                  >
                    {srv.icon}
                  </div>
                  <div>
                    <h5
                      style={{
                        fontWeight: 700,
                        fontSize: "1.3rem",
                        color: "#2c2c2c",
                        marginBottom: "0.3rem",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      {srv.name}
                    </h5>
                    <span
                      style={{
                        color: "#b9a87a",
                        fontSize: "1.1rem",
                        fontWeight: 600,
                      }}
                    >
                      {/* {srv.price} */}
                    </span>
                  </div>
                </div>

                {/* Service Description */}
                <p
                  style={{
                    color: "#666",
                    fontSize: "1rem",
                    fontWeight: 500,
                    lineHeight: "1.6",
                    marginBottom: "1.5rem",
                  }}
                >
                  {srv.desc}
                </p>

                {/* Service Features */}
                <div className="mb-3">
                  <h6
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "#b9a87a",
                      marginBottom: "0.8rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Includes:
                  </h6>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                    {srv.features.map((feature, featureIdx) => (
                      <li
                        key={featureIdx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "0.4rem",
                          fontSize: "0.95rem",
                          color: "#555",
                        }}
                      >
                        <span
                          style={{
                            color: "#b9a87a",
                            marginRight: "0.5rem",
                            fontSize: "0.8rem",
                          }}
                        >
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Book Now Button */}
                <button
                  style={{
                    width: "100%",
                    background: "linear-gradient(135deg, #b9a87a, #d4c396)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "0.8rem",
                    padding: "0.8rem 1.5rem",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                  }}
                  onMouseOver={(e) => {
                    (e.target as HTMLElement).style.transform = "scale(1.02)";
                    (e.target as HTMLElement).style.background =
                      "linear-gradient(135deg, #a89769, #c3b085)";
                  }}
                  onMouseOut={(e) => {
                    (e.target as HTMLElement).style.transform = "scale(1)";
                    (e.target as HTMLElement).style.background =
                      "linear-gradient(135deg, #b9a87a, #d4c396)";
                  }}
                  onClick={() => window.open("tel:+94704840024", "_self")}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <p
          style={{ fontSize: "1.1rem", color: "#666", marginBottom: "1.5rem" }}
        >
          Need a custom package or have questions about our services?
        </p>
        <a
          href="tel:+94704840024"
          style={{
            background: "linear-gradient(135deg, #2c2c2c, #4a4a4a)",
            color: "#fff",
            padding: "1rem 2.5rem",
            borderRadius: "2rem",
            textDecoration: "none",
            fontSize: "1.1rem",
            fontWeight: 600,
            letterSpacing: "0.5px",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
          onMouseOver={(e) => {
            (e.target as HTMLElement).style.transform = "translateY(-2px)";
            (e.target as HTMLElement).style.boxShadow =
              "0 10px 30px rgba(0,0,0,0.2)";
          }}
          onMouseOut={(e) => {
            (e.target as HTMLElement).style.transform = "translateY(0)";
            (e.target as HTMLElement).style.boxShadow = "none";
          }}
        >
          <i className="bi bi-telephone-fill"></i>
          Contact Us Today
        </a>
      </div>
    </div>
    {/* Responsive styles */}
    <style>
      {`
        @media (max-width: 1200px) {
          .services-grid {
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)) !important;
            gap: 1.5rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          
          #services-section {
            padding: 3rem 0 2.5rem 0 !important;
          }
          
          #services-section h2 {
            font-size: 2.2rem !important;
          }
          
          .service-card {
            padding: 1.2rem !important;
          }
          
          .service-card .card-body .d-flex:first-child > div:first-child {
            min-width: 60px !important;
            height: 60px !important;
            font-size: 2rem !important;
          }
          
          .service-card h5 {
            font-size: 1.2rem !important;
          }
        }
        
        @media (max-width: 576px) {
          #services-section {
            padding: 2.5rem 0 2rem 0 !important;
          }
          
          #services-section .container-fluid {
            padding: 0 0.5rem !important;
          }
          
          #services-section h2 {
            font-size: 1.8rem !important;
          }
          
          .service-card {
            padding: 1rem !important;
          }
          
          .service-card .card-body .d-flex:first-child {
            flex-direction: column !important;
            text-align: center !important;
            align-items: center !important;
          }
          
          .service-card .card-body .d-flex:first-child > div:first-child {
            margin-right: 0 !important;
            margin-bottom: 1rem !important;
            min-width: 50px !important;
            height: 50px !important;
            font-size: 1.8rem !important;
          }
          
          .service-card h5 {
            font-size: 1.1rem !important;
            margin-bottom: 0.2rem !important;
          }
          
          .service-card p {
            font-size: 0.95rem !important;
          }
          
          .service-card button {
            padding: 0.7rem 1.2rem !important;
            font-size: 0.9rem !important;
          }
        }
        
        @media (max-width: 400px) {
          .services-grid {
            gap: 1rem !important;
          }
          
          .service-card {
            padding: 0.8rem !important;
          }
        }
      `}
    </style>
  </section>
);

export default Services;
