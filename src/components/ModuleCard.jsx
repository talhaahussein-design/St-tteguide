import { Link } from "react-router-dom";

export default function ModuleCard({
  title,
  subtitle,
  emoji,
  color,
  path,
}) {
  return (
    <Link to={path} className="moduleLink">

      <article className="moduleCard">

        <div className="moduleTop">

          <div
            className="moduleIcon"
            style={{ background: color }}
          >
            {emoji}
          </div>

          <div className="moduleContent">
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>

        </div>

        <button className="moduleButton">
          Åbn →
        </button>

      </article>

    </Link>
  );
}
