import { Link, Routes, Route } from "react-router-dom";
import Paragraph42 from "./laws/Paragraph42";
import LossOfEarningsCalculator from "./calculators/LossOfEarningsCalculator";

function ParentHome() {
  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Forældre – Find den støtte I har ret til</h1>

      <p style={{ fontSize: "1.1rem", marginBottom: "2rem" }}>
        Her finder du samlet og forståelig information om jeres rettigheder,
        økonomisk støtte og hvad I konkret kan gøre næste skridt.
      </p>

      <div style={{ marginBottom: "2rem" }}>
        <h2>💰 Økonomisk støtte</h2>

        <ul style={{ lineHeight: "1.8" }}>
          <li>
            <Link to="42">
              §42 – Tabt arbejdsfortjeneste
            </Link>
          </li>
          <li>
            <Link to="calculator">
              Beregn vejledende tabt arbejdsfortjeneste
            </Link>
          </li>
        </ul>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h2>📘 Hvad gør jeg hvis kommunen siger nej?</h2>
        <p>
          Du har ret til en skriftlig afgørelse og mulighed for at klage.
          Vi arbejder på at samle konkrete formuleringer og vejledning her.
        </p>
      </div>

      <div>
        <h2>⚖️ Vigtigt</h2>
        <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
          Informationen her er vejledende og ikke juridisk rådgivning.
          Tjek altid gældende lovgivning.
        </p>
      </div>
    </div>
  );
}
