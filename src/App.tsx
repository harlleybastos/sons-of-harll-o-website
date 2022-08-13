import React, { useEffect } from "react";
import { MainContainer } from "./components/MainSection/styles";
import JaxTeller from "./assets/img/Jax-Teller.jpg";
import OpieWinston from "./assets/img/Opie-Winston.jpg";
import Chibs from "./assets/img/Chibs.jpg";
import Logo from "./assets/img/logo.png";
import Hero from "./assets/img/hero.png";
import Soa from "./assets/img/soa.jpg";

import MayansMC from "./assets/img/mayans-mc.jpg";

import Navbar from "./components/Navbar";
import Section from "./components/Section";

import About from "./components/About";
import Testimonials from "./components/Testimonials";
import DownloadSection from "./components/DownloadSection";
import MainSection from "./components/MainSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <MainContainer>
      <Navbar />
      <MainSection />
      <About />

      <DownloadSection
        title="Sons of Anarchy"
        mainText="Em Charming, uma pequena cidade fictícia no norte da Califórnia, nos Estados Unidos, habita o clube de motociclistas Sons of Anarchy. O grupo lida com atividades ilícitas como o tráfico de drogas e filmes pornô e é liderado por Clay Morrow (Ron Perlman) e Jax Teller (Charlie Hunnam). Além do esforço para conciliar a sua ocupação com a família e os filhos, eles tem de conviver com suas opiniões diferentes: enquanto Morrow opta pela tradição violenta, Teller se inspira no discurso revolucionário do diário de seu pai falecido.
        "
        id="soa"
        background="dark"
        source={Soa}
      />

      <DownloadSection
        title="Mayans M.C."
        mainText="Mayans MC é situado em mundo pós Jax Teller e acompanha o
        protagonista EZ Reyes (JD Pardo), recém-saído da prisão e
        novato na Mayans MC, que atua na fronteira entre a
        Califórnia (EUA) e o México. EZ, que um dia já foi um menino
        de ouro prestes a viver o sonho americano, agora precisa
        encontrar sua nova identidade como um fora da lei."
        id="mayans"
        background="#f3f4fe"
        source={MayansMC}
      />
      <Testimonials />
      <ContactSection />
      <Footer />
    </MainContainer>
  );
};

export default App;
