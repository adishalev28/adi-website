import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AccessibilityStatement from "../legal/AccessibilityStatement";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AccessibilityStatement />
  </StrictMode>
);
