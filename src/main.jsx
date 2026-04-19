import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LogProvider from "./context/logProvider.jsx";
import { store } from "./store/store.jsx";
import {Provider} from "react-redux"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LogProvider>
      <Provider store = {store}>
        <App />
      </Provider>
    </LogProvider>
  </StrictMode>,
);
