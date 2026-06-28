console.log("🔥 APP VERSION 999");
  import React, { useState } from "react";

export default function App() {
  const [screen, setScreen] = useState("home");

  return (
    <div style={styles.app}>
      {screen === "home" && (
        <HomeScreen onNavigate={setScreen} />
      )}

      {screen === "feelings" && (
        <FeelingsScreen onBack={() => setScreen("home")} />
      )}
    </div>
  );
}

function HomeScreen({ onNavigate }) {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Støtteguiden</h1>
      <p style={styles.subtitle}>Vælg en funktion</p>

      <button style={styles.card} onClick={() => onNavigate("feelings")}>
        😊 Følelser
      </button>
    </div>
  );
}

function FeelingsScreen({ onBack }) {
  const feelings = ["Glad", "Trist", "Sur", "Forvirret", "Bange"];

  return (
    <div style={styles.container}>
      <button style={styles.back} onClick={onBack}>
        ← Tilbage
      </button>

      <h2 style={styles.title}>Hvordan har du det?</h2>

      <div style={styles.grid}>
        {feelings.map((f) => (
          <div key={f} style={styles.cardItem}>
            {f}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  app: {
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
    background: "#F9FAFB",
    padding: 20,
  },

  container: {
    maxWidth: 500,
    margin: "0 auto",
  },

  title: {
    fontSize: 28,
    marginBottom: 10,
  },

  subtitle: {
    color: "#6B7280",
    marginBottom: 20,
  },

  card: {
    width: "100%",
    padding: 16,
    borderRadius: 12,
    border: "none",
    background: "white",
    fontSize: 18,
    cursor: "pointer",
  },

  back: {
    marginBottom: 20,
    border: "none",
    background: "transparent",
    fontSize: 16,
    color: "#4F46E5",
    cursor: "pointer",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
    marginTop: 20,
  },

  cardItem: {
    padding: 20,
    background: "white",
    borderRadius: 12,
    textAlign: "center",
    cursor: "pointer",
  },
};
