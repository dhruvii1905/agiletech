'use client';
import React from 'react';
import { useScrollReveal } from './useScrollReveal';

const ProjekcoStory = () => {
  const [imgRef, imgVisible] = useScrollReveal();
  const [textRef, textVisible] = useScrollReveal();

  return (
    <>
      <style>{`
        @media(max-width:768px){.pk-grid-2{grid-template-columns:1fr!important;gap:40px!important}}
        .pk-story-tile { transition: transform 0.25s, box-shadow 0.25s; }
        .pk-story-tile:hover { transform:translateY(-4px); box-shadow:0 8px 24px rgba(0,0,0,0.08)!important; }
      `}</style>
      <section id="story" style={{ background:'#F5F0E8', padding:'100px 24px', borderBottom:'1px solid #E8DFD0', overflow:'hidden' }}>
        <div style={{ maxWidth:1140, margin:'0 auto' }}>
          <div className="pk-grid-2" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:72, alignItems:'center' }}>

            {/* Image */}
            <div ref={imgRef} style={{ position:'relative', opacity:imgVisible?1:0, transform:imgVisible?'translateX(0)':'translateX(-40px)', transition:'opacity 0.8s ease, transform 0.8s ease' }}>
              <img src="/assets/img/about/5.png" alt="Built by operators" style={{ width:'100%', borderRadius:20, objectFit:'cover', boxShadow:'0 16px 48px rgba(0,0,0,0.1)' }} />
              <div style={{ position:'absolute', bottom:24, left:-16, background:'#fff', border:'1px solid #E8DFD0', borderRadius:14, padding:'16px 22px', boxShadow:'0 8px 28px rgba(0,0,0,0.1)', maxWidth:200 }}>
                <div style={{ color:'#8B7355', fontWeight:800, fontSize:24, lineHeight:1 }}>10+ Years</div>
                <div style={{ color:'#888', fontSize:12, marginTop:4 }}>of real operational<br />experience</div>
              </div>
            </div>

            {/* Text */}
            <div ref={textRef} style={{ opacity:textVisible?1:0, transform:textVisible?'translateX(0)':'translateX(40px)', transition:'opacity 0.8s ease, transform 0.8s ease' }}>
              <span style={{ display:'inline-block', background:'#EDE8DF', borderRadius:100, padding:'5px 14px', color:'#6B5E4E', fontSize:12, fontWeight:600, letterSpacing:'0.8px', textTransform:'uppercase', marginBottom:18 }}>Our Story</span>
              <h2 style={{ fontSize:'clamp(24px,3vw,38px)', fontWeight:800, color:'#1A1A1A', lineHeight:1.2, letterSpacing:'-0.8px', marginBottom:18 }}>Built by Service Operators</h2>
              <p style={{ color:'#666', fontSize:16, lineHeight:1.85, marginBottom:18 }}>
                Projekco was created out of the real challenges faced by service business operators. Running a service company requires managing people, schedules, projects, and clients simultaneously.
              </p>
              <p style={{ color:'#666', fontSize:16, lineHeight:1.85, marginBottom:32 }}>
                Inspired by years of operational experience in pest control, cleaning, and property maintenance, Projekco was developed to transform service operations into a structured, practical system.
              </p>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12 }}>
                {[['Pest Control','Operational experience'],['Cleaning Services','Real-world workflows'],['Property Maintenance','Practical systems']].map(([title, sub], i) => (
                  <div key={title} className="pk-story-tile" style={{
                    background:'#fff', border:'1px solid #E8DFD0', borderRadius:12, padding:'18px 14px', textAlign:'center',
                    opacity:textVisible?1:0, transform:textVisible?'translateY(0)':'translateY(20px)',
                    transition:`opacity 0.5s ${0.2+i*0.1}s ease, transform 0.5s ${0.2+i*0.1}s ease`,
                  }}>
                    <div style={{ color:'#1A1A1A', fontWeight:700, fontSize:13, marginBottom:4 }}>{title}</div>
                    <div style={{ color:'#999', fontSize:12 }}>{sub}</div>
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

export default ProjekcoStory;
