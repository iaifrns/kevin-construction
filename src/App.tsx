import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import AboutUsPage from "./pages/aboutUs";
import ContactUsPage from "./pages/contactUs";
import ServicePage from "./pages/services";
import { links } from "./constants/links";
import DefaultLayout from "./layout/DefaultLayout";
import MobileProvider from "./context/MenuProvider";

function App() {
  return (
    <MobileProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path={links.home} element={<HomePage />} />
            <Route path={links.about} element={<AboutUsPage />} />
            <Route path={links.contact} element={<ContactUsPage />} />
            <Route path={links.service} element={<ServicePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MobileProvider>
  );
}

export default App;
