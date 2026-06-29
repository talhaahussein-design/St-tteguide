import { useState } from "react";
import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";

// Body parts with their positions on the SVG figure (% of container)
const bodyParts = [
  { id: "hoved",    label: "Hoved",    emoji: "🧠", x: 50,  y: 8,   detail: "Venstre side af hovedet" },
  { id: "nakke",    label: "Nakke",    emoji: "🔵", x: 50,  y: 16,  detail: "Nakke og hals" },
  { id: "skulderL", label: "Skulder",  emoji: "💪", x: 32,  y: 22,  detail: "Venstre skulder" },
  { id: "skulderR", label: "Skulder",  emoji: "💪", x: 68,  y: 22,  detail: "Højre skulder" },
  { id: "bryst",    label: "Bryst",    emoji: "🫁", x: 50,  y: 30,  detail: "Bryst og ribben" },
  { id: "maveL",    label: "Mave",     emoji: "🫀", x: 38,  y: 38,  detail: "Venstre mave" },
  { id: "maveR",    label: "Mave",     emoji: "🫀", x: 62,  y: 38,  detail: "Højre mave" },
  { id: "albueL",   label: "Albue",    emoji: "💪", x: 24,  y: 40,  detail: "Venstre albue" },
  { id: "albueR",   label: "Albue",    emoji: "💪", x: 76,  y: 40,  detail: "Højre albue" },
  { id: "haandL",   label: "Hånd",     emoji: "✋", x: 18,  y: 54,  detail: "Venstre hånd" },
  { id: "haandR",   label: "Hånd",     emoji: "✋", x: 82,  y: 54,  detail: "Højre hånd" },
  { id: "hofte",    label: "Hofte",    emoji: "🦴", x: 50,  y: 52,  detail: "Hofte og bækken" },
  { id: "knaeL",    label: "Knæ",      emoji: "🦵", x: 38,  y: 70,  detail: "Venstre knæ" },
  { id: "knaeR",    label: "Knæ",      emoji: "🦵", x: 62,  y: 70,  detail: "Højre knæ" },
  { id: "fodL",     label: "Fod",      emoji: "🦶", x: 38,  y: 88,  detail: "Venstre fod" },
  { id: "fodR",     label: "Fod",      emoji: "🦶", x: 62,  y: 88,  detail: "Højre fod" },
];

const sideList = [
  { id: "hoved",    label: "Hoved",    emoji: "🧠" },
  { id: "arme",     label: "Arme",     emoji: "💪" },
  { id: "overkrop", label: "Overkrop", emoji: "🦴" },
  { id: "mave",     label: "Mave",     emoji: "🫀" },
  { id: "hofte",    label: "Bækken",   emoji: "🦴" },
  { id: "ben",      label: "Ben",      emoji: "🦵" },
  { id: "led",      label: "Led",      emoji: "🔵" },
  { id: "fod",      label: "Fod",      emoji: "🦶" },
];

const painTypes = [
  { id: "dunkende",    label: "Dunkende",     color: "#ef4444" },
  { id: "stikkende",   label: "Stikkende",    color: "#f97316" },
  { id: "skarp",       label: "Skarp smerte", color: "#eab308" },
  { id: "oem",         label: "Øm",           color: "#22c55e" },
  { id: "traekkende",  label: "Trækkende",    color: "#3b82f6" },
  { id: "andet",       label: "Andet",        color: "#a855f7" },
];

