const navigation = document.querySelector(".navigation");
//const main = document.querySelector("main");
const navHeight = document.querySelector(".navigation").offsetHeight;
//main.style.top = navHeight + "px";
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
