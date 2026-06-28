export default function BottomNav() {
  return (
    <nav className="bottomNav">

      <button className="active">
        <span>🏠</span>
        <small>Hjem</small>
      </button>

      <button>
        <span>😊</span>
        <small>Følelser</small>
      </button>

      <button>
        <span>🧍</span>
        <small>BodyMap</small>
      </button>

      <button>
        <span>👤</span>
        <small>Profil</small>
      </button>

    </nav>
  );
}
