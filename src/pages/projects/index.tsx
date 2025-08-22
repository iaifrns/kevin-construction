import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MenuBar from "../../components/MenuBar";
import Project from "../../components/Project";
import TopMenu from "../../components/TopMenu";
import { images } from "../../constants/images";
import { links } from "../../constants/links";
import { projects1 } from "../../constants/projects";
import HeaderSection from "../home/components/HeaderSection";
import Testimonies from "../home/components/Testimonies";
import WhyChooseUs from "../home/components/WhyChooseUs";
import Sector from "../services/components/Sector";

const ProjectPage = () => {
  return (
    <div className="m-0 p-0 flex flex-col w-full">
      <TopMenu />
      <MenuBar active={links.project} />
      <Header title="Projects" page="Projects" img={images.IMG2} />
      <div className="w-full flex flex-col items-center justify-center py-16">
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
        <div className="mt-6 grid grid-cols-3 max-[1035px]:grid-cols-2 max-[800px]:grid-cols-1 justify-between w-full gap-6 max-[1035px]:flex-col min-[1500px]:w-[80%]">
          {projects1.map((p, ind) => (
            <Project
              img={p.img}
              title1={p.title1}
              title2={p.title2}
              desc={p.desc}
              active={true}
              key={ind + p.desc + p.title1}
            />
          ))}
        </div>
      </div>
      <div className="w-full px-8 py-16 bg-[rgb(220,220,220)] flex flex-col items-center gap-6">
        <WhyChooseUs />
      </div>
      <div
        className="px-8 py-16 flex flex-col items-center justify-center bg-white bg-fixed gap-8"
        style={{ backgroundImage: `url(${images.BG1})` }}
      >
        <HeaderSection />
        <Sector />
      </div>
      <div className="w-full px-8 py-16 bg-[rgb(220,220,220)] flex flex-col items-center gap-6">
        <Testimonies />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage;
