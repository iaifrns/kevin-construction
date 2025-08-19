import { images } from "../../../constants/images";

const imgs = [
  images.ABOUT1,
  images.PROJECT1,
  images.PROJECT3,
  images.HEROIMG,
  images.ABOUT2,
  images.WHYUS2,
];

const MiniGallery = () => {
  return (
    <div className="flex flex-col gap-8 items-center w-full">
      <div className="flex flex-col w-full items-center">
        <p className="font-poppins text-gray-600 font-bold text-xl">GALLERY</p>
        <p className="font-poppins text-titletext font-bold max-[1035px]:text-[40px] text-[48px] max-[800px]:text-3xl max-[800px]:text-center">
          Notre Galerie de Réalisations
        </p>
        <p className="text-subtext text-center min-[1035px]:w-[50%] ">
          Découvrez en images la qualité de nos travaux : résidences modernes,
          infrastructures commerciales, projets industriels et finitions
          raffinées. Chaque réalisation illustre notre savoir-faire, notre
          rigueur et notre engagement à bâtir des ouvrages durables et
          esthétiques.
        </p>
      </div>

      <div className="p-8 w-full border-dotted border-secondary border-3 rounded-2xl m-8">
        <div className="grid grid-cols-3 gap-4 w-full max-[500px]:grid-cols-1 max-[800px]:grid-cols-2">
          {imgs.map((img, ind) => (
            <img
              src={img}
              alt={img}
              className="w-full h-[350px] object-cover rounded-2xl"
              key={img + ind}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiniGallery;
