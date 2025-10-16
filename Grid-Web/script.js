var t = gsap.timeline();
var nav = document.querySelector(".nav-part2");
var i1 = document.querySelector(".ri-menu-3-line");
var main = document.querySelector(".main");
let a;
i1.addEventListener("click", function () {
  if (a == 0) {
    nav.style.display = "block";
    a = 1;
  } else {
    nav.style.display = "none";
    a = 0;
  }
});

main.addEventListener("click", function (event) {
  if (event.target.className == "main") {
    nav.style.display = "none";
  }
});

gsap.from("#nav h3,i", {
  y: -50,
  opacity: 0,
  delay: 0.4,
  duration: 1,
  stagger: 0.3,
});
gsap.from(".main h1", {
  x: -500,
  opacity: 0,
  delay: 2,
  duration: 1,
  stagger: 0.4,
});

t.from("img", {
  x: 150,
  rotate: 50,
  opacity: 0,
  duration: 2,
  delay: 3,
  stagger: 0.5,
});
t.from("#footer", {
  y: 1,
  opacity: 0,
  duration: 1,
  delay: 1,
  stagger: 0.2,
});
