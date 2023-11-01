const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const cloose = document.querySelector(".close");
const body = document.querySelector(".body");

menu.addEventListener("click", () => {
  nav.classList.add("nav--visible");
  menu.classList.add("hide");
  cloose.classList.add("show");
  body.classList.add("body--no-scroll");
});

cloose.addEventListener("click", () => {
  nav.classList.remove("nav--visible");
  menu.classList.remove("hide");
  cloose.classList.remove("show");
  body.classList.remove("body--no-scroll");
});
