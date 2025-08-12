import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { services } from "../const/services";

const ServiceInfo = ({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="flex px-2 flex-1 flex-col items-center justify-center gap-3">
      <Icon icon={icon} className="text-white text-[64px]" />
      <p className="font-bold font-poppins text-white text-2xl">{title}</p>
      <p className="text-center text-white">{desc}</p>
    </div>
  );
};

const Services = () => {
  return (
    <div className="flex bg-primary rounded-lg w-full m-8 p-8 max-[1030px]:flex-col max-[1030px]:gap-8">
      {services.map((info, ind) => (
        <ServiceInfo
          icon={info.icon}
          title={info.title}
          desc={info.desc}
          key={info.title + ind}
        />
      ))}
    </div>
  );
};

export default Services;
