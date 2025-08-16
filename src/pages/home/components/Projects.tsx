import Project from "../../../components/Project";
import { images } from "../../../constants/images";

const Projects = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <p className="font-poppins text-gray-600 font-bold text-xl">PROJECTS</p>
      <p className="font-poppins text-titletext font-bold max-[1035px]:text-[40px] text-[48px] max-[800px]:text-3xl max-[800px]:text-center">
        Proven Results Across Every Site
      </p>
      <p className="text-subtext text-center min-[1035px]:w-[50%] ">
        Cras tincidunt risus el vitae tortor aliquet, nec tincidunt felis biben
        dum mentum. Aliquam elemen tum vitaem commodo, et congue.
      </p>
      <div className="mt-6 flex justify-between w-full gap-6 max-[1035px]:flex-col min-[1500px]:w-[80%]">
        <Project
          img={images.ABOUT1}
          title1="Residential Construction"
          title2="Urban Heights Residence"
          desc="Nullam vehicula sitae amet eros etiam semper. Proin ligula metus."
          active ={false}
        />
        <Project
          img={images.ABOUT2}
          title1="Commercial Development"
          title2="MetroTech Office Park"
          desc="Nullam vehicula sitae amet eros etiam semper. Proin ligula metus."
          active ={true}
        />
        <Project
          img={images.HEROIMG}
          title1="Industrial Facility"
          title2="Harbor Logistics Warehouse"
          desc="Nullam vehicula sitae amet eros etiam semper. Proin ligula metus."
          active ={false}
        />
      </div>
    </div>
  );
};

export default Projects;
