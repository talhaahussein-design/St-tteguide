import React from "react";

export default function Button({
  children,
  variant = "primary",
  full = false,
  onClick,
  disabled = false,
  type = "button",
}) {
  const base =
    "rounded-xl font-medium transition-all duration-200 px-4 py-3 text-sm";

  const variants = {
    primary:
      "bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-40",
    secondary:
      "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40",
    calm:
      "bg-emerald-100 text-emerald-800 hover:bg-emerald-200 disabled:opacity-40",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${
        full ? "w-full" : ""
      }`}
    >
      {children}
    </button>
  );
}
