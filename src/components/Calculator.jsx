import React, { useState, useEffect } from 'react';
import { config } from '../data/content';

const Calculator = ({ type, onBack }) => {
  const isExpenses = type === 'expenses';
  const storageKey = `calculator_${type}`;

  // Initial state logic
  const getInitialState = () => {
    const saved = localStorage.getItem(storageKey);
    if (saved) return JSON.parse(saved);
    
    return isExpenses ? {
      medicin: 0,
      transport: 0,
      mad: 0,
      vask: 0,
      udstyr: 0,
      andre: 0,
      maaneder: 12,
      engangs: 0
    } : {
      loen: 0,
      normaleTimer: 37,
      reduceredeTimer: 0,
      tillaeg: 0,
      maaneder: 12
    };
  };

  const [data, setData] = useState(getInitialState());

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(data));
  }, [data, storageKey]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }));
  };

  // Calculations
  let results = {};
  if (isExpenses) {
    const monthlySum = data.medicin + data.transport + data.mad + data.vask + data.udstyr + data.andre;
    const yearlyTotal = (monthlySum * data.maaneder) + data.engangs;
    const monthlyAvg = data.maaneder > 0 ? yearlyTotal / data.maaneder : 0;
    const isAboveThreshold = yearlyTotal >= config.minimumThreshold;

    results = {
      title: "Merudgifter - udgiftsberegner",
      intro: "Brug denne beregner til at få et overblik over jeres samlede merudgifter pr. år.",
      mainValue: yearlyTotal.toLocaleString('da-DK') + " kr",
      mainLabel: "Samlet årlig merudgift",
      subValue: monthlyAvg.toLocaleString('da-DK', { maximumFractionDigits: 0 }) + " kr",
      subLabel: "Månedligt gennemsnit",
      status: isAboveThreshold ? 'success' : 'warning',
      statusText: isAboveThreshold 
        ? "Beløbet kan muligvis være højt nok til at søge (over " + config.minimumThreshold + " kr)." 
        : "Beløbet ligger muligvis under den gældende minimumsgrænse (" + config.minimumThreshold + " kr).",
      disclaimer: "Dette er kun et vejledende overblik – kommunen træffer den endelige vurdering."
    };
  } else {
    // Timeløn = månedsløn / (normale_timer × 4,33)
    const hourlyRate = data.normaleTimer > 0 ? data.loen / (data.normaleTimer * 4.33) : 0;
    const monthlyLoss = (data.reduceredeTimer * 4.33 * hourlyRate) + data.tillaeg;
    const yearlyLoss = monthlyLoss * data.maaneder;
    const isLikelyEligible = monthlyLoss > 5000;

    results = {
      title: "Tabt arbejdsfortjeneste - indtægtsberegner",
      intro: "Her kan du estimere dit indtægtstab ved at gå ned i tid eller stoppe med at arbejde.",
      mainValue: monthlyLoss.toLocaleString('da-DK', { maximumFractionDigits: 0 }) + " kr",
      mainLabel: "Tab pr. måned",
      subValue: yearlyLoss.toLocaleString('da-DK', { maximumFractionDigits: 0 }) + " kr",
      subLabel: "Tab pr. år",
      status: isLikelyEligible ? 'success' : 'info',
      statusText: isLikelyEligible 
        ? "Du kan muligvis være i målgruppen for tabt arbejdsfortjeneste." 
        : "Dit tab ser lavt ud, men kommunen kan stadig vurdere sagen konkret.",
      disclaimer: "Dette er kun et vejledende overblik – kommunen beregner den endelige kompensation."
    };
  }

  const InputField = ({ label, name, value, suffix = "kr" }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
      <div className="relative">
        <input
          type="number"
          name={name}
          value={value === 0 ? '' : value}
          onChange={handleChange}
          placeholder="0"
          className="block w-full rounded-lg border-slate-200 border p-3 pr-12 focus:border-teal-500 focus:ring-teal-500"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-400">
          {suffix}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-md mx-auto animate-fade-in">
      <button 
        onClick={onBack}
        className="flex items-center text-teal-600 font-medium mb-6 hover:text-teal-700 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        Tilbage
      </button>

      <h2 className="text-2xl font-bold text-slate-800 mb-2">{results.title}</h2>
      <p className="text-slate-600 mb-8">{results.intro}</p>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 mb-8">
        {isExpenses ? (
          <>
            <InputField label="Medicin pr. måned" name="medicin" value={data.medicin} />
            <InputField label="Transport pr. måned" name="transport" value={data.transport} />
            <InputField label="Ekstra mad/kost pr. måned" name="mad" value={data.mad} />
            <InputField label="Vask/rengøring pr. måned" name="vask" value={data.vask} />
            <InputField label="Særligt udstyr pr. måned" name="udstyr" value={data.udstyr} />
            <InputField label="Andre udgifter pr. måned" name="andre" value={data.andre} />
            <InputField label="Antal måneder" name="maaneder" value={data.maaneder} suffix="mdr" />
            <InputField label="Engangsudgift" name="engangs" value={data.engangs} />
          </>
        ) : (
          <>
            <InputField label="Månedsløn før fradrag" name="loen" value={data.loen} />
            <InputField label="Normale arbejdstimer pr. uge" name="normaleTimer" value={data.normaleTimer} suffix="timer" />
            <InputField label="Timer reduceret pr. uge" name="reduceredeTimer" value={data.reduceredeTimer} suffix="timer" />
            <InputField label="Tabte faste tillæg pr. måned" name="tillaeg" value={data.tillaeg} />
            <InputField label="Antal måneder reduktionen varer" name="maaneder" value={data.maaneder} suffix="mdr" />
          </>
        )}
      </div>

      <div className={`rounded-xl p-6 mb-8 shadow-md border-t-4 ${
        results.status === 'success' ? 'bg-teal-50 border-teal-500' : 
        results.status === 'warning' ? 'bg-amber-50 border-amber-500' :
        'bg-blue-50 border-blue-500'
      }`}>
        <div className="mb-4">
          <span className="text-sm uppercase tracking-wider font-semibold text-slate-500 block mb-1">
            {results.mainLabel}
          </span>
          <span className={`text-4xl font-bold ${
            results.status === 'success' ? 'text-teal-700' : 
            results.status === 'warning' ? 'text-amber-700' :
            'text-blue-700'
          }`}>
            {results.mainValue}
          </span>
        </div>
        
        <div className="mb-4 pt-4 border-t border-slate-200/50">
          <span className="text-sm font-medium text-slate-600 block">
            {results.subLabel}: <span className="font-bold">{results.subValue}</span>
          </span>
        </div>

        <div className="flex items-start gap-3 mt-4">
          <div className={`mt-0.5 rounded-full p-1 ${
            results.status === 'success' ? 'bg-teal-200 text-teal-700' : 
            results.status === 'warning' ? 'bg-amber-200 text-amber-700' :
            'bg-blue-200 text-blue-700'
          }`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-sm font-medium text-slate-700 leading-tight">
            {results.statusText}
          </p>
        </div>
      </div>

      <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 mb-12">
        <p className="text-xs text-slate-500 text-center italic">
          {results.disclaimer}
        </p>
      </div>
    </div>
  );
};

export default Calculator;
