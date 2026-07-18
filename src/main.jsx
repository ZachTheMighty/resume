import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

document.body.className = "min-h-screen flex justify-center items-center";
const root = document.getElementById("root");
root.className = "flex flex-col items-center";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
