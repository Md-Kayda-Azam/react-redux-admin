import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/feathericon.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/select2.min.css";
import "./assets/css/style.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
