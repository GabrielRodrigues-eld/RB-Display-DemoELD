const screenNames = ["home", "controls", "result"];
const defaultPalette = {
  orange: "#f28a18",
  orangeSoft: "#ffb05c",
  orangeLine: "rgba(242, 138, 24, 0.54)",
  shadow: "rgba(0, 0, 0, 0.42)",
};

const alternatePalette = {
  orange: "#4dd0c8",
  orangeSoft: "#8be8e0",
  orangeLine: "rgba(77, 208, 200, 0.54)",
  shadow: "rgba(7, 24, 30, 0.42)",
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
  document.documentElement.style.setProperty("--eldorado-orange", palette.orange);
  document.documentElement.style.setProperty("--eldorado-orange-soft", palette.orangeSoft);
  document.documentElement.style.setProperty("--orange-line", palette.orangeLine);
  document.documentElement.style.setProperty("--shadow", palette.shadow);
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
