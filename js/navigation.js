/**
 * Navigation — mobile menu and scroll-based active link highlighting.
 */
const Navigation = {
  init() {
    this.initMobileMenu();
    this.initScrollSpy();
  },

  initMobileMenu() {
    const menu = document.getElementById("menu");
    const nav = document.getElementById("navlinks");
    if (!menu || !nav) return;

    menu.addEventListener("click", () => nav.classList.toggle("open"));

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => nav.classList.remove("open"));
    });
  },

  initScrollSpy() {
    const sections = [...document.querySelectorAll("section[id]")];
    if (!sections.length) return;

    window.addEventListener("scroll", () => {
      let current = "";

      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 180) {
          current = section.id;
        }
      });

      document.querySelectorAll(".navlinks a").forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${current}`
        );
      });
    });
  },
};
