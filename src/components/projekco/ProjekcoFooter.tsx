'use client';
import Link from 'next/link';
import React from 'react';
import {
  FaChevronRight, FaEnvelope, FaFacebookF, FaInstagram,
  FaMapMarkedAlt, FaPhoneAlt, FaTwitter, FaYoutube,
} from 'react-icons/fa';

const ProjekcoFooter = () => {
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
        .pk-footer-bottom-links { display: flex; gap: 20px; }
        .pk-footer-bottom-links a { color: #AAA; font-size: 13px; text-decoration: none; transition: color 0.2s; }
        .pk-footer-bottom-links a:hover { color: #8B7355; }
        @media(max-width: 900px) { .pk-footer-grid { grid-template-columns: 1fr 1fr; gap: 36px; } }
        @media(max-width: 560px) { .pk-footer-grid { grid-template-columns: 1fr; } .pk-footer-bottom { flex-direction: column; text-align: center; } }
      `}</style>

      <footer className="pk-footer">
        <div className="pk-footer-inner">
          <div className="pk-footer-grid">

            {/* Brand */}
            <div>
              <img
                src="https://i.ibb.co/TD0hB3Kt/viber-image-2026-01-24-12-19-58-986.png"
                alt="Projekco"
                className="pk-footer-logo"
              />
              <p className="pk-footer-desc">
                Where Service Becomes a System. Built for pest control, cleaning, and handyman businesses.
              </p>
              <div className="pk-subscribe">
                <input type="text" placeholder="Your e-mail address" />
                <button><FaChevronRight /></button>
              </div>
            </div>

            {/* Services */}
            <div>
              <h5 className="pk-footer-title">Services</h5>
              <ul className="pk-footer-links">
                {['Pest Control Companies', 'Cleaning Service Providers', 'Handyman & Maintenance Teams', 'Property Maintenance Companies', 'Facility Service Contractors'].map(s => (
                  <li key={s}><Link href="/"><FaChevronRight />{s}</Link></li>
                ))}
              </ul>
            </div>

            {/* Home */}
            <div>
              <h5 className="pk-footer-title">Home</h5>
              <ul className="pk-footer-links">
                {[['About Us', '/'], ['Contact Us', '/'], ['Features', '#features'], ['Pricing', '#pricing'], ['Our Story', '#story']].map(([label, href]) => (
                  <li key={label}><Link href={href}><FaChevronRight />{label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5 className="pk-footer-title">Contact Us</h5>
              <ul className="pk-contact-list">
                <li><FaMapMarkedAlt />290 Aguirre Avenue, BF Homes, Parañaque City 1720</li>
                <li><FaPhoneAlt />+63 917 155 6521</li>
                <li><FaPhoneAlt />+8-72166521</li>
                <li><FaEnvelope />info@mrbutler.com.ph</li>
              </ul>
              <div className="pk-social">
                <Link href="https://www.facebook.com/GetMrButler" target="_blank"><FaFacebookF /></Link>
                <Link href="https://www.instagram.com/getmrbutler/" target="_blank"><FaInstagram /></Link>
                <Link href="https://www.youtube.com/channel/UCos-l8cZagUUwNArHcI6p7A" target="_blank"><FaYoutube /></Link>
                <Link href="https://x.com/getmrbutler" target="_blank"><FaTwitter /></Link>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pk-footer-bottom">
            <p>© Projekco 2024 | All Rights Reserved</p>
            <div className="pk-footer-bottom-links">
              <Link href="#">Terms &amp; Condition</Link>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Contact Us</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ProjekcoFooter;
