import type { file } from "../type";
import { paths } from "./files";
import { images, imgGolf, imgJapoma, imgKribi, imgPortaire, imgTrans, imgYassa } from "./images";

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
    title1: "Projet Werner House",
    title2: "Projet de construction d’un complexe hôtelier à Kribi",
    desc1:
      "Le Projet Werner House est un complexe hôtelier moderne construit en 2 ans à Kribi. Réalisé par le Groupe Beaux Services, il illustre l’expertise de l’entreprise dans la réalisation de projets touristiques d’envergure, combinant solidité des structures, finitions raffinées et installations techniques de haut niveau.",
    img: imgKribi,
    path: paths.PROJETKRIBI,
    location: "Sud – Kribi",
    duration: "Deux (02) ans",
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
];

export { projects, projects1 };
