/**
 * Renders repeatable content from data files into the page.
 */
const Render = {
  tags(items) {
    return items.map((tag) => `<span class="tag">${tag}</span>`).join("");
  },

  nav() {
    const container = document.getElementById("navlinks");
    if (!container) return;

    container.innerHTML = NAV_LINKS.map(
      (link) => `<a href="${link.href}">${link.label}</a>`
    ).join("");
  },

  heroMetrics() {
    const container = document.getElementById("hero-metrics");
    if (!container) return;

    container.innerHTML = HERO_METRICS.map(
      (metric) =>
        `<div class="metric"><small>${metric.label}</small><strong>${metric.value}</strong></div>`
    ).join("");
  },

  stats() {
    const container = document.getElementById("about-stats");
    if (!container) return;

    container.innerHTML = STATS.map(
      (stat) =>
        `<div class="stat"><strong>${stat.value}</strong><span>${stat.label}</span></div>`
    ).join("");
  },

  services() {
    const container = document.getElementById("services-grid");
    if (!container) return;

    container.innerHTML = SERVICES.map(
      (service) => `
        <div class="card">
          <span class="service-number">${service.number}</span>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
          <div class="tags">${this.tags(service.tags)}</div>
        </div>`
    ).join("");
  },

  projects() {
    const container = document.getElementById("projects-grid");
    if (!container) return;

    container.innerHTML = PROJECTS.map(
      (project) => `
        <div class="project">
          <div class="project-content">
            <small>${project.category}</small>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tags">${this.tags(project.tags)}</div>
          </div>
        </div>`
    ).join("");
  },

  process() {
    const container = document.getElementById("process-grid");
    if (!container) return;

    container.innerHTML = PROCESS.map(
      (step) => `
        <div class="step">
          <b>${step.step}</b>
          <h3>${step.title}</h3>
          <p>${step.description}</p>
        </div>`
    ).join("");
  },

  team() {
    const container = document.getElementById("team-grid");
    if (!container) return;

    container.innerHTML = TEAM.map(
      (member) => `
        <div class="card member">
          <div class="avatar">${member.initial}</div>
          <h3>${member.name}</h3>
          <p class="teamRole" >${member.role}</p>
          <div class="teamMvp">
          <a class="teamPort" href="" >View Portfolio ↗</a>
          <a class="teamGit" href=${member.github}>View Github ↗</a>
          </div>
        </div>
        `
    ).join("");
  },

contactMethods() {
  const container = document.getElementById("contact-list");
  if (!container) return;

  container.innerHTML = CONTACT_METHODS.map((method) => {
    let finalHref = method.href;
    let finalValue = method.value;

    if (method.type === "phone") {
      const fullPhone = method.valueParts.join("");
      finalValue = fullPhone;
      finalHref = `tel:${fullPhone}`;
    } 

    else if (method.type === "email") {
      const fullEmail = `${method.emailUser}@${method.emailDomain}`;
      finalValue = fullEmail;
      finalHref = `mailto:${fullEmail}`;
    }

    const iconReplace = method.icon.includes(".svg")
      ? `<img src="${method.icon}" alt="" class="contact-icon">`
      : `<span class="contact-icon">${method.icon}</span>`;


    return `
      <a class="contact-item" href="${finalHref}">
        ${iconReplace}
        <div>
          <small>${method.label}</small>
          <strong>${finalValue}</strong>
        </div>
      </a>
    `;
  }).join("");

  },

  all() {
    this.nav();
    this.heroMetrics();
    this.stats();
    this.services();
    this.projects();
    this.process();
    this.team();
    this.contactMethods();
  },
};
