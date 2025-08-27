import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { contactFullInfo } from "../../../components/Footer";
import { images } from "../../../constants/images";
import { ridarectToWhatsapp } from "../../../helper/ridarectToWhatsapp";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const templateID = "template_ic3im7n";
const serviceID = "service_poc1cuj";
const publicKey = "yN-gLhPTPxMXzApQb";

type FormData = { name: string; phone: string; email: string; message: string };

const CustomInput = ({
  type,
  placeholder,
  value,
  onchange,
  errorMes,
}: {
  type: string;
  placeholder: string;
  value: string;
  onchange: (e: string) => void;
  errorMes: string;
}) => {
  return (
    <div className="w-full">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onchange(e.target.value)}
        className="w-full rounded-full p-3 bg-white focus:outline-none"
      />
      <p className="text-red-500 pl-4 text-sm font-poppins">{errorMes}</p>
    </div>
  );
};

const ContactSection = () => {
  const [fromData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errorMes, setErrorMes] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleErrorMessage = (e:string, message:string) => {
    const initail = {
    name: "",
    phone: "",
    email: "",
    message: "",
  }
    setErrorMes({...initail, [e]: message})
  }

  const onSubmit = async () => {
    let ok = true;

    switch (true) {
      case fromData.name.length < 2:
        handleErrorMessage("name", "Veuillez entrer votre nom")
        ok = false;
        break;
      case fromData.email.length < 3:
        handleErrorMessage("email", "Veuillez entrer votre mail")
        ok = false;
        break;
      case fromData.phone.length < 4:
        handleErrorMessage("phone", "Veuillez entrer un numéro de téléphone au format correct")
        ok = false;
        break;
      case fromData.message.length < 6:
        handleErrorMessage("message", "Veuillez entrer le message")
        ok = false;
        break;
    }

    if (ok) {
      setSending(true);
      try {
        await emailjs.send(serviceID, templateID, fromData, {
          publicKey: publicKey,
        });
        setStatus("Message envoyé ✅");
        setFormData({ name: "", email: "", message: "", phone: "" });
      } catch (err: any) {
        setStatus(
          `Échec de l’envoi: ${err?.text || err?.message || "Erreur inconnue"}`
        );
      } finally {
        setSending(false);
      }
    }
  };

  useEffect(() => {
    if (status != null) {
      alert(status);
    }
  }, [status]);

  return (
    <div className="md:p-12 flex max-md:p-4 gap-6 max-[1035px]:flex-col">
      <div className="flex-2 flex flex-col gap-6">
        <div className="border-dotted rounded-2xl border-3 border-secondary p-6">
          <img
            src={images.CONTACTIMG1}
            alt={images.CONTACTIMG1}
            className="object-cover w-full rounded-2xl h-[400px] max-[1035px]:h-[500px]"
          />
        </div>
        <div className="bg-primary w-full p-4 rounded-2xl flex flex-col gap-3">
          {contactFullInfo.map((d, ind) => (
            <div
              className="flex gap-4 items-center"
              key={d.info + d.title + ind}
            >
              <Icon icon={d.icon} className="text-secondary text-[38px]" />
              <div className="flex flex-col ">
                <p className="text-white font-bold font-poppins text-xl">
                  {d.info}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-3 flex flex-col gap-4">
        <div className="flex flex-col">
          <p className="font-poppins text-gray-600 font-bold text-xl max-[800px]:text-center">
            Contact
          </p>
          <p className="font-poppins text-titletext font-bold max-[1035px]:text-[40px] text-[40px] max-[800px]:text-3xl max-[800px]:text-center">
            Pour Toute Information Complémentaire, Contactez-Nous
          </p>
          <p className="text-subtext max-[800px]:text-center">
            Notre équipe est à votre disposition pour répondre à toutes vos
            questions, vous conseiller et vous accompagner dans la réalisation
            de vos projets. N’hésitez pas à nous joindre par téléphone, par
            e-mail ou via notre formulaire de contact.
          </p>
        </div>
        <button
          className="p-4 bg-green-900 rounded-2xl flex gap-2 items-center justify-center"
          onClick={ridarectToWhatsapp}
        >
          <Icon
            icon={"mingcute:whatsapp-line"}
            className="text-white text-[24px]"
          />
          <p className="text-white font-semibold font-poppins text-lg max-[500px]:text-sm">
            Contactez-nous via WhatsApp
          </p>
        </button>
        <p className="w-full text-center font-semibold">OU</p>
        <div className="flex flex-col gap-4 w-full bg-gray-300 p-6 rounded-2xl">
          <CustomInput
            type="text"
            placeholder="Entrez votre nom complet"
            value={fromData.name}
            onchange={(e) => setFormData({ ...fromData, name: e })}
            errorMes={errorMes.name}
          />
          <div className="flex gap-3 items-center max-[800px]:flex-col">
            <CustomInput
              type="text"
              placeholder="+237 6XX XXX XXX"
              value={fromData.phone}
              onchange={(e) => setFormData({ ...fromData, phone: e })}
              errorMes={errorMes.phone}
            />
            <CustomInput
              type="email"
              placeholder="Entrez votre email"
              value={fromData.email}
              onchange={(e) => setFormData({ ...fromData, email: e })}
              errorMes={errorMes.email}
            />
          </div>
          <div className="w-full">
            <textarea
              placeholder="Entrez votre Message"
              className="p-4 rounded-2xl bg-white w-full"
              value={fromData.message}
              onChange={(e) =>
                setFormData({ ...fromData, message: e.target.value })
              }
            ></textarea>
            <p className="text-red-500 pl-4 text-sm font-poppins">{errorMes.message}</p>
          </div>
          <button
            className="bg-secondary hover:bg-primary text-white font-bold text-lg font-poppins p-4 rounded-2xl transition-all duration-300 ease-in-out flex justify-center"
            onClick={() => {
              if (!sending) {
                onSubmit();
              }
            }}
          >
            {sending ? (
              <p className="animate-ping">Loading ...</p>
            ) : (
              <p>Envoyer</p>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
