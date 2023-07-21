import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Navigation/Header.tsx";
import { Footer } from "./components/Footer/Footer.tsx";
import { SidebarProvider } from "./utils/SidebarContext.tsx";
import ApplyBox from "./components/ApplyBox.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SidebarProvider>
      <BrowserRouter>
        <Header />
        <div className="applynow-box">
          <ApplyBox />
        </div>
        <App />
        <Footer />
      </BrowserRouter>
    </SidebarProvider>
  </React.StrictMode>
);
