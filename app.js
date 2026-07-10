const screenNames = ["home", "controls", "result"];
<<<<<<< HEAD

const palettes = {
  eldorado: {
    name: "eldorado",
    label: "Eldorado",
    primary: "#F28A18",
    secondary: "#FFD08A",
    bodyShade: "#12100C",
    displayShade: "#17120D",
    shadow: "rgba(0, 0, 0, 0.48)",
  },
  aurora: {
    name: "aurora",
    label: "Aurora",
    primary: "#36D1DC",
    secondary: "#8B7BFF",
    bodyShade: "#07131B",
    displayShade: "#0A1724",
    shadow: "rgba(3, 13, 27, 0.52)",
  },
  garden: {
    name: "garden",
    label: "Jardim",
    primary: "#70E000",
    secondary: "#C9FF78",
    bodyShade: "#0B1608",
    displayShade: "#0E1B0B",
    shadow: "rgba(4, 18, 5, 0.5)",
  },
  rose: {
    name: "rose",
    label: "Rosa Gelado",
    primary: "#FF5C8A",
    secondary: "#8CE9FF",
    bodyShade: "#190A13",
    displayShade: "#200D19",
    shadow: "rgba(22, 4, 15, 0.52)",
  },
  royal: {
    name: "royal",
    label: "Royal Dusk",
    primary: "#A78BFA",
    secondary: "#FFD166",
    bodyShade: "#100C1B",
    displayShade: "#151025",
    shadow: "rgba(9, 5, 22, 0.54)",
  },
  blue: {
    name: "blue",
    label: "Azul",
    primary: "#2F80FF",
    secondary: "#A8D8FF",
    bodyShade: "#071328",
    displayShade: "#0A1933",
    shadow: "rgba(3, 10, 26, 0.54)",
  },
  red: {
    name: "red",
    label: "Vermelho",
    primary: "#FF453A",
    secondary: "#FFB4AE",
    bodyShade: "#1A0807",
    displayShade: "#230B09",
    shadow: "rgba(26, 4, 3, 0.54)",
  },
  yellow: {
    name: "yellow",
    label: "Amarelo",
    primary: "#FFD60A",
    secondary: "#FFF4A3",
    bodyShade: "#171300",
    displayShade: "#211B00",
    shadow: "rgba(20, 17, 0, 0.54)",
  },
  contrast: {
    name: "contrast",
    label: "Ciano + Vermelho",
    primary: "#00E5FF",
    secondary: "#FF375F",
    bodyShade: "#041619",
    displayShade: "#071E22",
    shadow: "rgba(0, 18, 22, 0.54)",
  },
  mono: {
    name: "mono",
    label: "Monocromático",
    primary: "#FFFFFF",
    secondary: "#B0B3B8",
    bodyShade: "#101112",
    displayShade: "#171819",
    shadow: "rgba(0, 0, 0, 0.58)",
  },
=======
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
>>>>>>> 45a90a0bd751f4110fca10d542d274447238f0ca
};

const commandLabels = {
  "swipe-left": "Swipe esquerda",
  "swipe-right": "Swipe direita",
  "swipe-up": "Swipe cima",
  "swipe-down": "Swipe baixo",
<<<<<<< HEAD
  enter: "Pinch / Enter",
  cancel: "Pinch / Cancel",
=======
  enter: "Enter",
  cancel: "Cancel",
>>>>>>> 45a90a0bd751f4110fca10d542d274447238f0ca
};

const app = document.querySelector("#displayApp");
const screens = Array.from(document.querySelectorAll(".screen"));
const screenCounter = document.querySelector("#screenCounter");
const lastCommand = document.querySelector("#lastCommand");
<<<<<<< HEAD
const commandCards = Array.from(document.querySelectorAll("[data-command]"));
const paletteOptions = Array.from(document.querySelectorAll("[data-palette]"));
const palettePosition = document.querySelector("#palettePosition");
const brandLogo = document.querySelector("#brandLogo");
const toast = document.querySelector("#toast");
const toastIcon = document.querySelector("#toastIcon");
const toastMessage = document.querySelector("#toastMessage");
const exitBack = document.querySelector("#exitBack");
const exitNext = document.querySelector("#exitNext");
=======
const resultLastCommand = document.querySelector("#resultLastCommand");
const commandCount = document.querySelector("#commandCount");
const commandCards = Array.from(document.querySelectorAll("[data-command]"));
const brandLogo = document.querySelector("#brandLogo");
>>>>>>> 45a90a0bd751f4110fca10d542d274447238f0ca

