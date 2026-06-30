import Card from "../components/Card";

export function Rejection({ content }) {
  return (
    <div className="space-y-6">

      <Card className="border-l-4 border-red-500">
        <h2 className="text-xl font-bold text-red-700 mb-2">
          {content.title}
        </h2>
        <p className="text-slate-600">
          {content.description}
        </p>
      </Card>

      {content.sections.map((s, i) => (
        <Card key={i}>
          <p className="font-semibold text-slate-800 mb-2">
            {s.title}
          </p>
          <p className="text-slate-600">
            {s.text}
          </p>
        </Card>
      ))}

      <Card className="bg-slate-50">
        <p className="font-bold text-slate-800 mb-4">
          {content.helpTitle}
        </p>
        {content.help.map((h, i) => (
          <div key={i} className="mb-4 last:mb-0">
            <p className="font-semibold text-blue-600">
              {h.name}
            </p>
            <p className="text-slate-600 text-sm">
              {h.text}
            </p>
          </div>
        ))}
      </Card>

    </div>
  );
}
