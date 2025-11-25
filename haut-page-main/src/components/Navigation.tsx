import { Instagram, Linkedin } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <header
      style={{
        backgroundColor: '#1A1A1A',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '25px 30px',
        borderRadius: '25px',
        position: 'relative',
        zIndex: 3
      }}
    >
      <Link to="/">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/29e7c2b832b20986818c40e7a0d7e6a72a575850?width=303"
          alt="Mate logo"
          style={{ width: '151px', height: '31px' }}
        />
      </Link>

      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '20px', flex: 1 }}>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '20px' }} role="navigation">
          <Link
            to="/browse"
            style={{
              color: 'white',
              fontSize: '18px',
              textDecoration: 'none',
              fontWeight: 'normal',
              cursor: 'pointer'
            }}
          >
            Browse event
          </Link>

          <div style={{ width: '1px', height: '17px', backgroundColor: 'rgba(255, 255, 255, 0.5)' }} />

          <Link
            to="/my-events"
            style={{
              color: 'white',
              fontSize: '18px',
              textDecoration: 'none',
              fontWeight: 'normal',
              cursor: 'pointer'
            }}
          >
            My events
          </Link>

          <div style={{ width: '1px', height: '17px', backgroundColor: 'rgba(255, 255, 255, 0.5)' }} />

          <a
            href="https://wa.me/34623784429"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'white',
              fontSize: '18px',
              textDecoration: 'none',
              fontWeight: 'normal',
              cursor: 'pointer'
            }}
          >
            Contact
          </a>
        </nav>

        <div style={{ width: '1px', height: '17px', backgroundColor: 'rgba(255, 255, 255, 0.5)' }} />

        <Link
          to="/profile"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            cursor: 'pointer'
          }}
          aria-label="Profile"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>

        <div style={{ width: '1px', height: '17px', backgroundColor: 'rgba(255, 255, 255, 0.5)' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }} role="group" aria-label="Social media links">
            <a
              href="https://www.instagram.com/mateapp/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={20} color="white" />
            </a>
            <a
              href="https://www.tiktok.com/@mate.app?lang=fr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on TikTok"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/mate-app-es"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin size={20} color="white" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
