import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import BuildRoutes from "./BuildRoutes";
import Navbar from "./components/navbar/navbar";
import { store } from "./store/store";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <h1 className="text-3xl font-bold text-cyan-200 underline">
        Hello world!
      </h1>

      <BuildRoutes />
    </BrowserRouter>
  </Provider>
);
