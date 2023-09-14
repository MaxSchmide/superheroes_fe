import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<App />}
        >
          <Route
            index
            element={<HomePage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
