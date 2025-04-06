import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { FaWhatsapp } from 'react-icons/fa';
import './HeroSection.css';
import background from '../assets/background.png';

const HeroSection = () => {
    const [subtitleWidth, setSubtitleWidth] = useState(450);
    const [logoWidth, setLogoWidth] = useState(300);
    const [subtitleFontSize, setSubtitleFontSize] = useState('1.5rem');
    const [logoMarginBottom, setLogoMarginBottom] = useState('-115px'); // Estado para a margem inferior do logo
    const [showWhatsapp, setShowWhatsapp] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSubtitleWidth(300);
                setLogoWidth(250);
                setSubtitleFontSize('1.2rem');
                setLogoMarginBottom('-100px'); // Margem menor em telas pequenas
                setShowWhatsapp(false);
            } else {
                setSubtitleWidth(450);
                setLogoWidth(300);
                setSubtitleFontSize('1.5rem');
                setLogoMarginBottom('-115px'); // Margem normal em telas grandes
                setShowWhatsapp(true);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section style={heroStyle}>
            <img src={background} alt="Studio Mover_se Place" style={backgroundImageStyle} />
            <div style={overlayStyle}></div>

            <div style={contentContainer}>
                <div style={textContainer}>
                    <img 
                        src={logo} 
                        alt="Studio Mover_se Logo" 
                        style={{ ...logoStyle, width: logoWidth, marginBottom: logoMarginBottom }} 
                    />
                    <p style={{ ...subtitleStyle, width: subtitleWidth, fontSize: subtitleFontSize }}>
                        Escolinha com ensino inspirado no Respeito a singularidade e autonomia da criança
                    </p>
                    <div style={buttonContainer}>
                        <a href="#contato" className="cta-button">Matrículas Abertas: Inscreva-se Já!</a>
                        {showWhatsapp && (
                            <a href="/" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
                                <FaWhatsapp />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Styles
const heroStyle = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Tamanho total da janela
    overflow: 'hidden', // Esconder o excesso de imagem
    color: '#333',
};

const backgroundImageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Cobre todo o espaço da seção
    zIndex: -2, // Coloca a imagem abaixo da sobreposição
};

const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(246, 246, 246, 0.85)', // Fundo branco com transparência
    zIndex: -1, // Coloca a sobreposição acima da imagem mas abaixo do conteúdo
};

const contentContainer = {
    position: 'relative', // Garante que o conteúdo fique acima da imagem e da sobreposição
    zIndex: 1, // Coloca o conteúdo acima da imagem e da sobreposição
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    maxWidth: '80%',
    width: '100%',
    boxSizing: 'border-box',
    marginTop: '80px',
};

const textContainer = {
    flex: '1',
    paddingRight: '20px',
    minWidth: '300px',
};

const logoStyle = {
    height: 'auto',
    marginBottom: '-100px',
    marginLeft: '-20px'
};

const subtitleStyle = {
    fontSize: '1.3rem',
    color: '#5720C9',
    marginBottom: '20px',
    width: '450px',
};

const buttonContainer = {
    display: 'flex',
    gap: '15px',
    marginTop: '20px',
    flexWrap: 'wrap',
};

export default HeroSection;
