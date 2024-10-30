import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import PaniesProvider from "./Context/PaniesContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PaniesProvider>
      <App />
    </PaniesProvider>
  </StrictMode>
);
