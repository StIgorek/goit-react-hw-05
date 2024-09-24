import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../api/tmdb-api";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import css from "../MovieCast/MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getCast = async () => {
      try {
        setLoading(true);
        setError(false);
        const movieCast = await fetchMovieCast(movieId, { signal });
        setCast(movieCast);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    };

    getCast();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage />;

  return (
    <div>
      {cast.length > 0 ? (
        <ul className={css.container}>
          {cast.map(({ character, name, profile_path, id, gender }) => (
            <li key={id}>
              <div className={css.wrapper}>
                <img
                  src={`https://image.tmdb.org/t/p/w92/${profile_path}`}
                  alt={name}
                />

                <div className={css.info}>
                  <p className={css.text}>
                    <strong>Actor:</strong> {name}
                  </p>
                  <p className={css.text}>
                    <strong>Character:</strong> {character}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.error}>We don't have a cast list for this movie!</p>
      )}
    </div>
  );
}
