import PageLayout from "../components/PageLayout";

const cards = [
  { emoji: "🍽️", label: "Jeg er sulten", color: "#FEF3C7" },
  { emoji: "💧", label: "Jeg er tørstig", color: "#DBEAFE" },
  { emoji: "🚽", label: "Jeg skal på toilet", color: "#D1FAE5" },
  { emoji: "😴", label: "Jeg er træt", color: "#EDE9FE" },
  { emoji: "🤕", label: "Jeg har ondt", color: "#FEE2E2" },
  { emoji: "🤗", label: "Jeg vil have et kram", color: "#FCE7F3" },
  { emoji: "🔇", label: "Det er for højt", color: "#FEF3C7" },
  { emoji: "✋", label: "Stop", color: "#FEE2E2" },
  { emoji: "❓", label: "Jeg forstår ikke", color: "#DBEAFE" },
  { emoji: "😊", label: "Jeg har det godt", color: "#D1FAE5" },
];

export default function Communication() {
  return (
    <PageLayout title="Kommunikation">
      <p style={{ color: "var(--slate-500)", fontSize: 14, marginBottom: 20 }}>
        Tryk på kortet for at vise, hvad du har brug for
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {cards.map((card) => (
          <button
            key={card.label}
            onClick={() => alert(card.label)}
            style={{
              background: card.color,
              border: "none",
              borderRadius: 20,
              padding: "20px 12px",
              textAlign: "center",
              cursor: "pointer",
              transition: "transform .1s",
            }}
            onMouseDown={e => e.currentTarget.style.transform = "scale(.95)"}
            onMouseUp={e => e.currentTarget.style.transform = "scale(1)"}
            onTouchStart={e => e.currentTarget.style.transform = "scale(.95)"}
            onTouchEnd={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <div style={{ fontSize: 44, marginBottom: 8 }}>{card.emoji}</div>
            <p style={{ fontWeight: 700, fontSize: 13, color: "var(--slate-800)", lineHeight: 1.3 }}>
              {card.label}
            </p>
          </button>
        ))}
      </div>
    </PageLayout>
  );
}
