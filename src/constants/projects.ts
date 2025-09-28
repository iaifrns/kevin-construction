import type { file } from "../type";
import { paths } from "./files";
import { images, imgAwai, imgDuplexOdx, imgGolf, imgHon, imgJapoma, imgMidef, imgOdza, imgPortaire, imgTrans, imgVKribi, imgWerner, imgYassa } from "./images";

const projects: {
  title1: string;
  title2: string;
  desc: string;
  img: string;
  desc1: string;
}[] = [
  {
    title1: "Construction Résidentielle",
    title2: "Résidence Moderne à Yassa",
    desc: "Un duplex conçu et réalisé avec soin, alliant confort, esthétique et durabilité pour répondre aux besoins d’une famille en pleine croissance.",
    desc1:
      "Ce projet résidentiel illustre notre savoir-faire dans la conception et la réalisation de logements modernes adaptés aux besoins actuels. La Résidence Moderne à Yassa offre des espaces de vie lumineux et fonctionnels, une architecture contemporaine et des finitions de haute qualité. Chaque détail, de la maçonnerie aux menuiseries, a été soigneusement étudié pour garantir confort, sécurité et durabilité à long terme.",
    img: images.PROJECT1,
  },
  {
    title1: "Développement Commercial",
    title2: "Projet de construction d’un centre commercial",
    desc: "Un complexe de bureaux moderne construit pour favoriser le dynamisme des entreprises locales, livré dans le respect des normes et des délais.",
    desc1:
      "Le Centre d’Affaires Tsingha est un projet emblématique destiné à renforcer l’attractivité économique de la région. Construit avec des matériaux de qualité et des solutions techniques innovantes, il comprend plusieurs espaces de bureaux modulables, des zones communes conviviales et une infrastructure adaptée aux besoins des entreprises. Ce développement commercial répond aux standards internationaux en matière de confort, de sécurité et d’efficacité énergétique.",
    img: images.PROJECT2,
  },
  {
    title1: "Infrastructure Industrielle",
    title2: "Entrepôt Logistique du Port",
    desc: "Un espace industriel robuste et fonctionnel destiné au stockage et à la distribution, conçu pour optimiser la chaîne logistique.",
    desc1:
      "Cet entrepôt logistique, situé en zone portuaire, a été conçu pour répondre aux exigences élevées du secteur industriel et du transport. Sa structure robuste garantit une capacité de stockage optimale et sécurisée, tandis que son aménagement intérieur facilite la circulation et la gestion des marchandises. Grâce à une planification rigoureuse et à l’intégration de solutions modernes, ce projet contribue à améliorer l’efficacité et la fluidité des opérations logistiques.",
    img: images.PROJECT3,
  },
];

