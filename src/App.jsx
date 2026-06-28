import { useState } from "react";

export default function App() {
  const [screen, setScreen] = useState("home");

  return (
    <div style={styles.app}>
      {screen === "home" && (
        <Home onNavigate={setScreen} />
      )}

      {screen === "feelings" && (
        <Feelings onBack={() => setScreen("home")} />
      )}
    </div>
  );
}

function Home({ onNavigate }) {
  return (
    <div style={styles.container}>
      <h1>Støtteguiden</h1>
      <p>Vælg en funktion</p>

      <button style={styles.button} onClick={() => onNavigate("feelings")}>
        😊 Følelser
      </button>
    </div>
  );
}

function Feelings({ onBack }) {
  const items = ["Glad", "Trist", "Sur", "Forvirret", "Bange"];

  return (
    <div style={styles.container}>
      <button onClick={onBack}>← Tilbage</button>

      <h2>Hvordan har du det?</h2>

      <div style={styles.grid}>
        {items.map((i) => (
          <div key={i} style={styles.card}>
            {i}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  app: {
    fontFamily: "Arial",
    minHeight: "100vh",
    background: "#F9FAFB",
    padding: 20,
  },
  container: {
    maxWidth: 500,
    margin: "0 auto",
  },
  button: {
    padding: 16,
    width: "100%",
    fontSize: 18,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
    marginTop: 20,
  },
  card: {
    padding: 20,
    background: "white",
    borderRadius: 12,
    textAlign: "center",
  },
};
