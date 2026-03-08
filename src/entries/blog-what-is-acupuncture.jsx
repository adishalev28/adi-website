import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WhatIsAcupuncture from "../blog/WhatIsAcupuncture";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WhatIsAcupuncture />
  </StrictMode>
);
