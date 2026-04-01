'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ProjekcoNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: 'rgba(255,252,247,0.97)',
        borderBottom: '1px solid #E8DFD0',
        backdropFilter: 'blur(12px)',
        boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.07)' : 'none',
        transition: 'box-shadow 0.3s',
      }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>

          {/* Logo */}
          <Link href="/projekco" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 34, height: 34, borderRadius: 8, background: '#2D2D2D',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontWeight: 800, fontSize: 16,
            }}>P</div>
            <span style={{ color: '#1A1A1A', fontWeight: 700, fontSize: 18, letterSpacing: '-0.3px' }}>Projekco</span>
          </Link>

          {/* Nav links */}
          <ul className="pk-nav-links" style={{ display: 'flex', gap: 32, listStyle: 'none', margin: 0, padding: 0 }}>
            {[['Features', '#features'], ["Who It's For", '#for'], ['Pricing', '#pricing'], ['Our Story', '#story']].map(([label, href]) => (
              <li key={label}>
                <a href={href} style={{ color: '#555', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>{label}</a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a href="#demo" style={{
            padding: '10px 22px', borderRadius: 8,
            background: '#2D2D2D', color: '#fff',
            textDecoration: 'none', fontWeight: 600, fontSize: 14,
          }}>Request a Demo</a>
        </div>
      </nav>
      <style>{`.pk-nav-links{display:flex!important}@media(max-width:768px){.pk-nav-links{display:none!important}}`}</style>
    </>
  );
};

export default ProjekcoNavbar;
