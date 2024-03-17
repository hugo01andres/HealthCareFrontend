import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { ReactQueryProvider } from "./plugins/";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReactQueryProvider>
      <App />
    </ReactQueryProvider>
  </React.StrictMode>
);
