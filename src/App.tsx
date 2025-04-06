import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Profissionais from './components/Profissionais';
import Atendimento from './components/Atendimento';
import GruposEspeciais from './components/GruposEspeciais';
import Services from './components/Servicos';
import Footer from './components/Footer';
import Localizacao from './components/Localizacao';
import Contato from './components/Contato';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
    return (
        <div className="App">
            <Header />
            <HeroSection />
            <Profissionais />
            <Services />
            <GruposEspeciais />
            <Contato/>
            <Localizacao />
            <Footer />
        </div>
    );

}

export default App;
