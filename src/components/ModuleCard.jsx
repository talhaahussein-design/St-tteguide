export default function ModuleCard({
  emoji,
  title,
  subtitle,
  color,
}) {
  return (
    <div className="moduleCard">

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

      <button className="moduleButton">
        Åbn
      </button>

    </div>
  );
}
