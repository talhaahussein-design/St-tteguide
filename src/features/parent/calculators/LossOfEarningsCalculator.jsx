import { useState } from "react";

export default function LossOfEarningsCalculator() {
  const [salary, setSalary] = useState("");
  const [hoursLost, setHoursLost] = useState("");
  const [result, setResult] = useState(null);

  const MONTHLY_HOURS = 160;
  const MAX_MONTHLY_LIMIT = 35000; // eksempel loft (vejledende)

  const calculate = () => {
    if (!salary || !hoursLost) {
      setResult("Udfyld begge felter.");
      return;
    }

    const hourlyRate = salary / MONTHLY_HOURS;
    let estimate = hourlyRate * hoursLost;

    if (estimate > MAX_MONTHLY_LIMIT) {
      estimate = MAX_MONTHLY_LIMIT;
    }

    setResult(estimate.toFixed(2));
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Vejledende beregning – Tabt arbejdsfortjeneste</h1>

      <p style={{ marginBottom: "1.5rem" }}>
        Denne beregner giver et vejledende estimat baseret på din månedsløn
        og antal mistede arbejdstimer.
      </p>

      <div style={{ marginBottom: "1rem" }}>
        <label>Månedsløn før skat (kr.)</label>
        <br />
        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(Number(e.target.value))}
          style={{ padding: "0.5rem", width: "100%", marginTop: "0.5rem" }}
        />
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <label>Antal timer reduceret pr. måned</label>
        <br />
        <input
          type="number"
          value={hoursLost}
          onChange={(e) => setHoursLost(Number(e.target.value))}
          style={{ padding: "0.5rem", width: "100%", marginTop: "0.5rem" }}
        />
      </div>

      <button
        onClick={calculate}
        style={{
          padding: "0.75rem 1.5rem",
          background: "#2c3e50",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        Beregn
      </button>

      {result && (
        <div style={{ marginTop: "2rem" }}>
          <h2>Vejledende månedlig kompensation</h2>
          <p style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
            {result} kr.
          </p>
        </div>
      )}

      <hr style={{ margin: "2rem 0" }} />

      <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
        Bemærk: Dette er en vejledende beregning. Den faktiske ydelse
        fastsættes af kommunen og kan være underlagt et årligt loft.
        Kontakt altid din kommune for præcis vurdering.
      </p>
    </div>
  );
}
