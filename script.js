const revealItems = document.querySelectorAll(".reveal");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const languageLinks = document.querySelectorAll("[data-language-link]");
const languageSwitchers = document.querySelectorAll(".language-switcher");

languageLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.location.hash) {
      link.hash = window.location.hash;
    }
  });
});

languageSwitchers.forEach((switcher) => {
  switcher.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      switcher.removeAttribute("open");
      switcher.querySelector("summary")?.focus();
    }
  });
});

document.addEventListener("click", (event) => {
  languageSwitchers.forEach((switcher) => {
    if (!switcher.contains(event.target)) {
      switcher.removeAttribute("open");
    }
  });
});

if (reduceMotion) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 },
  );

  revealItems.forEach((item) => observer.observe(item));

  if (window.location.hash) {
    requestAnimationFrame(() => {
      revealItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight * 1.2 && rect.bottom > -window.innerHeight * 0.2) {
          item.classList.add("is-visible");
          observer.unobserve(item);
        }
      });
    });
  }
}
