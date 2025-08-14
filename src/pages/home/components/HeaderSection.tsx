import { images } from "../../../constants/images";

const HeaderSection = () => {
  return (
    <div
      className="w-[95%] bg-fixed rounded-2xl bg-cover"
      style={{ backgroundImage: `url(${images.ABOUT1})` }}
    >
      <div className="w-full h-full px-8 py-12 rounded-2xl bg-[rgba(23,80,85,0.8)] flex flex-col gap-4">
        <p className="text-white font-poppins font-bold max-[800px]:text-[42px] max-[400px]:text-[32px] text-[56px]">
          Turn Your Dream Project into Reality
        </p>
        <p className="text-2xl font-semibold text-white font-poppins max-[800px]:text-xl">
          Talk to Our Construction Team Now.
        </p>
        <p className="text-gray-200 text-lg min-[1400px]:w-[40%]">
          Vesti bulum nec velit ut diam elementum conse quat nec non dui. Vesti
          bulum vel ullam corper leo. Phasellus imperdiet diam a odio mollis
          condi mentum. Quisque id dictum tortor.
        </p>
        <button className="bg-secondary text-white font-bold font-poppins px-8 py-3 rounded-4xl w-fit text-lg">
          Contact Us Today
        </button>
      </div>
    </div>
  );
};

export default HeaderSection;
