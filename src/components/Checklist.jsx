import { useState } from "react";
import Card from "../components/Card";

export function Checklist({ content }) {
  const [checked, setChecked] = useState({});

  const toggle = (i) =>
    setChecked((c) => ({ ...c, [i]: !c[i] }));

  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-xl font-bold mb-2">
          {content.title}
        </h2>
        <p className="text-slate-600">
          {content.description}
        </p>
      </Card>

      <Card className="p-0">
        {content.items.map((item, i) => (
          <div
            key={i}
            onClick={() => toggle(i)}
            className="flex items-center gap-4 px-6 py-4 border-b last:border-none cursor-pointer hover:bg-slate-50 transition"
          >
            <div
              className={`w-6 h-6 rounded-md border flex items-center justify-center ${
                checked[i]
                  ? "bg-blue-500 border-blue-500 text-white"
                  : "border-slate-300"
              }`}
            >
              {checked[i] && "✓"}
            </div>
            <span
              className={`text-slate-700 ${
                checked[i] ? "line-through opacity-60" : ""
              }`}
            >
              {item}
            </span>
          </div>
        ))}
      </Card>
    </div>
  );
}
