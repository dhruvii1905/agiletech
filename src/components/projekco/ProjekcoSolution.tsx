'use client';
import React from 'react';
import { useScrollReveal } from './useScrollReveal';

const outcomes = [
  { num:'01', label:'Your team works with clarity', desc:'Everyone knows their assignments, schedules, and priorities.' },
  { num:'02', label:'Your operations become visible', desc:"See what's happening across all teams and locations." },
  { num:'03', label:'Your service becomes consistent', desc:'Deliver the same professional standard on every single job.' },
];

const ProjekcoSolution = () => {
  const [textRef, textVisible] = useScrollReveal();
  const [imgRef, imgVisible] = useScrollReveal();

  return (
    <>
      <style>{`
        @media(max-width:768px){.pk-grid-2{grid-template-columns:1fr!important;gap:40px!important}}
        .pk-outcome { transition: transform 0.25s, box-shadow 0.25s; border-radius:12px; padding:16px; }
        .pk-outcome:hover { transform:translateY(-3px); background:#fff; box-shadow:0 6px 20px rgba(0,0,0,0.07); }
      `}</style>
      <section style={{ background:'#F5F0E8', padding:'100px 24px', borderBottom:'1px solid #E8DFD0', overflow:'hidden' }}>
        <div style={{ maxWidth:1140, margin:'0 auto' }}>
          <div className="pk-grid-2" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:72, alignItems:'center' }}>

            {/* Text */}
            <div ref={textRef} style={{ opacity:textVisible?1:0, transform:textVisible?'translateX(0)':'translateX(-40px)', transition:'opacity 0.8s ease, transform 0.8s ease' }}>
              <span style={{ display:'inline-block', background:'#EDE8DF', borderRadius:100, padding:'5px 14px', color:'#6B5E4E', fontSize:12, fontWeight:600, letterSpacing:'0.8px', textTransform:'uppercase', marginBottom:18 }}>The Solution</span>
              <h2 style={{ fontSize:'clamp(24px,3vw,38px)', fontWeight:800, color:'#1A1A1A', lineHeight:1.2, letterSpacing:'-0.8px', marginBottom:16 }}>
                A System Built for Service Operations
              </h2>
              <p style={{ color:'#666', fontSize:16, lineHeight:1.85, marginBottom:32 }}>
                Projekco organizes your business into a structured system — from job scheduling to team coordination and service reporting, everything centralized in one platform.
              </p>
              <div style={{ display:'flex', flexDirection:'column', gap:4 }}>
                {outcomes.map(({ num, label, desc }, i) => (
                  <div key={num} className="pk-outcome" style={{
                    display:'flex', gap:16, alignItems:'flex-start',
                    opacity:textVisible?1:0, transform:textVisible?'translateY(0)':'translateY(20px)',
                    transition:`opacity 0.5s ${0.15 + i*0.12}s ease, transform 0.5s ${0.15 + i*0.12}s ease`,
                  }}>
                    <div style={{ width:38, height:38, borderRadius:10, background:'#fff', border:'1px solid #E8DFD0', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700, fontSize:12, color:'#8B7355', flexShrink:0 }}>{num}</div>
                    <div>
                      <div style={{ color:'#1A1A1A', fontWeight:700, fontSize:15, marginBottom:4 }}>{label}</div>
                      <div style={{ color:'#777', fontSize:14, lineHeight:1.65 }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div ref={imgRef} style={{ position:'relative', opacity:imgVisible?1:0, transform:imgVisible?'translateX(0)':'translateX(40px)', transition:'opacity 0.8s ease, transform 0.8s ease' }}>
              <img src="/assets/img/about/7.png" alt="Structured system" style={{ width:'100%', borderRadius:20, objectFit:'cover', boxShadow:'0 16px 48px rgba(0,0,0,0.1)' }} />
              <img src="/assets/img/about/2.png" alt="Team" style={{ position:'absolute', top:-20, left:-20, width:110, height:110, borderRadius:14, objectFit:'cover', border:'4px solid #F5F0E8', boxShadow:'0 8px 24px rgba(0,0,0,0.12)' }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjekcoSolution;
