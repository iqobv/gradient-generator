const gradientBox = document.querySelector(".gradient-box");
const selectMenu = document.querySelector("select");
const colors = document.querySelectorAll(".colors input");
const textarea = document.querySelector("textarea");
const randomBtn = document.querySelector(".random");
const copyCodeBtn = document.querySelector(".copy");

function getRandomColors() {
  const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${randomHex}`;
}

function generateGradient(isRandom) {
  if (isRandom) {
    colors[0].value = getRandomColors();
    colors[1].value = getRandomColors();
  }

  const gradient = `linear-gradient(${selectMenu.value}, ${colors[0].value}, ${colors[1].value})`;
  gradientBox.style.background = gradient;
  textarea.innerText = `background: ${gradient};`;
}

colors.forEach((input) => {
  input.addEventListener("input", () => generateGradient(false));
});

function copyCode() {
  navigator.clipboard.writeText(textarea.value);
  copyCodeBtn.innerText = "Code copied";
  setTimeout(() => (copyCodeBtn.innerText = "Copy code"), 2000);
}

selectMenu.addEventListener("change", () => generateGradient(false));
randomBtn.addEventListener("click", () => generateGradient(true));
copyCodeBtn.addEventListener("click", copyCode);
