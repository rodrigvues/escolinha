import React from 'react';

const Atendimento = () => {
    return (
        <section style={atendimentoStyle}>
            <h2>Atendimento Individualizado e Personalizado</h2>
            <div style={contentStyle}>
                <div style={textBlock}>
                    <h3>Planos de Tratamento Personalizados</h3>
                    <p>Oferecemos planos de tratamento personalizados, adaptando-se às necessidades, objetivos e ritmo de cada cliente.</p>
                </div>
                <div style={textBlock}>
                    <h3>Respeito à Individualidade</h3>
                    <p>Priorizamos a individualidade de cada pessoa, criando um ambiente acolhedor e respeitoso para um atendimento único.</p>
                </div>
                <div style={textBlock}>
                    <h3>Comunicação Aberta e Transparente</h3>
                    <p>Mantemos uma comunicação aberta e transparente com nossos clientes, construindo uma relação de confiança e respeito.</p>
                </div>
            </div>
        </section>
    );
};

const atendimentoStyle = {
    padding: '50px 20px',
    backgroundColor: '#fff',
    textAlign: 'center'
};

const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px'
};

const textBlock = {
    maxWidth: '600px',
    textAlign: 'left'
};

export default Atendimento;