const projects1: {
  title1: string;
  title2: string;
  img: string[];
  desc1: string;
  path: file;
  location: string;
  duration: string;
}[] = [
  {
    title1: "Construction Résidentielle",
    title2: "Résidence Moderne à Yassa",
    desc1:
      "Le Projet Résidence Yassa est un complexe résidentiel complet composé d’un duplex principal, d’une dépendance, d’un boukarou et d’un parking couvert. Réalisé sur 2 ans à Douala-Yassa, ce projet illustre parfaitement le savoir-faire du Groupe Beaux Services en matière de construction résidentielle haut de gamme, alliant fonctionnalité, confort, esthétique et durabilité.",
    img: imgYassa,
    path: paths.PROJETYASSA,
    location: "Douala – Quartier Yassa",
    duration: "Deux (02) ans",
  },
  {
    title1: "Projet GOLF",
    title2: "Projet de construction d’un centre commercial",
    desc1:
      "Le Projet GOLF est un centre commercial d’envergure construit à Yaoundé sur 3 ans. Il combine des solutions techniques modernes (plomberie, climatisation, électricité, charpente métallique) et une exécution rigoureuse (terrassements, maçonneries, coffrages, etc.) pour répondre aux standards de qualité et offrir un espace économique stratégique.",
    img: imgGolf,
    path: paths.PROJETGOLF,
    location: "Yaoundé – Ancienne foire TSINGA",
    duration: "Trois (03) ans",
  },
  {
    title1: "Infrastructure Industrielle",
    title2: "Entrepôt Logistique du Port",
    desc1:
      "Le Projet Infrastructure Industrielle – Entrepôt Logistique du Port est un projet clé dans le domaine industriel, visant à renforcer les capacités de stockage et de distribution en zone portuaire. Avec une exécution sur 2 ans, il démontre l’expertise du Groupe Beaux Services dans la conception et la réalisation d’ouvrages industriels de grande envergure, alliant solidité, fonctionnalité et modernité.",
    img: imgPortaire,
    path: paths.PROJECTPORT,
    location: "Zone portuaire",
    duration: "Deux (02) ans",
  },
  {
    title1: "Le Projet Postes Transformateurs",
    title2: "Projet de construction de plusieurs postes de transformateurs",
    desc1:
      "Le Projet Postes Transformateurs consistait à ériger plusieurs bâtiments techniques destinés à abriter des transformateurs électriques. Réalisé en 2 ans à Yaoundé, il démontre le savoir-faire du Groupe Beaux Services dans les ouvrages techniques et industriels, combinant robustesse du gros œuvre et finitions soignées pour des installations essentielles au réseau énergétique.",
    img: imgTrans,
    path: paths.PROJETTRANS,
    location: "Yaoundé",
    duration: "Trois (02) ans",
  },
  {
    title1: "Japoma Complexe Sportif",
    title2: "Projet de construction d’un complexe sportif à Japoma",
    desc1:
      "Le Projet du Stade de Japoma est un chantier emblématique de Douala, construit en 2 ans avec la participation de l’entreprise Leonardo et des experts techniques comme le Groupe Beaux Services. Ce complexe sportif intègre toutes les infrastructures modernes (stade, accès, réseaux techniques, station de traitement) et illustre l’expertise dans la réalisation d’ouvrages de grande envergure, répondant aux exigences internationales.",
    img: imgJapoma,
    path: paths.PROJECTJAPOMA,
    location: "Douala – Quartier Japoma",
    duration: "Deux (02) ans",
  },
  {
    title1: "PORT FOLIO – Résidence ODZA",
    title2: "Résidence ODZA – Auberge Bleu",
    desc1:
      "ce projet illustre la capacité de l’entreprise à réaliser un complexe résidentiel complet et moderne, intégrant non seulement l’habitation principale (duplex), mais aussi des annexes haut de gamme (piscine, pergola, parking couvert)",
    img: imgOdza,
    path: paths.PROJECTODZA,
    location: "Yaoundé – Odza",
    duration: "Deux (02) ans",
  },
  {
    title1: "Résidence AWAI",
    title2: "Construction d’un duplex résidentiel avec annexes",
    desc1:
      "Ce projet illustre la réalisation d’un ensemble résidentiel complet et fonctionnel, intégrant un duplex moderne, des annexes utiles, un espace traditionnel (boukarou) pour la convivialité, ainsi qu’un parking couvert pour le confort des occupants.",
    img: imgAwai,
    path: paths.PROJECTAWAI,
    location: "Yaoundé – Awai",
    duration: "Deux (02) ans",
  },
  {
    title1: "Résidence privée – Villa Kribi",
    title2: "Construction d’une résidence privée",
    desc1:
      "Ce projet démontre la réalisation d’une résidence complète et moderne, comprenant une villa principale, des annexes fonctionnelles et des infrastructures essentielles comme le forage et le château d’eau, garantissant autonomie et confort aux occupants.",
    img: imgVKribi,
    path: paths.PROJECTVILLAKRIBI,
    location: "Kribi – Océan",
    duration: "un (01) ans",
  },
  {
    title1: "Immeuble R+7 – Hippodrome",
    title2: "Projet de construction d’un immeuble R+7",
    desc1:
      "Ce projet illustre la réalisation d’un immeuble de grande envergure (R+7) en plein cœur de Yaoundé, avec un suivi rigoureux et des techniques modernes de gros œuvre pour garantir solidité, sécurité et durabilité.",
    img: imgHon,
    path: paths.PROJECTHON,
    location: "Yaoundé – Hippodrome",
    duration: "Deux (02) ans",
  },
  {
    title1: "WERNER HOUSE – Complexe hôtelier",
    title2: "Construction d’un complexe hôtelier",
    desc1:
      "Ce projet illustre la réalisation complète d’un complexe hôtelier moderne à Kribi, combinant gros œuvre, finitions haut de gamme, réseaux électriques et plomberie, afin d’offrir un cadre confortable, durable et conforme aux standards hôteliers.",
    img: imgWerner,
    path: paths.PROJECTWERNER,
    location: "Sud – Kribi",
    duration: "Deux (02) ans",
  },
  {
    title1: "Duplex ODZA",
    title2: "Projet de construction d’un duplex résidentiel",
    desc1:
      "Ce projet met en valeur la réalisation d’un duplex moderne et fonctionnel, intégrant un gros œuvre solide, des finitions de qualité et des installations électriques et sanitaires conformes aux normes, pour offrir confort et durabilité aux occupants.",
    img: imgDuplexOdx,
    path: paths.PROJECTDUPLEXODZ,
    location: "Yaoundé – Odza",
    duration: "Deux (02) ans",
  },
  {
    title1: "Foyer des Jeunes de Mbandjock",
    title2: "Construction du Foyer des Jeunes de Mbandjock",
    desc1:
      "Ce projet a permis de livrer un espace communautaire moderne et fonctionnel, dédié aux jeunes de Mbandjock, en garantissant la qualité des ouvrages et la satisfaction du maître d’ouvrage.",
    img: imgMidef,
    path: paths.PROJECTMINDEF,
    location: "Mbandjock – Cameroun",
    duration: "(02) ans",
  },
];

export { projects, projects1 };

