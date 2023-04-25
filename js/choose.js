const asia = document.querySelector("#d1");
const europe = document.querySelector("#d2");
const australia = document.querySelector("#d3");
const indonesia = document.querySelector("#d4");
const asiaBTN = document.querySelector("#asia1");
const europeBTN = document.querySelector("#europe2");
const australiaBTN = document.querySelector("#australia3");
const indonesiaBTN = document.querySelector("#indonesia4");

const forest = document.querySelector("#w1");
const sea = document.querySelector("#w2");
const mountain = document.querySelector("#w3");
const forestBTN = document.querySelector("#forest1");
const seaBTN = document.querySelector("#sea2");
const mountainBTN = document.querySelector("#mountain3");

const to = document.querySelector("#to");
const toWay = document.querySelector("#to-way");

const ok = document.getElementById("ok");

const chosePlace = (e) => {
  to.innerHTML = "";
  let chosenCard = document.querySelector(`#d${e.target.id.slice(-1)}`);
  asia.classList.remove("chosen");
  europe.classList.remove("chosen");
  australia.classList.remove("chosen");
  indonesia.classList.remove("chosen");
  chosenCard.classList.toggle("chosen");
  ok.play();
  console.log(e.target.id.slice(-1));
  to.insertAdjacentHTML("afterbegin", `<p>${e.target.id.slice(0, -1)}</p>`);
};

const choseWay = (e) => {
  toWay.innerHTML = "";
  let way = e.target.id.slice(0, -1);
  switch (way) {
    case "forest":
      forest.style.opacity = "0";
      sea.style.opacity = "0.7";
      mountain.style.opacity = "0.7";
      toWay.insertAdjacentHTML("afterbegin", `<p>in the forest</p>`);
      break;
    case "sea":
      sea.style.opacity = "0";
      forest.style.opacity = "0.7";
      mountain.style.opacity = "0.7";
      toWay.insertAdjacentHTML("afterbegin", `<p>near the sea</p>`);

      break;
    case "mountain":
      mountain.style.opacity = "0";
      sea.style.opacity = "0.7";
      forest.style.opacity = "0.7";
      toWay.insertAdjacentHTML("afterbegin", `<p>in the mountains</p>`);

      break;

    default:
      console.log("error in switch chose");
  }
  ok.play();
};

asiaBTN.addEventListener("click", chosePlace);
europeBTN.addEventListener("click", chosePlace);
australiaBTN.addEventListener("click", chosePlace);
indonesiaBTN.addEventListener("click", chosePlace);
forestBTN.addEventListener("click", choseWay);
seaBTN.addEventListener("click", choseWay);
mountainBTN.addEventListener("click", choseWay);
// let s = "qwertyuiop2";
//console.log(s.slice(0, -1));

// const classChecked = (numb) => {

// }
// console.log(asia.id.slice(-1));

// localStorage.setItem("id", e.target.id);
// let a = localStorage.getItem("id") || "";
// console.log(a, "<<<");
