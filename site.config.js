const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Buğra CANATA",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "ingilizce öğretmeni & serbest tercüman",
    bio: "İlgilendiğim konularla ilgili notlarım.",
    email: "bcanata@gmail.com",
    linkedin: "canata",
    github: "bcanata",
    instagram: "bugracanata",
  },
  projects: [
    {
      name: `notlarimblog`,
      href: "https://github.com/bcanata/notlarimblog",
    },
  ],

  // blog setting (required)
  blog: {
    title: "notlar.im",
    description: "notlar.im'e hoş geldiniz!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://notlar.im",
  since: 2023, // If leave this empty, current year will be used.
  lang: "tr-TR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "morethanmin/morethan-log",
      "issue-term": "og:title",
      label: "💬 Yorumlar",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }
