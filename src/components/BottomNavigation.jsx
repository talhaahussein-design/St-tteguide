export default function BottomNavigation() {
  return (
    <nav className="bottomNav">

      <button className="navItem active">
        <span>🏠</span>
        <small>Hjem</small>
      </button>

      <button className="navItem">
        <span>❤️</span>
        <small>Favoritter</small>
      </button>

      <button className="navItem">
        <span>📚</span>
        <small>Guides</small>
      </button>

      <button className="navItem">
        <span>⚙️</span>
        <small>Indstillinger</small>
      </button>

    </nav>
  );
}
