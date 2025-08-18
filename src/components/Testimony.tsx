import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

const Testimony = ({
  img,
  name,
  title,
  message,
}: {
  img: string;
  name: string;
  title: string;
  message: string;
}) => {
  return (
    <div className="flex flex-col p-4 w-[475px] rounded-lg border-dotted border-3 border-secondary">
      <div className="bg-white rounded-lg w-full h-full p-4 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img
              src={img}
              alt={img}
              className="w-15 h-15 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <p className="text-2xl font-semibold font-poppins text-titletext">
                {name}
              </p>
              <p className="text-subtext font-semibold">{title}</p>
            </div>
          </div>
          <Icon
            icon={"flowbite:quote-outline"}
            className="text-secondary text-[64px] max-[600px]:hidden"
          />
        </div>
        <p className="text-primary text-lg font-poppins italic">"{message}"</p>
      </div>
    </div>
  );
};

export default Testimony;
