import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HerbsPage from "../services/HerbsPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HerbsPage />
  </StrictMode>
);
