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

// Text appears on scroll
const scrollAboutAppear = () => {
  const aboutContent = document.querySelector(".about__content-container");
  const aboutContentPosition = aboutContent.getBoundingClientRect().top;
  const aboutScreenPosition = window.innerHeight / 2.2;

  if (aboutContentPosition < aboutScreenPosition) {
    aboutContent.classList.add("about__content-appear");
  }
};

window.addEventListener("scroll", scrollAboutAppear);

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

// Images appear on scroll

const scrollPortfolioAppear = () => {
  const portfolioImages = document.querySelectorAll(
    ".portfolio__img-container"
  );
  const portfolioScreenPosition = window.innerHeight / 1.2;

  portfolioImages.forEach(portfolioImage => {
    if (portfolioImage.getBoundingClientRect().top < portfolioScreenPosition) {
      portfolioImage.classList.add("portfolio__img-container--reveal");
    }
  });
};
window.addEventListener("scroll", scrollPortfolioAppear);
