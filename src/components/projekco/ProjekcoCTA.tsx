'use client';
import React from 'react';
import { useScrollReveal } from './useScrollReveal';

const ProjekcoCTA = () => {
  const [ref, visible] = useScrollReveal(0.2);

  return (
    <>
      <style>{`
        @keyframes pk-ctaPulse { 0%,100%{transform:scale(1) translate(-50%,-50%)} 50%{transform:scale(1.08) translate(-50%,-50%)} }
        .pk-cta-btn-primary { transition: transform 0.2s, box-shadow 0.2s; }
        .pk-cta-btn-primary:hover { transform:translateY(-3px); box-shadow:0 10px 28px rgba(0,0,0,0.2)!important; }
        .pk-cta-btn-secondary { transition: background 0.2s, border-color 0.2s; }
        .pk-cta-btn-secondary:hover { background:#EDE8DF!important; border-color:#8B7355!important; }
      `}</style>
      <section id="demo" style={{ background:'#fff', padding:'100px 24px', borderBottom:'1px solid #E8DFD0' }}>
        <div ref={ref} style={{ maxWidth:'100%', margin:'0 auto', textAlign:'center', opacity:visible?1:0, transform:visible?'translateY(0)':'translateY(40px)', transition:'opacity 0.8s ease, transform 0.8s ease' }}>
          <div style={{ background:'linear-gradient(135deg, #F5F0E8 0%, #EDE8DF 100%)', border:'1px solid #E8DFD0', borderRadius:24, padding:'72px 48px', position:'relative', overflow:'hidden' }}>

            {/* Decorative circle */}
            <div style={{ position:'absolute', top:'50%', left:'50%', width:400, height:400, borderRadius:'50%', background:'rgba(139,115,85,0.06)', animation:'pk-ctaPulse 4s ease-in-out infinite', pointerEvents:'none' }} />

            <span style={{ display:'inline-block', background:'#fff', border:'1px solid #E8DFD0', borderRadius:100, padding:'5px 16px', color:'#6B5E4E', fontSize:12, fontWeight:600, letterSpacing:'0.8px', textTransform:'uppercase', marginBottom:20, position:'relative' }}>Get Started</span>

            <h2 style={{ fontSize:'clamp(26px,3.5vw,44px)', fontWeight:800, color:'#1A1A1A', lineHeight:1.15, letterSpacing:'-1px', marginBottom:16, position:'relative' }}>
              Turn Your Business<br />Into a System
            </h2>
            <p style={{ color:'#666', fontSize:17, lineHeight:1.8, maxWidth:'100%', margin:'0 auto 40px', position:'relative' }}>
              Stop relying on scattered tools and manual coordination.
              Run your operations with clarity, structure, and confidence.
            </p>
            <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap', position:'relative' }}>
              <a href="#" className="pk-cta-btn-primary" style={{ padding:'15px 36px', borderRadius:10, background:'#2D2D2D', color:'#fff', textDecoration:'none', fontWeight:700, fontSize:16, display:'inline-block' }}>Request a Demo</a>
              <a href="#features" className="pk-cta-btn-secondary" style={{ padding:'15px 36px', borderRadius:10, background:'#fff', border:'1.5px solid #C8BFB0', color:'#2D2D2D', textDecoration:'none', fontWeight:600, fontSize:16, display:'inline-block' }}>Learn More</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjekcoCTA;
