const services: { title: string; icon: string; desc: string }[] = [
  {
    title: "Conception, études et plans",
    icon: "fluent-emoji-high-contrast:building-construction",
    desc: "Réalisation de plans architecturaux et techniques, études de faisabilité et conception complète de vos projets de construction.",
  },
  {
    title: "Métrés, devis et business plan",
    icon: "emojione-monotone:house",
    desc: "Établissement précis des quantités, élaboration de devis détaillés et accompagnement dans la préparation de business plans adaptés.",
  },
  {
    title: "Construction en gros œuvre et travaux de finitions",
    icon: "la:building",
    desc: "Exécution des travaux de gros œuvre (fondations, structures, maçonnerie) et finitions soignées pour des ouvrages durables et esthétiques.",
  },
  {
    title: "Rénovation et Réhabilitation",
    icon: "emojione-monotone:construction",
    desc: "Travaux de modernisation, d’extension et de remise à neuf de bâtiments existants pour les adapter aux normes et besoins actuels.",
  },
];

const detailServices: {
  title:string,
  desc:string,
  points:Record<string, string>[]
}[] = [
  {
    title: "Conception, études et plans",
    desc: "Nous assurons la phase la plus critique de tout projet : la conception. Grâce à nos architectes, ingénieurs et dessinateurs expérimentés, nous traduisons vos idées en plans précis, conformes aux normes en vigueur et aux contraintes techniques du terrain. Chaque étude intègre une réflexion approfondie sur l’optimisation des coûts, des délais et de la durabilité.",
    points: [
      { "Plans architecturaux": "Élévations, coupes, façades et rendus 3D." },
      { "Plans techniques": "Réseaux électriques, plomberie, assainissement, climatisation." },
      { "Études de faisabilité": "Analyse du site, contraintes géotechniques, légales et financières." },
      { "Optimisation des espaces": "Pour un usage fonctionnel et ergonomique." },
      { "Simulation budgétaire": "Prévisionnelle dès la phase initiale." },
      { "Respect des normes": "Locales et internationales de construction." }
    ]
  },
  {
    title: "Métrés, devis et business plan",
    desc: "La réussite d’un projet dépend d’une estimation claire et réaliste. Nos équipes effectuent des métrés précis, établissent des devis transparents et accompagnent les maîtres d’ouvrage dans l’élaboration de business plans solides, permettant une maîtrise complète des investissements.",
    points: [
      { "Métrés détaillés": "Calcul exact des surfaces et volumes." },
      { "Évaluation des coûts": "Unitaires des matériaux et de la main-d’œuvre." },
      { "Devis transparents": "Complets, sans frais cachés." },
      { "Business plan stratégique": "Projection financière et plan d’amortissement." },
      { "Études comparatives": "Pour choisir les meilleures solutions techniques et économiques." },
      { "Accompagnement financement": "Aide à la recherche de financements et partenariats." }
    ]
  },
  {
    title: "Construction en gros œuvre et travaux de finitions",
    desc: "Nous réalisons vos projets de construction de bout en bout : des fondations solides aux finitions de haute qualité. Grâce à nos 16+ années d’expérience, nous garantissons robustesse, durabilité et esthétique, avec un suivi rigoureux des normes de sécurité et de qualité.",
    points: [
      { "Gros œuvre": "Terrassement, fondations, structures béton/acier, murs porteurs." },
      { "Maçonnerie et charpente": "Réalisation des structures verticales et horizontales." },
      { "Travaux de couverture": "Toitures, étanchéité et isolation thermique." },
      { "Finitions": "Enduits, plâtrerie, carrelages, faïences, résines, peintures." },
      { "Menuiseries": "Bois, aluminium et ferronnerie pour un rendu moderne et fonctionnel." },
      { "Respect des délais et budgets": "Exécution rigoureuse selon engagements." },
      { "Matériaux certifiés": "Utilisation de matériaux durables et conformes." }
    ]
  },
  {
    title: "Rénovation et Réhabilitation",
    desc: "Nous modernisons et transformons vos bâtiments existants afin de les adapter aux besoins actuels tout en valorisant leur patrimoine architectural. De la simple remise en état à la réhabilitation complète, nous apportons des solutions durables et esthétiques qui augmentent la valeur et la fonctionnalité de vos biens.",
    points: [
      { "Rénovation intérieure": "Modernisation de cuisines, salles de bain, bureaux et espaces de vie." },
      { "Rénovation extérieure": "Façades, toitures, aménagements paysagers." },
      { "Réhabilitation complète": "Renforcement des structures anciennes, mises aux normes électriques, plomberie et sécurité incendie." },
      { "Extensions": "Pour augmenter la surface habitable ou utile." },
      { "Respect du style architectural": "Intégration harmonieuse avec des technologies modernes." },
      { "Isolation et confort": "Solutions thermiques et phoniques améliorées." },
      { "Optimisation énergétique": "Réduction de la consommation et amélioration du confort." }
    ]
  }
]

export { services, detailServices };
