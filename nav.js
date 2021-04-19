const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  //toggle//
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //animate link
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.2s ease forwards ${
          index / 6}s`;
      }
    });
  });
};

navSlide();