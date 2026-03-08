import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Prices from "../blog/Prices";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Prices />
  </StrictMode>
);
