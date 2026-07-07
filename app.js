const screenNames = ["home", "controls", "result"];
const defaultPalette = {
  name: "orange",
  orange: "#f28a18",
  orangeSoft: "#ffb05c",
  orangeLine: "rgba(242, 138, 24, 0.54)",
  shadow: "rgba(0, 0, 0, 0.42)",
  glow: "rgba(242, 138, 24, 0.72)",
  strong: "rgba(242, 138, 24, 0.54)",
  soft: "rgba(242, 138, 24, 0.38)",
  weak: "rgba(242, 138, 24, 0.22)",
  subtle: "rgba(242, 138, 24, 0.16)",
  faint: "rgba(242, 138, 24, 0.12)",
  tint: "rgba(242, 138, 24, 0.13)",
  card: "rgba(242, 138, 24, 0.17)",
  card2: "rgba(242, 138, 24, 0.07)",
  border: "rgba(242, 138, 24, 0.74)",
  outline: "rgba(242, 138, 24, 0.18)",
  hover: "rgba(242, 138, 24, 0.2)",
  outlineWeak: "rgba(242, 138, 24, 0.14)",
  buttonShadow: "rgba(242, 138, 24, 0.24)",
  buttonShadowStrong: "rgba(242, 138, 24, 0.2)",
  bodyShade: "#12100c",
  displayShade: "#15120e",
  buttonInk: "#12100d",
};

const alternatePalette = {
  name: "blue",
  orange: "#2f80ff",
  orangeSoft: "#86bdff",
  orangeLine: "rgba(47, 128, 255, 0.54)",
  shadow: "rgba(5, 17, 34, 0.46)",
  glow: "rgba(47, 128, 255, 0.72)",
  strong: "rgba(47, 128, 255, 0.54)",
  soft: "rgba(47, 128, 255, 0.38)",
  weak: "rgba(47, 128, 255, 0.22)",
  subtle: "rgba(47, 128, 255, 0.16)",
  faint: "rgba(47, 128, 255, 0.12)",
  tint: "rgba(47, 128, 255, 0.13)",
  card: "rgba(47, 128, 255, 0.17)",
  card2: "rgba(47, 128, 255, 0.07)",
  border: "rgba(47, 128, 255, 0.74)",
  outline: "rgba(47, 128, 255, 0.18)",
  hover: "rgba(47, 128, 255, 0.2)",
  outlineWeak: "rgba(47, 128, 255, 0.14)",
  buttonShadow: "rgba(47, 128, 255, 0.24)",
  buttonShadowStrong: "rgba(47, 128, 255, 0.2)",
  bodyShade: "#07121f",
  displayShade: "#08182b",
  buttonInk: "#06101d",
};

const commandLabels = {
  "swipe-left": "Swipe esquerda",
  "swipe-right": "Swipe direita",
  "swipe-up": "Swipe cima",
  "swipe-down": "Swipe baixo",
  enter: "Enter",
  cancel: "Cancel",
};

const app = document.querySelector("#displayApp");
const screens = Array.from(document.querySelectorAll(".screen"));
const screenCounter = document.querySelector("#screenCounter");
const lastCommand = document.querySelector("#lastCommand");
const resultLastCommand = document.querySelector("#resultLastCommand");
const commandCount = document.querySelector("#commandCount");
const commandCards = Array.from(document.querySelectorAll("[data-command]"));
const brandLogo = document.querySelector("#brandLogo");

let currentScreen = 0;
let totalCommands = 0;
let lastCommandLabel = "Nenhum";
let pointerStart = null;
let suppressClickUntil = 0;

function applyPalette(palette) {
  document.documentElement.dataset.palette = palette.name;
  document.documentElement.style.setProperty("--eldorado-orange", palette.orange);
  document.documentElement.style.setProperty("--eldorado-orange-soft", palette.orangeSoft);
  document.documentElement.style.setProperty("--orange-line", palette.orangeLine);
  document.documentElement.style.setProperty("--shadow", palette.shadow);
  document.documentElement.style.setProperty("--accent-glow", palette.glow);
  document.documentElement.style.setProperty("--accent-strong", palette.strong);
  document.documentElement.style.setProperty("--accent-soft", palette.soft);
  document.documentElement.style.setProperty("--accent-weak", palette.weak);
  document.documentElement.style.setProperty("--accent-subtle", palette.subtle);
  document.documentElement.style.setProperty("--accent-faint", palette.faint);
  document.documentElement.style.setProperty("--accent-tint", palette.tint);
  document.documentElement.style.setProperty("--accent-card", palette.card);
  document.documentElement.style.setProperty("--accent-card-2", palette.card2);
  document.documentElement.style.setProperty("--accent-border", palette.border);
  document.documentElement.style.setProperty("--accent-outline", palette.outline);
  document.documentElement.style.setProperty("--accent-hover", palette.hover);
  document.documentElement.style.setProperty("--accent-outline-weak", palette.outlineWeak);
  document.documentElement.style.setProperty("--accent-button-shadow", palette.buttonShadow);
  document.documentElement.style.setProperty("--accent-button-shadow-strong", palette.buttonShadowStrong);
  document.documentElement.style.setProperty("--body-accent-shade", palette.bodyShade);
  document.documentElement.style.setProperty("--display-accent-shade", palette.displayShade);
  document.documentElement.style.setProperty("--accent-button-ink", palette.buttonInk);
}

