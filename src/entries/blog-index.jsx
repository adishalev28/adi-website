import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import BlogIndex from "../blog/BlogIndex";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BlogIndex />
  </StrictMode>
);
