import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FaqComplete from "../blog/FaqComplete";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FaqComplete />
  </StrictMode>
);
