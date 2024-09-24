import { Link, useLocation } from "react-router-dom";
import css from "../MovieList/MovieList.module.css";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={css.container}>
      {movies.map(({ id, backdrop_path, title }) => {
        return (
          <li key={id} className={css.wrapper}>
            <Link to={`/movies/${id}`} state={location} className={css.item}>
              <h3 className={css.title}>{title}</h3>
              <img
                src={`https://image.tmdb.org/t/p/w300${backdrop_path}`}
                alt={title}
                className={css.img}
                height={300}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
