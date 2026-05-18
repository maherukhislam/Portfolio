const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = [...document.querySelectorAll(".nav-link")];
const sections = [...document.querySelectorAll("main section[id]")];
const form = document.querySelector("#contact-form");
const formNote = document.querySelector("#form-note");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const activateNavLink = () => {
  const offset = window.scrollY + window.innerHeight * 0.25;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const matchingLink = document.querySelector(`.nav-link[href="#${section.id}"]`);

    if (!matchingLink) {
      return;
    }

    if (offset >= top && offset < bottom) {
      navLinks.forEach((link) => link.classList.remove("is-active"));
      matchingLink.classList.add("is-active");
    }
  });
};

window.addEventListener("scroll", activateNavLink, { passive: true });
window.addEventListener("load", activateNavLink);

if (form && formNote) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    formNote.textContent =
      "Thanks - your message is staged in the interface. Connect a backend or form service next to make delivery live.";
  });
}
