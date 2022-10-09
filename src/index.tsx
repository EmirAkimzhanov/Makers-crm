import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import SideBar from "./components/sidebar/side-bar";
import { store } from "./store/store";
import BuildRoutes from "./build-routes";
import "./index.css";
import UserPage from "./components/user-page";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Navbar />

      <SideBar />
      <BuildRoutes />
    </BrowserRouter>
  </Provider>
);
