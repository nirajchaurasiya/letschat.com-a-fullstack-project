import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ToggleProfileProvider from "./context/ToggleProfile.tsx";
import SearchUserProvider from "./context/searchedContext.tsx";
import LogoutContextProvider from "./context/LogoutContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SearchUserProvider>
      <ToggleProfileProvider>
        <LogoutContextProvider>
          <App />
        </LogoutContextProvider>
      </ToggleProfileProvider>
    </SearchUserProvider>
  </React.StrictMode>
);
