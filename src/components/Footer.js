import React from 'react';
import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <div style={footerContainer}>
                
                {/* Coluna 1 - Contatos */}
                <div style={column}>
                    <h4 style={headingStyle}>Nossos Contatos</h4>
                    <ul style={listStyle}>
                        <li>WhatsApp: <a href="tel:+5547992123984" style={linkStyle}>(XX) X XXXX-XXXX</a></li>
                        <li>Instagram: <a href="/" target="_blank" rel="noopener noreferrer" style={linkStyle}>@exemplo</a></li>
                        <li>Facebook: <a href="/" target="_blank" rel="noopener noreferrer" style={linkStyle}>exemplo</a></li>
                    </ul>
                </div>

                {/* Coluna 2 - Localização */}
                <div style={column}>
                    <h4 style={headingStyle}>Nossa Localização</h4>
                    <ul style={listStyle}>
                    <li>R. Nome da Rua, 123</li>
                    <li>Bairro</li>
                    <li>Cidade - BR</li>
                    </ul>
                </div>

                {/* Coluna 3 - Redes Sociais */}
                <div style={column}>
                    <h4 style={headingStyle}>Siga-nos</h4>
                    <div style={socialIcons}>
                        <a href="/" target="_blank" rel="noopener noreferrer" style={iconWrapper}>
                            <FaInstagram size={24} style={iconStyle} />
                        </a>
                        <a href="/" target="_blank" rel="noopener noreferrer" style={iconWrapper}>
                            <FaFacebook size={24} style={iconStyle} />
                        </a>
                        <a href="/" target="_blank" rel="noopener noreferrer" style={iconWrapper}>
                            <FaWhatsapp size={24} style={iconStyle} />
                        </a>
                    </div>
                </div>

                {/* Coluna 4 - Horário */}
                <div style={column}>
                    <h4 style={headingStyle}>Horário de Funcionamento</h4>
                    <p style={horarioStyle}>Segunda a Sexta</p>
                    <p style={horarioStyle}>06:30 - 19:30</p>
                </div>


            </div>
        </footer>
    );
};

// 🎨 Estilos
const footerStyle = {
    backgroundColor: '#000',  // Fundo preto
    color: '#fff',
    padding: '40px 0',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'left'
};

const footerContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
};

const column = {
    flex: '1',
    minWidth: '250px',
    padding: '20px',
    boxSizing: 'border-box',
};

const headingStyle = {
    fontSize: '1.2rem',
    marginBottom: '15px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: '#FA931C',  // Destaque laranja
};

const listStyle = {
    listStyleType: 'none',
    padding: 0
};

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
};

const socialIcons = {
    display: 'flex',
    gap: '20px',
    marginTop: '10px',
};

const iconWrapper = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    borderRadius: '50%',
    backgroundColor: '#444',
    transition: 'background-color 0.3s ease',
};

const iconStyle = {
    color: '#fff',
    transition: 'color 0.3s ease',
};

const horarioStyle = {
    margin: '5px 0',
    fontSize: '1rem',
    fontWeight: 'bold'
};

export default Footer;
