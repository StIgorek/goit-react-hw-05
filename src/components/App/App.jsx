import { Route, Routes } from "react-router-dom";
import css from "../App/App.module.css";
import Navigation from "../Navigation/Navigation";
import Home from "../../pages/Home/Home";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

export default function App() {
  return (
    <div className={css}>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
