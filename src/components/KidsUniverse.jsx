import { useState } from "react";
import { motion } from "framer-motion";

export function KidsUniverse({ content, onBack }) {
  const [cat, setCat] = useState(null);
  const [item, setItem] = useState(null);

  const container = "min-h-screen bg-blue-50 flex flex-col";
  const wrapper = "max-w-3xl mx-auto w-full px-4 py-6";

  if (item !== null) {
    const category = content.categories.find((c) => c.id === cat);
    const cur = category.items[item];

    return (
      <div className={container}>
        <div className={wrapper}>

          <button
            onClick={() => setItem(null)}
            className="mb-6 text-blue-600 text-sm font-medium"
          >
            ← Tilbage
          </button>

          <div className="bg-white rounded-3xl shadow-md p-8 text-center transition-all duration-300">

            <div className="text-6xl mb-4 transition-transform duration-300 hover:scale-105">
              {cur.emoji}
            </div>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              {cur.title}
            </h2>

            <p className="text-slate-600 leading-relaxed text-lg">
              {cur.text}
            </p>

            {cur.tip && (
              <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
                <p className="text-emerald-700 font-medium">
                  💡 {cur.tip}
                </p>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex gap-4 mt-8">
            <button
              disabled={item === 0}
              onClick={() => setItem((i) => i - 1)}
              className="flex-1 bg-white border border-slate-200 rounded-xl py-3 text-slate-600 disabled:opacity-40"
            >
              ← Forrige
            </button>

            <button
              disabled={item === category.items.length - 1}
              onClick={() => setItem((i) => i + 1)}
              className="flex-1 bg-blue-500 text-white rounded-xl py-3 disabled:opacity-40"
            >
              Næste →
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {category.items.map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === item ? "w-6 bg-blue-500" : "w-2 bg-blue-200"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    );
  }

  if (cat !== null) {
    const category = content.categories.find((c) => c.id === cat);

    return (
      <div className={container}>
        <div className={wrapper}>

          <button
            onClick={() => setCat(null)}
            className="mb-6 text-blue-600 text-sm font-medium"
          >
            ← Tilbage
          </button>

          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            {category.title}
          </h2>

          <p className="text-slate-600 mb-6">
            {category.description}
          </p>

          <div className="space-y-4">
            {category.items.map((it, i) => (
              <button
                key={i}
                onClick={() => setItem(i)}
                className="w-full bg-white rounded-2xl shadow-sm border border-slate-200 p-5 flex items-center gap-4 text-left hover:shadow-md transition"
              >
                <div className="text-3xl">{it.emoji}</div>
                <div>
                  <p className="font-semibold text-slate-800">
                    {it.title}
                  </p>
                  <p className="text-sm text-slate-500 mt-1">
                    {it.text.slice(0, 60)}…
                  </p>
                </div>
              </button>
            ))}
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className={container}>
      <div className={wrapper}>

        <button
          onClick={onBack}
          className="mb-8 text-blue-600 text-sm font-medium"
        >
          ← Skift rolle
        </button>

        <div className="bg-white rounded-3xl shadow-md p-8 text-center mb-8">
          <div className="text-5xl mb-4">🌟</div>
          <h1 className="text-3xl font-bold text-slate-800 mb-4">
            {content.title}
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            {content.description}
          </p>
        </div>

        <div className="space-y-4">
          {content.categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCat(c.id)}
              className="w-full bg-white rounded-2xl shadow-sm border border-slate-200 p-6 text-left hover:shadow-md transition"
            >
              <p className="font-bold text-slate-800 text-lg">
                {c.title}
              </p>
              <p className="text-slate-500 mt-1">
                {c.description}
              </p>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
