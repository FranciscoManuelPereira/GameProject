/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const startButton = document.getElementById("start-button");

//--------------------------------------------------------------CREATING COMPONENTS

ctx.fillStyle = "#b7c8b7";
ctx.fillRect(0, 0, canvas.width, canvas.height);
const redPlayer = new Player(ctx, 35, 202, 0, 0, "red", "w", "s", "a", "d");
redPlayer.update();
const ylwPlayer = new Player(
  ctx,
  35,
  250,
  0,
  0,
  "yellow",
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
);
ylwPlayer.update();

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

const grandmaHouse = new Finish(ctx, 1216, 224);
grandmaHouse.draw();

let powerUpsArr = [];

const redPoison1 = new PowerUp(ctx, 164, 420);
redPoison1.draw();
const redPoison2 = new PowerUp(ctx, 100, 100);
redPoison2.draw();
const redPoison3 = new PowerUp(ctx, 868, 420);
redPoison3.draw();
const redPoison4 = new PowerUp(ctx, 868, 36);
redPoison4.draw();
powerUpsArr.push(redPoison1, redPoison2, redPoison3, redPoison4);

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
  console.log(countdown);

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
    checkCollision({ hitbox: redPlayer, object: redPoison2 }) ||
    checkCollision({ hitbox: redPlayer, object: redPoison3 }) ||
    checkCollision({ hitbox: redPlayer, object: redPoison4 })
  ) {
    redPlayer.powerUp = true;
    powerUpsArr = [];
  }

  if (
    checkCollision({ hitbox: ylwPlayer, object: redPoison1 }) ||
    checkCollision({ hitbox: ylwPlayer, object: redPoison2 }) ||
    checkCollision({ hitbox: ylwPlayer, object: redPoison3 }) ||
    checkCollision({ hitbox: ylwPlayer, object: redPoison4 })
  ) {
    ylwPlayer.powerUp = true;
  }

  //---------PLAYER COLLISION

  if (checkCollision({ hitbox: ylwPlayer, object: redPlayer })) {
    if (ylwPlayer.powerUp || redPlayer.powerUp) {
      cancelAnimationFrame(animationId);
    }
  }

  //---------GRANDMA'S HOUSE COLLISION

  if (
    checkCollision({ hitbox: redPlayer, object: grandmaHouse }) &&
    !redPlayer.powerUp
  ) {
    console.log("red win");
    cancelAnimationFrame(animationId);
  }

  if (
    checkCollision({
      hitbox: ylwPlayer,
      object: grandmaHouse && !ylwPlayer.powerUp,
    })
  ) {
    console.log("yellow win");
    cancelAnimationFrame(animationId);
  }
}

//--------------------------------------------------------------START BUTTON FUNCTION

startButton.onclick = function () {
  canvas.classList.remove("hidden");
  animate();
  let start = document.getElementById("start-button");
  start.remove();
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
