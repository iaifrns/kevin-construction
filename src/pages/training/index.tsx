import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MenuBar from "../../components/MenuBar";
import TopMenu from "../../components/TopMenu";
import { images } from "../../constants/images";
import { links } from "../../constants/links";
import { training } from "../../constants/training";
import { ridarectToWhatsapp } from "../../helper/ridarectToWhatsapp";
import { useState } from "react";
import { CustomInput } from "../contactUs/components/ContactSection";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const templateID = "template_357kjld";
const serviceID = "service_2kye1s5";
const publicKey = "69GnNN4nlG5ijDQs6";

const TrainingPage = () => {
  const [infoForm, setInfoForm] = useState<
    Record<string, { text: string; error?: string }>
  >({
    email: {
      text: "",
    },
    phone: {
      text: "",
    },
    name: {
      text: "",
    },
  });

  const [sending, setSending] = useState(false);

  const emptyData = () => {
    setInfoForm({
      name: { text: "", error: undefined },
      email: { text: "", error: undefined },
      phone: { text: "", error: undefined },
    });
  };

  const emptyError = () => {
    setInfoForm({
      name: { ...infoForm.name, error: undefined },
      email: { ...infoForm.email, error: undefined },
      phone: { ...infoForm.phone, error: undefined },
    });
  };

  const onSubmit = async () => {
    let ok = true;

    switch (true) {
      case infoForm.name.text.length < 2:
        setInfoForm({
          ...infoForm,
          name: { ...infoForm.name, error: "Veuillez entrer votre nom" },
          email: { ...infoForm.name, error: undefined },
          phone: { ...infoForm.name, error: undefined },
        });
        ok = false;
        break;
      case infoForm.email.text.length < 3:
        setInfoForm({
          ...infoForm,
          email: { ...infoForm.email, error: "Veuillez entrer votre mail" },
          name: { ...infoForm.name, error: undefined },
          phone: { ...infoForm.name, error: undefined },
        });
        ok = false;
        break;
      case infoForm.phone.text.length < 4:
        setInfoForm({
          ...infoForm,
          phone: {
            ...infoForm.phone,
            error: "Veuillez entrer un numéro de téléphone au format correct",
          },
          email: { ...infoForm.name, error: undefined },
          name: { ...infoForm.name, error: undefined },
        });
        ok = false;
        break;
      default:
        emptyError();
    }

    if (ok) {
      setSending(true);
      try {
        await emailjs.send(
          serviceID,
          templateID,
          {
            name: infoForm.name.text,
            phone: infoForm.phone.text,
            email: infoForm.email.text,
            message: "Formation",
          },
          {
            publicKey: publicKey,
          }
        );
        alert("Message envoyé ✅");
        emptyData();
      } catch (err: any) {
        alert(
          `Échec de l’envoi: ${err?.text || err?.message || "Erreur inconnue"}`
        );
      } finally {
        setSending(false);
      }
    }
  };

  const navigateTo = useNavigate()

  return (
    <div className="w-full flex flex-col items-center">
      <TopMenu />
      <MenuBar active={links.Formation} />
      <Header title="Formation" page="Fromation" img={images.HEROIMG} />
      <div className="w-[90%] max-[500px]:w-full flex py-16 px-8 gap-8 max-[1030px]:flex-col-reverse relative">
        <div className="flex-2 flex flex-col gap-8 h-fit min-[1035px]:sticky top-2">
          <div className="border-dotted border-3 border-secondary rounded-2xl p-6">
            <img
              src={images.ABOUT1}
              alt={images.ABOUT1}
              className="w-full rounded-2xl object-cover h-[300px] max-[500px]:h-[200px]"
            />
          </div>
          <div className="flex flex-col w-full rounded-2xl bg-gray-300 p-6 gap-6">
            <CustomInput
              type="text"
              placeholder="Entrez votre nom complet"
              value={infoForm.name.text}
              onchange={(e) => setInfoForm({ ...infoForm, name: { text: e } })}
              errorMes={infoForm.name.error ?? ""}
            />
            <CustomInput
              type="email"
              placeholder="Entrez votre email"
              value={infoForm.email.text}
              onchange={(e) => setInfoForm({ ...infoForm, email: { text: e } })}
              errorMes={infoForm.email.error ?? ""}
            />
            <CustomInput
              type="text"
              placeholder="+237 6XX XXX XXX"
              value={infoForm.phone.text}
              onchange={(e) => setInfoForm({ ...infoForm, phone: { text: e } })}
              errorMes={infoForm.phone.error ?? ""}
            />

            <button
              className="p-3 bg-secondary hover:bg-primary rounded-2xl font-semibold text-white flex justify-center items-center"
              onClick={() => {
                if (!sending) onSubmit();
              }}
            >
              {sending ? (
                <p className="animate-pulse">Loanding ...</p>
              ) : (
                <p>Contactez Nous</p>
              )}
            </button>
            <button
              className="p-3 bg-green-800 rounded-2xl text-white hover:bg-green-900 cursor-pointer flex items-center justify-center gap-2"
              onClick={() => ridarectToWhatsapp()}
            >
              <Icon
                icon={"mingcute:whatsapp-line"}
                className="text-white text-[24px]"
              />
              <p className="font-semibold text-lg">WhatSapp</p>
            </button>
          </div>
        </div>
        <div className="flex-3 flex flex-col gap-8">
          <div className="flex flex-col">
            <p className="text-gray-500 font-semibold text-lg">Formation</p>
            <p className="text-titletext font-bold text-[40px] max-[500px]:text-[28px] font-poppins">
              Formations professionnelles avec plus de 16 ans d’expertise
            </p>
            <p className="text-subtext max-[500px]:pt-3">
              Bénéficiez du savoir-faire d’une entreprise de construction
              reconnue, forte de plus de 16 ans d’expérience. Nos formations
              pratiques vous offrent un véritable avantage pour développer vos
              compétences et évoluer aux côtés de professionnels du métier.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-semibold text-xl">Required Position</p>
            <div className="flex flex-col gap-3 w-full">
              {training.map((item, ind) => (
                <div
                  className="w-full rounded-2xl bg-bg1 p-4 flex gap-6 max-[500px]:flex-col-reverse cursor-default transition-all duration-300 ease-in-out hover:p-6"
                  key={item.title + ind}
                  onClick={()=> navigateTo(links.detailTraining+ind)}
                >
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold text-xl">{item.title}</p>
                    <p className="text-subtext">{item.desc}</p>
                    <div className="flex gap-2 items-center w-fit py-1 px-2 border rounded-2xl">
                      <p className="text-sm font-bold">Plus</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        className="mt-1"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M4 12h2.5M20 12l-6-6m6 6l-6 6m6-6H9.5"
                        />
                      </svg>
                    </div>
                  </div>
                  <img
                    src={item.img}
                    alt={item.img}
                    className="w-[300px] max-[500px]:w-full h-[100px] object-cover rounded-2xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrainingPage;
