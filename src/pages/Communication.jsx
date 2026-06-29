import PageLayout from "../components/PageLayout";

const cards = [
  { emoji: "🍽️", label: "Jeg er sulten",        color: "#FEF3C7" },
  { emoji: "💧", label: "Jeg er tørstig",        color: "#DBEAFE" },
  { emoji: "🚽", label: "Jeg skal på toilet",    color: "#D1FAE5" },
  { emoji: "😴", label: "Jeg er træt",           color: "#EDE9FE" },
  { emoji: "🤕", label: "Jeg har ondt",          color: "#FEE2E2" },
  { emoji: "🤗", label: "Jeg vil have et kram",  color: "#FCE7F3" },
  { emoji: "🔇", label: "Det er for højt",       color: "#FEF3C7" },
  { emoji: "✋", label: "Stop",                  color: "#FEE2E2" },
  { emoji: "❓", label: "Jeg forstår ikke",      color: "#DBEAFE" },
  { emoji: "😊", label: "Jeg har det godt",      color: "#D1FAE5" },
];

export default function Communication() {
  return (
    <PageLayout title="Kommunikation" subtitle="Tryk på kortet for at vise, hvad du har brug for">
      <div className="comm-grid">
        {cards.map(card => (
          <button
            key={card.label}
            className="comm-btn"
            style={{ background: card.color }}
            onClick={() => alert(card.label)}
          >
            <span className="comm-emoji">{card.emoji}</span>
            <span className="comm-label">{card.label}</span>
          </button>
        ))}
      </div>
    </PageLayout>
  );
}
