import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";
import HeroPage from "./pages/HeroPage";

const Root = () => {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route
          path='/'
          element={<App />}
        >
          <Route
            index
            element={<HomePage />}
          />
          <Route
            path='hero/:id'
            element={<HeroPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
