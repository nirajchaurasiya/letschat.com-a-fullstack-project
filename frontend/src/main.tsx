import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ToggleProfileProvider from "./context/ToggleProfile.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToggleProfileProvider>
      <App />
    </ToggleProfileProvider>
  </React.StrictMode>
);
