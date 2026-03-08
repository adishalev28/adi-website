import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import BackPain from "../blog/BackPain";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BackPain />
  </StrictMode>
);
