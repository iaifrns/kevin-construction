import { useNavigate } from "react-router-dom";
import { images } from "../../../constants/images";
import { links } from "../../../constants/links";

const HeaderSection = () => {
  const navigateTo = useNavigate();
  return (
    <div
      className="w-[95%] bg-fixed rounded-2xl bg-cover"
      style={{ backgroundImage: `url(${images.ABOUT1})` }}
    >
      <div className="w-full h-full px-8 py-12 rounded-2xl bg-primary/80 flex flex-col gap-4">
        <p className="text-white font-poppins font-bold max-[800px]:text-[42px] max-[400px]:text-[32px] text-[56px]">
          Transformez votre projet de rêve en réalité
        </p>
        <p className="text-2xl font-semibold text-white font-poppins max-[800px]:text-xl">
          Parlez dès maintenant à notre équipe de construction.
        </p>
        <p className="text-gray-200 text-lg min-[1400px]:w-[40%]">
          Nos ingénieurs et techniciens qualifiés sont à votre écoute pour
          étudier vos besoins et vous proposer des solutions sur mesure.
        </p>
        <button
          className="bg-secondary text-white font-bold font-poppins px-8 py-3 rounded-4xl w-fit text-lg hover:bg-primary"
          onClick={() => navigateTo(links.contact)}
        >
          Contactez-Nous Dès Aujourd’hui
        </button>
      </div>
    </div>
  );
};

export default HeaderSection;
