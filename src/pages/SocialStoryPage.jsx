import React from "react";

const steps = [
  {
    step: 1,
    title: "Jeg svømmer",
    variant: "success",
    image: "/images/swim1.png",
    text: [
      "Jeg kan godt lide at svømme.",
      "Jeg har det sjovt i vandet.",
      "Jeg prøver at holde munden lukket, når jeg svømmer.",
    ],
  },
  {
    step: 2,
    title: "Jeg kommer til at sluge vand",
    variant: "warning",
    image: "/images/swim2.png",
    text: [
      "Nogle gange kommer jeg til at sluge lidt vand.",
      "Det kan ske for alle.",
      "Det er ikke min skyld.",
    ],
  },
  {
    step: 3,
    title: "Min mave kan gøre ondt",
    variant: "danger",
    image: "/images/swim3.png",
    text: [
      "Hvis jeg sluger meget vand, kan min mave gøre ondt.",
      "Jeg kan også få kvalme.",
      "Det er kroppens måde at fortælle mig, at den har brug for hjælp.",
    ],
  },
];

const colorMap = {
  success: "bg-green-500",
  warning: "bg-yellow-500",
  danger: "bg-red-500",
  info: "bg-blue-500",
};

function StoryCard({ step, title, image, text, variant }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6 flex flex-col">
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div
          className={`w-14 h-14 rounded-full text-white flex items-center justify-center text-xl font-bold ${colorMap[variant]}`}
        >
          {step}
        </div>

        <h2 className="text-2xl font-bold text-slate-800">
          {title}
        </h2>
      </div>

      {/* Image */}
      <div className="mb-6">
        <img
          src={image}
          alt={title}
          className="w-full rounded-2xl object-cover"
        />
      </div>

      {/* Text */}
      <div className="space-y-2 text-lg text-slate-700 leading-relaxed">
        {text.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}

export default function SocialStoryPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-10">

        <h1 className="text-4xl font-bold text-slate-900 text-center">
          Svømmehal – Trin for trin
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <StoryCard key={step.step} {...step} />
          ))}
        </div>

      </div>
    </div>
  );
}
