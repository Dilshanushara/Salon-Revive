import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// Import Bootstrap CSS and Bootstrap Icons
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
