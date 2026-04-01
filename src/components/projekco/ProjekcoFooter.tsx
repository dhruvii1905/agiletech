'use client';
import Link from 'next/link';
import React from 'react';
import {
  FaChevronRight, FaEnvelope, FaFacebookF, FaInstagram,
  FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaTwitter,
} from 'react-icons/fa';

const ProjekcoFooter: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        .pk-footer { background: #F5F0E8; border-top: 1px solid #E8DFD0; padding: 72px 24px 0; font-family: 'Inter','Segoe UI',sans-serif; }
        .pk-footer-inner { max-width: 1140px; margin: 0 auto; }
        .pk-footer-grid { display: grid; grid-template-columns: 1.2fr 1fr 1fr 1.2fr; gap: 48px; padding-bottom: 56px; }
        .pk-footer-logo { height: 80px; width: auto; object-fit: contain; display: block; margin-bottom: 16px; }
        .pk-footer-desc { color: #777; font-size: 14px; line-height: 1.75; margin-bottom: 20px; }
        .pk-subscribe { display: flex; border: 1px solid #E8DFD0; border-radius: 8px; overflow: hidden; background: #fff; }
        .pk-subscribe input { flex: 1; border: none; outline: none; padding: 10px 14px; font-size: 14px; background: transparent; color: #333; }
        .pk-subscribe button { background: #2D2D2D; border: none; color: #fff; padding: 10px 14px; cursor: pointer; display: flex; align-items: center; transition: opacity 0.2s; }
        .pk-subscribe button:hover { opacity: 0.85; }
        .pk-footer-title { color: #1A1A1A; font-size: 13px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 20px; }
        .pk-footer-links { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
        .pk-footer-links li a { color: #666; font-size: 14px; text-decoration: none; display: flex; align-items: center; gap: 7px; transition: color 0.2s; }
        .pk-footer-links li a:hover { color: #8B7355; }
        .pk-footer-links li a svg { font-size: 10px; color: #8B7355; flex-shrink: 0; }
        .pk-contact-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; }
        .pk-contact-list li { display: flex; align-items: flex-start; gap: 10px; color: #666; font-size: 14px; line-height: 1.6; }
        .pk-contact-list li svg { color: #8B7355; flex-shrink: 0; margin-top: 3px; }
        .pk-social { display: flex; gap: 10px; margin-top: 20px; }
        .pk-social a { width: 36px; height: 36px; border-radius: 8px; background: #EDE8DF; display: flex; align-items: center; justify-content: center; color: #6B5E4E; font-size: 14px; text-decoration: none; transition: background 0.2s, color 0.2s; }
        .pk-social a:hover { background: #2D2D2D; color: #fff; }
        .pk-footer-bottom { border-top: 1px solid #E8DFD0; padding: 20px 0; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }
        .pk-footer-bottom p { color: #AAA; font-size: 13px; margin: 0; }
        .pk-footer-tagline { color: #8B7355 !important; font-weight: 600; font-style: italic; }
        .pk-footer-bottom-links { display: flex; gap: 20px; }
        .pk-footer-bottom-links a { color: #AAA; font-size: 13px; text-decoration: none; transition: color 0.2s; }
        .pk-footer-bottom-links a:hover { color: #8B7355; }
        @media(max-width: 900px) { .pk-footer-grid { grid-template-columns: 1fr 1fr; gap: 36px; } }
        @media(max-width: 560px) { .pk-footer-grid { grid-template-columns: 1fr; } .pk-footer-bottom { flex-direction: column; text-align: center; } }
      `}</style>

      <footer className="pk-footer">
        <div className="pk-footer-inner">
          <div className="pk-footer-grid">

            {/* Col 1 — Brand */}
            <div>
              <img
                src="https://i.ibb.co/TD0hB3Kt/viber-image-2026-01-24-12-19-58-986.png"
                alt="Projekco"
                className="pk-footer-logo"
              />
              <p className="pk-footer-desc">
                Projekco is an operations management platform built for service businesses —
                pest control, cleaning, and handyman teams. Systemize your service.
              </p>
              <div className="pk-subscribe">
                <input type="email" placeholder="Your e-mail address" />
                <button aria-label="Subscribe"><FaChevronRight /></button>
              </div>
            </div>

            {/* Col 2 — Platform */}
            <div>
              <h5 className="pk-footer-title">Platform</h5>
              <ul className="pk-footer-links">
                {[
                  ['Features', '#features'],
                  ["Who It's For", '#for'],
                  ['Pricing', '#pricing'],
                  ['Our Story', '#story'],
                  ['Request a Demo', '#demo'],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link href={href}><FaChevronRight />{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Company */}
            <div>
              <h5 className="pk-footer-title">Company</h5>
              <ul className="pk-footer-links">
                {[
                  ['About Projekco', '#story'],
                  ['How It Works', '#features'],
                  ['Contact Us', '#demo'],
                  ['Terms & Conditions', '#'],
                  ['Privacy Policy', '#'],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link href={href}><FaChevronRight />{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Contact */}
            <div>
              <h5 className="pk-footer-title">Contact Us</h5>
              <ul className="pk-contact-list">
                <li>
                  <FaMapMarkerAlt />
                  <span>Projekco — Available Worldwide<br />Remote-first Operations Platform</span>
                </li>
                <li>
                  <FaEnvelope />
                  <a href="mailto:hello@projekco.com" style={{ color: '#666', textDecoration: 'none' }}>
                    hello@projekco.com
                  </a>
                </li>
                <li>
                  <FaPhoneAlt />
                  <a href="tel:+18005776535" style={{ color: '#666', textDecoration: 'none' }}>
                    +1 (800) PROJEKCO
                  </a>
                </li>
              </ul>
              <div className="pk-social">
                <Link href="#" aria-label="Facebook"><FaFacebookF /></Link>
                <Link href="#" aria-label="Twitter"><FaTwitter /></Link>
                <Link href="#" aria-label="Instagram"><FaInstagram /></Link>
                <Link href="#" aria-label="LinkedIn"><FaLinkedinIn /></Link>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pk-footer-bottom">
            <p>© {year} Projekco. All Rights Reserved.</p>
            <p className="pk-footer-tagline">Where Service Becomes a System.</p>
            <div className="pk-footer-bottom-links">
              <Link href="#">Terms &amp; Conditions</Link>
              <Link href="#">Privacy Policy</Link>
              <Link href="#demo">Contact Us</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ProjekcoFooter;
