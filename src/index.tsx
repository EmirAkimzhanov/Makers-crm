import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import BuildRoutes from "./BuildRoutes";
import Navbar from "./components/navbar/navbar";
import SideBar from "./components/sidebar/sideBar";
import { store } from "./store/store";
import "../src/components/user-page/user-page.css";

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
