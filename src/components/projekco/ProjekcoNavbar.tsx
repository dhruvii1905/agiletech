'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const ProjekcoNavbar = () => {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll('.menu-item-has-children > a');
    const handleClick = (event) => {
      event.preventDefault();
      const subMenu = event.currentTarget.parentElement?.querySelector('.sub-menu');
      if (subMenu) {
        subMenu.classList.toggle('active');
        event.currentTarget.classList.toggle('open');
      }
    };
    items.forEach(item => item.addEventListener('click', handleClick));
    return () => items.forEach(item => item.removeEventListener('click', handleClick));
  }, []);

  return (
    <>
      <style>{`
        .pk-navbar { position:fixed;top:0;left:0;right:0;z-index:1000;background:rgba(255,252,247,0.97);border-bottom:1px solid #E8DFD0;backdrop-filter:blur(12px);transition:box-shadow 0.3s; }
        .pk-navbar.scrolled { box-shadow:0 2px 16px rgba(0,0,0,0.07); }
        .pk-nav-inner { max-width:1140px;margin:0 auto;padding:0 24px;display:flex;align-items:center;justify-content:space-between;height:88px; }
        .pk-logo img { height:72px;width:auto;object-fit:contain; }
        .pk-nav-links { display:flex;gap:28px;list-style:none;margin:0;padding:0; }
        .pk-nav-links li a { color:#444;text-decoration:none;font-size:15px;font-weight:500;transition:color 0.2s; }
        .pk-nav-links li a:hover { color:#8B7355; }
        .pk-nav-links li.menu-item-has-children { position:relative; }
        .pk-nav-links li.menu-item-has-children .sub-menu { display:none;position:absolute;top:100%;left:0;background:#fff;border:1px solid #E8DFD0;border-radius:10px;padding:10px 0;min-width:220px;box-shadow:0 8px 28px rgba(0,0,0,0.1);z-index:100; }
        .pk-nav-links li.menu-item-has-children:hover .sub-menu { display:block; }
        .pk-nav-links .sub-menu li a { padding:9px 18px;display:block;color:#555;font-size:14px;white-space:nowrap; }
        .pk-nav-links .sub-menu li a:hover { background:#F5F0E8;color:#8B7355; }
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
        .pk-mobile-menu { display:none;flex-direction:column;background:#fff;border-top:1px solid #E8DFD0;padding:16px 24px 20px; }
        .pk-mobile-menu li { list-style:none;border-bottom:1px solid #F0EBE3; }
        .pk-mobile-menu li:last-child { border-bottom:none; }
        .pk-mobile-menu li a { display:block;padding:12px 0;color:#333;font-size:15px;font-weight:500;text-decoration:none; }
        .pk-mobile-btns { display:flex;gap:10px;padding-top:16px;flex-wrap:wrap; }
      `}</style>

      <nav className={`pk-navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="pk-nav-inner">
          <Link href="/" className="pk-logo" style={{ textDecoration: 'none' }}>
            <img src="https://i.ibb.co/TD0hB3Kt/viber-image-2026-01-24-12-19-58-986.png" alt="Projekco" />
          </Link>

          <ul className="pk-nav-links">
            <li><Link href="/">Home</Link></li>
            <li className="menu-item-has-children">
              <Link href="/service">Service</Link>
              <ul className="sub-menu">
                <li><Link href="/">Pest Control Companies</Link></li>
                <li><Link href="/">Cleaning Service Providers</Link></li>
                <li><Link href="/">Handyman &amp; Maintenance Teams</Link></li>
                <li><Link href="/">Property Maintenance Companies</Link></li>
                <li><Link href="/">Facility Service Contractors</Link></li>
              </ul>
            </li>
            <li><Link href="/">Blog</Link></li>
            <li><Link href="#features">Features</Link></li>
            <li><Link href="/">Contact Us</Link></li>
          </ul>

          <div className="pk-nav-right">
            <Link href="/" className="pk-btn-login">Log In</Link>
            <Link href="/" className="pk-btn-demo">
              Request a Demo <FaPlus size={11} />
            </Link>
          </div>

          <button
            className={`pk-hamburger${active ? ' open' : ''}`}
            onClick={() => setActive(!active)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>

        {active && (
          <ul className="pk-mobile-menu">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/service">Service</Link></li>
            <li><Link href="/">Pest Control Companies</Link></li>
            <li><Link href="/">Cleaning Service Providers</Link></li>
            <li><Link href="/">Handyman &amp; Maintenance Teams</Link></li>
            <li><Link href="/">Property Maintenance Companies</Link></li>
            <li><Link href="/">Facility Service Contractors</Link></li>
            <li><Link href="/">Blog</Link></li>
            <li><Link href="#features">Features</Link></li>
            <li><Link href="/">Contact Us</Link></li>
            <li>
              <div className="pk-mobile-btns">
                <Link href="/login" className="pk-btn-login">Log In</Link>
                <Link href="/request-demo" className="pk-btn-demo">Request a Demo <FaPlus size={11} /></Link>
              </div>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default ProjekcoNavbar;
