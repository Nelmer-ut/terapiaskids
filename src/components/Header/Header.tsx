import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        <div className="brand">
          <img src="/src/assets/images/logo.jpeg" alt="TerapiasKids Logo" className="logo-img" onError={(e) => {
            // Fallback si la imagen no se encuentra
            (e.target as HTMLElement).style.display = 'none';
          }} />
          <div>
            <h1 className="brand-title">TerapiasKids</h1>
            <p className="brand-subtitle">Bienestar y Psicología Creativa</p>
          </div>
        </div>
        <div className="header-info">
          <span>Psicóloga Elizabeth Rivero Arias</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
