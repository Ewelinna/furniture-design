import "./styles/main.scss";

const navSlide = () => {
  const burger = document.querySelector(".nav__burger");
  const nav = document.querySelector(".nav__items");
  const navLinks = document.querySelectorAll(".nav__item");

  
  burger.addEventListener("click", () => {
  // Toggle nav
    nav.classList.toggle("nav__active");
  
  // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });
    // Animate burger
    burger.classList.toggle('toggle');
  });
};
navSlide();

// Text appear on scroll
const scrollAppear=()=>{
const aboutContentContainer=document.querySelector('.about__content-container');
let introPosition=aboutContentContainer.getBoundingClientRect().top;
let screenPosition=window.innerHeight/2.2;

if(introPosition<screenPosition){
  aboutContentContainer.classList.add("about__content-appear");
}
}

window.addEventListener('scroll',scrollAppear);