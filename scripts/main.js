/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('start-button');



//--------------------------------------------------------------CREATING PLAYERS

const redPlayer = new Player (ctx, 0, 192, 0, 0, 'red', 'w', 's', 'a', 'd')
redPlayer.draw();
const ylwPlayer = new Player (ctx, 0, 230, 0, 0, 'yellow', "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight")
ylwPlayer.draw();



const level1 = new Level(ctx, canvas.width, canvas.height, redPlayer, ylwPlayer);
level1.createBoundaries();

redPlayer.level = level1
ylwPlayer.level = level1

//--------------------------------------------------------------CHECKING COLLISIONS

function checkCollisionWithWall({hitbox, wall}) {
    return (hitbox.topLimit() + hitbox.speedY <= wall.y + wall.height && 
            hitbox.rightLimit() + hitbox.speedX >= wall.x && 
            hitbox.bottomLimit() + hitbox.speedY >= wall.y && 
            hitbox.leftLimit() + hitbox.speedX <= wall.x + wall.width)
}

//--------------------------------------------------------------PLAYER MOVEMENT

function movement(player) {
    if (player.keys.up && player.lastKey === player.up) player.speedY = -2;
    
    else if (player.keys.left && player.lastKey === player.left) player.speedX = -2;
    else if (player.keys.down && player.lastKey === player.down) player.speedY = 2;
    else if (player.keys.right && player.lastKey === player.right) player.speedX = 2; 

    player.level.boundaries.forEach((boundary) => {
     
        if (player.crashWith(boundary)) {
            if (player.keys.up && player.lastKey === player.up) player.speedY = 0;
                else if (player.keys.left && player.lastKey === player.left) player.speedX = 0;
                else if (player.keys.down && player.lastKey === player.down) player.speedY = 0;
                else if (player.keys.right && player.lastKey === player.right) player.speedX = 0; 
        } 
}) 
player.x += player.speedX;
player.y += player.speedY;
}



//--------------------------------------------------------------STARTING THE GAME

startButton.onclick = function (){
    level1.startLevel();
  }

  update = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    redPlayer.draw();
    ylwPlayer.draw();

    movement(redPlayer);
    movement(ylwPlayer);
    level1.boundaries.forEach((boundary) => {
        boundary.draw()
        if (checkCollisionWithWall({hitbox: redPlayer, wall: boundary})) {
            redPlayer.speedX = 0;
            redPlayer.speedY = 0;
        }
        if (checkCollisionWithWall({hitbox: ylwPlayer, wall: boundary})) {
            ylwPlayer.speedX = 0;
            ylwPlayer.speedY = 0;
        }
    })


    

}

//--------------------------------------------------------------EVENT LISTENERS

/* const redKeys = {
    w: {pressed: false},
    a: {pressed: false},
    s: {pressed: false},
    d: {pressed: false},
}

const ylwKeys = {
    eight: {pressed: false},
    four: {pressed: false},
    five: {pressed: false},
    six: {pressed: false}
} */

/* let lastRedKey = '';
let lastYlwKey =''; */

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
            redPlayer.keys.up = true
            redPlayer.lastKey = 'w';
            break;
        case 'a': 
            redPlayer.keys.left = true
            redPlayer.lastKey = 'a';
            break;
        case 's': 
            redPlayer.keys.down = true
            redPlayer.lastKey = 's';
            break;
        case 'd': 
            redPlayer.keys.right = true
            redPlayer.lastKey = 'd';
            break;
        case 'ArrowUp':
            ylwPlayer.keys.up = true
            ylwPlayer.lastKey = 'ArrowUp';
            break;
        case 'ArrowLeft': 
            ylwPlayer.keys.left = true
            ylwPlayer.lastKey = 'ArrowLeft';
            break;
        case 'ArrowDown': 
            ylwPlayer.keys.down = true
            ylwPlayer.lastKey = 'ArrowDown';
            break;
        case 'ArrowRight': 
            ylwPlayer.keys.right = true
            ylwPlayer.lastKey = 'ArrowRight';
            break;
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'w':
            redPlayer.keys.up = false
            break;
        case 'a': 
            redPlayer.keys.left = false    
            break;
        case 's': 
            redPlayer.keys.down = false     
            break;
        case 'd': 
            redPlayer.keys.right = false
            break;
        case 'ArrowUp':
            ylwPlayer.keys.up = false
            break;
        case 'ArrowLeft': 
            ylwPlayer.keys.left = false
            break;
        case 'ArrowDown': 
            ylwPlayer.keys.down = false
            break;
        case 'ArrowRight': 
            ylwPlayer.keys.right = false
            break;
    }
})
