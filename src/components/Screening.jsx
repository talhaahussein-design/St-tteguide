import { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";

export function Screening({ content, onComplete, onBack }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const q = content.questions[step];
  const progress = ((step + 1) / content.questions.length) * 100;

  const handleSelect = (option) => {
    if (q.multi) {
      const cur = answers[q.id] || [];
      const label = option.label || option;
      setAnswers({
        ...answers,
        [q.id]: cur.includes(label)
          ? cur.filter((s) => s !== label)
          : [...cur, label],
      });
    } else {
      setAnswers({ ...answers, [q.id]: option });
    }
  };

  const canNext = q.multi
    ? (answers[q.id] || []).length > 0
    : !!answers[q.id];

  return (
    <div className="space-y-6">

      {/* Progress */}
      <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
        <div
          className="bg-blue-500 h-2 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-xs text-slate-500">
        Spørgsmål {step + 1} af {content.questions.length}
      </p>

      <h2 className="text-2xl font-bold text-slate-900">
        {q.question}
      </h2>

      {/* Options */}
      <div className="space-y-3">
        {q.options.map((option, i) => {
          const label = option.label || option;
          const isSel = q.multi
            ? (answers[q.id] || []).includes(label)
            : answers[q.id] === option;

          return (
            <Card
              key={i}
              className={`cursor-pointer transition-all duration-200 ${
                isSel
                  ? "border-blue-500 bg-blue-50"
                  : "hover:border-slate-300"
              }`}
              onClick={() => handleSelect(option)}
            >
              <div>
                <p className="font-medium text-slate-800">
                  {label}
                </p>
                {option.description && (
                  <p className="text-sm text-slate-500 mt-1">
                    {option.description}
                  </p>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex gap-4 pt-4">
        <Button
          variant="secondary"
          full
          onClick={() =>
            step === 0 ? onBack() : setStep((s) => s - 1)
          }
        >
          ← Tilbage
        </Button>

        <Button
          full
          disabled={!canNext}
          onClick={() =>
            step < content.questions.length - 1
              ? setStep((s) => s + 1)
              : onComplete(answers)
          }
        >
          {step === content.questions.length - 1
            ? "Se resultater"
            : "Næste →"}
        </Button>
      </div>

    </div>
  );
}
