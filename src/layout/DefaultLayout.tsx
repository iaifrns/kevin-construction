import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { menu } from "../constants/menu";
import { MobileContext } from "../context/MenuProvider";

const DefaultLayout = () => {
  const navigateTo = useNavigate();
  const { open, setOpen } = useContext(MobileContext);
  return (
    <div className="relative m-0 p-0">
      <div
        className={`absolute w-full h-full bg-primary/30 z-20 transition-all duration-300 ease-out ${
          !open && "hidden"
        }`}
      >
        <div className="w-[50%] bg-primary h-full flex flex-col gap-6 p-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            onClick={() => {
              setOpen(false);
            }}
          >
            <path
              fill="none"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
            />
          </svg>
          <div className="flex flex-col gap-3">
            {menu.map((text, ind) => (
              <p
                key={`${ind}${text}`}
                onClick={() => {
                  setOpen(false);
                  navigateTo(text.link);
                }}
                className={
                  "text-white hover:text-secondary transition-all duration-300 ease-out text-xl font-poppins font-semibold cursor-pointer "
                }
              >
                {text.text}
              </p>
            ))}
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
