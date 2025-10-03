import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import MenuBar from "../../components/MenuBar";
import TopMenu from "../../components/TopMenu";
import { images } from "../../constants/images";
import { links } from "../../constants/links";
import AboutUs from "./components/AboutUs";
import FAQ from "./components/FAQ";
import HeaderSection from "./components/HeaderSection";
import ImagePost from "./components/ImagePost";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Statistiques from "./components/Statistiques";
import Testimonies from "./components/Testimonies";
import WhatWeDo from "./components/WhatWeDo";
import WhyChooseUs from "./components/WhyChooseUs";
import useLoadImgs from "../../hooks/useLoadImgs";
import Loader from "../../components/Loader";

const HomePage = () => {
  const navigateTo = useNavigate()

  const loader = useLoadImgs()

  if(loader) (<Loader />)

  return (
    <div className="m-0 p-0 flex flex-col w-full">
      <TopMenu />
      <MenuBar active={links.home} />
      <div className="w-full px-8 py-8 bg-[rgb(220,220,220)] flex flex-col items-center gap-6 pb-32">
        <div className="flex items-center w-full gap-8 py-4 max-[1035px]:flex-col">
          <span className="font-bold font-poppins text-[56px] flex-1 text-titletext text-start w-full max-[700px]:text-[28px]">
            Construction experte.
            <br /> Résultats impeccables.
          </span>
          <div className="flex flex-col flex-1 gap-4">
            <p className="text-subtext  max-[700px]:text-sm">
              Groupe Beaux Services (G.B.S.) est une entreprise camerounaise de
              Bâtiments et Travaux Publics (BTP) spécialisée dans la conception,
              l’étude et la réalisation d’ouvrages de génie civil. Son siège
              social est basé à Yaoundé, avec une direction technique à Douala.
            </p>
            <div className="flex gap-4 items-center">
              <button
                className="px-6 py-3 bg-secondary hover:bg-primary rounded-xl font-bold text-white"
                onClick={() => navigateTo(links.service)}
              >
                Nos Services
              </button>
              <button
                className="px-6 py-3 hover:bg-secondary bg-primary rounded-xl  font-bold text-white"
                onClick={() => navigateTo(links.contact)}
              >
                Contactez-nous
              </button>
            </div>
          </div>
        </div>
        <ImagePost img={images.IMG4} />
        <Statistiques />
        <Services />
        <AboutUs />
      </div>
      <div
        className="px-8 py-24 flex flex-col items-center justify-center bg-white bg-fixed gap-8"
        style={{ backgroundImage: `url(${images.BG1})` }}
      >
        <HeaderSection />
        <WhatWeDo />
      </div>
      <div className="w-full px-8 py-16 bg-[rgb(220,220,220)] flex flex-col items-center gap-6">
        <WhyChooseUs />
      </div>
      <div
        className="px-8 py-16 flex flex-col items-center justify-center bg-white bg-fixed gap-8"
        style={{ backgroundImage: `url(${images.BG1})` }}
      >
        <Projects />
      </div>
      <div className="w-full px-8 py-16 bg-[rgb(220,220,220)] flex flex-col items-center gap-6">
        <Testimonies />
      </div>
      <div
        className="px-8 py-16 flex flex-col items-center justify-center bg-white bg-fixed gap-8"
        style={{ backgroundImage: `url(${images.BG1})` }}
      >
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
