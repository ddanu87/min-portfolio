/**
 * Royal Click Fighter - Game Logic
 */

// Game state
let gameState = {
  score: 0,
  lives: 3,
  isPlaying: false,
  targetScore: 10,
  timeLimit: 20000, // 20 seconds in milliseconds
  timer: null,
};

// DOM Elements
const gameElements = {
  screen: null,
  game: null,
  background: null,
  elements: null,
  ui: null,
  scoreDisplay: null,
  livesDisplay: null,
  timerBar: null,
  startButton: null,
  resetButton: null,
};

// Game configuration
const config = {
  spawnInterval: 1000, // Slightly slower for better control
  goodElements: [
    { icon: "fa-coins", points: 1, text: "Mønt +1" },
    { icon: "fa-dice", points: 1, text: "Terning +1" },
    { icon: "fa-star", points: 2, text: "Stjerne +2" },
  ],
  badElements: [
    { icon: "fa-bomb", damage: 1, text: "Bombe -1 liv" },
    { icon: "fa-skull-crossbones", damage: 1, text: "Dødning -1 liv" },
  ],
  elementSpeed: 3, // seconds to cross screen (slower for better gameplay)
  lanes: 5,
  sounds: {
    good: new Audio("assets/sounds/kaching.mp3"),
    bad: new Audio("assets/sounds/error.mp3"),
  },
  spawnRates: {
    good: 0.7, // 70% chance for good elements
    bad: 0.3, // 30% chance for bad elements
  },
};

// Initialize game
document.addEventListener("DOMContentLoaded", () => {
  initializeGameElements();
  setupEventListeners();
});

function initializeGameElements() {
  // Get DOM elements
  gameElements.screen = document.getElementById("screen");
  gameElements.game = document.getElementById("game");
  gameElements.background = document.getElementById("game_background");
  gameElements.elements = document.getElementById("game_elements");
  gameElements.ui = document.getElementById("game_ui");
  gameElements.scoreDisplay = document.querySelector("#score_board .points");
  gameElements.livesDisplay = document.querySelector("#life_board .lives");
  gameElements.timerBar = document.querySelector(".timer-bar");
  gameElements.startButton = document.getElementById("start-game");
  gameElements.resetButton = document.getElementById("reset-game");

  // Set initial UI values
  updateUI();
}

function setupEventListeners() {
  // Start game button
  gameElements.startButton.addEventListener("click", startGame);

  // Reset game button
  gameElements.resetButton.addEventListener("click", resetGame);

  // Click handler for game elements
  gameElements.elements.addEventListener("click", handleElementClick);
}

function startGame() {
  if (gameState.isPlaying) return;

  // Reset game state
  gameState.score = 0;
  gameState.lives = 3;
  gameState.isPlaying = true;

  // Clear existing elements
  gameElements.elements.innerHTML = "";

  // Update UI
  updateUI();

  // Start spawning elements
  startSpawningElements();

  // Start timer
  startTimer();

  // Update button states
  gameElements.startButton.disabled = true;
  gameElements.resetButton.disabled = false;

  // Reset and start timer animation
  gameElements.timerBar.style.animation = "none";
  gameElements.timerBar.offsetHeight; // Trigger reflow
  gameElements.timerBar.style.animation = `timer ${gameState.timeLimit / 1000}s linear forwards`;
}

function resetGame() {
  // Stop current game
  endGame();

  // Reset UI
  gameState.score = 0;
  gameState.lives = 3;
  updateUI();

  // Enable start button
  gameElements.startButton.disabled = false;
  gameElements.resetButton.disabled = true;

  // Clear elements
  gameElements.elements.innerHTML = "";
}

function startSpawningElements() {
  const spawnElement = () => {
    if (!gameState.isPlaying) return;

    const isGood = Math.random() > 0.4; // 60% chance of good element
    const element = createGameElement(isGood);
    gameElements.elements.appendChild(element);

    // Schedule next spawn
    setTimeout(spawnElement, config.spawnInterval);
  };

  spawnElement();
}

