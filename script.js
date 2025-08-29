

// Example of global vs local scope
let globalVar = "I'm global!";

function addNumbers(a, b) {
  let localVar = "I'm local!";
  console.log(localVar); // accessible only inside
  return a + b; // returns sum
}

function showResult(x, y) {
  let sum = addNumbers(x, y);
  document.getElementById("result").textContent =
    `Global says: "${globalVar}" | The sum is: ${sum}`;
}


// Animate box on button click
const animateBtn = document.getElementById("animateBtn");
const jsBox = document.getElementById("jsBox");

animateBtn.addEventListener("click", () => {
  jsBox.classList.toggle("animate");
});

// Modal functionality
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modal");

openModal.addEventListener("click", () => {
  modal.classList.add("show");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});
