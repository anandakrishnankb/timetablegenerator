import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#2F2E2E",
          // Alias Token
          colorBgContainer: "#ffffff",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
