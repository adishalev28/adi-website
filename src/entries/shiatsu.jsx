import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ShiatsuPage from "../services/ShiatsuPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShiatsuPage />
  </StrictMode>
);
