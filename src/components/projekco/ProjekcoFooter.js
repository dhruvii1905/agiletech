'use client';
import React from 'react';
import Link from 'next/link';

const ProjekcoFooter = () => (
  <footer style={{ background: '#F5F0E8', borderTop: '1px solid #E8DFD0', padding: '56px 24px 28px' }}>
    <div style={{ maxWidth: 1140, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 40, marginBottom: 44 }}>

        {/* Brand */}
        <div style={{ maxWidth: 260 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 7, background: '#2D2D2D',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontWeight: 800, fontSize: 15,
            }}>P</div>
            <span style={{ color: '#1A1A1A', fontWeight: 700, fontSize: 17 }}>Projekco</span>
          </div>
          <p style={{ color: '#888', fontSize: 14, lineHeight: 1.7, margin: 0 }}>
            Where Service Becomes a System.
          </p>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: 56, flexWrap: 'wrap' }}>
          {[
            { title: 'Product', links: ['Features', 'Pricing', 'Demo', 'Changelog'] },
            { title: 'Company', links: ['Our Story', 'Contact', 'Privacy Policy', 'Terms'] },
          ].map(({ title, links }) => (
            <div key={title}>
              <h5 style={{ color: '#1A1A1A', fontWeight: 700, fontSize: 12, marginBottom: 14, letterSpacing: '0.6px', textTransform: 'uppercase' }}>{title}</h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {links.map(l => (
                  <li key={l}>
                    <a href="#" style={{ color: '#888', fontSize: 14, textDecoration: 'none' }}>{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: '1px solid #E8DFD0', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
        <p style={{ color: '#AAA', fontSize: 13, margin: 0 }}>© 2024 Projekco. All rights reserved.</p>
        <p style={{ color: '#AAA', fontSize: 13, margin: 0 }}>Where Service Becomes a System.</p>
      </div>
    </div>
  </footer>
);

export default ProjekcoFooter;
