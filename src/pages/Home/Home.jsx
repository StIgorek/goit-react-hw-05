import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../api/tmdb-api";
import toast from "react-hot-toast";
import css from "../Home/Home.module.css";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovie() {
      try {
        setError(false);
        setLoading(true);
        const trendingMovies = await fetchTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        setError(true);
        toast.error("Щось пішло не так. Спробуйте ще раз", error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, []);

  return (
    <div>
      <h1 className={css.h1}>Trending today</h1>
      <MovieList movies={movies} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
}
