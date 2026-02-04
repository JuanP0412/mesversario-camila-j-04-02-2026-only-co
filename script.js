// CONTADOR DE DÍAS
const startDate = new Date("2025-12-04");
const today = new Date();
const days = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
document.getElementById("days").textContent = days;

// MÚSICA
const song = document.getElementById("song");
let playing = false;

function startMusic() {
  if (!playing) {
    song.play().catch(() => {});
    playing = true;
  }
}

function toggleMusic() {
  if (playing) {
    song.pause();
  } else {
    song.play().catch(() => {});
  }
  playing = !playing;
}

// CARTA
function openLetter() {
  document.getElementById("letter").style.display = "flex";
  startMusic(); // 🎶 suena al abrir la carta
}

function closeLetter() {
  document.getElementById("letter").style.display = "none";
}

// CORAZONES
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = Array.from({ length: 35 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  size: Math.random() * 6 + 4,
  speed: Math.random() + 0.4
}));

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach(h => {
    ctx.fillStyle = "rgba(220,90,120,0.6)";
    ctx.beginPath();
    ctx.arc(h.x, h.y, h.size, 0, Math.PI * 2);
    ctx.fill();
    h.y += h.speed;
    if (h.y > canvas.height) h.y = -10;
  });
  requestAnimationFrame(animate);
}
animate();
