import React, { useState } from 'react';

export function KidsUniverse({ content, onBack }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  if (selectedItem !== null) {
    const category = content.categories.find(c => c.id === selectedCategory);
    const item = category.items[selectedItem];
    const isFirst = selectedItem === 0;
    const isLast = selectedItem === category.items.length - 1;

    return (
      <div style={{ maxWidth: 480, margin: '0 auto', padding: '20px 16px 120px' }}>
        <button
          onClick={() => setSelectedItem(null)}
          className="kids-btn"
          style={{ marginBottom: 20, justifyContent: 'flex-start', gap: 12 }}
        >
          <span style={{ fontSize: 22 }}>←</span>
          <span>Tilbage til listen</span>
        </button>

        <div className="kids-card" style={{ padding: 28, textAlign: 'center', marginBottom: 20 }}>
          <div style={{ fontSize: 72, marginBottom: 16, lineHeight: 1 }}>{item.emoji}</div>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: '#1a237e', marginBottom: 12 }}>
            {item.title}
          </h2>
          <p style={{ fontSize: 17, color: '#37474f', lineHeight: 1.6, marginBottom: item.tip ? 20 : 0 }}>
            {item.text}
          </p>
          {item.tip && (
            <div style={{ background: '#e8f5e9', border: '2px solid #a5d6a7', borderRadius: 14, padding: '14px 18px', marginTop: 4 }}>
              <p style={{ fontSize: 15, color: '#2e7d32', fontWeight: 700 }}>
                💡 Tip: {item.tip}
              </p>
            </div>
          )}
        </div>

        <div style={{ display: 'flex', gap: 12 }}>
          <button onClick={() => setSelectedItem(i => i - 1)} disabled={isFirst} className="kids-btn" style={{ flex: 1, opacity: isFirst ? 0.3 : 1 }}>
            ← Forrige
          </button>
          <button onClick={() => setSelectedItem(i => i + 1)} disabled={isLast} className="kids-btn" style={{ flex: 1, opacity: isLast ? 0.3 : 1 }}>
            Næste →
          </button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 20 }}>
          {category.items.map((_, i) => (
            <button key={i} onClick={() => setSelectedItem(i)} style={{ width: i === selectedItem ? 28 : 10, height: 10, borderRadius: 5, border: 'none', background: i === selectedItem ? '#3949ab' : '#c5cae9', cursor: 'pointer', transition: 'width .2s', padding: 0 }} aria-label={`Gå til kort ${i + 1}`} />
          ))}
        </div>
      </div>
    );
  }

  if (selectedCategory !== null) {
    const category = content.categories.find(c => c.id === selectedCategory);
    return (
      <div style={{ maxWidth: 480, margin: '0 auto', padding: '20px 16px 120px' }}>
        <button onClick={() => setSelectedCategory(null)} className="kids-btn" style={{ marginBottom: 20, justifyContent: 'flex-start', gap: 12 }}>
          <span style={{ fontSize: 22 }}>←</span>
          <span>Tilbage til kategorier</span>
        </button>

        <h2 style={{ fontSize: 22, fontWeight: 800, color: '#1a237e', marginBottom: 6 }}>{category.title}</h2>
        <p style={{ fontSize: 15, color: '#546e7a', marginBottom: 20 }}>{category.description}</p>

        <div style={{ display: 'grid', gap: 12 }}>
          {category.items.map((item, idx) => (
            <button key={idx} onClick={() => setSelectedItem(idx)} className="kids-card" style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 20px', width: '100%', background: 'white', textAlign: 'left', cursor: 'pointer', border: '2.5px solid #e8eaf6' }}>
              <span style={{ fontSize: 36, flexShrink: 0 }}>{item.emoji}</span>
              <div>
                <p style={{ fontSize: 17, fontWeight: 700, color: '#1a237e' }}>{item.title}</p>
                <p style={{ fontSize: 13, color: '#546e7a', marginTop: 2 }}>{item.text.slice(0, 60)}…</p>
              </div>
              <span style={{ marginLeft: 'auto', fontSize: 20, color: '#9fa8da', flexShrink: 0 }}>›</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 480, margin: '0 auto', padding: '20px 16px 120px' }}>
      <button onClick={onBack} className="kids-btn" style={{ marginBottom: 24, justifyContent: 'flex-start', gap: 12 }}>
        <span style={{ fontSize: 22 }}>←</span>
        <span>Skift rolle</span>
      </button>

      <div style={{ background: '#e8eaf6', border: '2.5px solid #c5cae9', borderRadius: 20, padding: '24px 20px', textAlign: 'center', marginBottom: 24 }}>
        <div style={{ fontSize: 56, marginBottom: 12 }}>🌟</div>
        <h2 style={{ fontSize: 24, fontWeight: 800, color: '#1a237e', marginBottom: 6 }}>{content.title}</h2>
        <p style={{ fontSize: 15, color: '#37474f' }}>{content.description}</p>
      </div>

      <p style={{ fontSize: 13, fontWeight: 700, color: '#7986cb', textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 12 }}>
        Vælg en kategori
      </p>

      <div style={{ display: 'grid', gap: 12 }}>
        {content.categories.map((cat) => (
          <button key={cat.id} onClick={() => setSelectedCategory(cat.id)} className="kids-btn" style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '20px 24px', gap: 4 }}>
            <span style={{ fontSize: 20, fontWeight: 800 }}>{cat.title}</span>
            <span style={{ fontSize: 14, color: '#5c6bc0', fontWeight: 500 }}>{cat.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
