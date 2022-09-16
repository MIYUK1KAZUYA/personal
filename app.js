const avatar = document.querySelector(".avatar");
const intro = document.querySelector(".intro");
const navigation = document.querySelector(".navigation");
const navHeight = document.querySelector(".navigation").offsetHeight;

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    avatar.classList.remove('fade');
    setTimeout(() => {
    navigation.classList.remove('scroll-down');
    intro.classList.remove('fade');
  }, 500);
  }, 600);
}); 

let lastScroll = 0;
window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;
  if (currentScroll - lastScroll > 0 && currentScroll > 200) {
    navigation.classList.add("scroll-down");
    navigation.classList.remove("scroll-up");
  } else {
    navigation.classList.add("scroll-up");
    navigation.classList.remove("scroll-down");
  }
  lastScroll = currentScroll;
});

function reveal() {
  const about = document.querySelector(".about");
  const development = document.querySelector(".text-area");
  const windowHeight = window.innerHeight;
  const aboutTop = about.getBoundingClientRect().top;
  const devTop = development.getBoundingClientRect().top;
  const elementVisible = 150;

  if (aboutTop < windowHeight - elementVisible) {
    about.classList.add("active");
  } else {
    about.classList.remove("active");
  }

  if (devTop < windowHeight - elementVisible) {
    development.classList.add("active");
  } else {
    development.classList.remove("active");
  }
}

window.addEventListener("scroll", reveal);

