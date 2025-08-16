import { images } from "../../../constants/images";

const imgs = [
  images.ABOUT1,
  images.SERVICEIMG1,
  images.WHYUS1,
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
          Proven Results Across Every Site
        </p>
        <p className="text-subtext text-center min-[1035px]:w-[50%] ">
          Cras tincidunt risus el vitae tortor aliquet, nec tincidunt felis
          biben dum mentum. Aliquam elemen tum vitaem commodo, et congue.
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
