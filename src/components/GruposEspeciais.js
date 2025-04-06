import React from 'react';
import './GruposEspeciais.css'; // Arquivo CSS separado para estilização
import agrupamento from '../assets/a.jpg';
import bercario from '../assets/b.jpeg'

const GruposEspeciais = () => {
    return (
        <section id='turmas' className="grupos-section">
            <h2 className="section-titled">Nossas Turmas</h2>
            <div className="grupos-content">
                <div className="text-block">
                    <img src={agrupamento} alt="" />
                    <h3 className='title'>Berçário</h3>
                    <h3>( 0 a 2 anos )</h3>
                    <p>Um ambiente seguro e acolhedor, com estímulos sensoriais, motores e afetivos para o desenvolvimento dos bebês, sempre com muito carinho e atenção individualizada.</p>
                </div>
                <div className="text-block">
                    <img src={bercario} alt="Espaço 4" />
                    <h3 className='title'>Agrupamentos</h3>
                    <h3>(3 a 4 anos)</h3>
                    <p>Fase de descobertas e autonomia, com atividades lúdicas que estimulam a criatividade, linguagem e coordenação, tornando o aprendizado leve e natural.</p>
                </div>
            </div>
        </section>
    );
};

export default GruposEspeciais;