function createGameElement(isGood) {
  const element = document.createElement("div");
  element.className = `sprite_container ${isGood ? "good_element" : "bad_element"}`;

  // Random lane placement
  const lane = Math.floor(Math.random() * config.lanes);
  element.style.left = `${(100 / config.lanes) * lane}%`;

  // Create sprite with Font Awesome icon
  const sprite = document.createElement("div");
  sprite.className = "sprite";

  // Create icon element
  const icon = document.createElement("i");
  icon.className = "fas";

  // Select random element and add tooltip
  const elements = isGood ? config.goodElements : config.badElements;
  const selectedElement = elements[Math.floor(Math.random() * elements.length)];
  icon.classList.add(selectedElement.icon);

  // Add tooltip
  element.title = selectedElement.text;

  // Store element info for scoring
  element.dataset.points = isGood ? selectedElement.points : 0;
  element.dataset.damage = !isGood ? selectedElement.damage : 0;

  sprite.appendChild(icon);
  element.appendChild(sprite);

  // Add floating text to show value
  const valueText = document.createElement("div");
  valueText.className = "value-text";
  valueText.textContent = selectedElement.text;
  element.appendChild(valueText);

  // Remove element when animation ends
  element.addEventListener("animationend", () => {
    element.remove();
  });

  return element;
}

function handleElementClick(event) {
  if (!gameState.isPlaying) return;

  const element = event.target.closest(".sprite_container");
  if (!element) return;

  // Prevent double-clicking the same element
  if (element.classList.contains("clicked")) return;
  element.classList.add("clicked");

  if (element.classList.contains("good_element")) {
    handleGoodClick(element);
  } else {
    handleBadClick(element);
  }

  // Remove element after click animation
  setTimeout(() => element.remove(), 500);
}

function handleGoodClick(element) {
  // Get points value
  const points = parseInt(element.dataset.points);

  // Play sound effect
  config.sounds.good.currentTime = 0;
  config.sounds.good.play().catch(() => {});

  // Add click effect
  element.classList.add("good-click-effect");

  // Show floating score
  showFloatingText(`+${points}`, element, "#00ff00");

  // Update score
  gameState.score += points;
  updateUI();

  // Check for win condition
  if (gameState.score >= gameState.targetScore) {
    showLevelComplete();
  }
}

function showFloatingText(text, element, color) {
  const floating = document.createElement("div");
  floating.className = "floating-score";
  floating.textContent = text;
  floating.style.color = color;

  const rect = element.getBoundingClientRect();
  floating.style.left = `${rect.left}px`;
  floating.style.top = `${rect.top}px`;

  document.body.appendChild(floating);

  setTimeout(() => floating.remove(), 1000);
}

function handleBadClick(element) {
  // Play sound effect
  config.sounds.bad.currentTime = 0;
  config.sounds.bad.play().catch(() => {});

  // Add click effect
  element.classList.add("bad-click-effect");

  gameState.lives--;
  updateUI();

  // Check for game over
  if (gameState.lives <= 0) {
    showGameOver();
  }
}

function startTimer() {
  const startTime = Date.now();

  gameState.timer = setInterval(() => {
    const elapsed = Date.now() - startTime;

    if (elapsed >= gameState.timeLimit) {
      showGameOver();
    }
  }, 100);
}

function updateUI() {
  gameElements.scoreDisplay.textContent = gameState.score;
  gameElements.livesDisplay.textContent = gameState.lives;
}

function showGameOver() {
  endGame();

  const gameOver = document.getElementById("game_over");
  gameOver.innerHTML = `
        <div class="game-message lose">
            <h2>Game Over!</h2>
            <p>Din score: ${gameState.score}</p>
            <button class="game-button" onclick="resetGame()">Prøv Igen</button>
        </div>
    `;
  gameOver.style.display = "flex";
}

function showLevelComplete() {
  endGame();

  const levelComplete = document.getElementById("level_complete");
  levelComplete.innerHTML = `
        <div class="game-message win">
            <h2>Level Gennemført!</h2>
            <p>Tillykke! Du fik ${gameState.score} point!</p>
            <button class="game-button" onclick="resetGame()">Spil Igen</button>
        </div>
    `;
  levelComplete.style.display = "flex";
}

function endGame() {
  gameState.isPlaying = false;
  clearInterval(gameState.timer);
  gameElements.startButton.disabled = false;
  gameElements.elements.innerHTML = "";

  // Reset timer animation
  gameElements.timerBar.style.animation = "none";
}