function renderScreen() {
  screens.forEach((screen, index) => {
    const isActive = index === currentScreen;
    screen.classList.toggle("is-active", isActive);
    screen.setAttribute("aria-hidden", String(!isActive));
  });

  screenCounter.textContent = String(currentScreen + 1).padStart(2, "0");
}

function updateStats() {
  lastCommand.textContent = lastCommandLabel;
  resultLastCommand.textContent = lastCommandLabel;
  commandCount.textContent = String(totalCommands);
}

function selectCommand(command) {
  commandCards.forEach((card) => {
    card.classList.toggle("is-selected", card.dataset.command === command);
  });
}

function goToScreen(index) {
  currentScreen = Math.max(0, Math.min(screenNames.length - 1, index));
  renderScreen();
}

function goNext() {
  goToScreen(currentScreen + 1);
}

function goPrevious() {
  goToScreen(currentScreen - 1);
}

function resetDemo() {
  totalCommands = 0;
  lastCommandLabel = "Nenhum";
  applyPalette(defaultPalette);
  selectCommand("");
  updateStats();
  goToScreen(0);
}

function confirmCurrentScreen() {
  if (screenNames[currentScreen] === "home") {
    goNext();
    return;
  }

  if (screenNames[currentScreen] === "controls") {
    goNext();
    return;
  }

  resetDemo();
}

function cancelCurrentScreen() {
  if (currentScreen > 0) {
    goPrevious();
  } else {
    goToScreen(0);
  }
}

function routeCommand(command) {
  if (screenNames[currentScreen] === "result" && (command === "swipe-up" || command === "swipe-down")) {
    applyPalette(command === "swipe-up" ? alternatePalette : defaultPalette);
    return;
  }

  if (command === "swipe-right") {
    goNext();
    return;
  }

  if (command === "swipe-left") {
    goPrevious();
    return;
  }

  if (command === "enter") {
    confirmCurrentScreen();
    return;
  }

  if (command === "cancel") {
    cancelCurrentScreen();
  }
}

function handleCommand(command) {
  totalCommands += 1;
  lastCommandLabel = commandLabels[command] || command;
  selectCommand(command);
  updateStats();
  routeCommand(command);
}

function detectSwipe(deltaX, deltaY) {
  const absX = Math.abs(deltaX);
  const absY = Math.abs(deltaY);
  const threshold = 44;

  if (Math.max(absX, absY) < threshold) {
    return null;
  }

  if (absX > absY) {
    return deltaX > 0 ? "swipe-right" : "swipe-left";
  }

  return deltaY > 0 ? "swipe-down" : "swipe-up";
}

function handleKeydown(event) {
  const keyMap = {
    ArrowRight: "swipe-right",
    ArrowLeft: "swipe-left",
    ArrowUp: "swipe-up",
    ArrowDown: "swipe-down",
    Enter: "enter",
    Escape: "cancel",
  };

  const command = keyMap[event.key];

  if (!command) {
    return;
  }

  event.preventDefault();
  handleCommand(command);
}

function handlePointerDown(event) {
  pointerStart = {
    x: event.clientX,
    y: event.clientY,
    id: event.pointerId,
  };

  if (app.setPointerCapture) {
    app.setPointerCapture(event.pointerId);
  }
}

function handlePointerUp(event) {
  if (!pointerStart) {
    return;
  }

  const command = detectSwipe(
    event.clientX - pointerStart.x,
    event.clientY - pointerStart.y,
  );

  pointerStart = null;

  if (!command) {
    return;
  }

  event.preventDefault();
  suppressClickUntil = Date.now() + 320;
  handleCommand(command);
}

function handlePointerCancel() {
  pointerStart = null;
}

document.querySelector('[data-action="start"]').addEventListener("click", () => {
  if (Date.now() < suppressClickUntil) {
    return;
  }

  handleCommand("enter");
});

document.querySelector('[data-action="restart"]').addEventListener("click", () => {
  if (Date.now() < suppressClickUntil) {
    return;
  }

  resetDemo();
});

commandCards.forEach((card) => {
  card.addEventListener("click", () => {
    if (Date.now() < suppressClickUntil) {
      return;
    }

    handleCommand(card.dataset.command);
  });
});

brandLogo.addEventListener("error", () => {
  brandLogo.closest(".brand-mark").classList.add("logo-failed");
});

app.addEventListener("pointerdown", handlePointerDown);
app.addEventListener("pointerup", handlePointerUp);
app.addEventListener("pointercancel", handlePointerCancel);
window.addEventListener("keydown", handleKeydown);
window.addEventListener("load", () => app.focus({ preventScroll: true }));

applyPalette(defaultPalette);
renderScreen();
updateStats();
