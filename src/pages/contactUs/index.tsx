import Footer from "../../components/Footer";
import MenuBar from "../../components/MenuBar";
import TopMenu from "../../components/TopMenu";
import { links } from "../../constants/links";

const ContactUsPage = () => {
  return (
    <div className="m-0 p-0 flex flex-col w-full">
      <TopMenu />
      <MenuBar active={links.contact} />
      <Footer />
    </div>
  );
};

export default ContactUsPage;
