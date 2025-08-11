import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/home"
import AboutUsPage from "./pages/aboutUs"
import ContactUsPage from "./pages/contactUs"
import ServicePage from "./pages/services"
import { links } from "./constants/links"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={links.home} element={<HomePage />} />
        <Route path={links.about} element={<AboutUsPage />} />
        <Route path={links.contact} element={<ContactUsPage />} />
        <Route path={links.service} element={<ServicePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
 