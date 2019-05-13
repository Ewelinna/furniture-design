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

// Image preview

const overlay = document.querySelector("#overlay");
const overlayImage = overlay.querySelector(".portfolio__bigger-img");
const overlayClose = overlay.querySelector(".portfolio__close");

const ImageGalleryController = ImageGalleryController || {};

ImageGalleryController.openImage = e => {
  const src = e.currentTarget.querySelector(".portfolio__img").src;
  overlayImage.src = src;
  overlay.classList.add("open");
};
ImageGalleryController.closeImage = () => {
  overlay.classList.remove("open");
};

const images = document.querySelectorAll(".portfolio__img-container");

images.forEach(image =>
  image.addEventListener("click", ImageGalleryController.openImage)
);
overlayClose.addEventListener("click", ImageGalleryController.closeImage);

// Elements reveal on scroll

const revealOnScroll = (
  elementToReveal,
  innerHeightPosition,
  elementToRevealNewClass
) => {
  const contentPosition = elementToReveal.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / innerHeightPosition;
  if (contentPosition < screenPosition) {
    elementToReveal.classList.add(elementToRevealNewClass);
  }
};

const revealAboutOnScroll = () => {
  const aboutContent = document.querySelector(".about__content-container");

  revealOnScroll(aboutContent, 2.2, "about__content-appear");
};

window.addEventListener("scroll", revealAboutOnScroll);

const revealPortfolioOnScroll = () => {
  const portfolioImages = document.querySelectorAll(
    ".portfolio__img-container"
  );

  portfolioImages.forEach(portfolioImage => {
    revealOnScroll(portfolioImage, 1.2, "portfolio__img-container--reveal");
  });
};
window.addEventListener("scroll", revealPortfolioOnScroll);
