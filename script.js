const header = document.getElementById("header");
window.addEventListener("scroll", () =>
  header.classList.toggle("scrolled", scrollY > 15),
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);
document
  .querySelectorAll(".reveal")
  .forEach((el) => revealObserver.observe(el));

const links = document.querySelectorAll(".nav a,.mobile-nav a");
const sections = document.querySelectorAll("main section[id]");
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach((link) =>
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${id}`,
          ),
        );
      }
    });
  },
  { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
);
sections.forEach((section) => sectionObserver.observe(section));

const toast = document.getElementById("toast");
document.querySelectorAll(".save").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("saved");
    btn.textContent = btn.classList.contains("saved") ? "♥" : "♡";
    toast.textContent = btn.classList.contains("saved")
      ? "Profile saved ♥"
      : "Profile removed";
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 1600);
  });
});
setTimeout(
  () => document.querySelector(".hero-left")?.classList.add("visible"),
  100,
);
