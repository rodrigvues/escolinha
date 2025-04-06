import React from 'react';

const SobreNos = () => {
    return (
        <section id="sobre-nos" style={sobreNosStyle}>
            <h2>Sobre Nós</h2>
            <div style={contentStyle}>
                <div style={textStyle}>
                    <h3>Profissionais Experientes e Especializados</h3>
                    <p>Nosso time possui vasta experiência em seus campos de atuação, garantindo atendimento de qualidade.</p>
                    <p>Nossos profissionais são altamente qualificados e especializados em suas áreas, oferecendo tratamentos específicos para cada necessidade.</p>
                    <p>Com paixão e compromisso, nossos profissionais dedicam-se a promover o bem-estar de cada cliente.</p>
                </div>
                <div style={textStyle}>
                    <h3>Atendimento Individualizado e Personalizado</h3>
                    <p>Oferecemos planos de tratamento personalizados, adaptando-se às necessidades, objetivos e ritmo de cada cliente.</p>
                    <p>Priorizamos a individualidade de cada pessoa, criando um ambiente acolhedor e respeitoso para um atendimento único.</p>
                    <p>Mantemos uma comunicação aberta e transparente com nossos clientes, construindo uma relação de confiança e respeito.</p>
                </div>
            </div>
        </section>
    );
};

const sobreNosStyle = {
    padding: '50px 20px',
    backgroundColor: '#fff',
    textAlign: 'center'
};

const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px'
};

const textStyle = {
    maxWidth: '600px',
    textAlign: 'left'
};

export default SobreNos;
