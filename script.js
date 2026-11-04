const surpriseButton = document.querySelector("#surprise");
const message = document.querySelector("#message");
const confettiBits = ["🌸", "💖", "✨", "🌷", "⭐", "🍓"];
let hasCelebrated = false;

surpriseButton.addEventListener("click", () => {
  const isOpen = message.classList.toggle("open");
  surpriseButton.innerHTML = isOpen
    ? '<span aria-hidden="true">💝</span> Em tuyệt vời lắm!'
    : '<span aria-hidden="true">🎁</span> Nhận quà tinh thần';
  if (isOpen && !hasCelebrated) {
    hasCelebrated = true;
    celebrate();
  }
});

function celebrate() {
  for (let i = 0; i < 30; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.setAttribute("aria-hidden", "true");
    piece.textContent = confettiBits[Math.floor(Math.random() * confettiBits.length)];
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.setProperty("--drift", `${Math.random() * 180 - 90}px`);
    piece.style.setProperty("--duration", `${2 + Math.random() * 1.8}s`);
    piece.style.animationDelay = `${Math.random() * .7}s`;
    document.body.append(piece);
    piece.addEventListener("animationend", () => piece.remove(), { once: true });
  }
}
