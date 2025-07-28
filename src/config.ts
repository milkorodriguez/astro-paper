export const SITE = {
  website: "https://milkor.dev", // tu dominio real
  author: "Milko Rodríguez",
  profile: "https://milkor.dev/", // tu página personal si es otra
  desc: "Exploring AI, biology & philosophy. Bridging machine learning with science and meaning.",
  title: "@MilkoRodriguez",
  ogImage: "/assets/milko-avatar.jpg", // asegúrate que esté en /public/assets/
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutos
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/", // actualízalo si usas GitHub
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "en",
  timezone: "America/Lima",
} as const;

export const SOCIALS = [
  {
    name: 'GitHub',
    icon: 'mdi:github',
    link: 'https://github.com/milkreator',
  },
  {
    name: 'LinkedIn',
    icon: 'mdi:linkedin',
    link: 'https://linkedin.com/in/milkorodriguez',
  },
  {
    name: 'Mail',
    icon: 'mdi:email',
    link: 'mailto:milko.cra@gmail.com',
  },
  {
    name: 'X',
    icon: 'mdi:twitter',
    link: 'https://x.com/Milko_Rodriguez',
  },
  {
    name: 'Blog',
    icon: 'mdi:book-open-page-variant',
    link: 'https://milkor.dev',
  },
];

export const TAGS = [
  "Bioinformatics",
  "Genomics",
  "Proteomics",
  "Systems Biology",
  "Protein Structure Prediction",
  "Deep Learning",
  "ML for Science",
  "AlphaFold",
  "Computational Biology",
  "Neuroscience",
  "Foundation Models",
  "Epistemology",
  "Philosophy of Science",
  "AI & Biology",
  "Tutorials",
  "Research Notes"
];
