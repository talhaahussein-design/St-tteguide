import { useState, useEffect } from 'react';
import { config } from '../data/content';

const Field = ({ label, name, value, onChange, suffix = "kr" }) => (
  <div className="calc-input-wrap">
    <label className="calc-label">{label}</label>
    <div className="calc-input-row">
      <input className="calc-input" type="text" inputMode="decimal" name={name}
        value={value || ''} onChange={onChange} placeholder="0" />
      <span className="calc-suffix">{suffix}</span>
    </div>
  </div>
);

const Calculator = ({ type, onBack }) => {
  const isExp = type === 'expenses';
  const key = `calc_${type}`;
  const init = () => {
    try { const s = localStorage.getItem(key); if (s) return JSON.parse(s); } catch {}
    return isExp
      ? { medicin:'',transport:'',mad:'',vask:'',udstyr:'',andre:'',maaneder:'12',engangs:'' }
      : { loen:'',normaleTimer:'37',reduceredeTimer:'',tillaeg:'',maaneder:'12' };
  };
  const [data, setData] = useState(init);
  useEffect(() => { try { localStorage.setItem(key, JSON.stringify(data)); } catch {} }, [data, key]);

  const onChange = e => {
    const { name, value } = e.target;
    if (value === '' || /^[\d.,]+$/.test(value)) setData(p => ({ ...p, [name]: value }));
  };
  const v = x => parseFloat(String(x||0).replace(',','.')) || 0;

  let res;
  if (isExp) {
    const monthly = v(data.medicin)+v(data.transport)+v(data.mad)+v(data.vask)+v(data.udstyr)+v(data.andre);
    const yearly = monthly * v(data.maaneder) + v(data.engangs);
    const ok = yearly >= config.minimumThreshold;
    res = { main: yearly.toLocaleString('da-DK')+' kr', mainLabel: 'Samlet årlig merudgift',
      sub: (v(data.maaneder)>0?yearly/v(data.maaneder):0).toLocaleString('da-DK',{maximumFractionDigits:0})+' kr', subLabel: 'Månedligt gennemsnit',
      status: ok?'success':'warning',
      note: ok ? `Beløbet kan muligvis være højt nok til at søge (over ${config.minimumThreshold} kr).` : `Beløbet kan ligge under minimumsgrænsen (${config.minimumThreshold} kr).`,
      disclaimer: 'Kun vejledende – kommunen træffer den endelige vurdering.' };
  } else {
    const rate = v(data.normaleTimer)>0 ? v(data.loen)/(v(data.normaleTimer)*4.33) : 0;
    const monthlyLoss = v(data.reduceredeTimer)*4.33*rate + v(data.tillaeg);
    const yearlyLoss = monthlyLoss * v(data.maaneder);
    res = { main: monthlyLoss.toLocaleString('da-DK',{maximumFractionDigits:0})+' kr', mainLabel: 'Tab pr. måned',
      sub: yearlyLoss.toLocaleString('da-DK',{maximumFractionDigits:0})+' kr', subLabel: 'Tab pr. år',
      status: monthlyLoss>5000?'success':'info',
      note: monthlyLoss>5000 ? 'Du kan muligvis være i målgruppen for tabt arbejdsfortjeneste.' : 'Dit tab ser lavt ud, men kommunen vurderer konkret.',
      disclaimer: 'Kun vejledende – kommunen beregner den endelige kompensation.' };
  }

  return (
    <div>
      <button className="btn-secondary" style={{ marginBottom: 16 }} onClick={onBack}>← Tilbage</button>
      <div className="card" style={{ marginBottom: 14 }}>
        {isExp ? (<>
          <Field label="Medicin pr. måned" name="medicin" value={data.medicin} onChange={onChange} />
          <Field label="Transport pr. måned" name="transport" value={data.transport} onChange={onChange} />
          <Field label="Ekstra mad pr. måned" name="mad" value={data.mad} onChange={onChange} />
          <Field label="Vask/rengøring pr. måned" name="vask" value={data.vask} onChange={onChange} />
          <Field label="Særligt udstyr pr. måned" name="udstyr" value={data.udstyr} onChange={onChange} />
          <Field label="Andre udgifter pr. måned" name="andre" value={data.andre} onChange={onChange} />
          <Field label="Antal måneder" name="maaneder" value={data.maaneder} onChange={onChange} suffix="mdr" />
          <Field label="Engangsudgift" name="engangs" value={data.engangs} onChange={onChange} />
        </>) : (<>
          <Field label="Månedsløn før fradrag" name="loen" value={data.loen} onChange={onChange} />
          <Field label="Normale timer pr. uge" name="normaleTimer" value={data.normaleTimer} onChange={onChange} suffix="timer" />
          <Field label="Timer reduceret pr. uge" name="reduceredeTimer" value={data.reduceredeTimer} onChange={onChange} suffix="timer" />
          <Field label="Tabte faste tillæg pr. md." name="tillaeg" value={data.tillaeg} onChange={onChange} />
          <Field label="Antal måneder" name="maaneder" value={data.maaneder} onChange={onChange} suffix="mdr" />
        </>)}
      </div>

      <div className={`calc-result ${res.status}`}>
        <p className="section-label" style={{ margin: "0 0 4px" }}>{res.mainLabel}</p>
        <p className="calc-result-main" style={{ color: res.status==='success'?'#15803d':res.status==='warning'?'#b45309':'#1d4ed8' }}>
          {res.main}
        </p>
        <p style={{ fontSize: 13, color: "var(--slate-600)", marginBottom: 10 }}>
          {res.subLabel}: <strong>{res.sub}</strong>
        </p>
        <p style={{ fontSize: 13, color: "var(--slate-700)", lineHeight: 1.5 }}>ℹ️ {res.note}</p>
      </div>
      <p style={{ fontSize: 12, color: "var(--slate-400)", textAlign: "center", marginTop: 12, lineHeight: 1.5 }}>
        {res.disclaimer}
      </p>
    </div>
  );
};

export default Calculator;
