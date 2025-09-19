import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MenuBar from "../../components/MenuBar";
import TopMenu from "../../components/TopMenu";
import { images } from "../../constants/images";
import { links } from "../../constants/links";
import { detailServices } from "../../constants/services";
import MiniGallery from "./components/MiniGallery";

const imgs = [images.HEROIMG, images.PROJECT1, images.IMG1];

const ServiceDetail = () => {
  const [i, setI] = useState(0);
  return (
    <div className="w-full flex flex-col items-center gap-12">
      <div className="flex flex-col w-full">
        <TopMenu />
        <MenuBar active={links.service} />
        <Header
          title={detailServices[i].title}
          page="service/detail"
          img={images.SERVICEIMG1}
        />
        <div className="w-full flex flex-col justify-center items-center gap-12 bg-gray-100 py-16">
          <div className="min-[1600px]:w-[70%] w-[80%] flex justify-center gap-10 max-[1035px]:flex-col-reverse">
            <div className="flex-1">
              <img
                src={imgs[i]}
                alt={imgs[i]}
                className="object-cover w-full min-[500px]:h-[600px]"
              />
            </div>
            <div className="flex-1 flex flex-col gap-6">
              <div className="flex flex-col justify-center">
                <p className="text-lg font-semibold font-poppins text-gray-500">
                  Detail Service
                </p>
                <p className="text-[48px] max-[800px]:text-3xl font-bold text-titletext font-poppins">
                  {detailServices[i].title}
                </p>
                <p className="font-poppins text-subtext">
                  {detailServices[i].desc}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {detailServices[i].points.map((point, ind) => (
                  <div key={point[0] + ind}>
                    <div className="gap-1 flex items-center">
                      <p className="font-poppins font-semibold min-[1600px]:text-lg">
                        {Object.keys(point)}:{" "}
                        <span className="min-[1600px]:text-lg font-extralight">
                          {Object.values(point)}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[85%]">
        <div className="w-full flex max-[1035px]:flex-col gap-4 ">
          {detailServices
            .filter((_, p) => p != i)
            .map((detail, ind) => (
              <div
                key={ind + detail.title}
                onClick={()=>setI(ind)}
                className="flex-1 border-dotted border-secondary border-3 min-[1600px]:p-8 p-4 rounded-2xl flex flex-col gap-4 cursor-pointer hover:scale-95 transition-all duration-300"
              >
                <img
                  src={imgs[ind]}
                  alt={images.HEROIMG}
                  className="rounded-2xl h-[350px] object-cover"
                />
                <p className="font-semibold text-2xl font-poppins text-titletext">
                  {detail.title}
                </p>
                <p className="text-titletext">{detail.desc}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="w-[95%]">
        <MiniGallery />
      </div>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
