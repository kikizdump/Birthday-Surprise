function popConfetti() {
  const colors = ["#722f40", "#d8bd82", "#fff0d5", "#c77b8b"];
  for (let i = 0; i < 100; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = Math.random() * 0.8 + "s";
    piece.style.animationDuration = 2 + Math.random() * 2 + "s";
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 5000);
  }
}

function openGift() {
  const gift = document.getElementById("gift");
  if (gift.classList.contains("open")) return;
  gift.classList.add("open");
  popConfetti();
  setTimeout(() => {
    gift.style.display = "none";
    document.getElementById("message").classList.remove("hidden");
  }, 1000);
}

function popHearts() {
  const hearts = ["\u{1F90E}", "\u2661", "\u2665", "\u{1F495}"];
  for (let i = 0; i < 35; i++) {
    const heart = document.createElement("span");
    heart.className = "heart-pop";
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 90 + 5 + "vw";
    heart.style.top = Math.random() * 85 + 5 + "vh";
    heart.style.fontSize = 15 + Math.random() * 45 + "px";
    heart.style.animationDelay = Math.random() * 0.5 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }
}

function showLetter() {
  document.getElementById("letter").classList.remove("hidden");
  document.getElementById("reasons").classList.remove("hidden");
  popHearts();
}

function addSparkles() {
  for (let i = 0; i < 35; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";
    sparkle.style.animationDelay = Math.random() * 2 + "s";
    document.body.appendChild(sparkle);
  }
}

addSparkles();

const reasons = [
  "Your smile makes my day lovie \u2764\uFE0F",
  "You make me feel so special \u{1F979}",
  "You understand me like nobody else... ik u dont but iss okayyy\u{1F495}",
  "You always tolerate my nonsense hehe\u2728",
  "You are my favourite person pattu \u{1FAF6}\u{1F3FB}",
  "Our memories mean everything to me papa \u{1F48C}",
  "After all these years, I still choose you \u2764\uFE0F"
];

let reasonIndex = 0;

function nextReason() {
  const reason = document.getElementById("reason");
  if (reasonIndex < reasons.length) {
    reason.textContent = reasons[reasonIndex];
    reasonIndex++;
  } else {
    reason.textContent = "And a million more reasons\u2026 I love you! \u2764\uFE0F\u{1F979}";
  }
}
