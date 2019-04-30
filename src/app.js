import "./styles/main.scss";

const navSlide = () => {
  const burger = document.querySelector("#burger");
  const nav = document.querySelector("#nav-items");
  const navLinks = document.querySelectorAll("#nav-item");

  burger.addEventListener("click", () => {
    // Toggle nav
    nav.classList.toggle("nav__active");

    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.3}s`;
      }
    });
    // Animate burger
    burger.classList.toggle("toggle");
  });
};
navSlide();

// Text appear on scroll
const scrollAppear = () => {
  const aboutContentContainer = document.querySelector(
    ".about__content-container"
  );
  let introPosition = aboutContentContainer.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 2.2;

  if (introPosition < screenPosition) {
    aboutContentContainer.classList.add("about__content-appear");
  }
  9;
};

window.addEventListener("scroll", scrollAppear);

// Image preview

const overlay = document.querySelector("#overlay");
const overlayImage = overlay.querySelector(".portfolio__bigger-img");
const overlayClose = overlay.querySelector(".portfolio__close");

function handleImageClick(e) {
  const src = e.currentTarget.querySelector(".portfolio__img").src;
  overlayImage.src = src;
  overlay.classList.add("open");
}

function close() {
  overlay.classList.remove("open");
}

const images = document.querySelectorAll(".portfolio__img-container");

images.forEach(image => image.addEventListener("click", handleImageClick));
overlayClose.addEventListener("click", close);
