import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const store: any = {};
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <h1>Hello</h1>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
