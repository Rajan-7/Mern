import React from "react";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./store/auth.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
        bodyClassName="toastBody"
      />
    </React.StrictMode>
  </AuthProvider>
);
