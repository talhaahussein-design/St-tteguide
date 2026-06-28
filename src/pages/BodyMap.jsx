import { Link } from "react-router-dom";

export default function BodyMap() {
  return (
    <main className="page">

      <header className="pageHeader">
        <Link to="/" className="backButton">
          ←
        </Link>

        <div>
          <h1>BodyMap</h1>
          <p>Tryk på kroppen hvor det gør ondt</p>
        </div>
      </header>

      <div className="bodyMap">

        <div className="bodyPlaceholder">
          🧍
        </div>

      </div>

    </main>
  );
}
