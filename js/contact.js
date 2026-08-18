/**
 * Contact form — validates input and opens the user's email client.
 */
const Contact = {
  init() {
    const form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", (event) => this.handleSubmit(event));
  },

  handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const project =
      document.getElementById("project").value.trim() || "New project";
    const message = document.getElementById("message").value.trim();

    const subject = encodeURIComponent(`Aurion Project Request — ${project}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject: ${project}\n\n${message}`
    );
    const recipients = SITE.contact.mailtoRecipients.join(",");
    window.location.href = `mailto:${recipients}?subject=${subject}&body=${body}`;

    this.showToast("Opening your email app…");
  },

  showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3000);
  },
};
