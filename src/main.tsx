import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Root from "./Root.tsx";
import "./index.css";
import store from "./store/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Root />
  </Provider>
);
