import { Link } from "react-router-dom";

export default function ModuleCard({
  title,
  subtitle,
  emoji,
  color = "bg-emerald-100",
  path,
}) {
  return (
    <Link
      to={path}
      className="group block bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 p-4"
    >
      <div className="flex items-center gap-4">

        {/* Icon */}
        <div
          className={`w-12 h-12 flex items-center justify-center text-2xl rounded-xl ${color}`}
        >
          {emoji}
        </div>

        {/* Text */}
        <div className="flex-1">
          <h3 className="text-slate-900 font-semibold text-base leading-tight">
            {title}
          </h3>
          <p className="text-slate-500 text-sm mt-1">
            {subtitle}
          </p>
        </div>

        {/* Arrow */}
        <span className="text-slate-300 text-xl group-hover:text-slate-500 transition">
          ›
        </span>

      </div>
    </Link>
  );
}
