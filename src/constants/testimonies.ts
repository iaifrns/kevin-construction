import { images } from "./images";

const testimonies: {
  img: string;
  name: string;
  title: string;
  message: string;
}[] = [
  {
    img: images.WHYUS1,
    name: "Aminata Diallo",
    title: "Responsable Administratif",
    message:
      "Dès le premier jour, l’équipe a fait preuve de professionnalisme et de transparence. Nos nouveaux bureaux ont été livrés avant le délai prévu.",
  },
  {
    img: images.WHYUS2,
    name: "Jean-Baptiste Mba",
    title: "Propriétaire de maison",
    message:
      "Je suis très satisfait du résultat de la rénovation de ma maison. Chaque détail a été soigneusement traité et l’équipe a travaillé avec respect.",
  },
  {
    img: images.WHYUS1,
    name: "Dr. Aïcha N’Goma",
    title: "Directrice de clinique",
    message:
      "Ils ont compris les besoins complexes de notre structure de santé et ont livré un centre médical moderne conforme aux normes en vigueur.",
  },
  {
    img: images.WHYUS2,
    name: "Moussa Kouyaté",
    title: "PDG",
    message:
      "Professionnels, fiables et hautement qualifiés — l’équipe a dépassé nos attentes à chaque étape. Le résultat final est impeccable.",
  },
  {
    img: images.WHYUS1,
    name: "Chinedu Okeke",
    title: "Responsable Logistique",
    message:
      "Ils ont transformé notre vision en réalité. Notre résidence a été livrée à temps, avec un savoir-faire remarquable et une grande attention aux détails.",
  },
];

export { testimonies };
