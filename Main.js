document.addEventListener("DOMContentLoaded", () => {
  // Efeito de rolagem suave para os links da navbar
  const navLinks = document.querySelectorAll(".nav-links a, .btn");

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId.startsWith("#")) {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth"
          });
        }
      }
    });
  });
});
