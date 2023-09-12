import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "../src/store/store";
import App from "./App.jsx";
import "./index.scss";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  // ! primary step towards optimization
  // This cause the component to render two times with slow down the peroformance
  // <React.StrictMode>
  // Provide the store to the app component
  // now store is connected with our react app
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
