'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';

const ProjekcoNavbar: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <style>{`
        .pk-navbar { position:fixed;top:0;left:0;right:0;z-index:1000;background:rgba(255,252,247,0.97);border-bottom:1px solid #E8DFD0;backdrop-filter:blur(12px);transition:box-shadow 0.3s; }
        .pk-navbar.scrolled { box-shadow:0 2px 16px rgba(0,0,0,0.07); }
        .pk-nav-inner { max-width:1140px;margin:0 auto;padding:0 24px;display:flex;align-items:center;justify-content:space-between;height:88px; }
        .pk-logo img { height:72px;width:auto;object-fit:contain; }
        .pk-nav-links { display:flex;gap:28px;list-style:none;margin:0;padding:0; }
        .pk-nav-links > li > a { color:#444;text-decoration:none;font-size:15px;font-weight:500;transition:color 0.2s; }
        .pk-nav-links > li > a:hover { color:#8B7355; }
        .pk-has-sub { position:relative; }
        .pk-has-sub > a::after { content:' ▾'; font-size:11px; }
        .pk-sub-menu { display:none;position:absolute;top:calc(100% + 10px);left:0;background:#fff;border:1px solid #E8DFD0;border-radius:12px;padding:8px 0;min-width:240px;box-shadow:0 8px 32px rgba(0,0,0,0.1);z-index:200;list-style:none;margin:0; }
        .pk-has-sub:hover .pk-sub-menu { display:block; }
        .pk-sub-menu li a { display:block;padding:10px 20px;color:#555;font-size:14px;font-weight:400;text-decoration:none;transition:background 0.15s,color 0.15s; }
        .pk-sub-menu li a:hover { background:#F5F0E8;color:#8B7355; }
        .pk-nav-right { display:flex;gap:10px;align-items:center; }
        .pk-btn-login { padding:9px 20px;border-radius:8px;border:1.5px solid #C8BFB0;color:#2D2D2D;text-decoration:none;font-weight:600;font-size:14px;transition:background 0.2s; }
        .pk-btn-login:hover { background:#F5F0E8; }
        .pk-btn-demo { padding:9px 20px;border-radius:8px;background:#2D2D2D;color:#fff;text-decoration:none;font-weight:600;font-size:14px;display:flex;align-items:center;gap:7px;transition:opacity 0.2s; }
        .pk-btn-demo:hover { opacity:0.85; }
        .pk-hamburger { display:none;background:none;border:none;cursor:pointer;padding:6px;flex-direction:column;gap:5px; }
        .pk-hamburger span { display:block;width:24px;height:2.5px;background:#2D2D2D;border-radius:2px;transition:0.3s; }
        .pk-hamburger.open span:nth-child(1) { transform:rotate(45deg) translate(5px,5px); }
        .pk-hamburger.open span:nth-child(2) { opacity:0; }
        .pk-hamburger.open span:nth-child(3) { transform:rotate(-45deg) translate(5px,-5px); }
        @media(max-width:991px) { .pk-hamburger{display:flex;} .pk-nav-links{display:none!important;} .pk-nav-right{display:none;} .pk-mobile-menu{display:flex!important;} }
        .pk-mobile-menu { display:none;flex-direction:column;background:#fff;border-top:1px solid #E8DFD0;padding:16px 24px 20px;list-style:none;margin:0; }
        .pk-mobile-menu li { border-bottom:1px solid #F0EBE3; }
        .pk-mobile-menu li:last-child { border-bottom:none; }
        .pk-mobile-menu li a { display:block;padding:12px 0;color:#333;font-size:15px;font-weight:500;text-decoration:none; }
        .pk-mobile-menu li a.pk-sub-item { padding-left:16px;font-size:14px;color:#666; }
        .pk-mobile-btns { display:flex;gap:10px;padding-top:16px;flex-wrap:wrap; }
      `}</style>

      <nav className={`pk-navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="pk-nav-inner">

          {/* Logo */}
          <Link href="/" className="pk-logo" style={{ textDecoration: 'none' }}>
            <img src="https://i.ibb.co/TD0hB3Kt/viber-image-2026-01-24-12-19-58-986.png" alt="Projekco" />
          </Link>

          {/* Desktop Nav */}
          <ul className="pk-nav-links">
            <li><Link href="/">Home</Link></li>
            <li className="pk-has-sub">
              <Link href="#for">Services</Link>
              {/* <ul className="pk-sub-menu">
                <li><Link href="#for">Pest Control Companies</Link></li>
                <li><Link href="#for">Cleaning Service Providers</Link></li>
                <li><Link href="#for">Handyman &amp; Maintenance Teams</Link></li>
                <li><Link href="#for">Property Maintenance Companies</Link></li>
                <li><Link href="#for">Facility Service Contractors</Link></li>
              </ul> */}
            </li>
            <li><Link href="#features">Features</Link></li>
            <li><Link href="#pricing">Pricing</Link></li>
            <li><Link href="#story">Our Story</Link></li>
            <li><Link href="#demo">Contact Us</Link></li>
          </ul>

          {/* Desktop CTA */}
          <div className="pk-nav-right">
            <Link href="#demo" className="pk-btn-login">Log In</Link>
            <Link href="#demo" className="pk-btn-demo">
              Request a Demo <FaPlus size={11} />
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className={`pk-hamburger${active ? ' open' : ''}`}
            onClick={() => setActive(!active)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile Menu */}
        {active && (
          <ul className="pk-mobile-menu">
            <li><Link href="/" onClick={() => setActive(false)}>Home</Link></li>
            <li><Link href="#for" onClick={() => setActive(false)}>Services</Link></li>
            <li><Link href="#for" className="pk-sub-item" onClick={() => setActive(false)}>→ Pest Control Companies</Link></li>
            <li><Link href="#for" className="pk-sub-item" onClick={() => setActive(false)}>→ Cleaning Service Providers</Link></li>
            <li><Link href="#for" className="pk-sub-item" onClick={() => setActive(false)}>→ Handyman &amp; Maintenance</Link></li>
            <li><Link href="#for" className="pk-sub-item" onClick={() => setActive(false)}>→ Property Maintenance</Link></li>
            <li><Link href="#for" className="pk-sub-item" onClick={() => setActive(false)}>→ Facility Service Contractors</Link></li>
            <li><Link href="#features" onClick={() => setActive(false)}>Features</Link></li>
            <li><Link href="#pricing" onClick={() => setActive(false)}>Pricing</Link></li>
            <li><Link href="#story" onClick={() => setActive(false)}>Our Story</Link></li>
            <li><Link href="#demo" onClick={() => setActive(false)}>Contact Us</Link></li>
            <li>
              <div className="pk-mobile-btns">
                <Link href="#demo" className="pk-btn-login" onClick={() => setActive(false)}>Log In</Link>
                <Link href="#demo" className="pk-btn-demo" onClick={() => setActive(false)}>Request a Demo <FaPlus size={11} /></Link>
              </div>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default ProjekcoNavbar;
