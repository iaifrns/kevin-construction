import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { images } from "../../../constants/images";
import { links } from "../../../constants/links";
import { useNavigate } from "react-router-dom";

const data: { title: string; desc: string[] }[] = [
  {
    title: "Vision",
    desc: [
      "Construire avec un sens et une finalité",
      "Devenir un leader régional du BTP",
      "Innover dans les méthodes de construction",
      "Promouvoir un développement durable",
    ],
  },
  {
    title: "Mission",
    desc: [
      "Assurer la qualité sur chaque projet",
      "Placer la satisfaction client au premier plan",
      "Valoriser et former notre équipe",
      "Bâtir des structures et des relations durables",
    ],
  },
];

const AboutUs = () => {
  const navigateTo = useNavigate();

  return (
    <div className="flex justify-center w-[85%] items-center gap-6 max-[1035px]:flex-col max-[800px]:gap-6 max-[1035px]:gap-28 max-[1035px]:w-full h-fit">
      <div className="relative flex-1 max-md:w-full ">
        <div className="w-full min-[800px]:h-[95%] flex p-6 gap-6 items-center border-dotted border-secondary border-3 rounded-2xl max-[800px]:flex-col">
          <img
            src={images.ABOUT1}
            alt={images.ABOUT1}
            className="object-cover w-full h-full min-[1035px]:h-[550px] rounded-2xl max-[800px]:h-[450px]"
          />
          <img
            src={images.ABOUT2}
            alt={images.ABOUT2}
            className="object-cover w-full h-full rounded-2xl min-[1035px]:h-[550px] max-[800px]:h-[450px]"
          />
        </div>
        <div className="block max-[800px]:mt-4 min-[800px]:absolute w-full min-[800px]:-bottom-15">
          <div className="flex w-full justify-center items-center">
            <div className="p-4 bg-[rgb(230,230,220)] rounded-xl flex justify-center items-center">
              <div className="p-4 flex flex-col gap-3 bg-white min-[900px]:max-w-[400px]">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <img
                      src={images.ABOUT1}
                      alt={images.ABOUT1}
                      className="w-15 h-15 rounded-full"
                    />
                    <div className="flex flex-col">
                      <p className="font-bold font-poppins">
                        M. Yogo Essoumba Pierre
                      </p>
                      <p className="text-subtext font-poppins">Founder & CEO</p>
                    </div>
                  </div>
                  <Icon
                    icon={"flowbite:quote-outline"}
                    className="text-secondary text-[64px] max-[500px]:hidden"
                  />
                </div>
                <p className="text-primary sm:text-lg font-poppins">
                  “Notre force réside dans notre équipe d’ingénieurs, de
                  techniciens et d’ouvriers qualifiés, mais aussi dans la
                  confiance que nos clients nous accordent.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-4 max-[800px]:w-[95%] max-[1035px]:justify-center">
        <p className="text-[rgb(95,95,95)] font-bold font-poppins [1035px]:text-sm">
          À propos
        </p>
        <p className="text-titletext font-poppins text-3xl min-[800px]:text-[52px] font-semibold">
          Construire des structures, <br />
          Créer des relations
        </p>
        <p className="font-poppins text-[rgb(100,100,100)] max-[1025px]:text-sm max-[800px]:w-[80%]">
          Le Groupe Beaux Services (G.B.S.) est une entreprise camerounaise
          spécialisée dans le Bâtiment et les Travaux Publics (BTP). Depuis plus
          de 15 ans, nous mettons notre expertise au service de la conception,
          de l’étude et de la réalisation d’ouvrages de génie civil, allant des
          bâtiments neufs aux rénovations, en passant par les infrastructures
          modernes.
        </p>
        <div className="w-full flex gap-6 max-[800px]:flex-col ">
          {data.map((d, i) => (
            <div
              className="flex flex-col gap-2 rounded-xl bg-white "
              key={i + d.title}
            >
              <p className="w-full bg-primary p-4 rounded-t-xl font-bold text-white [1035px]:text-2xl text-center">
                {d.title}
              </p>
              <div className="flex flex-col p-4 gap-2">
                {d.desc.map((text, ind) => (
                  <div className="flex gap-2 items-center" key={ind + text}>
                    <div className="h-2 w-2 bg-secondary rounded-full"></div>
                    <p className="font-poppins font-semibold max-[1035px]:text-sm">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          className="bg-secondary py-2 px-4 rounded-full font-bold text-white w-[200px] text-lg"
          onClick={() => navigateTo(links.about)}
        >
          Plus
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
