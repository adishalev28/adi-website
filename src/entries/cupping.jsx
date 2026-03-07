import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CuppingPage from "../services/CuppingPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CuppingPage />
  </StrictMode>
);
