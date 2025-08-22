import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MenuBar from "../../components/MenuBar";
import TopMenu from "../../components/TopMenu";
import { images } from "../../constants/images";
import { links } from "../../constants/links";
import ImagePost from "../home/components/ImagePost";
import MiniGallery from "../services/components/MiniGallery";

const ProjectDetails = () => {
  return (
    <div className="m-0 p-0 flex flex-col w-full">
      <TopMenu />
      <MenuBar active={links.project} />
      <Header
        title="Project Detail"
        page="Projects / Project Detail"
        img={images.IMG2}
      />
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
          </div>
        </div>
        <ImagePost />
        <MiniGallery />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
