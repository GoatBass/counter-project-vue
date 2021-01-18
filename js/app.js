// Tu código aquí

//Contador a incrementar y disminuir
let counter = 0;
let counterSelector = document.querySelector("#counter");

//Button to plus counter
let plusNum = document.querySelector(".nextBtn");
//Button to rest counter
let minusNum = document.querySelector(".prevBtn");
//Button of reset counter
let resNum = document.querySelector(" .resBtn ");

//Event listener to upgrade counter
plusNum.addEventListener("click", function () {
  counter++;
  counterSelector.innerHTML = counter.toString();
  colorNum();
});

//Event listener to decrease number
minusNum.addEventListener("click", function () {
  counter--;
  counterSelector.innerHTML = counter.toString();
  colorNum();
});
//Event listener to reset the counter
resNum.addEventListener("click", function () {
  counter = 0;
  counterSelector.innerHTML = counter.toString();
  colorNum();
});

//we check the condition for the value to know what color to print it with
function colorNum() {
  if (counter < 0) {
    counterSelector.style.color = "red";
  } else if (counter === 0) {
    counterSelector.style.color = "#333333";
  } else {
    counterSelector.style.color = "green";
  }
}
