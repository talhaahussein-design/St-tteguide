import PageLayout from "../components/PageLayout";

export default function Feelings() {
  return (
    <PageLayout title="😊 Følelser">

      <div className="card">
        <h2>Hvordan har du det?</h2>

        <div className="moods">
          <button>😊</button>
          <button>😐</button>
          <button>😢</button>
          <button>😡</button>
        </div>
      </div>

    </PageLayout>
  );
}
