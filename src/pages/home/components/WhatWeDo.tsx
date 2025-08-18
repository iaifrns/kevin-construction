import { useNavigate } from "react-router-dom";
import Service from "../../../components/Service";
import { images } from "../../../constants/images";
import { services } from "../../../constants/services";
import { links } from "../../../constants/links";

const WhatWeDo = () => {
  const navigateTo = useNavigate();

  return (
    <div className="w-[80%] flex flex-col justify-center items-center mt-4">
      <p className="text-subtext font-poppins text-lg font-bold">CE QUE NOUS FAISONS</p>
      <p className="font-bold text-titletext font-poppins text-[56px] max-[800px]:text-3xl">
        Des Solutions Expertes Pour Chaque Projet
      </p>
      <p className="min-[1035px]:w-[50%] text-center text-subtext">
        Cras tincidunt risus el vitae tortor aliquet, nec tincidunt felis biben
        dum mentum. Aliquam elemen tum vitaem commodo, et congue.
      </p>
      <div className="mt-8 flex gap-6 max-[1035px]:flex-col">
        <div className="flex flex-col justify-between gap-4 max-[1035px]:flex-col">
          <Service
            icon={services[0].icon}
            title={services[0].title}
            desc={services[0].desc}
          />
          <Service
            icon={services[1].icon}
            title={services[1].title}
            desc={services[1].desc}
          />
        </div>
        <div className="border-dotted border-3 border-secondary rounded-2xl p-8 flex flex-col gap-8">
          <img
            src={images.SERVICEIMG1}
            alt={images.SERVICEIMG1}
            className="rounded-2xl h-full object-cover"
          />
          <button
            className="bg-secondary hover:bg-primary rounded-4xl font-poppins p-4 text-white font-semibold"
            onClick={() => navigateTo(links.service)}
          >
            View All Services
          </button>
        </div>
        <div className="flex flex-col justify-between max-[1035px]:flex-col gap-4">
          <Service
            icon={services[2].icon}
            title={services[2].title}
            desc={services[2].desc}
          />
          <Service
            icon={services[3].icon}
            title={services[3].title}
            desc={services[3].desc}
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
