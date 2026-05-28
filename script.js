const revealItems = document.querySelectorAll(".reveal");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

  const heroImage = document.querySelector(".hero-media img");
  window.addEventListener(
    "scroll",
    () => {
      const offset = Math.min(window.scrollY * 0.05, 22);
      heroImage.style.transform = `scale(1.04) translateY(${offset}px)`;
    },
    { passive: true },
  );
}
