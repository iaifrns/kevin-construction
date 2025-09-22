import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { useContext, useEffect, useMemo } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MenuBar from "../../components/MenuBar";
import TopMenu from "../../components/TopMenu";
import { paths } from "../../constants/files";
import { links } from "../../constants/links";
import { MobileContext } from "../../context/MenuProvider";
import { splitByHeadings } from "../../helper/parsePdfText";
import { usePdfText } from "../../hooks/usePdfText";
import ImagePost from "../home/components/ImagePost";

const ProjectDetails = () => {
  const { pages, loading, error, extract } = usePdfText();
  const {projet} = useContext(MobileContext)

  useEffect(() => {
    extract(projet.path ?? paths.PROJECTGOLF);
  }, [projet]);

  const fullText = useMemo(
    () => pages.map((p) => p.text).join("\n\n"),
    [pages]
  );

  const sections = useMemo(
    () => (fullText ? splitByHeadings(fullText) : []),
    [fullText]
  );

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    alert("something happened please try again");
  }

  return (
    <div className="m-0 p-0 flex flex-col w-full">
      <TopMenu />
      <MenuBar active={links.project} />
      <Header
        title={projet.title1}
        page="Projects / Project Detail"
        img={projet.img[0]}
      />
      <div className="w-full px-8 py-8 bg-[rgb(220,220,220)] flex flex-col items-center gap-6 pb-32">
        <ImagePost img={projet.img[1]} />

        <div className="flex gap-6 w-[90%] max-[1035px]:w-full max-[1035px]:flex-col">
          <div className="flex-1 flex flex-col gap-8">
            <p className="text-[48px] font-bold font-poppins text-titletext min-[1035px]:hidden text-center max-[800px]:text-2xl">
                {projet.title1}
              </p>
            <div className=" p-4 rounded-2xl bg-white flex h-fit">
              <div className="rounded-2xl bg-gray-200 w-full flex flex-col">
                <div className="bg-primary p-4 rounded-t-2xl">
                  <p className="text-2xl font-bold font-poppins text-white">
                    Project Detail
                  </p>
                </div>
                <div className="bg-gray-200 rounded-b-2xl p-4 flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1">
                      <Icon
                        icon="foundation:map"
                        className="text-xl text-secondary"
                      />
                      <p className="text-secondary text-xl">
                        Intitulé du projet
                      </p>
                    </div>
                    <p className="font-semibold text-sm">
                      {projet.title2}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1">
                      <Icon
                        icon="ri:map-pin-line"
                        className="text-xl text-secondary"
                      />
                      <p className="text-secondary text-xl">Localisation</p>
                    </div>
                    <p className="font-semibold text-sm">
                      {projet.location}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1">
                      <Icon
                        icon="guidance:time"
                        className="text-xl text-secondary"
                      />
                      <p className="text-secondary text-xl">
                        Durée des travaux
                      </p>
                    </div>
                    <p className="font-semibold text-sm">{projet.duration}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-white flex flex-col gap-4">
              <p className="font-poppins font-semibold">Description</p>
              <p className="text-subtext text-justify font-poppins text-sm">
                {projet.desc1}
              </p>
            </div>
            <img src={projet.img[2]} alt={projet.img[2]} className="w-full h-[300px] object-cover rounded-2xl" />
          </div>

          <div className="flex-3 flex flex-col gap-6">
            <div className="flex flex-col">
              <p className="text-[48px] font-bold font-poppins text-titletext max-[1035px]:hidden">
                {projet.title1}
              </p>
            </div>
            {sections.map((sec, ind) => (
              <div className="flex flex-col gap-4" key={ind + sec.heading}>
                <p className="text-xl font-bold font-poppins">{sec.heading}</p>
                <div className="flex flex-col gap-2">
                  {sec.body.map((text, i) => (
                    <>
                      {text.includes("-") ? (
                        <div className="flex items-center gap-2">
                          <Icon
                            icon="radix-icons:dot-filled"
                            className="text-secondary"
                          />
                          <p key={i + text} className="">
                            {text.replace("-", "")}
                          </p>
                        </div>
                      ) : (
                        <p key={i + text} className="">
                          {text}
                        </p>
                      )}
                    </>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 w-full border-dotted border-secondary border-3 rounded-2xl m-8">
          <div className="grid grid-cols-3 gap-4 w-full max-[500px]:grid-cols-1 max-[800px]:grid-cols-2">
            {projet.img.map((img, ind) => (
              <img
                src={img}
                alt={img}
                className="w-full h-[350px] object-cover rounded-2xl"
                key={img + ind}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
