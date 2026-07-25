import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const root = document.getElementById("root");
root.className =
  "min-h-screen flex justify-center items-center bg-gray-900 text-white";

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
