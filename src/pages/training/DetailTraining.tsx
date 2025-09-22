import { useEffect, useState } from "react";
import Header from "../../components/Header";
import MenuBar from "../../components/MenuBar";
import TopMenu from "../../components/TopMenu";
import { images } from "../../constants/images";
import { links } from "../../constants/links";
import { trainingDetails } from "../../constants/training";
import Footer from "../../components/Footer";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { ridarectToWhatsapp } from "../../helper/ridarectToWhatsapp";
import { CustomInput } from "../contactUs/components/ContactSection";
import emailjs from "@emailjs/browser";
import Pointer from "../../components/Pointer";
import { useParams } from "react-router-dom";

const templateID = "template_357kjld";
const serviceID = "service_2kye1s5";
const publicKey = "69GnNN4nlG5ijDQs6";

const DetailTraining = () => {

  const {index} = useParams<{index:string}>()

  const [i, setI] = useState(0);

  useEffect(() => setI(index ? parseInt(index) : 0),[index])

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

  const handleClick = (i:number) => setI(i)

  return (
    <div className="w-full flex flex-col items-center gap-12 ">
      <div className="flex flex-col w-full items-center">
        <TopMenu />
        <MenuBar active={links.Formation} />
        <Header
          title={trainingDetails[i].title}
          page="service/detail"
          img={images.SERVICEIMG1}
        />
        <div className="w-[90%] py-16 px-8 flex flex-col gap-8">
          <div className="w-full flex gap-8 max-[1035px]:flex-col-reverse">
            <div className="flex-2 flex flex-col gap-8 h-fit min-[1035px]:sticky top-2">
              <div className="border-dotted border-3 border-secondary rounded-2xl p-6">
                <img
                  src={trainingDetails[i].img}
                  alt={trainingDetails[i].img}
                  className="w-full rounded-2xl object-cover h-[350px] max-[500px]:h-[200px]"
                />
              </div>
              <div className="flex flex-col w-full rounded-2xl bg-gray-300 p-6 gap-6">
                <CustomInput
                  type="text"
                  placeholder="Entrez votre nom complet"
                  value={infoForm.name.text}
                  onchange={(e) =>
                    setInfoForm({ ...infoForm, name: { text: e } })
                  }
                  errorMes={infoForm.name.error ?? ""}
                />
                <CustomInput
                  type="email"
                  placeholder="Entrez votre email"
                  value={infoForm.email.text}
                  onchange={(e) =>
                    setInfoForm({ ...infoForm, email: { text: e } })
                  }
                  errorMes={infoForm.email.error ?? ""}
                />
                <CustomInput
                  type="text"
                  placeholder="+237 6XX XXX XXX"
                  value={infoForm.phone.text}
                  onchange={(e) =>
                    setInfoForm({ ...infoForm, phone: { text: e } })
                  }
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
            <div className="flex-3 flex flex-col gap-4">
              <div>
                <p className="text-titletext font-bold font-poppins text-[40px]">
                  {trainingDetails[i].title}
                </p>
                <p className="text-lg text-subtext">
                  {trainingDetails[i].desc}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {trainingDetails[i].points.map((item, ind) => (
                  <div
                    className="flex gap-2"
                    key={ind + item[ind]}
                  >
                    <Pointer w="20" h="20" />
                    <p className="text-lg">
                      <span className="font-bold">{Object.keys(item)}: </span>{" "}
                      {Object.values(item)}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-2xl font-semibold font-poppins mt-4">D'autre Formation</p>
              <div className="flex flex-col gap-3">
                {trainingDetails.map((detail, ind) => (
                  <>
                    {ind != i && (
                      <div
                        className="flex gap-4 items-center transition-all duration-300 ease-out p-2 hover:bg-gray-200 hover:p-3 rounded-xl cursor-default"
                        key={ind + detail.title}
                        onClick={() => handleClick(ind)}
                      >
                        <img
                          src={detail.img}
                          alt={detail.img}
                          className="w-[200px] h-[200px] object-cover"
                        />
                        <div className="flex flex-col gap-2">
                          <p className="text-2xl font-poppins font-bold">
                            {detail.title}
                          </p>
                          <p className="text-sm text-subtext">{detail.desc}</p>
                          <div className="flex gap-4 items-center">
                            <p className="font-semibold">Plus de Detail</p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M4 12h16m0 0l-6-6m6 6l-6 6"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DetailTraining;
