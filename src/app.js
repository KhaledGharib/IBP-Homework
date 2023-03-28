rangeTraker = () => {
  let r = document.getElementById("range");
  let res = document.getElementById("res");
  r.addEventListener("input", () => {
    res.innerHTML = r.value;
  });
};

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const sections = document.querySelectorAll("section");
const resetBtn = document.getElementById("rest-btn");

let currentSectionIndex = 0;

resetBtn.addEventListener("click", () => {
  currentSectionIndex = 0;
  sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  if (currentSectionIndex > 0) {
    currentSectionIndex--;
    sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
  }
});

nextBtn.addEventListener("click", () => {
  if (currentSectionIndex < sections.length - 1) {
    console.log(currentSectionIndex++);
    sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
  }
});
