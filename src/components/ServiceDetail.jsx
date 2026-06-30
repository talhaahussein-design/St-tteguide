import { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";

export function ServiceDetail({ category, details, onBack, onNavigate }) {
  const [open, setOpen] = useState(category.paragraphs[0]);

  return (
    <div className="space-y-6">

      <Button variant="secondary" onClick={onBack}>
        ← Tilbage til overblik
      </Button>

      {/* Header Card */}
      <Card>
        <h2 className="text-xl font-bold text-slate-900 mb-2">
          {category.title}
        </h2>
        <p className="text-slate-600 leading-relaxed">
          {category.description}
        </p>
      </Card>

      {/* Accordion */}
      <div className="space-y-4">
        {category.paragraphs.map((p) => {
          const detail = details[p];
          if (!detail) return null;

          const isOpen = open === p;

          return (
            <Card key={p} className="p-0 overflow-hidden">

              {/* Trigger */}
              <button
                onClick={() => setOpen(isOpen ? null : p)}
                className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-slate-50 transition"
              >
                <h3 className="font-semibold text-slate-800">
                  {detail.title}
                </h3>
                <span
                  className={`transition-transform duration-200 text-slate-400 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* Content */}
              {isOpen && (
                <div className="px-6 pb-6 space-y-4 text-slate-700 leading-relaxed">

                  {detail.intro && (
                    <div className="border-l-4 border-blue-400 pl-4 text-slate-600 italic">
                      {detail.intro}
                    </div>
                  )}

                  {detail.sections ? (
                    detail.sections.map((s, i) => (
                      <div key={i} className="space-y-2">
                        <p className="font-semibold text-slate-800">
                          {s.title}
                        </p>

                        {s.text && (
                          <p>{s.text}</p>
                        )}

                        {s.items && (
                          <ul className="list-disc pl-6 space-y-1">
                            {s.items.map((it, j) => (
                              <li key={j}>{it}</li>
                            ))}
                          </ul>
                        )}

                        {s.steps && (
                          <ol className="list-decimal pl-6 space-y-1">
                            {s.steps.map((st, j) => (
                              <li key={j}>{st}</li>
                            ))}
                          </ol>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-slate-800">
                          Hvad er det?
                        </p>
                        <p>{detail.what}</p>
                      </div>

                      <div>
                        <p className="font-semibold text-slate-800">
                          Hvem kan få det?
                        </p>
                        <p>{detail.who}</p>
                      </div>

                      <div className="bg-slate-100 rounded-xl p-4">
                        <p className="text-sm font-semibold text-slate-500 mb-1">
                          Næste skridt
                        </p>
                        <p className="text-slate-800">
                          {detail.next}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* CTA Buttons */}
                  {detail.ctas && (
                    <div className="flex flex-wrap gap-3 pt-4">
                      {detail.ctas.map((cta, i) => (
                        <Button
                          key={i}
                          onClick={() =>
                            onNavigate?.(cta.action)
                          }
                        >
                          {cta.label}
                        </Button>
                      ))}
                    </div>
                  )}

                </div>
              )}
            </Card>
          );
        })}
      </div>

    </div>
  );
}
