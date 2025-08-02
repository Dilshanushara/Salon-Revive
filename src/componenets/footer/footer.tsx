import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-dark text-light text-center p-3 mt-auto">
    <div className="container">
      <p className="mb-0">
        &copy; {new Date().getFullYear()} Salon Revive. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
