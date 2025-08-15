import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MenuBar from "../../components/MenuBar";
import TopMenu from "../../components/TopMenu";
import { images } from "../../constants/images";
import { links } from "../../constants/links";
import HeaderSection from "../home/components/HeaderSection";
import Projects from "../home/components/Projects";
import WhatWeDo from "../home/components/WhatWeDo";
import WhyChooseUs from "../home/components/WhyChooseUs";

const ServicePage = () => {
  return (
    <div className="m-0 p-0 flex flex-col w-full">
      <TopMenu />
      <MenuBar active={links.service} />
      <Header title="Services" page="Services" />
      <div
        className="px-8 py-24 flex flex-col items-center justify-center bg-white bg-fixed gap-8"
        style={{ backgroundImage: `url(${images.BG1})` }}
      >
        <WhatWeDo />
      </div>
      <div className="w-full px-8 py-16 bg-[rgb(220,220,220)] flex flex-col items-center gap-6">
        <HeaderSection />
        <WhyChooseUs />
      </div>
      <div
        className="px-8 py-16 flex flex-col items-center justify-center bg-white bg-fixed gap-8"
        style={{ backgroundImage: `url(${images.BG1})` }}
      >
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default ServicePage;