let currentScreen = 0;
let totalCommands = 0;
let lastCommandLabel = "Nenhum";
<<<<<<< HEAD
let selectedPaletteKey = "eldorado";
let exitSwipes = { left: 0, right: 0 };
let pointerStart = null;
let suppressClickUntil = 0;
let toastTimer = null;

function hexToRgba(hex, alpha) {
  const value = hex.replace("#", "");
  const red = parseInt(value.slice(0, 2), 16);
  const green = parseInt(value.slice(2, 4), 16);
  const blue = parseInt(value.slice(4, 6), 16);
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function applyPalette(palette) {
  const root = document.documentElement;
  root.dataset.palette = palette.name;
  root.style.setProperty("--eldorado-orange", palette.primary);
  root.style.setProperty("--eldorado-orange-soft", palette.secondary);
  root.style.setProperty("--accent-secondary", palette.secondary);
  root.style.setProperty("--orange-line", hexToRgba(palette.primary, 0.54));
  root.style.setProperty("--shadow", palette.shadow);
  root.style.setProperty("--accent-glow", hexToRgba(palette.primary, 0.72));
  root.style.setProperty("--accent-strong", hexToRgba(palette.primary, 0.54));
  root.style.setProperty("--accent-soft", hexToRgba(palette.primary, 0.38));
  root.style.setProperty("--accent-weak", hexToRgba(palette.primary, 0.22));
  root.style.setProperty("--accent-subtle", hexToRgba(palette.primary, 0.16));
  root.style.setProperty("--accent-faint", hexToRgba(palette.primary, 0.12));
  root.style.setProperty("--accent-tint", hexToRgba(palette.primary, 0.13));
  root.style.setProperty("--accent-card", hexToRgba(palette.primary, 0.17));
  root.style.setProperty("--accent-card-2", hexToRgba(palette.primary, 0.07));
  root.style.setProperty("--accent-border", hexToRgba(palette.primary, 0.78));
  root.style.setProperty("--accent-outline", hexToRgba(palette.primary, 0.2));
  root.style.setProperty("--accent-hover", hexToRgba(palette.primary, 0.24));
  root.style.setProperty("--accent-outline-weak", hexToRgba(palette.primary, 0.14));
  root.style.setProperty("--accent-button-shadow", hexToRgba(palette.primary, 0.28));
  root.style.setProperty("--body-accent-shade", palette.bodyShade);
  root.style.setProperty("--display-accent-shade", palette.displayShade);
}

function hideToast() {
  window.clearTimeout(toastTimer);
  toastTimer = null;
  toast.classList.remove("is-visible");
}

function showToast(message, direction = "info", customDuration = null, onDismiss = null) {
  const iconMap = {
    left: "←",
    right: "→",
    enter: "●",
    cancel: "×",
    success: "✓",
    info: "•",
  };

  window.clearTimeout(toastTimer);
  toastIcon.textContent = iconMap[direction] || iconMap.info;
  toastMessage.textContent = message;
  toast.dataset.kind = direction;
  toast.classList.remove("is-visible");
  void toast.offsetWidth;
  toast.classList.add("is-visible");

  const extraWords = Math.max(0, message.trim().split(/\s+/).length - 2);
  const duration = customDuration || Math.min(8000, 3500 + extraWords * 300);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
    toastTimer = null;
    if (onDismiss) onDismiss();
  }, duration);
=======
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
>>>>>>> 45a90a0bd751f4110fca10d542d274447238f0ca
}

function renderScreen() {
  screens.forEach((screen, index) => {
    const isActive = index === currentScreen;
    screen.classList.toggle("is-active", isActive);
    screen.setAttribute("aria-hidden", String(!isActive));
  });

  screenCounter.textContent = String(currentScreen + 1).padStart(2, "0");
}

<<<<<<< HEAD
function focusScreenDefault() {
  window.setTimeout(() => {
    const screenName = screenNames[currentScreen];

    if (screenName === "home") {
      document.querySelector('[data-action="start"]').focus({ preventScroll: true });
      return;
    }

    if (screenName === "result") {
      const selected = document.querySelector(`[data-palette="${selectedPaletteKey}"]`);
      if (selected) {
        selected.focus({ preventScroll: true });
        selected.scrollIntoView({ behavior: "smooth", block: "nearest" });
        updatePalettePosition(selected);
      }
      return;
    }

    app.focus({ preventScroll: true });
  }, 0);
}

