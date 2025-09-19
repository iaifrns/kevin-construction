import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MenuBar from "../../components/MenuBar";
import TopMenu from "../../components/TopMenu";
import { images } from "../../constants/images";
import { links } from "../../constants/links";
import AboutUs from "../home/components/AboutUs";
import Statistiques from "../home/components/Statistiques";
import Testimonies from "../home/components/Testimonies";
import WhyChooseUs from "../home/components/WhyChooseUs";

const AboutUsPage = () => {
  return <div className="m-0 p-0 flex flex-col w-full">
      <TopMenu />
      <MenuBar active={links.about} />
      <Header title="À Propos" page="À Propos" img={images.IMG1} />
      <div className="w-full px-8 py-16 bg-[rgb(220,220,220)] flex flex-col items-center gap-24">
        <AboutUs />
        <Statistiques />
      </div>
      <div className="w-full px-8 py-16 bg-white flex flex-col items-center gap-6">
        <WhyChooseUs />
      </div>
      <div className="w-full px-8 py-16 bg-[rgb(220,220,220)] flex flex-col items-center gap-6">
        <Testimonies />
      </div>
      <Footer />
    </div>;
};

export default AboutUsPage;
