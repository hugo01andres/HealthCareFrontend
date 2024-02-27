import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { ReactQueryProvider, ReactRouterProvider } from "./plugins/";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReactQueryProvider>
      <ReactRouterProvider />
    </ReactQueryProvider>
  </React.StrictMode>
);
