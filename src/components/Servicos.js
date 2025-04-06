import React from 'react';
import './Servicos.css';

export const services = [
    {
        id: 1,
        title: "Ambiente Preparado e Sensorial",
        description: "Espaço organizado que incentiva a autonomia e a exploração, utilizando materiais sensoriais para estimular os sentidos."
    },
    {
        id: 2,
        title: "Autoeducação",
        description: "As crianças aprendem por meio da experimentação, do erro e da descoberta, desenvolvendo a capacidade de resolver problemas por conta própria."
    },
    {
        id: 3,
        title: "Aprendizado Ativo",
        description: "Elas participam ativamente do processo de aprendizagem, manipulando materiais e explorando conceitos de forma concreta antes de chegar ao abstrato."
    },
    {
        id: 4,
        title: "Respeito pelo Ritmo da Criança",
        description: "Cada criança é única e recebe estímulos conforme sua maturidade e interesse, evitando comparações e pressões desnecessárias."
    },
    {
        id: 5,
        title: "Liberdade com Responsabilidade",
        description: "As crianças têm liberdade para escolher suas atividades e desenvolver autonomia, mas aprendem a respeitar regras e limites para conviver em harmonia."
    },
    {
        id: 6,
        title: "Interação Social e Cooperação",
        description: "Em ambientes mistos, as crianças aprendem a colaborar, ajudam-se mutuamente e desenvolvem empatia e habilidades sociais."
    }
];

const Services = () => {
    return (
        <section id="montessori" className="services-section">
            <h2>Por que o nosso método?</h2>
            <p className="services-subtitle">Descubra a magia de aprender brincando: aqui, cada dia é uma aventura com muito carinho, criatividade e liberdade!</p>
            <div className="services-grid">
                {services.map(service => (
                    <div key={service.id} className="service-card">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
