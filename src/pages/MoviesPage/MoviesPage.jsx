import css from "../MoviesPage/MoviesPage.module.css";

export default function MoviesPage({ value, onSearch }) {
  return (
    <div className={css.container}>
      <input
        type="input"
        className={css.input}
        name="query"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </div>
  );
}
