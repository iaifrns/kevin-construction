import PROJETGOLF from "../assets/files/Projet GOLF .pdf";
import PROJETYASSA from "../assets/files/Résidence Yassa.pdf";
import PROJETTRANS from "../assets/files/Résidence Transformateurs.pdf";
import PROJETKRIBI from "../assets/files/Résidence kribi.pdf";
import PROJECTPORT from "../assets/files/projet portaire.pdf";
import PROJECTJAPOMA from "../assets/files/Stade de Japoma.pdf";
import PROJECTODZA from "../assets/files/Résidence ODZA.pdf";
import PROJECTAWAI from "../assets/files/Résidence AWAI.pdf";
import PROJECTVILLAKRIBI from "../assets/files/Villa Kribi.pdf";
import PROJECTHON from "../assets/files/R+7 – Hippodrome.pdf";
import PROJECTWERNER from "../assets/files/Complexe hôtelier.pdf";
import PROJECTDUPLEXODZ from "../assets/files/Duplex ODZA.pdf";
import PROJECTMINDEF from "../assets/files/Projet MINTP.pdf";
import type { file } from "../type";

const paths: Record<string, file> = {
  PROJETGOLF: {
    url: PROJETGOLF,
    filename: "Projet GOLF .pdf",
    mimeType: "application/pdf",
  },
  PROJETYASSA: {
    url: PROJETYASSA,
    filename: "Résidence Yassa.pdf",
    mimeType: "application/pdf",
  },
  PROJETTRANS: {
    url: PROJETTRANS,
    filename: "Résidence Transformateurs.pdf",
    mimeType: "application/pdf",
  },
  PROJETKRIBI: {
    url: PROJETKRIBI,
    filename: "Résidence kribi.pdf",
    mimeType: "application/pdf",
  },
  PROJECTPORT: {
    url: PROJECTPORT,
    filename: "projet portaire.pdf",
    mimeType: "application/pdf",
  },
  PROJECTJAPOMA: {
    url: PROJECTJAPOMA,
    filename: "Stade de Japoma.pdf",
    mimeType: "application/pdf",
  },
  PROJECTODZA: {
    url: PROJECTODZA,
    filename: "Résidence ODZA.pdf",
    mimeType: "application/pdf",
  },
  PROJECTAWAI: {
    url: PROJECTAWAI,
    filename: "Résidence AWAI.pdf",
    mimeType: "application/pdf",
  },
  PROJECTVILLAKRIBI: {
    url: PROJECTVILLAKRIBI,
    filename: "Villa Kribi.pdf",
    mimeType: "application/pdf",
  },
  PROJECTHON: {
    url: PROJECTHON,
    filename: "R+7 – Hippodrome.pdf",
    mimeType: "application/pdf",
  },
  PROJECTWERNER: {
    url: PROJECTWERNER,
    filename: "Complexe hôtelier.pdf",
    mimeType: "application/pdf",
  },
  PROJECTDUPLEXODZ: {
    url: PROJECTDUPLEXODZ,
    filename: "Duplex ODZA.pdf",
    mimeType: "application/pdf",
  },
  PROJECTMINDEF: {
    url: PROJECTMINDEF,
    filename: "Projet MINTP.pdf",
    mimeType: "application/pdf",
  },
};

export { paths };
