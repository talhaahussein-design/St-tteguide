import { Link } from "react-router-dom";
import BottomNav from "./BottomNav";

export default function PageLayout({ title, subtitle, children, action }) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">

      {/* Top Bar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3 text-slate-800 font-semibold text-lg">
            <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center text-white shadow-sm">
              🌿
            </div>
            <span className="tracking-tight">StøtteGuide</span>
          </div>

          {action && <div>{action}</div>}
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-8">
        
        {/* Page Header */}
        <div className="flex items-start gap-4 mb-8">
          <Link
            to="/"
            className="text-slate-400 hover:text-slate-800 transition text-xl"
          >
            ←
          </Link>

          <div>
            <h1 className="text-3xl font-bold text-slate-900 leading-tight">
              {title}
            </h1>

            {subtitle && (
              <p className="text-slate-500 mt-1">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Main Section */}
        <div className="space-y-6">
          {children}
        </div>

      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
