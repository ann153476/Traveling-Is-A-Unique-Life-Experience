const balloon = document.querySelector(".balloon");
window.addEventListener("scroll", () => {
  let value = window.scrollY;
  balloon.style.right = value * 2 + "px";
  balloon.style.top = value * 0.5 + 100 + "px";
  balloon.style.scale = value / 100 + 1;

  // console.log(value);
  // console.log(balloon.style.scale, "<");
});

const heroBox = document.querySelector(".hero_box");
const op = document.querySelectorAll("#op");
function funcStart() {
  heroBox.style.transform = "translateX(0)";
  op[0].style.opacity = 1;
  op[1].style.opacity = 1;
}

window.addEventListener("load", funcStart);

/////go//////
