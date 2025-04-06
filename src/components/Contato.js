import React from 'react';
import contato from '../assets/escola.jpeg';

const Contato = () => {
    return (
        <section id="contato" style={ctaSectionStyle}>
            {/* Imagem de Fundo */}
            <img src={contato} alt="Escola" style={backgroundImageStyle} />

            {/* Overlay */}
            <div style={overlayStyle}></div>

            <div style={ctaContainerStyle}>
                {/* Seção CTA */}
                <div style={ctaContentStyle}>
                    <h1 style={ctaTitleStyle}>Matricule-se Já!</h1>
                    <p style={ctaSubtitleStyle}>
                        Garanta a vaga do seu pequeno para as turmas de 2025. Entre em contato e saiba mais!
                    </p>
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={ctaButtonStyle}
                    >
                        Garanta sua vaga!
                    </a>
                </div>

                {/* Seção Contato */}
                <div style={contactInfoStyle}>
                    <h2 style={contactTitleStyle}>Nossos Contatos</h2>
                    <p><strong>📞 WhatsApp:</strong> <a href="/" style={contactLinkStyle}>(XX) X XXXX-XXXX</a></p>
                    <p><strong>📷 Instagram:</strong> <a href="/" target="_blank" style={contactLinkStyle}>@exemplo</a></p>
                    <p><strong>📘 Facebook:</strong> <a href="/" target="_blank" style={contactLinkStyle}>exemplo</a></p>
                    <p><strong>🕒 Horário:</strong> Segunda a Sexta, 06:30 - 19:30</p>
                </div>
            </div>
        </section>
    );
};

// Estilos
const ctaSectionStyle = {
    position: 'relative',
    padding: '50px 20px',
    margin: '0 auto',
    overflow: 'hidden',
};

const backgroundImageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -2,
};

const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(250, 147, 28, 0.85)', // Overlay laranja translúcido
    zIndex: -1,
};

const ctaContainerStyle = {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '30px',
    gap: '40px',
    maxWidth: '1100px',
    margin: '0 auto',
};

const ctaContentStyle = {
    flex: '1',
    textAlign: 'left',
    color: '#fff',
    minWidth: '300px',
};

const ctaTitleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '-35px',
};

const ctaSubtitleStyle = {
    fontSize: '1.5rem',
    marginBottom: '10px',
};

const ctaButtonStyle = {
    backgroundColor: '#5720C9',
    color: '#fff',
    padding: '15px 25px',
    fontSize: '1.2rem',
    borderRadius: '10px',
    textDecoration: 'none',
    fontWeight: 'bold',
    display: 'inline-block',
    transition: '0.3s ease',
};

const contactInfoStyle = {
    background: '#FFF',
    color: '#333',
    padding: '30px',
    borderRadius: '10px',
    maxWidth: '350px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
};

const contactTitleStyle = {
    fontSize: '1.8rem',
    color: '#FA931C',
    marginBottom: '15px',
};

const contactLinkStyle = {
    color: '#5720C9',
    fontWeight: 'bold',
};

export default Contato;
