import { Link } from "react-router-dom";

export default function ModuleCard({ title, subtitle, emoji, color, path }) {
  return (
    <Link to={path} className="module-row">
      <div className="module-row-icon" style={{ background: color }}>{emoji}</div>
      <div className="module-row-body">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      <span className="module-row-arrow">›</span>
    </Link>
  );
}
