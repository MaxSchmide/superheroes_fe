import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";
import HeroPage from "./pages/HeroPage";
import NotFoundPage from "./pages/NotFoundPage";

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
        <Route
          path='*'
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
