import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AcupuncturePage from "../services/AcupuncturePage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AcupuncturePage />
  </StrictMode>
);