export default function BodyMap() {
  const [selected, setSelected] = useState(null);      // bodyPart id
  const [painType, setPainType] = useState(null);
  const [painLevel, setPainLevel] = useState(5);
  const [showSent, setShowSent] = useState(false);

  const selectedPart = bodyParts.find(p => p.id === selected);

  function handleSend() {
    setShowSent(true);
    setTimeout(() => setShowSent(false), 2500);
  }

  return (
    <main style={{ background: "#f0f4f8", minHeight: "100vh", maxWidth: 480, margin: "0 auto", paddingBottom: 100 }}>

      {/* ── TOP BAR ── */}
      <header style={{
        background: "white",
        padding: "16px 20px 12px",
        display: "flex",
        alignItems: "center",
        gap: 12,
        boxShadow: "0 1px 0 #e2e8f0",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}>
        <Link to="/" style={{
          width: 38, height: 38, borderRadius: 12,
          background: "#f1f5f9", border: "1px solid #e2e8f0",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 18, color: "#334155", textDecoration: "none", flexShrink: 0,
        }}>←</Link>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: 20, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.4px" }}>
            Min krop
          </h1>
          <p style={{ fontSize: 13, color: "#64748b", marginTop: 1 }}>
            Tryk på det sted, hvor det gør ondt
          </p>
        </div>
        <button style={{
          padding: "8px 14px", borderRadius: 20, border: "1.5px solid #2563eb",
          background: "white", color: "#2563eb", fontSize: 13, fontWeight: 700,
          cursor: "pointer", display: "flex", alignItems: "center", gap: 6,
        }}>
          <span>❓</span> Hjælp
        </button>
      </header>

      <div style={{ padding: "16px 16px 0" }}>

        {/* ── MAIN CONTENT: body figure + side list ── */}
        <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>

          {/* Side category list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8, flexShrink: 0, width: 100 }}>
            {sideList.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  // Find first body part matching category
                  const match = bodyParts.find(p => p.id.startsWith(item.id.slice(0, 3)));
                  if (match) setSelected(match.id);
                }}
                style={{
                  background: selected && selectedPart?.label === item.label ? "#eff6ff" : "white",
                  border: selected && selectedPart?.label === item.label ? "2px solid #2563eb" : "1.5px solid #e2e8f0",
                  borderRadius: 14,
                  padding: "10px 8px",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  cursor: "pointer",
                  transition: "all .15s",
                }}
              >
                <span style={{ fontSize: 20 }}>{item.emoji}</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#334155" }}>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Body figure with tap points */}
          <div style={{ flex: 1, position: "relative", aspectRatio: "0.45 / 1" }}>
            {/* Body silhouette SVG */}
            <svg
              viewBox="0 0 200 440"
              style={{ width: "100%", height: "100%", display: "block" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Head */}
              <ellipse cx="100" cy="42" rx="28" ry="32" fill="#fcd9b6" />
              {/* Hair */}
              <ellipse cx="100" cy="22" rx="30" ry="18" fill="#7c4a1e" />
              <ellipse cx="73" cy="32" rx="10" ry="16" fill="#7c4a1e" />
              <ellipse cx="127" cy="32" rx="10" ry="16" fill="#7c4a1e" />
              {/* Eyes */}
              <circle cx="90" cy="44" r="4" fill="#2d1a0e" />
              <circle cx="110" cy="44" r="4" fill="#2d1a0e" />
              <circle cx="91" cy="43" r="1.5" fill="white" />
              <circle cx="111" cy="43" r="1.5" fill="white" />
              {/* Smile */}
              <path d="M92 54 Q100 60 108 54" stroke="#c0805a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              {/* Neck */}
              <rect x="92" y="72" width="16" height="18" rx="6" fill="#fcd9b6" />
              {/* Body */}
              <rect x="70" y="88" width="60" height="80" rx="12" fill="#fcd9b6" />
              {/* Shorts */}
              <rect x="68" y="158" width="64" height="50" rx="10" fill="#3b5bdb" />
              <line x1="100" y1="158" x2="100" y2="208" stroke="#2d4abf" strokeWidth="2" />
              {/* Left arm */}
              <rect x="42" y="90" width="26" height="80" rx="13" fill="#fcd9b6" />
              {/* Right arm */}
              <rect x="132" y="90" width="26" height="80" rx="13" fill="#fcd9b6" />
              {/* Left hand */}
              <ellipse cx="55" cy="178" rx="13" ry="10" fill="#fcd9b6" />
              {/* Right hand */}
              <ellipse cx="145" cy="178" rx="13" ry="10" fill="#fcd9b6" />
              {/* Left leg */}
              <rect x="72" y="206" width="24" height="110" rx="12" fill="#fcd9b6" />
              {/* Right leg */}
              <rect x="104" y="206" width="24" height="110" rx="12" fill="#fcd9b6" />
              {/* Left foot */}
              <ellipse cx="84" cy="324" rx="16" ry="10" fill="#fcd9b6" />
              {/* Right foot */}
              <ellipse cx="116" cy="324" rx="16" ry="10" fill="#fcd9b6" />
            </svg>

            {/* Tap dots overlaid on the figure */}
            {bodyParts.map(part => {
              const isSelected = selected === part.id;
              return (
                <button
                  key={part.id}
                  onClick={() => { setSelected(isSelected ? null : part.id); setPainType(null); }}
                  style={{
                    position: "absolute",
                    left: `${part.x}%`,
                    top: `${part.y}%`,
                    transform: "translate(-50%, -50%)",
                    width: isSelected ? 28 : 22,
                    height: isSelected ? 28 : 22,
                    borderRadius: "50%",
                    background: isSelected ? "rgba(239,68,68,0.2)" : "rgba(255,255,255,0.85)",
                    border: isSelected ? "3px solid #ef4444" : "2.5px solid #2563eb",
                    cursor: "pointer",
                    transition: "all .15s",
                    padding: 0,
                    boxShadow: isSelected
                      ? "0 0 0 4px rgba(239,68,68,0.15)"
                      : "0 2px 6px rgba(0,0,0,0.15)",
                  }}
                  aria-label={part.label}
                />
              );
            })}
          </div>
        </div>

        {/* ── DETAIL PANEL — appears when a point is selected ── */}
        {selected && selectedPart && (
          <div style={{
            marginTop: 16,
            background: "white",
            borderRadius: 20,
            padding: 20,
            boxShadow: "0 4px 16px rgba(15,23,42,.08)",
            border: "1px solid #e2e8f0",
            animation: "slideUp .2s ease",
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
              <h2 style={{ fontSize: 18, fontWeight: 800, color: "#0f172a" }}>
                {selectedPart.detail}
              </h2>
              <button onClick={() => setSelected(null)} style={{
                width: 30, height: 30, borderRadius: "50%", border: "1.5px solid #e2e8f0",
                background: "#f8fafc", cursor: "pointer", fontSize: 16, color: "#64748b",
              }}>×</button>
            </div>

            {/* Pain type selector */}
            <p style={{ fontSize: 13, fontWeight: 700, color: "#64748b", marginBottom: 10, textTransform: "uppercase", letterSpacing: ".4px" }}>
              Det kan føles som:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 20 }}>
              {painTypes.map(pt => (
                <button
                  key={pt.id}
                  onClick={() => setPainType(pt.id)}
                  style={{
                    padding: "10px 12px",
                    borderRadius: 12,
                    border: painType === pt.id ? `2px solid ${pt.color}` : "1.5px solid #e2e8f0",
                    background: painType === pt.id ? `${pt.color}18` : "white",
                    display: "flex", alignItems: "center", gap: 8,
                    cursor: "pointer", transition: "all .1s",
                  }}
                >
                  <div style={{
                    width: 14, height: 14, borderRadius: "50%",
                    background: pt.color, flexShrink: 0,
                  }} />
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#334155" }}>{pt.label}</span>
                </button>
              ))}
            </div>

            {/* Pain scale */}
            <p style={{ fontSize: 13, fontWeight: 700, color: "#64748b", marginBottom: 8, textTransform: "uppercase", letterSpacing: ".4px" }}>
              Hvor ondt gør det?
            </p>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
              {[0,1,2,3,4,5,6,7,8,9,10].map(n => (
                <button
                  key={n}
                  onClick={() => setPainLevel(n)}
                  style={{
                    width: 28, height: 28, borderRadius: "50%", border: "none",
                    background: painLevel === n ? "#1d4ed8" : painLevel > n ? `hsl(${120 - n*12}, 80%, 90%)` : "#f1f5f9",
                    color: painLevel === n ? "white" : "#334155",
                    fontSize: 12, fontWeight: 800, cursor: "pointer",
                    transition: "all .1s",
                  }}
                >{n}</button>
              ))}
            </div>
            <div style={{
              height: 8, borderRadius: 4, marginBottom: 6,
              background: `linear-gradient(to right, #22c55e, #eab308, #ef4444)`,
            }} />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 11, color: "#94a3b8" }}>Lidt ondt</span>
              <span style={{ fontSize: 11, color: "#94a3b8" }}>Meget ondt</span>
            </div>

            {/* Send button */}
            <button
              onClick={handleSend}
              style={{
                marginTop: 20, width: "100%", padding: "16px",
                borderRadius: 14, border: "none",
                background: showSent ? "#16a34a" : "linear-gradient(135deg, #1d4ed8, #0d9488)",
                color: "white", fontSize: 16, fontWeight: 800,
                cursor: "pointer", transition: "all .2s",
                boxShadow: "0 4px 14px rgba(29,78,216,.3)",
              }}
            >
              {showSent ? "✓ Sendt til voksen!" : "Vis til en voksen"}
            </button>

            <button style={{
              marginTop: 10, width: "100%", padding: "12px",
              borderRadius: 14, border: "1.5px solid #e2e8f0",
              background: "white", color: "#3b82f6", fontSize: 14, fontWeight: 700,
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
            }}>
              ☆ Gem i min oversigt
            </button>
          </div>
        )}

        {/* ── OTHER WAYS TO SHOW PAIN ── */}
        <div style={{ marginTop: 20 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: "#334155", marginBottom: 12 }}>
            Andre måder at vise, hvor det gør ondt
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8 }}>
            {[
              { emoji: "✏️", label: "Tegn" },
              { emoji: "💬", label: "Brug ord" },
              { emoji: "😊", label: "Ansigt" },
              { emoji: "👆", label: "Peg" },
              { emoji: "📝", label: "Skriv" },
            ].map(item => (
              <button
                key={item.label}
                style={{
                  background: "white",
                  border: "1.5px solid #e2e8f0",
                  borderRadius: 14,
                  padding: "12px 4px",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", gap: 6,
                  cursor: "pointer", transition: "border-color .1s",
                }}
              >
                <span style={{ fontSize: 26 }}>{item.emoji}</span>
                <span style={{ fontSize: 10, fontWeight: 700, color: "#64748b" }}>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── NEED HELP ── */}
        <div style={{
          marginTop: 16, marginBottom: 8,
          background: "#eff6ff",
          border: "1.5px solid #bfdbfe",
          borderRadius: 16,
          padding: "14px 16px",
          display: "flex", alignItems: "center", gap: 12,
        }}>
          <span style={{ fontSize: 32 }}>👩‍👦</span>
          <div>
            <p style={{ fontSize: 14, fontWeight: 800, color: "#1e40af" }}>Har du brug for hjælp?</p>
            <p style={{ fontSize: 12, color: "#3b82f6" }}>Tal med en voksen</p>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <BottomNav />
    </main>
  );
}
