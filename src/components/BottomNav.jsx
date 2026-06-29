import { NavLink } from "react-router-dom";

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" end>
        <span className="nav-icon">🏠</span>
        <span>Hjem</span>
      </NavLink>
      <NavLink to="/feelings">
        <span className="nav-icon">😊</span>
        <span>Følelser</span>
      </NavLink>
      <NavLink to="/bodymap">
        <span className="nav-icon">🧍</span>
        <span>Min krop</span>
      </NavLink>
      <NavLink to="/stories">
        <span className="nav-icon">📖</span>
        <span>Stories</span>
      </NavLink>
      <NavLink to="/profile">
        <span className="nav-icon">👤</span>
        <span>Profil</span>
      </NavLink>
    </nav>
  );
}
