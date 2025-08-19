import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { images } from "../../../constants/images";
import { sectors } from "../../../constants/sectors";

const imgs = [images.IMG1, images.IMG2, images.IMG3, images.CONTACTIMG1];

const Sector = () => {
  return (
    <div className="w-[85%] max-[500px]:w-full flex max-[1035px]:flex-col-reverse items-center gap-8">
      <div className="flex-4 p-6 rounded-2xl border-3 border-dotted border-secondary">
        <div className="gap-4 grid grid-cols-2 max-[500px]:grid-cols-1 w-full">
          {imgs.map((image, ind) => (
            <img
              src={image}
              alt={image}
              className="object-cover w-full max-[1400px]:h-[380px] max-[1035px]:h-[250px] h-[350px] rounded-2xl"
              key={ind + image}
            />
          ))}
        </div>
      </div>
      <div className="flex-3 flex flex-col gap-6">
        <div className="flex flex-col">
          <p className="text-gray-600 font-bold font-poppins text-xl">
            Secteurs D’Activité
          </p>
          <p className="text-[48px] max-[1400px]:text-[38px] font-bold font-poppins text-titletext">
            Une Expertise au Service de Chaque Secteur
          </p>
          <p className="text-subtext">
            Du résidentiel au commercial en passant par l’industriel, nous
            adaptons nos solutions de construction aux besoins spécifiques de
            chaque domaine.
          </p>
        </div>
        <div className="gap-4 flex flex-col">
          {sectors.map((sec, ind) => (
            <div className="flex gap-3" key={ind + sec.desc + sec.title}>
              <Icon
                icon={"mdi:tick-circle"}
                className="text-secondary text-lg text-[38px]"
              />
              <div className="flex flex-col gap-2">
                <p className="text-2xl max-[1400px]:text-[22px] font-semibold font-poppins text-titletext">
                  {sec.title}
                </p>
                <p className="text-subtext text-lg max-[1400px]:text-[16px]">
                  {sec.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sector;
