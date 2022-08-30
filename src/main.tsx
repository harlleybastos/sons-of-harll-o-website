import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AOS from "aos";
import Modal from "react-modal";
import "./styles/index.css";
import "aos/dist/aos.css"; //
import { ThemeProvider } from "./styles/theme";
import { gapi } from "gapi-script";

AOS.init({
  duration: 3000,
});

Modal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
