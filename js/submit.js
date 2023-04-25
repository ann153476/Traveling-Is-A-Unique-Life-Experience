const form = document.querySelector("#form");
const myText = document.querySelector("#call__text");
function func(e) {
  e.preventDefault();
  myText.innerHTML = `<p>ok, ${e.target.name.value} we will definitely call you back on the number ${e.target.tel.value}.</p><p> All the best
          for you , and have a good day!</p>`;
  e.currentTarget.reset();
}

form.addEventListener("submit", func);
