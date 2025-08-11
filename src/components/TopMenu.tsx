import { Icon } from "@iconify-icon/react";
import { enterpriseInfo, media } from "../constants/topMenuData";

const TopMenu = () => {
  return (
    <div className="flex w-full justify-between px-8 py-4 items-center max-[1035px]:hidden">
      <div className="flex gap-8 items-center">
        {enterpriseInfo.map((info, ind) => (
          <div
            className="flex gap-4 items-center justify-center"
            key={info.text + ind}
          >
            <Icon icon={info.icons} className="text-xl text-secondary" />
            <p className="text-subtext text-[16px]">{info.text}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-6">
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
  );
};

export default TopMenu;
