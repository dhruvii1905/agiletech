'use client';
import React from 'react';
import { useScrollReveal } from './useScrollReveal';

const features = [
  { img:'/assets/img/service/1.png', title:'Job & Project Management', desc:'Create, assign, and monitor service jobs with clear workflows, timelines, and responsibilities.', tags:['Scheduling','Status Tracking','Checklists'] },
  { img:'/assets/img/service/2.png', title:'Team Coordination', desc:'Ensure every technician knows where to go, what to do, and when the work must be completed.', tags:['Assignments','Notifications','Activity Monitor'] },
  { img:'/assets/img/service/3.png', title:'Client & Property Records', desc:'Maintain organized records of client locations, service history, and project details.', tags:['Client Database','Property Records','History'] },
  { img:'/assets/img/service/4.png', title:'Service Reports', desc:'Generate professional reports that strengthen credibility and trust with your clients.', tags:['Auto Reports','Job Summaries','Documentation'] },
  { img:'/assets/img/service/5.png', title:'Scheduling & Monitoring', desc:'Stay on top of daily operations with a clear view of all ongoing and completed jobs.', tags:['Calendar View','Live Status','Completion'] },
  { img:'/assets/img/service/6.png', title:'Operational Visibility', desc:"Know what's happening in your business at any time — across teams, projects, and locations.", tags:['Dashboard','Multi-team','Real-time'] },
];

const ProjekcoFeatures = () => {
  const [headRef, headVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal(0.05);

  return (
    <>
      <style>{`
        .pk-feat-card { transition: transform 0.3s ease, box-shadow 0.3s ease; cursor:default; }
        .pk-feat-card:hover { transform:translateY(-8px); box-shadow:0 20px 48px rgba(0,0,0,0.1)!important; }
        .pk-feat-card:hover .pk-feat-img { transform:scale(1.05); }
        .pk-feat-img { transition: transform 0.4s ease; }
        @media(max-width:900px){.pk-feat-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:600px){.pk-feat-grid{grid-template-columns:1fr!important}}
      `}</style>
      <section id="features" style={{ background:'#fff', padding:'100px 24px', borderBottom:'1px solid #E8DFD0' }}>
        <div style={{ maxWidth:1140, margin:'0 auto' }}>
          <div ref={headRef} style={{ textAlign:'center', marginBottom:60, opacity:headVisible?1:0, transform:headVisible?'translateY(0)':'translateY(30px)', transition:'opacity 0.7s ease, transform 0.7s ease' }}>
            <span style={{ display:'inline-block', background:'#F5F0E8', borderRadius:100, padding:'5px 14px', color:'#6B5E4E', fontSize:12, fontWeight:600, letterSpacing:'0.8px', textTransform:'uppercase', marginBottom:16 }}>Core Features</span>
            <h2 style={{ fontSize:'clamp(24px,3vw,44px)', fontWeight:800, color:'#1A1A1A', lineHeight:1.2, letterSpacing:'-0.8px', marginBottom:12 }}>Everything Your Operations Need</h2>
            <p style={{ color:'#666', fontSize:16, maxWidth:480, margin:'0 auto' }}>One system. Every tool your service business needs to run with clarity and consistency.</p>
          </div>
          <div ref={gridRef} className="pk-feat-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
            {features.map(({ img, title, desc, tags }, i) => (
              <div key={title} className="pk-feat-card" style={{ background:'#FAFAF8', border:'1px solid #EDE8DF', borderRadius:16, overflow:'hidden', boxShadow:'0 2px 8px rgba(0,0,0,0.04)', opacity:gridVisible?1:0, transform:gridVisible?'translateY(0)':'translateY(40px)', transition:`opacity 0.6s ${i*0.08}s ease, transform 0.6s ${i*0.08}s ease` }}>
                <div style={{ height:190, overflow:'hidden', background:'#F0EBE3' }}>
                  <img src={img} alt={title} className="pk-feat-img" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                </div>
                <div style={{ padding:'22px 22px 26px' }}>
                  <h4 style={{ color:'#1A1A1A', fontWeight:700, fontSize:16, marginBottom:8, lineHeight:1.3 }}>{title}</h4>
                  <p style={{ color:'#777', fontSize:14, lineHeight:1.7, marginBottom:16 }}>{desc}</p>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                    {tags.map(tag => (
                      <span key={tag} style={{ background:'#EDE8DF', borderRadius:6, padding:'3px 10px', color:'#6B5E4E', fontSize:12, fontWeight:500 }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjekcoFeatures;
