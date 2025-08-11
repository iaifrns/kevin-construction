import MenuBar from "../../components/MenuBar";
import TopMenu from "../../components/TopMenu";
import { links } from "../../constants/links";

const AboutUsPage = () => {
  return <div className="m-0 p-0 flex flex-col w-full">
      <TopMenu />
      <MenuBar active={links.about} />
    </div>;
};

export default AboutUsPage;
