import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { contactFullInfo } from "../../../components/Footer";
import { images } from "../../../constants/images";
import { ridarectToWhatsapp } from "../../../helper/ridarectToWhatsapp";

const CustomInput = ({
  type,
  placeholder,
}: {
  type: string;
  placeholder: string;
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-full p-3 bg-white focus:outline-none"
    />
  );
};

const ContactSection = () => {
  return (
    <div className="md:p-12 flex max-md:p-4 gap-6 max-[1035px]:flex-col">
      <div className="flex-2 flex flex-col gap-6">
        <div className="border-dotted rounded-2xl border-3 border-secondary p-6">
          <img
            src={images.CONTACTIMG1}
            alt={images.CONTACTIMG1}
            className="object-cover w-full rounded-2xl h-[400px] max-[1035px]:h-[500px]"
          />
        </div>
        <div className="bg-primary w-full p-4 rounded-2xl flex flex-col gap-3">
          {contactFullInfo.map((d, ind) => (
            <div
              className="flex gap-4 items-center"
              key={d.info + d.title + ind}
            >
              <Icon icon={d.icon} className="text-secondary text-[38px]" />
              <div className="flex flex-col ">
                <p className="text-white font-bold font-poppins text-xl">
                  {d.info}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-3 flex flex-col gap-4">
        <div className="flex flex-col">
          <p className="font-poppins text-gray-600 font-bold text-xl max-[800px]:text-center">
            Contact
          </p>
          <p className="font-poppins text-titletext font-bold max-[1035px]:text-[40px] text-[40px] max-[800px]:text-3xl max-[800px]:text-center">
            For More Info You Can Contact Us On
          </p>
          <p className="text-subtext max-[800px]:text-center">
            Cras tincidunt risus el vitae tortor aliquet, nec tincidunt felis
            biben dum mentum. Aliquam elemen tum vitaem commodo, et congue.
          </p>
        </div>
        <button
          className="p-4 bg-green-900 rounded-2xl flex gap-2 items-center justify-center"
          onClick={ridarectToWhatsapp}
        >
          <Icon
            icon={"mingcute:whatsapp-line"}
            className="text-white text-[24px]"
          />
          <p className="text-white font-semibold font-poppins text-lg max-[500px]:text-sm">
            Message us on Whatsapp
          </p>
        </button>
        <p className="w-full text-center font-semibold">OR</p>
        <div className="flex flex-col gap-4 w-full bg-gray-300 p-6 rounded-2xl">
          <CustomInput type="text" placeholder="Enter your Full Name" />
          <div className="flex gap-3 items-center max-[800px]:flex-col">
            <CustomInput type="text" placeholder="Enter your phone number" />
            <CustomInput type="email" placeholder="Enter your Email" />
          </div>
          <textarea
            placeholder="Enter Your Message"
            className="p-4 rounded-2xl bg-white"
          ></textarea>
          <button className="bg-secondary hover:bg-primary text-white font-bold text-lg font-poppins p-4 rounded-2xl transition-all duration-300 ease-in-out">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
