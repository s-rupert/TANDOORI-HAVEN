// main.jsx or App.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PageProvider } from "./components/PageContext";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { LoadScript } from "@react-google-maps/api";
import Test from "./Test";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PageProvider>
      <BrowserRouter>
        <LoadScript
          googleMapsApiKey={`${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`}
        >
          <App />
          {/* <Test /> */}
        </LoadScript>
      </BrowserRouter>
    </PageProvider>
  </React.StrictMode>
);
