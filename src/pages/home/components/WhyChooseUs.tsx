import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { stats2 } from "../../../constants/data";
import { images } from "../../../constants/images";

const WhyChooseUs = () => {
  return (
    <div className="flex w-full gap-8 max-[1035px]:flex-col">
      <div className="flex-1 flex flex-col justify-evenly max-[1035px]:gap-4">
        <p className="text-gray-600 text-xl font-bold font-poppins">
          WHY CHOOSE US
        </p>
        <p className="text-titletext max-[800px]:text-3xl max-[1035px]:text-[40px] text-[52px] font-poppins font-bold">
          What Makes Us the Contractor You Can Trust
        </p>
        <p className="text-subtext">
          Proin orci arcu, egestas sit amet nulla ut, semper volutpat risus.
          Nullam vehicula sitae amet eros et semper. Proin ligula metus,
          placerat eu tempus eu, port titor eget neque. Aenean ac est lectus.
          Maecenas vene natis vesti bulum velit.
        </p>
        <div className="w-full flex gap-6 max-[800px]:flex-col">
          <div className="flex bg-primary rounded-lg flex-col gap-3 p-6 flex-1 items-center justify-center">
            <Icon
              icon={"healthicons:construction-worker-outline"}
              className="text-white text-[72px]"
            />
            <p className="text-white font-bold font-poppins text-2xl text-center">
              Skilled $ Certified Professionals
            </p>
          </div>
          <div className="flex-2 flex flex-col justify-between max-[800px]:gap-4">
            {stats2.map((stat, ind) => (
              <div
                className="flex flex-col w-full"
                key={stat.percent + stat.title + ind}
              >
                <div className="flex justify-between">
                  <p className="font-poppins font-semibold text-xl">
                    {stat.title}
                  </p>
                  <p className="text-secondary font-semibold text-lg">
                    {stat.percent}%
                  </p>
                </div>
                <div className="w-full h-2 rounded-2xl bg-white">
                  <div
                    className="h-full bg-secondary rounded-2xl"
                    style={{ width: `${stat.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 border-dotted border-3 border-secondary relative rounded-2xl ">
        <div className="absolute w-full h-full flex justify-center items-center">
          <div className="bg-[rgb(200,200,200)] p-4 rounded-lg max-[1035px]:w-[60%] max-[500px]:w-[90%]">
            <div className="bg-white p-4 min-[1035px]:max-w-[300px]">
              <p className="font-semibold font-poppins text-2xl text-primary">
                "Excellence isn't a goal — it's our foundation."
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex flex-col gap-4 p-8">
          <img
            src={images.WHYUS1}
            alt={images.WHYUS1}
            className="rounded-2xl h-[250px] object-cover"
          />
          <img
            src={images.WHYUS2}
            alt={images.WHYUS2}
            className="rounded-2xl h-[250px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
