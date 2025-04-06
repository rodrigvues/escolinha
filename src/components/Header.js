import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        // Check window size on initial load
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header style={headerStyle}>
            <div>
                <a href="/" style={logoLinkStyle}>
                    <img src={logo} alt="Studio Mover_se Logo" style={logoStyle} />
                </a>
            </div>
            {!isMobile && (
                <nav style={navStyle}>
                    <a href="#espaco" style={linkStyle}>Nosso Espaço</a>
                    <a href="#montessori" style={linkStyle}>Montessori</a>
                    <a href="#turmas" style={linkStyle}>Turmas</a>
                    <a href="#localizacao" style={linkStyle}>Localização</a>
                </nav>
            )}
        </header>
    );
};

const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#f6f6f6',
    zIndex: 4000,
    boxSizing: 'border-box',
    height: '70px',
};

const logoLinkStyle = {
    textDecoration: 'none',
};

const logoStyle = {
    height: '80px',
    cursor: 'pointer',
    marginVertical: '2px',
    marginLeft: '20px',
};

const navStyle = {
    display: 'flex',
    gap: '20px',
    marginRight: '20px',
};

const linkStyle = {
    color: '#EB7642',
    textDecoration: 'none',
    fontSize: '14px',
    padding: '8px 12px',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
};

export default Header;
