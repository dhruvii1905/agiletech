'use client';
import React, { useEffect, useRef } from 'react';

const ProjekcoHero = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    let frame;
    let angle = 0;
    const float = () => {
      angle += 0.02;
      el.style.transform = `translateY(${Math.sin(angle) * 10}px)`;
      frame = requestAnimationFrame(float);
    };
    frame = requestAnimationFrame(float);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      <style>{`
        @keyframes pk-fadeUp { from { opacity:0; transform:translateY(32px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pk-fadeIn { from { opacity:0; } to { opacity:1; } }
        @keyframes pk-slideRight { from { opacity:0; transform:translateX(-32px); } to { opacity:1; transform:translateX(0); } }
        @keyframes pk-slideLeft { from { opacity:0; transform:translateX(32px); } to { opacity:1; transform:translateX(0); } }
        @keyframes pk-pulse { 0%,100%{transform:scale(1);} 50%{transform:scale(1.04);} }
        .pk-hero-badge { animation: pk-fadeUp 0.6s ease both; }
        .pk-hero-h1 { animation: pk-fadeUp 0.7s 0.1s ease both; }
        .pk-hero-p { animation: pk-fadeUp 0.7s 0.2s ease both; }
        .pk-hero-btns { animation: pk-fadeUp 0.7s 0.3s ease both; }
        .pk-hero-stats { animation: pk-fadeUp 0.7s 0.4s ease both; }
        .pk-hero-img { animation: pk-slideLeft 0.9s 0.2s ease both; }
        .pk-hero-badge2 { animation: pk-fadeIn 1.2s 0.6s ease both; }
        .pk-btn-primary { transition: transform 0.2s, box-shadow 0.2s; }
        .pk-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.18); }
        .pk-btn-secondary { transition: background 0.2s, border-color 0.2s; }
        .pk-btn-secondary:hover { background: #EDE8DF !important; border-color: #8B7355 !important; }
        @media(max-width:900px){ .pk-hero-grid{ grid-template-columns:1fr!important; } }
      `}</style>

      <section style={{
        background: 'linear-gradient(150deg, #FFFCF7 0%, #F5F0E8 60%, #EDE8DF 100%)',
        padding: '140px 24px 100px',
        borderBottom: '1px solid #E8DFD0',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {/* Decorative circles */}
        <div style={{ position:'absolute', top:-80, right:-80, width:320, height:320, borderRadius:'50%', background:'rgba(139,115,85,0.07)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:-60, left:-60, width:240, height:240, borderRadius:'50%', background:'rgba(139,115,85,0.05)', pointerEvents:'none' }} />

        <div className="pk-hero-grid" style={{ maxWidth:1140, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center' }}>
          {/* Left */}
          <div>
            <span className="pk-hero-badge" style={{ display:'inline-block', background:'#EDE8DF', borderRadius:100, padding:'6px 18px', marginBottom:24, color:'#6B5E4E', fontSize:13, fontWeight:600, letterSpacing:'0.4px' }}>
              Operations Management for Service Businesses
            </span>
            <h1 className="pk-hero-h1" style={{ fontSize:'clamp(34px,4.5vw,58px)', fontWeight:800, color:'#1A1A1A', lineHeight:1.1, letterSpacing:'-2px', marginBottom:20 }}>
              Run Your Service<br />Business{' '}
              <span style={{ color:'#8B7355', borderBottom:'3px solid #D4B896', paddingBottom:2 }}>Like a System</span>
            </h1>
            <p className="pk-hero-p" style={{ fontSize:17, color:'#666', lineHeight:1.85, marginBottom:36, maxWidth:480 }}>
              Projekco is built for pest control, cleaning, and handyman businesses.
              Manage jobs, teams, clients, and reports — all in one place.
            </p>
            <div className="pk-hero-btns" style={{ display:'flex', gap:14, flexWrap:'wrap', marginBottom:48 }}>
              <a href="#demo" className="pk-btn-primary" style={{ padding:'14px 34px', borderRadius:10, background:'#2D2D2D', color:'#fff', textDecoration:'none', fontWeight:700, fontSize:15, display:'inline-block' }}>Start a Demo</a>
              <a href="#features" className="pk-btn-secondary" style={{ padding:'14px 34px', borderRadius:10, background:'transparent', border:'1.5px solid #C8BFB0', color:'#2D2D2D', textDecoration:'none', fontWeight:600, fontSize:15, display:'inline-block' }}>Learn More</a>
            </div>
            <div className="pk-hero-stats" style={{ display:'flex', gap:36, flexWrap:'wrap', paddingTop:28, borderTop:'1px solid #E8DFD0' }}>
              {[['Job Management','Scheduling to completion'],['Team Coordination','Every tech, every job'],['Service Reports','Professional docs']].map(([t,s]) => (
                <div key={t}>
                  <div style={{ color:'#1A1A1A', fontWeight:700, fontSize:14, marginBottom:3 }}>{t}</div>
                  <div style={{ color:'#999', fontSize:12 }}>{s}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="pk-hero-img" style={{ position:'relative', display:'flex', justifyContent:'center' }}>
            <div ref={imgRef} style={{ width:'100%', maxWidth:520 }}>
              <img src="/assets/img/banner/1.png" alt="Projekco Dashboard" style={{ width:'100%', borderRadius:20, objectFit:'cover', boxShadow:'0 24px 64px rgba(0,0,0,0.14)' }} />
            </div>
            <div className="pk-hero-badge2" style={{ position:'absolute', bottom:-10, left:0, background:'#fff', border:'1px solid #E8DFD0', borderRadius:14, padding:'14px 20px', boxShadow:'0 8px 28px rgba(0,0,0,0.1)' }}>
              <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                <div style={{ width:36, height:36, borderRadius:9, background:'#F5F0E8', display:'flex', alignItems:'center', justifyContent:'center', fontSize:18 }}>✅</div>
                <div>
                  <div style={{ color:'#1A1A1A', fontWeight:700, fontSize:13 }}>Jobs Completed</div>
                  <div style={{ color:'#8B7355', fontWeight:800, fontSize:18 }}>1,240+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjekcoHero;
