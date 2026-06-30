import Card from "../components/Card";
import Button from "../components/Button";

export function ServiceOverview({ content, answers, onSelectCategory }) {
  const needs = answers["needs"] || [];

  const map = {
    Økonomi: "economy",
    Aflastning: "respite",
    "Skole/Institution": "school",
    Fritid: "leisure",
  };

  const cats = content.categories.filter(
    (c) =>
      !needs.length || needs.some((n) => map[n] === c.id)
  );

  return (
    <div className="space-y-6">

      {/* Intro */}
      <Card>
        <h2 className="text-xl font-bold text-slate-900 mb-2">
          {content.title}
        </h2>
        <p className="text-slate-600 leading-relaxed">
          {content.description}
        </p>
      </Card>

      {/* Categories */}
      <div>
        <p className="text-xs uppercase tracking-wide font-semibold text-slate-400 mb-3">
          Kategorier
        </p>

        <div className="space-y-4">
          {cats.map((cat) => (
            <Card
              key={cat.id}
              className="cursor-pointer hover:border-blue-400 transition-all duration-200"
              onClick={() => onSelectCategory(cat)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    {cat.title}
                  </h3>
                  <p className="text-slate-500 mt-1">
                    {cat.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {cat.paragraphs.map((p) => (
                      <span
                        key={p}
                        className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <span className="text-slate-300 text-xl">
                  ›
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Retry */}
      <Card className="bg-blue-50 border-blue-200">
        <p className="font-semibold text-blue-800 mb-1">
          Ikke det du søgte?
        </p>
        <p className="text-blue-700 text-sm mb-4">
          Du kan prøve screeningen igen.
        </p>

        <Button
          variant="secondary"
          onClick={() => window.location.reload()}
        >
          Prøv igen
        </Button>
      </Card>

    </div>
  );
}
