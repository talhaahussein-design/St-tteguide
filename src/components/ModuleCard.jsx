import { Link } from "react-router-dom";

export default function ModuleCard({
  emoji,
  title,
  subtitle,
  color,
}) {
  const path = {
    "Følelser": "/feelings",
    "BodyMap": "/bodymap",
    "Kommunikation": "/communication",
    "Social Stories": "/stories",
    "Profil": "/profile",
  };

  return (
    <Link to={path[title]} className="moduleLink">
      <div className="moduleCard">

        <div
          className="moduleIcon"
          style={{ background: color }}
        >
          {emoji}
        </div>

        <h2>{title}</h2>

        <p>{subtitle}</p>

        <button>
          Åbn →
        </button>

      </div>
    </Link>
  );
}
