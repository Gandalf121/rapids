import { NavLink } from "react-router-dom";

const Links = () => {
  return (
    <>
      <NavLink className="link" to="/">
        <p> Преимущества</p>
      </NavLink>
      <NavLink className="link" to="/">
        <p> Преимущества Кузовные запчасти</p>
      </NavLink>
      <NavLink className="link" to="/">
        <p> Доставка </p>
      </NavLink>
      <NavLink className="link" to="/">
        <p> Партнёрам </p>
      </NavLink>
      <NavLink className="link" to="/">
        <p> О нас </p>
      </NavLink>
    </>
  );
};

export default Links;
