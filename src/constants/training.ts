import { images, imgGolf, imgKribi } from "./images";

const training: { title: string; desc: string; img: string }[] = [
  {
    title: "Ouvriers spécialisés (maçonnerie, coffrage, ferraillage...)",
    desc: "Formation pratique pour maîtriser les techniques essentielles du gros œuvre et devenir un professionnel recherché sur les chantiers.",
    img: images.HEROIMG,
  },
  {
    title: "Étanchéité",
    desc: "Apprenez les méthodes modernes pour protéger efficacement les bâtiments contre l’eau et l’humidité, avec une expertise directement applicable.",
    img: imgGolf[5],
  },
  {
    title: "Menuiserie (aluminium, ferronnerie, bois)",
    desc: "Développez vos compétences en fabrication et pose de menuiseries, en combinant savoir-faire traditionnel et technologies modernes.",
    img: images.IMG3,
  },
  {
    title:
      "Revêtements sols et murs (carrelage, résine, parquet, béton imprimé)",
    desc: "Découvrez les techniques de pose et de finition pour offrir des espaces esthétiques, durables et adaptés aux tendances actuelles.",
    img: imgKribi[3],
  },
  {
    title: "Peinture et décorations diverses",
    desc: "Initiez-vous aux techniques de peinture et de décoration pour donner style, couleur et personnalité à tout type d’ouvrage.",
    img: imgGolf[1],
  },
  {
    title: "Informatique et secrétariat bureautique",
    desc: "Formation complète pour maîtriser les outils bureautiques et renforcer vos compétences en gestion administrative moderne.",
    img: images.IMG1,
  },
  {
    title: "Sécurité et hygiène de la construction",
    desc: "Apprenez les bonnes pratiques de sécurité et d’hygiène afin de garantir des chantiers sûrs, conformes aux normes et respectueux des travailleurs.",
    img: imgKribi[2],
  },
];

