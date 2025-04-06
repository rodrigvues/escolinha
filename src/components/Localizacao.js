import React from 'react';
import portao from '../assets/maps.png';

const Localizacao = () => {
    return (
        <section id='localizacao' style={localizacaoStyle}>
            {/* Background Image */}
            <img src={portao} alt="Portão" style={backgroundImageStyle} />

            {/* Overlay */}
            <div style={overlayStyle}></div>

            <div style={infoContainerStyle}>
                <div style={textContainerStyle}>
                    <h2 style={tituloStyle}>Nossa Localização</h2>
                    <p style={enderecoStyle}>Estamos localizados na:</p>
                    <p style={enderecoDetailStyle}>R. Nome da Rua, 123</p>
                    <p style={enderecoDetailStyle}>Bairro</p>
                    <p style={enderecoDetailStyle}>Cidade - BR</p>
                </div>

                <div style={mapContainerStyle}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d33446563.6150451!2d-63.69658229618252!3d-14.473379248011899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-PT!2sbr!4v1743891886952!5m2!1spt-PT!2sbr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localização"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

// Estilos
const localizacaoStyle = {
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
    backgroundColor: 'rgba(87, 32, 201, 0.85)', // Azul translúcido
    zIndex: -1,
};

const infoContainerStyle = {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '30px',
    gap: '20px',
};

const textContainerStyle = {
    flex: '1',
    textAlign: 'left',
    color: '#fff',
    marginRight: '20px',
    minWidth: '300px',
    marginTop: '-50px'
};

const tituloStyle = {
    fontSize: '2.5rem',
    marginBottom: '10px',
    color: '#f6f6f6',
    fontFamily: 'Arial, sans-serif',
    textTransform: 'uppercase',
};

const enderecoStyle = {
    fontSize: '1.2rem',
    fontStyle: 'italic',
    marginBottom: '-2px',
    color: '#f6f6f6',
};

const enderecoDetailStyle = {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: '#f6f6f6',
    marginTop: '0',
    marginBottom: '-8px'
};

const mapContainerStyle = {
    flex: '1',
    minWidth: '300px',
    height: '300px',
    borderRadius: '10px',
    overflow: 'hidden',
};

export default Localizacao;
