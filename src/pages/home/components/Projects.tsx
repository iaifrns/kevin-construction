import Project from "../../../components/Project";
import { images } from "../../../constants/images";

const Projects = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <p className="font-poppins text-gray-600 font-bold text-xl">PROJETS</p>
      <p className="font-poppins text-titletext font-bold max-[1035px]:text-[40px] text-[48px] max-[800px]:text-3xl max-[800px]:text-center">
        Des Résultats Eprouvés sur Chacun de nos Chantiers
      </p>
      <p className="text-subtext text-center min-[1035px]:w-[50%] ">
        Chaque projet que nous entreprenons est une preuve de notre engagement
        envers la qualité et la satisfaction client. Grâce à une équipe
        qualifiée et des méthodes rigoureuses, nous livrons des ouvrages
        solides, durables et conformes aux attentes de nos partenaires.
      </p>
      <div className="mt-6 flex justify-between w-full gap-6 max-[1035px]:flex-col min-[1500px]:w-[80%]">
        <Project
          img={images.PROJECT1}
          title1="Construction Résidentielle"
          title2="Résidence Moderne à Yassa"
          desc="Un duplex conçu et réalisé avec soin, alliant confort, esthétique et durabilité pour répondre aux besoins d’une famille en pleine croissance."
          active={false}
        />

        <Project
          img={images.PROJECT2}
          title1="Développement Commercial"
          title2="Centre d’Affaires Tsingha"
          desc="Un complexe de bureaux moderne construit pour favoriser le dynamisme des entreprises locales, livré dans le respect des normes et des délais."
          active={true}
        />

        <Project
          img={images.PROJECT3}
          title1="Infrastructure Industrielle"
          title2="Entrepôt Logistique du Port"
          desc="Un espace industriel robuste et fonctionnel destiné au stockage et à la distribution, conçu pour optimiser la chaîne logistique."
          active={false}
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="flex items-center justify-center gap-2 bg-secondary hover:bg-primary p-3 mt-6 rounded-2xl w-[200px]">
          <p className="text-xl font-semibold font-poppins text-white">Plus</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