const trainingDetails: {
  title: string;
  desc: string;
  img: string;
  points: Record<string, string>[];
}[] = [
  {
    title: "Ouvriers spécialisés (maçonnerie, coffrage, ferraillage...)",
    img: images.HEROIMG,
    desc: "Cette formation pratique plonge les stagiaires dans les réalités du gros œuvre. Encadrés par des professionnels expérimentés, ils apprennent les bases et perfectionnent les techniques de maçonnerie, de coffrage et de ferraillage à travers des ateliers et des mises en situation réelles sur chantier. L’objectif est de former des ouvriers qualifiés, capables d’intégrer immédiatement le marché du travail.",
    points: [
      {
        "Travaux de maçonnerie":
          "Construction de murs, fondations et structures porteuses avec mise en pratique sur des projets réels.",
      },
      {
        Coffrage:
          "Fabrication et pose de coffrages traditionnels et modernes pour béton armé.",
      },
      {
        Ferraillage:
          "Découpe, assemblage et pose d’armatures métalliques adaptées aux normes de sécurité.",
      },
      {
        "Lecture et exécution de plans":
          "Interprétation de plans techniques pour les appliquer sur chantier.",
      },
      {
        "Ateliers pratiques":
          "Apprentissage renforcé par des exercices concrets réalisés sur de véritables chantiers.",
      },
    ],
  },
  {
    title: "Étanchéité",
    img: imgGolf[5],
    desc: "La maîtrise de l’étanchéité est essentielle pour garantir la durabilité des bâtiments. Cette formation enseigne les méthodes modernes de prévention et de correction des infiltrations d’eau. Les stagiaires participent à des exercices pratiques sur des toitures, terrasses et fondations pour développer des compétences directement applicables dans la construction et la rénovation.",
    points: [
      {
        "Techniques d’étanchéité":
          "Application de membranes, résines et systèmes bitumineux sur différents supports.",
      },
      {
        "Pratique sur ouvrages":
          "Interventions sur toitures, terrasses et sols en conditions réelles.",
      },
      {
        "Prévention des infiltrations":
          "Méthodes de diagnostic et correction des zones sensibles.",
      },
      {
        "Normes et qualité":
          "Respect strict des standards de mise en œuvre et de sécurité.",
      },
      {
        "Exercices dirigés":
          "Simulation de cas réels pour développer des réflexes professionnels.",
      },
    ],
  },
  {
    title: "Menuiserie (aluminium, ferronnerie, bois)",
    img: images.IMG3,
    desc: "Cette formation polyvalente initie les stagiaires aux métiers de la menuiserie bois, aluminium et ferronnerie. Grâce à des ateliers pratiques, ils acquièrent les compétences pour fabriquer, assembler et poser des menuiseries modernes et traditionnelles. Les travaux se déroulent sur de véritables projets afin de leur donner une expérience concrète du métier.",
    points: [
      {
        "Menuiserie bois":
          "Découpe, assemblage et finition de meubles, portes et fenêtres.",
      },
      {
        "Menuiserie aluminium":
          "Fabrication et pose de châssis, façades et structures modernes.",
      },
      {
        Ferronnerie:
          "Conception et installation de portails, grilles et éléments décoratifs.",
      },
      {
        "Utilisation d’outillage":
          "Formation pratique aux machines et équipements de menuiserie.",
      },
      {
        "Ateliers pratiques":
          "Fabrication et pose de menuiseries sur des projets réels encadrés par des formateurs experts.",
      },
    ],
  },
  {
    title:
      "Revêtements sols et murs (carrelage, résine, parquet, béton imprimé)",
    img: imgKribi[3],
    desc: "Ce module met l’accent sur les techniques de revêtement des sols et murs afin de garantir esthétique et durabilité. Les stagiaires réalisent des travaux pratiques sur différents matériaux et apprennent à appliquer les méthodes modernes de pose et de finition. L’objectif est de former des professionnels capables de transformer des espaces en alliant solidité et design.",
    points: [
      {
        "Carrelage et faïence":
          "Préparation des surfaces et techniques de pose en conditions réelles.",
      },
      {
        Résine:
          "Application sur sols industriels et décoratifs avec mise en situation pratique.",
      },
      {
        Parquet:
          "Pose flottante et collée avec apprentissage des finitions de qualité.",
      },
      {
        "Béton imprimé":
          "Réalisation de revêtements extérieurs modernes et résistants.",
      },
      {
        "Finitions soignées":
          "Apprentissage des joints, découpes et ajustements esthétiques sur projets réels.",
      },
    ],
  },
  {
    title: "Peinture et décorations diverses",
    img: imgGolf[1],
    desc: "Une formation pratique qui permet aux stagiaires de maîtriser les techniques de peinture et de décoration intérieure et extérieure. Grâce à des ateliers dirigés, ils apprennent à préparer les supports, appliquer les différentes peintures et réaliser des décorations modernes. Chaque stagiaire est mis en situation sur des projets réels pour développer créativité et rigueur.",
    points: [
      {
        "Préparation des surfaces":
          "Ponçage, enduits et traitements préalables en atelier et sur chantier.",
      },
      {
        "Techniques de peinture":
          "Application au rouleau, au pistolet et finitions décoratives.",
      },
      {
        "Décorations modernes":
          "Effets muraux, fresques et peintures spéciales.",
      },
      {
        "Choix des matériaux":
          "Utilisation de produits adaptés à chaque environnement (intérieur et extérieur).",
      },
      {
        "Exercices pratiques":
          "Peintures et décorations réalisées sur projets réels pour une meilleure maîtrise.",
      },
    ],
  },
  {
    title: "Informatique et secrétariat bureautique",
    img: images.IMG1,
    desc: "Ce module forme les stagiaires aux outils numériques indispensables dans le monde professionnel. Grâce à des exercices pratiques, ils apprennent à maîtriser les logiciels bureautiques, à gérer des documents administratifs et à assurer une communication efficace. La formation met l’accent sur des mises en situation pour préparer les participants à des postes de gestion et de support administratif.",
    points: [
      {
        Bureautique:
          "Formation complète sur Word, Excel, PowerPoint et outils collaboratifs.",
      },
      {
        "Gestion de documents":
          "Rédaction, classement et archivage selon les bonnes pratiques.",
      },
      {
        "Communication professionnelle":
          "Utilisation des emails et rédaction de documents officiels.",
      },
      {
        "Pratique encadrée":
          "Mises en situation réelles de gestion de dossiers administratifs.",
      },
      {
        "Compétences numériques":
          "Maîtrise des plateformes en ligne et logiciels de gestion.",
      },
    ],
  },
  {
    title: "Sécurité et hygiène de la construction",
    img: imgKribi[2],
    desc: "La sécurité étant une priorité absolue sur les chantiers, cette formation prépare les stagiaires à adopter les bons réflexes pour prévenir les accidents et garantir des conditions de travail sûres. Grâce à des ateliers pratiques et des simulations d’incidents, ils apprennent à appliquer les normes de sécurité et d’hygiène de manière efficace.",
    points: [
      {
        "Prévention des risques":
          "Identification et gestion des dangers spécifiques au chantier.",
      },
      {
        "Équipements de protection":
          "Utilisation correcte et obligatoire des EPI (casques, gants, harnais, chaussures).",
      },
      {
        "Hygiène sur chantier":
          "Mise en place de conditions de travail saines et conformes aux normes.",
      },
      {
        "Premiers secours":
          "Formation pratique aux gestes de secours et à la réaction en cas d’accident.",
      },
      {
        "Simulations réelles":
          "Exercices de sécurité réalisés en conditions proches de la réalité.",
      },
    ],
  },
];

export { training, trainingDetails };
