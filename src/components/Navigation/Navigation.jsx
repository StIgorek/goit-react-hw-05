import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "../Navigation/Navigation.module.css";

export default function Navigation() {
  const getNavLinkClass = (props) => {
    return clsx(css.link, props.isActive && css.active);
  };

  return (
    <div className={css.container}>
      <NavLink to="/" className={getNavLinkClass}>
        Home
      </NavLink>

      <NavLink to="/movies" className={getNavLinkClass}>
        Movies
      </NavLink>
    </div>
  );
}
