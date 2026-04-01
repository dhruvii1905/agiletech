'use client';
import React from 'react';
import { useScrollReveal } from './useScrollReveal';

const plans = [
  { name:'Starter', sub:'For small service teams', features:['Job scheduling','Client management','Service reports','Up to 5 users'], highlight:false },
  { name:'Professional', sub:'For growing service businesses', features:['Unlimited jobs','Team coordination','Full reporting','Performance monitoring'], highlight:true },
  { name:'Enterprise', sub:'For large service companies', features:['Multi-team management','Advanced reporting','Custom workflows','Priority support'], highlight:false },
];

const ProjekcoPricing = () => {
  const [headRef, headVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal(0.05);

  return (
    <>
      <style>{`
        .pk-price-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .pk-price-card:hover { transform:translateY(-8px); box-shadow:0 20px 48px rgba(0,0,0,0.12)!important; }
        .pk-price-btn { transition: opacity 0.2s, transform 0.2s; }
        .pk-price-btn:hover { opacity:0.85!important; transform:translateY(-1px); }
        @media(max-width:900px){.pk-price-grid{grid-template-columns:1fr!important;}}
      `}</style>
      <section id="pricing" style={{ background:'#fff', padding:'100px 24px', borderBottom:'1px solid #E8DFD0' }}>
        <div style={{ maxWidth:'100%', margin:'0 auto' }}>

          <div ref={headRef} style={{ textAlign:'center', marginBottom:60, opacity:headVisible?1:0, transform:headVisible?'translateY(0)':'translateY(30px)', transition:'opacity 0.7s ease, transform 0.7s ease' }}>
            <span style={{ display:'inline-block', background:'#F5F0E8', borderRadius:100, padding:'5px 14px', color:'#6B5E4E', fontSize:12, fontWeight:600, letterSpacing:'0.8px', textTransform:'uppercase', marginBottom:18 }}>Pricing</span>
            <h2 style={{ fontSize:'clamp(24px,3vw,44px)', fontWeight:800, color:'#1A1A1A', lineHeight:1.2, letterSpacing:'-0.8px', marginBottom:14 }}>Simple, Transparent Pricing</h2>
            <p style={{ color:'#666', fontSize:16, maxWidth:'100%', margin:'0 auto' }}>Choose the plan that fits your team size and operational needs.</p>
          </div>

          <div ref={gridRef} className="pk-price-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24, alignItems:'start' }}>
            {plans.map(({ name, sub, features, highlight }, i) => (
              <div key={name} className="pk-price-card" style={{
                background: highlight ? '#2D2D2D' : '#FAFAF8',
                border: highlight ? 'none' : '1px solid #EDE8DF',
                borderRadius:18, padding:'38px 30px', position:'relative',
                boxShadow: highlight ? '0 12px 40px rgba(0,0,0,0.15)' : '0 2px 8px rgba(0,0,0,0.04)',
                opacity:gridVisible?1:0, transform:gridVisible?'translateY(0)':'translateY(40px)',
                transition:`opacity 0.6s ${i*0.12}s ease, transform 0.6s ${i*0.12}s ease`,
              }}>
                {highlight && (
                  <div style={{ position:'absolute', top:-13, left:'50%', transform:'translateX(-50%)', background:'#8B7355', borderRadius:100, padding:'4px 18px', color:'#fff', fontSize:12, fontWeight:700, whiteSpace:'nowrap' }}>Most Popular</div>
                )}
                <h3 style={{ color:highlight?'#fff':'#1A1A1A', fontWeight:800, fontSize:22, marginBottom:6 }}>{name}</h3>
                <p style={{ color:highlight?'rgba(255,255,255,0.5)':'#999', fontSize:14, marginBottom:28 }}>{sub}</p>
                <ul style={{ listStyle:'none', padding:0, margin:'0 0 32px', display:'flex', flexDirection:'column', gap:13 }}>
                  {features.map(f => (
                    <li key={f} style={{ display:'flex', alignItems:'center', gap:10, color:highlight?'rgba(255,255,255,0.82)':'#444', fontSize:15 }}>
                      <span style={{ width:20, height:20, borderRadius:'50%', flexShrink:0, background:highlight?'#8B7355':'#EDE8DF', display:'flex', alignItems:'center', justifyContent:'center', fontSize:10, color:highlight?'#fff':'#6B5E4E' }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#demo" className="pk-price-btn" style={{ display:'block', textAlign:'center', padding:'13px 0', borderRadius:10, background:highlight?'#8B7355':'#2D2D2D', color:'#fff', textDecoration:'none', fontWeight:600, fontSize:15 }}>Get Started</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjekcoPricing;
