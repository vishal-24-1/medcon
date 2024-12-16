import React, { useEffect, useState } from 'react';
import Overview from './components/Overview';
import Products from './components/Products';
import Regions from './components/Regions';
import Customers from './components/Customers';
import Forecast from './components/Forecast';
import Reports from './components/Reports';

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#overview');
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    document.title = "IVD Sales Analytics Dashboard";

    const handleHashChange = () => {
      const currentHash = window.location.hash || '#overview';
      setActiveHash(currentHash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { href: '#overview', icon: 'fas fa-chart-line', label: 'Overview' },
    { href: '#products', icon: 'fas fa-box', label: 'Products' },
    { href: '#regions', icon: 'fas fa-globe', label: 'Regions' },
    { href: '#customers', icon: 'fas fa-users', label: 'Customers' },
    { href: '#forecast', icon: 'fas fa-robot', label: 'Forecast' },
    { href: '#reports', icon: 'fas fa-file-alt', label: 'Reports' }
  ];

  const sectionTitle = navLinks.find(l => l.href === activeHash)?.label || 'Overview';

  return (
    <div id="root" style={{ width: '100%', minHeight: '100vh', overflow: 'hidden' }}>
      <div style={{ display: 'flex' }}>
        {/* Sidebar Navigation */}
        <nav
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            width: '16rem',
            backgroundColor: '#1f2937',
            color: 'white',
            display: isLargeScreen ? 'flex' : 'none',
            flexDirection: 'column',
            zIndex: 50
          }}
        >
          <div style={{ padding: '1rem', display: 'flex', alignItems: 'center', borderBottom: '1px solid #1f2937' }}>
            <img src="https://placehold.co/40x40?text=Logo" alt="Dashboard Logo" style={{ width: '2.5rem', height: '2.5rem', borderRadius: '9999px' }} />
            <span style={{ marginLeft: '0.75rem', fontSize: '1.25rem', fontWeight: '600' }}>Salesmine</span>
          </div>
          <div style={{ flex: 1, padding: '1.5rem 0' }}>
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.75rem 1.5rem',
                  color: link.href === activeHash ? '#ffffff' : '#d1d5db',
                  backgroundColor: link.href === activeHash ? '#374151' : 'transparent',
                  transition: 'background-color 0.2s',
                  textDecoration: 'none'
                }}
              >
                <i className={link.icon} style={{ width: '1.25rem' }}></i>
                <span style={{ marginLeft: '0.75rem' }}>{link.label}</span>
              </a>
            ))}
          </div>
          <div style={{ borderTop: '1px solid #1f2937', padding: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src="https://avatar.iran.liara.run/public" alt="Avatar" style={{ width: '2rem', height: '2rem', borderRadius: '9999px' }} />
              <div style={{ marginLeft: '0.75rem' }}>
                <p style={{ fontSize: '0.875rem', fontWeight: '500' }}>Salesmine_Admin User</p>
                <p style={{ fontSize: '0.75rem', color: '#9ca3af' }}>admin@salesmine.com</p>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Header */}
        {!isLargeScreen && (
          <div
            style={{
              display: 'block',
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              backgroundColor: '#ffffff',
              zIndex: 50,
              borderBottom: '1px solid #e5e7eb'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <button
                  style={{ padding: '0.5rem', borderRadius: '0.5rem' }}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
                <span style={{ marginLeft: '0.75rem', fontSize: '1.25rem', fontWeight: '600' }}>IVD Analytics</span>
              </div>
              <img src="https://avatar.iran.liara.run/public" alt="Avatar" style={{ width: '2rem', height: '2rem', borderRadius: '9999px' }} />
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {!isLargeScreen && mobileMenuOpen && (
          <div
            style={{
              position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(17,24,39,0.5)', zIndex: 40
            }}
            onClick={(e) => { if (e.target === e.currentTarget) setMobileMenuOpen(false); }}
          >
            <div style={{
              position: 'fixed', top: 0, left: 0, bottom: 0, width: '16rem', backgroundColor: '#ffffff',
              transform: 'translateX(0)', transition: 'transform 0.3s'
            }}>
              <div style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>
                <strong>Menu</strong>
              </div>
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    display: 'block',
                    padding: '0.75rem 1.5rem',
                    color: link.href === activeHash ? '#000000' : '#4b5563',
                    textDecoration: 'none'
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Main Content */}
        <main
          style={{
            flex: 1,
            overflowY: 'auto',
            backgroundColor: '#f3f4f6',
            marginLeft: isLargeScreen ? '16rem' : '0',
            paddingTop: isLargeScreen ? '0' : '4rem'
          }}
        >
          {/* Header - visible on large screens */}
          {isLargeScreen && (
            <header style={{
              backgroundColor: '#ffffff', borderBottom: '1px solid #e5e7eb',
              position: 'sticky', top: 0, zIndex: 40
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: '600' }}>{sectionTitle}</h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="search"
                      placeholder="Search..."
                      style={{
                        paddingLeft: '2.5rem', paddingRight: '1rem', paddingTop: '0.5rem', paddingBottom: '0.5rem',
                        border: '1px solid #d1d5db', borderRadius: '0.5rem', width: '16rem', fontSize: '0.875rem'
                      }}
                    />
                    <i className="fas fa-search"
                      style={{ position: 'absolute', left: '0.75rem', top: '0.75rem', color: '#9ca3af' }}></i>
                  </div>
                  <button style={{ padding: '0.5rem', borderRadius: '0.5rem' }}>
                    <i className="fas fa-bell" style={{ color: '#4b5563' }}></i>
                  </button>
                </div>
              </div>
            </header>
          )}

          {/* Conditionally render pages based on activeHash */}
          {activeHash === '#overview' && <Overview />}
          {activeHash === '#products' && <Products />}
          {activeHash === '#regions' && <Regions />}
          {activeHash === '#customers' && <Customers />}
          {activeHash === '#forecast' && <Forecast />}
          {activeHash === '#reports' && <Reports />}

        </main>
      </div>
    </div>
  );
};

export default App;
