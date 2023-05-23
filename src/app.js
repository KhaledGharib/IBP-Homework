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

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gradient = context.createLinearGradient(
  0,
  0,
  canvas.width,
  canvas.height
);
gradient.addColorStop(0, "#ff0080");
gradient.addColorStop(0.5, "#8000ff");
gradient.addColorStop(1, "#ff00bf");

let angle = 0;

let circleX = canvas.width / 2;
let circleY = canvas.height / 2;
let rectX = canvas.width / 2 - 100;
let rectY = canvas.height / 2 - 50;
let circleSpeed = 1;
let rectSpeedX = 2;
let rectSpeedY = -2;

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.save();
  context.translate(canvas.width / 2, canvas.height / 2);
  context.rotate(angle);
  context.fillStyle = gradient;
  context.fillRect(
    -canvas.width / 2,
    -canvas.height / 2,
    canvas.width,
    canvas.height
  );
  context.restore();

  circleX += circleSpeed;
  rectX += rectSpeedX;
  rectY += rectSpeedY;

  if (circleX + 50 > canvas.width || circleX - 50 < 0) {
    circleSpeed *= -1;
  }

  if (rectX + 200 > canvas.width || rectX < 0) {
    rectSpeedX *= -1;
  }

  if (rectY + 100 > canvas.height || rectY < 0) {
    rectSpeedY *= -1;
  }

  context.beginPath();
  context.arc(circleX, circleY, 50, 0, Math.PI * 2, false);
  context.fillStyle = "rgba(255, 255, 255, 0.5)";
  context.fill();

  context.fillStyle = "rgba(255, 255, 255, 0.5)";
  context.fillRect(rectX, rectY, 200, 100);

  angle += 0.01;

  requestAnimationFrame(animate);
}

animate();
