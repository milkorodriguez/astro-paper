export const SITE = {
  website: "https://milkor.dev",
  author: "Milko Rodríguez",
  profile: "https://milkor.dev",
  desc: "ML + Ethics | Curious about Bioinformatics. Learning by writing. Coding what I think. @PUCP · Lima, PE",
  title: "",
  ogImage: "/assets/milko-avatar.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutos
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/milkorodriguez/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "en",
  timezone: "America/Lima",
} as const;