function resetExitProgress() {
  exitSwipes = { left: 0, right: 0 };
  updateExitProgress();
}

function updateExitProgress() {
  const backDots = Array.from(exitBack.querySelectorAll("i"));
  const nextDots = Array.from(exitNext.querySelectorAll("i"));

  backDots.forEach((dot, index) => dot.classList.toggle("is-complete", index < exitSwipes.left));
  nextDots.forEach((dot, index) => dot.classList.toggle("is-complete", index < exitSwipes.right));
}

function goToScreen(index) {
  const nextScreen = Math.max(0, Math.min(screenNames.length - 1, index));
  if (nextScreen === currentScreen) return;

  currentScreen = nextScreen;
  if (screenNames[currentScreen] === "controls") {
    resetExitProgress();
    hideToast();
  }
  renderScreen();
  focusScreenDefault();
=======
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
>>>>>>> 45a90a0bd751f4110fca10d542d274447238f0ca
}

function goNext() {
  goToScreen(currentScreen + 1);
}

function goPrevious() {
  goToScreen(currentScreen - 1);
}

<<<<<<< HEAD
function updateStats() {
  lastCommand.textContent = lastCommandLabel;
}

function selectCommand(command) {
  commandCards.forEach((card) => {
    card.classList.toggle("is-selected", card.dataset.command === command);
  });
}

function resetDemo() {
  totalCommands = 0;
  lastCommandLabel = "Nenhum";
  selectedPaletteKey = "eldorado";
  applyPalette(palettes.eldorado);
  selectPalette("eldorado", false);
  selectCommand("");
  resetExitProgress();
  updateStats();
  goToScreen(0);
  focusScreenDefault();
}

function handleControlsNavigation(command) {
  const isHorizontal = command === "swipe-left" || command === "swipe-right";

  if (!isHorizontal) {
    resetExitProgress();
    hideToast();
    return;
  }

  const direction = command === "swipe-left" ? "left" : "right";
  const oppositeDirection = direction === "left" ? "right" : "left";
  const destination = direction === "left" ? "voltar" : "avançar";

  if (exitSwipes[direction] === 1 && exitSwipes[oppositeDirection] === 0) {
    resetExitProgress();
    hideToast();
    if (direction === "left") goPrevious();
    else goNext();
    return;
  }

  resetExitProgress();
  hideToast();
  exitSwipes[direction] = 1;
  updateExitProgress();
  showToast(
    `Mais 1 swipe à ${direction === "left" ? "esquerda" : "direita"} para ${destination}`,
    direction,
    2000,
    resetExitProgress,
  );
}

function routeCommand(command) {
  const screenName = screenNames[currentScreen];

  if (screenName === "controls") {
    handleControlsNavigation(command);
    return;
  }

  if (screenName === "home") {
    if (command === "enter" || command === "swipe-right") goNext();
    return;
  }

  if (screenName === "result") {
    if (command === "swipe-up") movePaletteFocus(-1);
    else if (command === "swipe-down") movePaletteFocus(1);
    else if (command === "swipe-left" || command === "cancel") goPrevious();
    else if (command === "swipe-right") showToast("Você já está na última tela", "right");
=======
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
>>>>>>> 45a90a0bd751f4110fca10d542d274447238f0ca
  }
}

function handleCommand(command) {
  totalCommands += 1;
  lastCommandLabel = commandLabels[command] || command;
  selectCommand(command);
  updateStats();
  routeCommand(command);
}

<<<<<<< HEAD
function updatePalettePosition(option) {
  const index = Math.max(0, paletteOptions.indexOf(option));
  palettePosition.textContent = `${index + 1} / ${paletteOptions.length}`;
}

function movePaletteFocus(step) {
  const activeIndex = paletteOptions.indexOf(document.activeElement);
  const selectedIndex = paletteOptions.findIndex((option) => option.dataset.palette === selectedPaletteKey);
  const baseIndex = activeIndex >= 0 ? activeIndex : Math.max(0, selectedIndex);
  const nextIndex = (baseIndex + step + paletteOptions.length) % paletteOptions.length;
  const nextOption = paletteOptions[nextIndex];

  nextOption.focus({ preventScroll: true });
  nextOption.scrollIntoView({ behavior: "smooth", block: "nearest" });
  updatePalettePosition(nextOption);
}

