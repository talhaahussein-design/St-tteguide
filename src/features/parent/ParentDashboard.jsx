import { Link, Routes, Route } from "react-router-dom";
import Paragraph42 from "./laws/Paragraph42";
import LossOfEarningsCalculator from "./calculators/LossOfEarningsCalculator";
import AppealGuide from "./laws/AppealGuide";
import ParentLayout from "./ParentLayout";

function ParentHome() {
  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Forældre – Find den støtte I har ret til</h1>

      <p style={{ fontSize: "1.1rem", marginBottom: "2rem" }}>
        Her finder du samlet og forståelig information om jeres rettigheder,
        økonomisk støtte og hvad I konkret kan gøre næste skridt.
      </p>

      <h2>💰 Økonomisk støtte</h2>
      <ul style={{ lineHeight: "1.8" }}>
        <li>
          <Link to="42">§42 – Tabt arbejdsfortjeneste</Link>
        </li>
        <li>
          <Link to="calculator">Beregn tabt arbejdsfortjeneste</Link>
        </li>
        <li>
          <Link to="appeal">Klagevejledning</Link>
        </li>
      </ul>
    </div>
  );
}

export default function ParentDashboard() {
  return (
    <Routes>
      <Route path="/" element={<ParentHome />} />
      <Route path="42" element={<Paragraph42 />} />
      <Route path="calculator" element={<LossOfEarningsCalculator />} />
      <Route path="appeal" element={<AppealGuide />} />
    </Routes>
  );
}
