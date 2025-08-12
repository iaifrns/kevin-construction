import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

const Service = ({
  title,
  icon,
  desc,
}: {
  title: string;
  icon: string;
  desc: string;
}) => {
  return (
    <div className="flex flex-col gap-4 w-full rounded-xl bg-[rgb(220,220,220)] p-6">
      <div className="flex justify-between items-center">
        <p className="font-poppins font-semibold text-2xl">{title}</p>
        <Icon icon={icon} className="text-secondary text-[64px]" />
      </div>
      <p className="text-subtext">{desc}</p>
      <button className="bg-primary rounded-2xl text-white font-semibold font-poppins p-4">
        Read more
      </button>
    </div>
  );
};

export default Service;
