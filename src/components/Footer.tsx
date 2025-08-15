import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { media } from "../constants/topMenuData";
import { menu } from "../constants/menu";
import { useNavigate } from "react-router-dom";
import { services } from "../constants/services";
import { email, location, phone, webpage } from "../constants/data";

const data: { icon: string; title: string; info: string }[] = [
  {
    icon: "tabler:phone-call",
    title: "Phone Number",
    info: phone,
  },
  {
    icon: "mdi:email-outline",
    title: "Email Address",
    info: email,
  },
  {
    icon: "pepicons-pencil:internet",
    title: "Website",
    info: webpage,
  },
  {
    icon: "hugeicons:location-04",
    title: "Office Address",
    info: location,
  },
];

const Footer = () => {
  const navigateTo = useNavigate();
  return (
    <div className="p-16 bg-primary flex flex-col gap-10 ">
      <div className="w-full h-full flex justify-between max-[1035px]:flex-col max-[1035px]:gap-6">
        <div className="flex flex-col gap-3 w-[400px]">
          <div className="flex gap-2 items-center">
            <Icon
              icon={"hugeicons:block-game"}
              className="text-secondary text-[52px]"
            />
            <p className="font-poppins font-bold text-white text-[56px]">
              Grount
            </p>
          </div>
          <p className="text-gray-300">
            Duis rhoncus vehicula mi eget tempor proin. sit amet tincidunt
            lacus. Pellen tesque pretra felis non elit elementum viverra.
          </p>
          <div className="flex gap-3 items-center">
            {media.map((med, ind) => (
              <div
                key={med + " top bar " + ind}
                className="h-10 w-10 flex justify-center items-center rounded-full bg-secondary"
              >
                <Icon icon={med} className="text-white text-lg" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 w-fit">
          <p className="text-white font-bold font-poppins text-2xl">Pages</p>
          <div className="flex flex-col gap-2">
            {menu.map((item, ind) => (
              <div
                className="flex gap-2 items-center"
                onClick={() => navigateTo(item.link)}
                key={ind + item.text + item.link}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#ff5b05"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m10 17l5-5m0 0l-5-5"
                  />
                </svg>
                <p className="font-semibold font-poppins text-white hover:text-secondary text-lg">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 w-fit">
          <p className="text-white font-bold font-poppins text-2xl">Services</p>
          <div className="flex flex-col gap-2">
            {services.map((item, ind) => (
              <div className="flex gap-2 items-center" key={ind + item.title}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#ff5b05"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m10 17l5-5m0 0l-5-5"
                  />
                </svg>
                <p className="font-semibold font-poppins text-white text-lg">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 w-fit">
          <p className="text-white font-bold font-poppins text-2xl">
            Information
          </p>
          <div className="flex flex-col gap-2">
            {data.map((d, ind) => (
              <div
                className="flex gap-2 items-center"
                key={d.info + d.title + ind}
              >
                <Icon
                  icon={d.icon}
                  className="text-secondary text-lg text-[40px]"
                />
                <div className="flex flex-col ">
                  <p className="text-white font-bold font-poppins text-xl">
                    {d.title}
                  </p>
                  <p className="text-white font-poppins text-lg">{d.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full border-dotted border-t-3 border-secondary"></div>
      <p className="w-full text-center text-white text-lg font-poppins font-bold">
        Copyright © 2025 Krakenbox. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
