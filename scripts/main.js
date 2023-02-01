/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const startButton = document.getElementById("start-button");
const audioCtx = new (window.AudioContext || window.webkitAudioContext)(); 

//--------------------------------------------------------------CREATING COMPONENTS

ctx.fillStyle = "#b7c8b7";
ctx.fillRect(0, 0, canvas.width, canvas.height);

//----------------------------------PLAYERS
const redSprite = new Image()
redSprite.addEventListener("load", ()=> {})
redSprite.src = "../docs/assets/red_sprite.png"

const redWolfSprite = new Image()
redWolfSprite.addEventListener("load", ()=> {})
redWolfSprite.src = "../docs/assets/red_wolf_sprite.png"

const ylwSprite = new Image()
ylwSprite.addEventListener("load", ()=> {})
ylwSprite.src = "../docs/assets/ylw_sprite.png"

const ylwWolfSprite = new Image()
ylwWolfSprite.addEventListener("load", ()=> {})
ylwWolfSprite.src = "../docs/assets/ylw_wolf_sprite.png"

const redPlayer = new Player(ctx, 35, 202, 0, 0, "red", "w", "s", "a", "d", redSprite, redWolfSprite);
redPlayer.update();

const ylwPlayer = new Player(ctx, 35, 250, 0, 0, "yellow", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight",ylwSprite, ylwWolfSprite);
ylwPlayer.update();

//----------------------------------LEVELS
const level1 = new Level(
  ctx,
  canvas.width,
  canvas.height,
  redPlayer,
  ylwPlayer
);
level1.createBoundaries();

redPlayer.level = level1;
ylwPlayer.level = level1;

//----------------------------------GRANDMA'S HOUSE

const grandmaImg = new Image()
grandmaImg.addEventListener("load", ()=> {})
grandmaImg.src = "../docs/assets/grandma_house.png"

const grandmaHouse = new Finish(ctx, 1216, 224, grandmaImg);
grandmaHouse.draw();

//----------------------------------POWER UPS

const poisonImg = new Image()
poisonImg.addEventListener("load", ()=> {})
poisonImg.src = "../docs/assets/poison.png"

let powerUpsArr = [];

const redPoison1 = new PowerUp(ctx, 736, 163, poisonImg);
redPoison1.draw();
const redPoison2 = new PowerUp(ctx, 868, 420, poisonImg);
redPoison2.draw();

powerUpsArr.push(redPoison1, redPoison2);

//--------------------------------------------------------------TIMER FUNCTION

function countdown() {
  if (framesX >= 0 && framesX < 60) {
    const img = new Image();
    img.src = "../docs/assets/3.png";
    ctx.drawImage(img, canvas.width / 2 - 175, canvas.height / 2 - 175);
  } else if (framesX >= 60 && framesX < 120) {
    const img = new Image();
    img.src = "../docs/assets/2.png";
    ctx.drawImage(img, canvas.width / 2 - 175, canvas.height / 2 - 175);
  } else if (framesX >= 120 && framesX < 180) {
    const img = new Image();
    img.src = "../docs/assets/1.png";
    ctx.drawImage(img, canvas.width / 2 - 175, canvas.height / 2 - 175);
  } else if (framesX >= 180 && framesX < 240) {
    const img = new Image();
    img.src = "../docs/assets/go.png";
    ctx.drawImage(img, canvas.width / 2 - 175, canvas.height / 2 - 175);
  }
}

//--------------------------------------------------------------CHECKING COLLISIONS

function checkCollision({ hitbox, object }) {
  return (
    hitbox.y + hitbox.speedY <= object.y + object.height &&
    hitbox.x + hitbox.width + hitbox.speedX >= object.x &&
    hitbox.y + hitbox.height + hitbox.speedY >= object.y &&
    hitbox.x + hitbox.speedX <= object.x + object.width
  );
}

//--------------------------------------------------------------PLAYER MOVEMENT WITH ALLOWED MOVEMENT PREDICTION

function playerMove(player) {
  if (!player.powerUp) {
    if (player.keys.up && player.lastKey === player.up) {
      for (let i = 0; i < level1.boundaries.length; i++) {
        const boundary = level1.boundaries[i];
        if (
          checkCollision({
            hitbox: { ...player, speedY: -2 },
            object: boundary,
          })
        ) {
          player.speedY = 0;
          break;
        } else player.speedY = -2;
      }
    } else if (player.keys.left && player.lastKey === player.left) {
      for (let i = 0; i < level1.boundaries.length; i++) {
        const boundary = level1.boundaries[i];
        if (
          checkCollision({
            hitbox: { ...player, speedX: -2 },
            object: boundary,
          })
        ) {
          player.speedX = 0;
          break;
        } else player.speedX = -2;
      }
    } else if (player.keys.down && player.lastKey === player.down) {
      for (let i = 0; i < level1.boundaries.length; i++) {
        const boundary = level1.boundaries[i];
        if (
          checkCollision({
            hitbox: { ...player, speedY: 2 },
            object: boundary,
          })
        ) {
          player.speedY = 0;
          break;
        } else player.speedY = 2;
      }
    } else if (player.keys.right && player.lastKey === player.right) {
      for (let i = 0; i < level1.boundaries.length; i++) {
        const boundary = level1.boundaries[i];
        if (
          checkCollision({
            hitbox: { ...player, speedX: 2 },
            object: boundary,
          })
        ) {
          player.speedX = 0;
          break;
        } else player.speedX = 2;
      }
    }
  } else {
    if (player.keys.up && player.lastKey === player.up) {
      for (let i = 0; i < level1.boundaries.length; i++) {
        const boundary = level1.boundaries[i];
        if (
          checkCollision({
            hitbox: { ...player, speedY: -3 },
            object: boundary,
          })
        ) {
          player.speedY = 0;
          break;
        } else player.speedY = -3;
      }
    } else if (player.keys.left && player.lastKey === player.left) {
      for (let i = 0; i < level1.boundaries.length; i++) {
        const boundary = level1.boundaries[i];
        if (
          checkCollision({
            hitbox: { ...player, speedX: -3 },
            object: boundary,
          })
        ) {
          player.speedX = 0;
          break;
        } else player.speedX = -3;
      }
    } else if (player.keys.down && player.lastKey === player.down) {
      for (let i = 0; i < level1.boundaries.length; i++) {
        const boundary = level1.boundaries[i];
        if (
          checkCollision({
            hitbox: { ...player, speedY: 3 },
            object: boundary,
          })
        ) {
          player.speedY = 0;
          break;
        } else player.speedY = 3;
      }
    } else if (player.keys.right && player.lastKey === player.right) {
      for (let i = 0; i < level1.boundaries.length; i++) {
        const boundary = level1.boundaries[i];
        if (
          checkCollision({
            hitbox: { ...player, speedX: 3 },
            object: boundary,
          })
        ) {
          player.speedX = 0;
          break;
        } else player.speedX = 3;
      }
    }
  }
}

//--------------------------------------------------------------ANIMATING
let animationId;
let framesX = 0;
function animate() {
  animationId = requestAnimationFrame(animate);
  framesX++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#b7c8b7";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  //---------MOVING PLAYERS

  playerMove(redPlayer);
  playerMove(ylwPlayer);
  redPlayer.update();
  ylwPlayer.update();
  grandmaHouse.draw();
  powerUpsArr.forEach((element) => {
    element.draw();
  });

  //---------STOPING PLAYERS ON FULL WALL COLLISION

  level1.boundaries.forEach((boundary) => {
    boundary.draw();
    if (
      checkCollision({
        hitbox: redPlayer,
        object: boundary,
      })
    ) {
      redPlayer.speedX = 0;
      redPlayer.speedY = 0;
    }

    if (
      checkCollision({
        hitbox: ylwPlayer,
        object: boundary,
      })
    ) {
      ylwPlayer.speedX = 0;
      ylwPlayer.speedY = 0;
    }
  });
  countdown();

  //---------POWER UP COLLISION

  if (
    checkCollision({ hitbox: redPlayer, object: redPoison1 }) ||
    checkCollision({ hitbox: redPlayer, object: redPoison2 })
  ) {
    redPlayer.powerUp = true;
    redPoison1.isOn = false;
    redPoison2.isOn = false;
  }

  if (
    checkCollision({ hitbox: ylwPlayer, object: redPoison1 }) ||
    checkCollision({ hitbox: ylwPlayer, object: redPoison2 })
  ) {
    ylwPlayer.powerUp = true;
    redPoison1.isOn = false;
    redPoison2.isOn = false;
  }

  //---------PLAYER COLLISION

  if (checkCollision({ hitbox: ylwPlayer, object: redPlayer })) {
    if (ylwPlayer.powerUp && redPlayer.powerUp) {
      cancelAnimationFrame(animationId);
      const drawScreen = new Image();
      drawScreen.src = "../docs/assets/draw_screen.png";
      drawScreen.onload = () => ctx.drawImage(drawScreen, 0, 0);
    }
    if (ylwPlayer.powerUp || redPlayer.powerUp) {
      cancelAnimationFrame(animationId);
      if (ylwPlayer.powerUp && !redPlayer.powerUp) {
        const ylwWins = new Image();
        ylwWins.src = "../docs/assets/ylw_wolf_wins.png";
        ylwWins.onload = () => ctx.drawImage(ylwWins, 0, 0);
      } else if (redPlayer.powerUp && !ylwPlayer.powerUp) {
        const redWins = new Image();
        redWins.src = "../docs/assets/red_wolf_wins.png";
        redWins.onload = () => ctx.drawImage(redWins, 0, 0);
      }
    }
  }

  //---------GRANDMA'S HOUSE COLLISION

  if (
    checkCollision({ hitbox: redPlayer, object: grandmaHouse }) && !redPlayer.powerUp) {
    cancelAnimationFrame(animationId);
    const redWins = new Image();
    redWins.src = "../docs/assets/red_wins.png";
    redWins.onload = () => ctx.drawImage(redWins, 0, 0);
  }

  if (
    checkCollision({ hitbox: ylwPlayer, object: grandmaHouse }) && !ylwPlayer.powerUp ) {
    cancelAnimationFrame(animationId);
    const ylwWins = new Image();
    ylwWins.src = "../docs/assets/ylw_wins.png";
    ylwWins.onload = () => ctx.drawImage(ylwWins, 0, 0);
  }
}

//--------------------------------------------------------------START BUTTON FUNCTION

startButton.onclick = function () {
  canvas.classList.remove("hidden");
  animate();
  let start = document.getElementById("start-button");
  start.remove();
  let audioStart = document.getElementById("start-button");
  audioStart.addEventListener('click', playSound);
}; 

const playSound = () => {
  audioStart.play();
};

//--------------------------------------------------------------EVENT LISTENERS

window.addEventListener("keydown", (event) => {
  if (framesX > 180) {
    switch (event.key) {
      case "w":
        redPlayer.keys.up = true;
        redPlayer.lastKey = "w";
        break;
      case "a":
        redPlayer.keys.left = true;
        redPlayer.lastKey = "a";
        break;
      case "s":
        redPlayer.keys.down = true;
        redPlayer.lastKey = "s";
        break;
      case "d":
        redPlayer.keys.right = true;
        redPlayer.lastKey = "d";
        break;
      case "ArrowUp":
        ylwPlayer.keys.up = true;
        ylwPlayer.lastKey = "ArrowUp";
        break;
      case "ArrowLeft":
        ylwPlayer.keys.left = true;
        ylwPlayer.lastKey = "ArrowLeft";
        break;
      case "ArrowDown":
        ylwPlayer.keys.down = true;
        ylwPlayer.lastKey = "ArrowDown";
        break;
      case "ArrowRight":
        ylwPlayer.keys.right = true;
        ylwPlayer.lastKey = "ArrowRight";
        break;
    }
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "w":
      redPlayer.keys.up = false;
      break;
    case "a":
      redPlayer.keys.left = false;
      break;
    case "s":
      redPlayer.keys.down = false;
      break;
    case "d":
      redPlayer.keys.right = false;
      break;
    case "ArrowUp":
      ylwPlayer.keys.up = false;
      break;
    case "ArrowLeft":
      ylwPlayer.keys.left = false;
      break;
    case "ArrowDown":
      ylwPlayer.keys.down = false;
      break;
    case "ArrowRight":
      ylwPlayer.keys.right = false;
      break;
  }
});
