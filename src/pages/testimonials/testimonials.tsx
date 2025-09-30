import React from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    rating: 5,
    text: "Absolutely amazing experience! The staff is so professional and my hair has never looked better. I've been coming here for over a year now.",
    service: "Hair Coloring & Cut",
    image: "👩‍🦱"
  },
  {
    name: "Maya Perera",
    rating: 5,
    text: "The bridal package was perfect for my wedding day. They made me feel like a princess! Highly recommend for any special occasion.",
    service: "Bridal Package",
    image: "👰‍♀️"
  },
  {
    name: "Anjali Silva",
    rating: 5,
    text: "Love the relaxing atmosphere and the quality of service. The facial treatment left my skin glowing for weeks!",
    service: "Facial Treatment",
    image: "🧖‍♀️"
  },
  {
    name: "Priya Mendis",
    rating: 5,
    text: "Best salon in Matara! The team really knows what they're doing. My nails always look perfect after visiting here.",
    service: "Manicure & Pedicure",
    image: "💅"
  },
];

const accentColor = "#b9a87a";

const Testimonials: React.FC = () => (
  <section
    id="testimonials-section"
    style={{
      background: "linear-gradient(135deg, #2c2c2c 0%, #4a4a4a 100%)",
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
        top: "10%",
        right: "5%",
        width: "150px",
        height: "150px",
        background: "linear-gradient(45deg, rgba(185,168,122,0.1), rgba(185,168,122,0.05))",
        borderRadius: "50%",
        zIndex: 1,
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: "15%",
        left: "3%",
        width: "100px",
        height: "100px",
        background: "linear-gradient(45deg, rgba(185,168,122,0.08), rgba(185,168,122,0.03))",
        borderRadius: "50%",
        zIndex: 1,
      }}
    />

    <div
      className="container"
      style={{
        position: "relative",
        zIndex: 2,
        maxWidth: "1200px",
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
            ⭐ Client Reviews
          </span>
        </div>
        <h2
          style={{
            color: "#fff",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: "3rem",
            letterSpacing: "0.5px",
            marginBottom: "1rem",
          }}
        >
          What Our Clients Say
        </h2>
        <p
          style={{
            color: "#ccc",
            fontSize: "1.2rem",
            fontWeight: 500,
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Don't just take our word for it - hear from our satisfied clients about their experiences at Salon Revive.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(10px)",
              borderRadius: "1.5rem",
              padding: "2rem",
              border: "1px solid rgba(185,168,122,0.2)",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(185,168,122,0.4)";
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(185,168,122,0.2)";
            }}
          >
            {/* Stars */}
            <div style={{ marginBottom: "1rem" }}>
              {[...Array(testimonial.rating)].map((_, starIdx) => (
                <span
                  key={starIdx}
                  style={{
                    color: accentColor,
                    fontSize: "1.2rem",
                    marginRight: "0.2rem",
                  }}
                >
                  ⭐
                </span>
              ))}
            </div>

            {/* Testimonial Text */}
            <p
              style={{
                color: "#fff",
                fontSize: "1.1rem",
                fontWeight: 500,
                lineHeight: "1.6",
                marginBottom: "1.5rem",
                fontStyle: "italic",
              }}
            >
              "{testimonial.text}"
            </p>

            {/* Client Info */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div
                style={{
                  fontSize: "2rem",
                  background: "linear-gradient(135deg, #b9a87a, #d4c396)",
                  borderRadius: "50%",
                  padding: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "50px",
                  height: "50px",
                }}
              >
                {testimonial.image}
              </div>
              <div>
                <div
                  style={{
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    marginBottom: "0.2rem",
                  }}
                >
                  {testimonial.name}
                </div>
                <div
                  style={{
                    color: accentColor,
                    fontSize: "0.9rem",
                    fontWeight: 500,
                  }}
                >
                  {testimonial.service}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <p
          style={{
            color: "#ccc",
            fontSize: "1.1rem",
            marginBottom: "1.5rem",
          }}
        >
          Ready to join our happy clients?
        </p>
        <a
          href="tel:+94704840024"
          style={{
            background: "linear-gradient(135deg, #b9a87a, #d4c396)",
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
            textTransform: "uppercase",
          }}
          onMouseOver={(e) => {
            (e.target as HTMLElement).style.transform = "translateY(-3px)";
            (e.target as HTMLElement).style.boxShadow = "0 15px 35px rgba(185,168,122,0.3)";
          }}
          onMouseOut={(e) => {
            (e.target as HTMLElement).style.transform = "translateY(0)";
            (e.target as HTMLElement).style.boxShadow = "none";
          }}
        >
          <i className="bi bi-calendar-check"></i>
          Book Your Appointment
        </a>
      </div>
    </div>

    {/* Responsive styles */}
    <style>
      {`
        @media (max-width: 768px) {
          #testimonials-section {
            padding: 3rem 0 !important;
          }
          
          #testimonials-section h2 {
            font-size: 2.2rem !important;
          }
          
          #testimonials-section .container > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          
          #testimonials-section .container > div:last-child > div {
            padding: 1.5rem !important;
          }
        }
        
        @media (max-width: 576px) {
          #testimonials-section {
            padding: 2.5rem 0 !important;
          }
          
          #testimonials-section h2 {
            font-size: 1.8rem !important;
          }
          
          #testimonials-section .container > div:last-child > div {
            padding: 1.2rem !important;
          }
          
          #testimonials-section .container > div:last-child > div p {
            font-size: 1rem !important;
          }
        }
      `}
    </style>
  </section>
);

export default Testimonials;