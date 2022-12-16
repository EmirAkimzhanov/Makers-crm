import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import SideBar from "./components/sidebar/side-bar";
import { store } from "./store/store";
import BuildRoutes from "./build-routes";
import "./index.css";
import LoginPage from "./components/login-page/login";
import Test from "./components/test";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Navbar />

      {localStorage.getItem("token") ? (
        <div className="main-container">
          <SideBar />
          <div className="main-container-right">
            <BuildRoutes />
            {/* <Test /> */}
          </div>
        </div>
      ) : (
        <LoginPage />
      )}
    </BrowserRouter>
  </Provider>
);
