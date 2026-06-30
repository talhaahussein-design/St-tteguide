import { Link, Routes, Route } from "react-router-dom";
import Paragraph42 from "./laws/Paragraph42";
import LossOfEarningsCalculator from "./calculators/LossOfEarningsCalculator";

function ParentHome() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Forældre Sektion</h1>

      <h2>Økonomisk støtte</h2>

      <ul>
        <li>
          <Link to="42">§42 – Tabt arbejdsfortjeneste</Link>
        </li>
        <li>
          <Link to="calculator">Beregner</Link>
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
    </Routes>
  );
}
