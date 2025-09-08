import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MenuBar from "../../components/MenuBar";
import TopMenu from "../../components/TopMenu";
import { images } from "../../constants/images";
import { links } from "../../constants/links";
import { training } from "../../constants/training";

const TrainingPage = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <TopMenu />
      <MenuBar active={links.Formation} />
      <Header title="Formation" page="Fromation" img={images.HEROIMG} />
      <div className="w-[90%] max-[500px]:w-full flex py-16 px-8 gap-8 max-[1030px]:flex-col-reverse relative">
        <div className="flex-2 flex flex-col gap-8 h-fit min-[1035px]:sticky top-2">
          <div className="border-dotted border-3 border-secondary rounded-2xl p-6">
            <img
              src={images.ABOUT1}
              alt={images.ABOUT1}
              className="w-full rounded-2xl object-cover h-[300px] max-[500px]:h-[200px]"
            />
          </div>
          <div className="flex flex-col w-full rounded-2xl bg-gray-300 p-6 gap-6">
            <input
              type="text"
              placeholder="Nom"
              className="p-4 rounded-xl w-full bg-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-4 rounded-xl w-full bg-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="Numero: +237 XXX XXX XXX"
              className="p-4 rounded-xl w-full bg-white focus:outline-none"
            />
            <button className="p-3 bg-secondary hover:bg-primary rounded-2xl font-semibold text-white">
              Apply
            </button>
            <button className="p-3 bg-green-800 rounded-2xl font-semibold text-white hover:bg-green-900">
              WhatSapp
            </button>
          </div>
        </div>
        <div className="flex-3 flex flex-col gap-8">
          <div className="flex flex-col">
            <p className="text-gray-500 font-semibold text-lg">Formation</p>
            <p className="text-titletext font-bold text-[40px] max-[500px]:text-[28px] font-poppins">
              Formations professionnelles avec plus de 16 ans d’expertise
            </p>
            <p className="text-subtext max-[500px]:pt-3">
              Bénéficiez du savoir-faire d’une entreprise de construction
              reconnue, forte de plus de 16 ans d’expérience. Nos formations
              pratiques vous offrent un véritable avantage pour développer vos
              compétences et évoluer aux côtés de professionnels du métier.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-semibold text-xl">Required Position</p>
            <div className="flex flex-col gap-3 w-full">
              {training.map((item, ind) => (
                <div
                  className="w-full rounded-2xl bg-bg1 p-4 flex gap-6 max-[500px]:flex-col-reverse"
                  key={item.title + ind}
                >
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold text-xl">{item.title}</p>
                    <p className="text-subtext">{item.desc}</p>
                  </div>
                  <img
                    src={item.img}
                    alt={item.img}
                    className="w-[300px] max-[500px]:w-full h-[100px] object-cover rounded-2xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrainingPage;
