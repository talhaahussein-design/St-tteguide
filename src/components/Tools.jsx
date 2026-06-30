import { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";

export function Tools({ content, municipality }) {
  const [tab, setTab] = useState("municipality");

  const copy = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-6">

      {/* Tabs */}
      <div className="flex gap-3">
        <Button
          variant={tab === "municipality" ? "primary" : "secondary"}
          onClick={() => setTab("municipality")}
        >
          Find kommune
        </Button>

        <Button
          variant={tab === "templates" ? "primary" : "secondary"}
          onClick={() => setTab("templates")}
        >
          Skabeloner
        </Button>
      </div>

      {tab === "municipality" ? (
        <>
          <Card>
            <h2 className="text-xl font-bold mb-2">
              {municipality.title}
            </h2>
            <p className="text-slate-600 mb-6">
              {municipality.description}
            </p>

            <div className="space-y-5">
              {municipality.steps.map((s, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full font-semibold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">
                      {s.title}
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      {s.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-slate-900 text-white">
            <p className="font-bold mb-3">
              {municipality.adviceTitle}
            </p>
            <div className="space-y-2 text-sm text-slate-300">
              {municipality.advice.map((a, i) => (
                <p key={i}>• {a}</p>
              ))}
            </div>
          </Card>
        </>
      ) : (
        <>
          <Card>
            <h2 className="text-xl font-bold mb-2">
              {content.title}
            </h2>
            <p className="text-slate-600">
              {content.description}
            </p>
          </Card>

          {content.items.map((item, i) => (
            <Card key={i}>
              <p className="font-bold text-slate-800 mb-3">
                {item.title}
              </p>

              {item.subject && (
                <div className="bg-slate-100 rounded-lg p-3 mb-4">
                  <p className="text-xs font-semibold text-slate-500">
                    Emne
                  </p>
                  <p className="text-slate-800">
                    {item.subject}
                  </p>
                </div>
              )}

              <pre className="whitespace-pre-wrap text-sm text-slate-700 bg-slate-50 p-4 rounded-lg mb-4">
                {item.body}
              </pre>

              <Button
                onClick={() =>
                  copy(
                    item.subject
                      ? `Emne: ${item.subject}\n\n${item.body}`
                      : item.body
                  )
                }
              >
                Kopiér skabelon
              </Button>
            </Card>
          ))}
        </>
      )}
    </div>
  );
}
