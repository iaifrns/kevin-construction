import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MenuBar from "../../components/MenuBar";
import TopMenu from "../../components/TopMenu";
import { links } from "../../constants/links";

const ContactUsPage = () => {
  return (
    <div className="m-0 p-0 flex flex-col w-full">
      <TopMenu />
      <MenuBar active={links.contact} />
      <Header title="Contact Us" page="Contact Us" />
      <Footer />
    </div>
  );
};

export default ContactUsPage;
