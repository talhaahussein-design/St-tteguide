import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Hjem", icon: "🏠", end: true },
  { to: "/feelings", label: "Følelser", icon: "😊" },
  { to: "/bodymap", label: "Min krop", icon: "🧍" },
  { to: "/stories", label: "Stories", icon: "📖" },
  { to: "/profile", label: "Profil", icon: "👤" },
];

export default function BottomNav() {
  return (
    <nav className="sticky bottom-0 bg-white border-t border-slate-200 backdrop-blur-md">
      <div className="max-w-4xl mx-auto flex justify-between px-4 py-2">

        {navItems.map(({ to, label, icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex flex-col items-center text-xs font-medium transition-all duration-200 px-2 py-1 rounded-lg ${
                isActive
                  ? "text-emerald-600"
                  : "text-slate-400 hover:text-slate-700"
              }`
            }
          >
            <span className="text-xl mb-1">{icon}</span>
            {label}
          </NavLink>
        ))}

      </div>
    </nav>
  );
}
