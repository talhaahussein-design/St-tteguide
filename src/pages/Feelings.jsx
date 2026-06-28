import PageLayout from "../components/PageLayout";

const moods = [
  {
    emoji: "😁",
    title: "Glad",
    text: "Jeg har det godt i dag.",
    color: "#FFE082",
  },
  {
    emoji: "🙂",
    title: "Rolig",
    text: "Jeg føler mig afslappet.",
    color: "#C8E6C9",
  },
  {
    emoji: "😟",
    title: "Bekymret",
    text: "Jeg har brug for støtte.",
    color: "#BBDEFB",
  },
  {
    emoji: "😢",
    title: "Ked af det",
    text: "Jeg har brug for en pause.",
    color: "#E1BEE7",
  },
  {
    emoji: "😡",
    title: "Vred",
    text: "Jeg har brug for ro.",
    color: "#FFCDD2",
  },
];

export default function Feelings() {
  return (
    <PageLayout title="Følelser">

      <h2 className="sectionTitle">Hvordan har du det?</h2>

      <div className="moduleGrid">
        {moods.map((mood) => (
          <div className="moduleCard" key={mood.title}>

            <div className="moduleTop">

              <div
                className="moduleIcon"
                style={{ background: mood.color }}
              >
                {mood.emoji}
              </div>

              <div className="moduleContent">
                <h2>{mood.title}</h2>
                <p>{mood.text}</p>
              </div>

            </div>

          </div>
        ))}
      </div>

    </PageLayout>
  );
}
