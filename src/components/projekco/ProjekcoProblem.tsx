'use client';
import React from 'react';
import { useScrollReveal } from './useScrollReveal';

const problems = [
  { icon: '📱', text: 'Technicians rely on messages and calls to get job details' },
  { icon: '📋', text: 'Job records are scattered and difficult to track' },
  { icon: '📄', text: 'Service reports are inconsistent or missing entirely' },
  { icon: '👁️', text: 'Owners struggle to see what is happening in the field' },
];

const ProjekcoProblem = () => {
  const [imgRef, imgVisible] = useScrollReveal();
  const [textRef, textVisible] = useScrollReveal();

  return (
    <>
      <style>{`
        .pk-prob-card { transition: transform 0.25s, box-shadow 0.25s; }
        .pk-prob-card:hover { transform: translateX(6px); box-shadow: 0 4px 16px rgba(0,0,0,0.07); }
        @media(max-width:768px){.pk-grid-2{grid-template-columns:1fr!important;gap:40px!important}}
      `}</style>
      <section style={{ background:'#fff', padding:'100px 24px', borderBottom:'1px solid #E8DFD0', overflow:'hidden' }}>
        <div style={{ maxWidth:1140, margin:'0 auto' }}>
          <div className="pk-grid-2" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:72, alignItems:'center' }}>
            <div ref={imgRef} style={{ position:'relative', opacity:imgVisible?1:0, transform:imgVisible?'translateX(0)':'translateX(-40px)', transition:'opacity 0.8s ease, transform 0.8s ease' }}>
              <img src="/assets/img/about/1.png" alt="Service chaos" style={{ width:'100%', borderRadius:20, objectFit:'cover', boxShadow:'0 16px 48px rgba(0,0,0,0.1)' }} />
              <div style={{ position:'absolute', bottom:24, right:-16, background:'#fff', border:'1px solid #E8DFD0', borderRadius:14, padding:'16px 22px', boxShadow:'0 8px 28px rgba(0,0,0,0.1)' }}>
                <div style={{ color:'#C0392B', fontWeight:800, fontSize:28, lineHeight:1 }}>67%</div>
                <div style={{ color:'#888', fontSize:12, marginTop:4 }}>of service businesses<br />lack a proper system</div>
              </div>
            </div>
            <div ref={textRef} style={{ opacity:textVisible?1:0, transform:textVisible?'translateX(0)':'translateX(40px)', transition:'opacity 0.8s ease, transform 0.8s ease' }}>
              <span style={{ display:'inline-block', background:'#FEF0EE', borderRadius:100, padding:'5px 14px', color:'#C0392B', fontSize:12, fontWeight:600, letterSpacing:'0.8px', textTransform:'uppercase', marginBottom:18 }}>The Problem</span>
              <h2 style={{ fontSize:'clamp(24px,3vw,38px)', fontWeight:800, color:'#1A1A1A', lineHeight:1.2, letterSpacing:'-0.8px', marginBottom:16 }}>Service Businesses Often Run on Chaos</h2>
              <p style={{ color:'#666', fontSize:16, lineHeight:1.85, marginBottom:24 }}>Many service companies operate with scattered tools and manual coordination. Without a system, growth becomes difficult — and mistakes become costly.</p>
              <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
                {problems.map(({ icon, text }, i) => (
                  <div key={text} className="pk-prob-card" style={{ display:'flex', alignItems:'flex-start', gap:14, background:'#FAFAF8', border:'1px solid #EDE8DF', borderRadius:12, padding:'14px 18px', opacity:textVisible?1:0, transform:textVisible?'translateY(0)':'translateY(16px)', transition:`opacity 0.5s ${0.1+i*0.1}s ease, transform 0.5s ${0.1+i*0.1}s ease` }}>
                    <span style={{ fontSize:20, flexShrink:0 }}>{icon}</span>
                    <span style={{ color:'#444', fontSize:14, lineHeight:1.65 }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjekcoProblem;
