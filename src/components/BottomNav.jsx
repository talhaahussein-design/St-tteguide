import { NavLink } from "react-router-dom";

export default function BottomNav() {
  return (
    <nav className="bottomNav">

      <NavLink to="/" end>
        🏠
        <span>Hjem</span>
      </NavLink>

      <NavLink to="/feelings">
        😊
        <span>Følelser</span>
      </NavLink>

      <NavLink to="/bodymap">
        🧍
        <span>BodyMap</span>
      </NavLink>

      <NavLink to="/profile">
        👤
        <span>Profil</span>
      </NavLink>

    </nav>
  );
}
