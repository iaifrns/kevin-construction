import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { phone1 } from "../constants/data";
import { menu } from "../constants/menu";
import { MobileContext } from "../context/MenuProvider";
import { images } from "../constants/images";

const MenuBar = ({ active }: { active: string }) => {
  const navigateTo = useNavigate();
  const { setOpen } = useContext(MobileContext);
  return (
    <div className="w-full px-8 py-6 bg-primary flex justify-between items-center">
      <div className="flex items-center justify-center">
        <img src={images.LOGO} alt={images.LOGO} className="w-[52px]" />
        <div className="flex flex-col ">
          <span className="text-[44px] max-[500px]:text-3xl font-poppins text-white font-bold">
            G.B.S GROUPE
          </span>
          {/* <span className="font-poppins font-semibold text-white">
            CONSTRUCTION COMPANY
          </span> */}
        </div>
      </div>
      <div className="flex gap-12 items-center max-[1035px]:hidden">
        {menu.map((text, ind) => (
          <p
            key={`${ind}${text}`}
            onClick={() => navigateTo(text.link)}
            className={`${
              active == text.link ? "text-secondary" : "text-white"
            }  hover:text-secondary transition-all duration-300 ease-out text-lg font-poppins font-semibold cursor-pointer`}
          >
            {text.text}
          </p>
        ))}
      </div>
      <div className="flex gap-2 items-center max-[1035px]:hidden">
        <Icon
          icon={"lucide:phone-call"}
          className="text-secondary text-[48px] mt-2"
        />
        <div className="flex flex-col">
          <p className="text-white text-[28px] font-semibold font-poppins">
            Call Us
          </p>
          <p className="text-white font-semibold">{phone1}</p>
        </div>
      </div>
      <div
        className="hidden max-[1035px]:block p-4 rounded-lg bg-secondary"
        onClick={() => setOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <path fill="white" d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z" />
        </svg>
      </div>
    </div>
  );
};

export default MenuBar;
