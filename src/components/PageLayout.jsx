import { Link } from "react-router-dom";
import BottomNav from "./BottomNav";

export default function PageLayout({ title, subtitle, children, action }) {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="topbar-logo">
          <div className="topbar-logo-icon">🌿</div>
          StøtteGuide
        </div>
        {action && <div className="topbar-right">{action}</div>}
      </header>
      <div className="page-content">
        <div className="page-header">
          <Link to="/" className="back-btn">←</Link>
          <div>
            <h1>{title}</h1>
            {subtitle && <p className="page-subtitle">{subtitle}</p>}
          </div>
        </div>
        {children}
      </div>
      <BottomNav />
    </div>
  );
}
