import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./App/Store.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
ReactDOM.createRoot(document.getElementById("root")).render(
 
    <BrowserRouter>
    <Provider store={store}>
    <App />
  </Provider>
    </BrowserRouter>
 
);
