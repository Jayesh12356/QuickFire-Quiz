import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";
import App from "./Components/App";

import { StrictMode } from "react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
