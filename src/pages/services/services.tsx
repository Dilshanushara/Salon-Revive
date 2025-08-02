import React from "react";

const services = [
  { icon: "scissors", name: "Haircuts", desc: "Trendy styles for all ages." },
  {
    icon: "palette",
    name: "Hair Coloring",
    desc: "Vibrant and lasting colors.",
  },
  {
    icon: "spa",
    name: "Facials",
    desc: "Rejuvenate your skin with our premium facial treatments.",
  },
  {
    icon: "hand-sparkles",
    name: "Manicure & Pedicure",
    desc: "Pamper your hands and feet.",
  },
  {
    icon: "gem",
    name: "Bridal Packages",
    desc: "Special packages for your big day.",
  },
];

const Services: React.FC = () => (
  <div className="container my-5">
    <h2 className="mb-4 text-center">Our Services</h2>
    <div className="row g-4">
      {services.map((srv, idx) => (
        <div className="col-md-4" key={idx}>
          <div className="card h-100 text-center shadow-sm">
            <div className="card-body">
              <span className="display-4 mb-2 d-block">
                <i className={`bi bi-${srv.icon}`}></i>
              </span>
              <h5 className="card-title">{srv.name}</h5>
              <p className="card-text">{srv.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
