const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function handleclick(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
}

btn.addEventListener("click", handleclick);


// btn.addEventListener("click", function () {
//   const randomNumber = getRandomNumber();
//   document.body.style.backgroundColor = colors[randomNumber];
//   color.textContent = colors[randomNumber];
// });

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}