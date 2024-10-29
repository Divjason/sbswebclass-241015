const femaleBtn = document.getElementById("femalebtn");
femaleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#femalebtn i").classList.add("filledA");
  document.querySelector("#malebtn i").classList.remove("filledB");
});

const maleBtn = document.getElementById("malebtn");
maleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#malebtn i").classList.add("filledB");
  document.querySelector("#femalebtn i").classList.remove("filledA");
});
