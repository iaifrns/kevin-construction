import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { media } from "../constants/topMenuData";
import { menu } from "../constants/menu";
import { useNavigate } from "react-router-dom";
import { services } from "../constants/services";
import { email, location, phone, webpage } from "../constants/data";
import { images } from "../constants/images";
import { ridarectToFacebook } from "../helper/ridarectToWhatsapp";

const data: { icon: string; title: string; info: string }[] = [
  {
    icon: "tabler:phone-call",
    title: "Numéro de Téléphone",
    info: phone,
  },
  {
    icon: "mdi:email-outline",
    title: "Adresse E-mail",
    info: email,
  },
  {
    icon: "pepicons-pencil:internet",
    title: "Site Web",
    info: webpage,
  },
  {
    icon: "hugeicons:location-04",
    title: "Adresse du Bureau",
    info: location,
  },
];

const Footer = () => {
  const navigateTo = useNavigate();
  return (
    <div className="md:p-16 max-md:p-8 bg-primary flex flex-col gap-10 ">
      <div className="w-full h-full flex justify-between max-[1035px]:flex-col max-[1035px]:gap-6">
        <div className="flex flex-col gap-3 md:w-[400px] max-md:w-full">
          <div className="flex gap-2 items-center">
            <img src={images.LOGO} alt={images.LOGO} className="w-[52px]" />
            <p className="font-poppins font-bold text-white text-[44px] max-[500px]:text-3xl">
              G.B.S GROUPE
            </p>
          </div>
          <p className="text-gray-300">
            Groupe Beaux Services (G.B.S.) est une entreprise camerounaise de
            Bâtiments et Travaux Publics (BTP) spécialisée dans la conception,
            l’étude et la réalisation d’ouvrages de génie civi
          </p>
          <div className="flex gap-3 items-center">
            {media.map((med, ind) => (
              <div
                key={med + " top bar " + ind}
                className="h-10 w-10 flex justify-center items-center rounded-full bg-secondary cursoir-pointer"
                onClick={() => {
                  if (med.includes("facebook")) {
                    ridarectToFacebook();
                  }
                }}
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
                className="flex gap-2 items-center cursor-pointer"
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
                  <p className="text-white font-bold font-poppins md:text-xl">
                    {d.title}
                  </p>
                  <p className="text-white font-poppins md:text-lg max-md:text-sm">
                    {d.info}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full border-dotted border-t-3 border-secondary"></div>
      <p className="w-full text-center text-white text-lg font-poppins font-bold">
        Copyright © 2025 KEV DEV. Tous droits réservés.
      </p>
    </div>
  );
};

export default Footer;
export { data as contactFullInfo };
