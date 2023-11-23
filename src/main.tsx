import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import CurrentLevelProvider from "./hooks/useCurrentLevel.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CurrentLevelProvider>
    <App />
  </CurrentLevelProvider>
);
