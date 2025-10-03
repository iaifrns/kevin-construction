import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

const Loader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-primary/70 transition-all duration-500 ease-in-out">
      <Icon
        icon={"tabler:loader-3"}
        className="text-white text-[59px] animate-spin"
      />
    </div>
  );
};

export default Loader;
