import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import css from "../App/App.module.css";
import Navigation from "../Navigation/Navigation";
import Home from "../../pages/Home/Home";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
import MovieCast from "../MovieCast/MovieCast";
import MovieReviews from "../MovieReviews/MovieReviews";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

export default function App() {
  return (
    <div className={css}>
      <Navigation />

      <Suspense fallback={<div>Loading ...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