function selectPalette(key, announce = true) {
  const palette = palettes[key];
  if (!palette) return;

  selectedPaletteKey = key;
  applyPalette(palette);

  paletteOptions.forEach((option) => {
    const isSelected = option.dataset.palette === key;
    option.classList.toggle("is-selected", isSelected);
    option.setAttribute("aria-selected", String(isSelected));
  });

  const selected = document.querySelector(`[data-palette="${key}"]`);
  if (selected) updatePalettePosition(selected);
  if (announce) showToast(`${palette.label} aplicada`, "success");
}

=======
>>>>>>> 45a90a0bd751f4110fca10d542d274447238f0ca
function detectSwipe(deltaX, deltaY) {
  const absX = Math.abs(deltaX);
  const absY = Math.abs(deltaY);
  const threshold = 44;

<<<<<<< HEAD
  if (Math.max(absX, absY) < threshold) return null;
  if (absX > absY) return deltaX > 0 ? "swipe-right" : "swipe-left";
=======
  if (Math.max(absX, absY) < threshold) {
    return null;
  }

  if (absX > absY) {
    return deltaX > 0 ? "swipe-right" : "swipe-left";
  }

>>>>>>> 45a90a0bd751f4110fca10d542d274447238f0ca
  return deltaY > 0 ? "swipe-down" : "swipe-up";
}

function handleKeydown(event) {
<<<<<<< HEAD
  if (event.repeat) return;

=======
>>>>>>> 45a90a0bd751f4110fca10d542d274447238f0ca
  const keyMap = {
    ArrowRight: "swipe-right",
    ArrowLeft: "swipe-left",
    ArrowUp: "swipe-up",
    ArrowDown: "swipe-down",
    Enter: "enter",
    Escape: "cancel",
  };
<<<<<<< HEAD
  const command = keyMap[event.key];
  if (!command) {
    if (screenNames[currentScreen] === "controls") {
      resetExitProgress();
      hideToast();
    }
=======

  const command = keyMap[event.key];

  if (!command) {
>>>>>>> 45a90a0bd751f4110fca10d542d274447238f0ca
    return;
  }

  event.preventDefault();
<<<<<<< HEAD

  if (screenNames[currentScreen] === "result" && command === "enter") {
    const focusedPalette = document.activeElement.closest && document.activeElement.closest("[data-palette]");
    if (focusedPalette) focusedPalette.click();
    return;
  }

=======
>>>>>>> 45a90a0bd751f4110fca10d542d274447238f0ca
  handleCommand(command);
}

function handlePointerDown(event) {
<<<<<<< HEAD
  pointerStart = { x: event.clientX, y: event.clientY, id: event.pointerId };
  if (app.setPointerCapture) app.setPointerCapture(event.pointerId);
}

function handlePointerUp(event) {
  if (!pointerStart) return;

  const command = detectSwipe(event.clientX - pointerStart.x, event.clientY - pointerStart.y);
  pointerStart = null;
  if (!command) return;
=======
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
>>>>>>> 45a90a0bd751f4110fca10d542d274447238f0ca

  event.preventDefault();
  suppressClickUntil = Date.now() + 320;
  handleCommand(command);
}

function handlePointerCancel() {
  pointerStart = null;
}

document.querySelector('[data-action="start"]').addEventListener("click", () => {
<<<<<<< HEAD
  if (Date.now() < suppressClickUntil) return;
  handleCommand("enter");
});

paletteOptions.forEach((option) => {
  option.addEventListener("focus", () => updatePalettePosition(option));
  option.addEventListener("click", () => {
    if (Date.now() < suppressClickUntil) return;
    selectPalette(option.dataset.palette);
=======
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
>>>>>>> 45a90a0bd751f4110fca10d542d274447238f0ca
  });
});

brandLogo.addEventListener("error", () => {
  brandLogo.closest(".brand-mark").classList.add("logo-failed");
});

app.addEventListener("pointerdown", handlePointerDown);
app.addEventListener("pointerup", handlePointerUp);
app.addEventListener("pointercancel", handlePointerCancel);
<<<<<<< HEAD
document.addEventListener("keydown", handleKeydown);
window.addEventListener("load", focusScreenDefault);

applyPalette(palettes.eldorado);
renderScreen();
updateStats();
updateExitProgress();
=======
window.addEventListener("keydown", handleKeydown);
window.addEventListener("load", () => app.focus({ preventScroll: true }));

applyPalette(defaultPalette);
renderScreen();
updateStats();
>>>>>>> 45a90a0bd751f4110fca10d542d274447238f0ca
