import { Link } from "react-router-dom";
import BottomNav from "./BottomNav";

export default function PageLayout({ title, children }) {
  return (
    <main className="page">

      <header className="pageHeader">

        <Link to="/" className="backButton">
          ←
        </Link>

        <h1>{title}</h1>

      </header>

      <section className="pageContent">
        {children}
      </section>

      <BottomNav />

    </main>
  );
}
