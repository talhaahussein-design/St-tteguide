import { useState } from "react";
import PageLayout from "../components/PageLayout";

const areas = [
  { id: "head", name: "😵 Hoved" },
  { id: "chest", name: "❤️ Bryst" },
  { id: "stomach", name: "🟠 Mave" },
  { id: "arms", name: "💪 Arme" },
  { id: "legs", name: "🦵 Ben" },
];

export default function BodyMap() {
  const [selected, setSelected] = useState("");

  return (
    <PageLayout title="BodyMap">

      <h2 className="sectionTitle">
        Hvor mærker du det?
      </h2>

      <div className="moduleGrid">

        {areas.map((area) => (
          <div
            key={area.id}
            className="moduleCard"
            style={{ cursor: "pointer" }}
            onClick={() => setSelected(area.name)}
          >
            <h2>{area.name}</h2>
            <p>Tryk for at markere området.</p>
          </div>
        ))}

      </div>

      {selected && (
        <div className="card" style={{ marginTop: 24 }}>
          <h2>{selected}</h2>

          <p style={{ marginTop: 12 }}>
            Du har markeret dette område.
          </p>

          <button className="moduleButton">
            Gem registrering
          </button>
        </div>
      )}

    </PageLayout>
  );
}
