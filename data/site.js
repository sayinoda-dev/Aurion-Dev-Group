/**
 * Site-wide content and configuration.
 * Edit hero text, about copy, stats, and contact details here.
 */
const SITE = {
  name: "Aurion",
  fullName: "Aurion Web Developers Group",
  tagline: "Web Development Studio",
  year: 2026,

  hero: {
    eyebrow: "Available for new projects",
 //   headline: 'Digital products that <span class="highlight">stand out.</span>',
    headline:'Websites that help local businesses <span class="hignlight">get noticed</span> and <span>Grow.</span>',
    copy:
      "Aurion Web Developers Group builds premium websites, web applications and digital experiences for ambitious businesses and ideas.",
    primaryCta: { label: "Explore our work ↗", href: "#work" },
    secondaryCta: { label: "Start a project", href: "#contact" },
    dashboard: {
      label: "Aurion studio",
      title: "Build. Launch. Grow.",
    },
  },

  about: {
    kicker: "01 — About Aurion",
    title: "Small team.<br />Serious ambition.",
    description:
      "We combine design, development and strategy to turn ideas into digital products people actually want to use.",
    quote: "We don't just make websites. We build digital experiences.",
    copy:
      "Aurion is a developer group focused on modern, responsive and reliable digital products. From a simple business website to a complete web application, we build with purpose.",
  },

  services: {
    kicker: "02 — Services",
    title: "Everything you<br />need to launch.",
    description:
      "From strategy and interface design to development and maintenance, we can take your project from concept to reality.",
  },

  work: {
    kicker: "03 — Selected work",
    title: "Made with<br />purpose.",
    description:
      "A selection of concepts and projects from the Aurion development journey.",
  },

  process: {
    kicker: "04 — Process",
    title: "Simple process.<br />Strong results.",
  },

  team: {
    kicker: "05 — The people",
    title: "Meet the<br />Aurion team.",
    description:
      "Developers working together to turn ideas into useful digital products.",
  },

  contact: {
    kicker: "06 — Contact",
    title: 'Have an idea?<br /><span class="highlight">Let\'s build it.</span>',
    description:
      "Tell us what you want to create and let's start a conversation.",
    cardTitle: "Start a conversation",
    cardCopy:
      "For websites, web applications, redesigns or new digital ideas, reach out directly.",
    formSubmitLabel: "Send project request →",
    mailtoRecipients: [
      "Auriondevs1@gmail.com"
    ],
  },

  footer: {
    tagline: "Built with ideas + code.",
  },
};

/**
 * Stats shown in the hero dashboard and about section.
 * NOTE FOR OWNER: "15+ Developers" and "30+ Projects" appear in multiple
 * places. Verify these numbers reflect your actual team size and project count.
 */
const STATS = [
  { value: "3+", label: "Developers" },
  { value: "10", label: "Projects" },
  { value: "100%", label: "Passion" },
  { value: "24/7", label: "Support mindset" },
];

const HERO_METRICS = [
  { label: "Projects", value: "10+" },
  { label: "Developers", value: "3+" },
];

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const CONTACT_METHODS = [
  {
    type: "phone",
    label: "Phone",
    valueParts: ["09", "51", "91", "56", "94"], 
    icon: "☎",
  },
  {
    type: "email",
    label: "Email",
    emailUser: "Auriondevs1",
    emailDomain: "gmail.com",
    icon: "✉"
  },
  {
    type: "telegram",
    label: "Telegram",
    value: "@Sayinoda1",
    href: "https://t.me/Sayinoda1", 
    icon: "./assets/svg/telegram-svgrepo-com.svg"
  },
  {
    type: "tiktok",
    label: "Tiktok",
    value: "@Sayinoda",
    href: "https://www.tiktok.com/@sayinoda", 
    icon: "./assets/svg/tiktok-svgrepo-com.svg"
  }
];
