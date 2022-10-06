import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import BuildRoutes from "./BuildRoutes";
import { store } from "./store/store";
import "../src/components/user-page/user-page.css";
import "../src/components/user-page/user-detail-info.css";
import SideBar from "./components/sidebar/sideBar";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <div>
    <Provider store={store}>
      <SideBar />
      <BrowserRouter>
        <BuildRoutes />
      </BrowserRouter>
    </Provider>
  </div>
);
