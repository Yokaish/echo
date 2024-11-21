import { useState, useEffect } from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { InoveSection } from './components/InoveSection/InoveSection';
import { InterfaceSection } from './components/InterfaceSection/InterfaceSection';
import { MainSection } from './components/MainSection/MainSection';
import { VideoSection } from './components/VideoSection/VideoSection';
import { WhySection } from './components/WhySection/WhySection';
import './global.css';
import './Loading.css';
import logo from './assets/icons/echo-logo.svg'; // Importa a logo
import { EchoInfo } from './components/EchoInfo/EchoInfo';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula carregamento (substitua isso pela lógica real, se necessário)
    const timeout = setTimeout(() => {
      setIsLoading(false); // Para o carregamento após 2 segundos
    }, 2000);

    // Cleanup do timeout ao desmontar
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <img src={logo} alt="Echo Logo" className="loading-logo" />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <MainSection />
      <VideoSection />
      <WhySection />
      <InoveSection />
      <InterfaceSection />
      <EchoInfo/>
      <Footer />
    </div>
  );
}

export default App;
