'use client';
import React from 'react';
import { useScrollReveal } from './useScrollReveal';

const industries = [
  { icon:'🐛', label:'Pest Control Companies' },
  { icon:'🧹', label:'Cleaning Service Providers' },
  { icon:'🔧', label:'Handyman & Maintenance Teams' },
  { icon:'🏢', label:'Property Maintenance Companies' },
  { icon:'🏗️', label:'Facility Service Contractors' },
];

const ProjekcoFor = () => {
  const [textRef, textVisible] = useScrollReveal();
  const [imgRef, imgVisible] = useScrollReveal();

  return (
    <>
      <style>{`
        @media(max-width:768px){.pk-grid-2{grid-template-columns:1fr!important;gap:40px!important}}
        .pk-industry-row { transition: transform 0.22s, background 0.22s, box-shadow 0.22s; }
        .pk-industry-row:hover { transform:translateX(6px); background:#fff!important; box-shadow:0 4px 16px rgba(0,0,0,0.07)!important; }
      `}</style>
      <section id="for" style={{ background:'#F5F0E8', padding:'100px 24px', borderBottom:'1px solid #E8DFD0', overflow:'hidden' }}>
        <div style={{ maxWidth:1140, margin:'0 auto' }}>
          <div className="pk-grid-2" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:72, alignItems:'center' }}>

            {/* Text */}
            <div ref={textRef} style={{ opacity:textVisible?1:0, transform:textVisible?'translateX(0)':'translateX(-40px)', transition:'opacity 0.8s ease, transform 0.8s ease' }}>
              <span style={{ display:'inline-block', background:'#EDE8DF', borderRadius:100, padding:'5px 14px', color:'#6B5E4E', fontSize:12, fontWeight:600, letterSpacing:'0.8px', textTransform:'uppercase', marginBottom:18 }}>Built For</span>
              <h2 style={{ fontSize:'clamp(24px,3vw,38px)', fontWeight:800, color:'#1A1A1A', lineHeight:1.2, letterSpacing:'-0.8px', marginBottom:16 }}>Built for Service Providers</h2>
              <p style={{ color:'#666', fontSize:16, lineHeight:1.85, marginBottom:28 }}>
                Whether you operate a small team or manage multiple service crews, Projekco provides the tools to keep everything organized and running smoothly.
              </p>
              <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:32 }}>
                {industries.map(({ icon, label }, i) => (
                  <div key={label} className="pk-industry-row" style={{
                    display:'flex', alignItems:'center', gap:14,
                    background:'#fff', border:'1px solid #E8DFD0', borderRadius:12, padding:'13px 18px',
                    opacity:textVisible?1:0, transform:textVisible?'translateY(0)':'translateY(16px)',
                    transition:`opacity 0.5s ${0.1+i*0.08}s ease, transform 0.5s ${0.1+i*0.08}s ease`,
                  }}>
                    <span style={{ fontSize:22 }}>{icon}</span>
                    <span style={{ color:'#2D2D2D', fontSize:15, fontWeight:500 }}>{label}</span>
                    <span style={{ marginLeft:'auto', color:'#B0A090', fontSize:16, fontWeight:600 }}>→</span>
                  </div>
                ))}
              </div>
              <a href="#demo" style={{ display:'inline-block', padding:'13px 30px', borderRadius:10, background:'#2D2D2D', color:'#fff', textDecoration:'none', fontWeight:600, fontSize:15, transition:'transform 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.boxShadow='0 8px 20px rgba(0,0,0,0.18)'}}
                onMouseLeave={e=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='none'}}
              >See How It Works</a>
            </div>

            {/* Image */}
            <div ref={imgRef} style={{ position:'relative', opacity:imgVisible?1:0, transform:imgVisible?'translateX(0)':'translateX(40px)', transition:'opacity 0.8s ease, transform 0.8s ease' }}>
              <img src="/assets/img/about/3.png" alt="Service providers" style={{ width:'100%', borderRadius:20, objectFit:'cover', boxShadow:'0 16px 48px rgba(0,0,0,0.1)' }} />
              <img src="/assets/img/about/4.png" alt="Team at work" style={{ position:'absolute', bottom:-16, right:-16, width:130, height:130, borderRadius:14, objectFit:'cover', border:'4px solid #F5F0E8', boxShadow:'0 8px 24px rgba(0,0,0,0.12)' }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjekcoFor;
