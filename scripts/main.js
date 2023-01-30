/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('start-button');



//--------------------------------------------------------------CREATING PLAYERS

const redPlayer = new Player (ctx, 0, 192, 0, 0, 'red', 'w', 's', 'a', 'd')
redPlayer.update();
const ylwPlayer = new Player (ctx, 0, 230, 0, 0, 'yellow', "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight")
ylwPlayer.update();

const level1 = new Level(ctx, canvas.width, canvas.height, redPlayer, ylwPlayer);
level1.createBoundaries();

redPlayer.level = level1
ylwPlayer.level = level1

//--------------------------------------------------------------CHECKING COLLISIONS

function checkCollisionWithWall({ hitbox, wall }) {
    return (hitbox.y + hitbox.speedY <= wall.y + wall.height && 
        hitbox.x + hitbox.width + hitbox.speedX >= wall.x && 
        hitbox.y + hitbox.height + hitbox.speedY >= wall.y && 
        hitbox.x + hitbox.speedX <= wall.x + wall.width)
}

//--------------------------------------------------------------ANIMATING

function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (redPlayer.keys.up && redPlayer.lastKey === redPlayer.up) {
        for (let i = 0; i < level1.boundaries.length; i++) {
            const boundary = level1.boundaries[i];
            if (checkCollisionWithWall({
                hitbox: {...redPlayer, speedY: -2},
                wall: boundary
            })) {
              redPlayer.speedY = 0;
              break;
            } else redPlayer.speedY = -2
        } 
    } else if (redPlayer.keys.left && redPlayer.lastKey === redPlayer.left) {
        for (let i = 0; i < level1.boundaries.length; i++) {
            const boundary = level1.boundaries[i];
            if (checkCollisionWithWall({
                hitbox: {...redPlayer, speedX: -2},
                wall: boundary
            })) {
              redPlayer.speedX = 0;
              break;
            } else redPlayer.speedX = -2
        } 
    } else if (redPlayer.keys.down && redPlayer.lastKey === redPlayer.down) {
        for (let i = 0; i < level1.boundaries.length; i++) {
            const boundary = level1.boundaries[i];
            if (checkCollisionWithWall({
                hitbox: {...redPlayer, speedY: 2},
                wall: boundary
            })) {
              redPlayer.speedY = 0;
              break;
            } else redPlayer.speedY = 2
        } 
    } else if (redPlayer.keys.right && redPlayer.lastKey === redPlayer.right) {
        for (let i = 0; i < level1.boundaries.length; i++) {
            const boundary = level1.boundaries[i];
            if (checkCollisionWithWall({
                hitbox: {...redPlayer, speedX: 2},
                wall: boundary
            })) {
              redPlayer.speedX = 0;
              break;
            } else redPlayer.speedX = 2
        } 
    } 

    level1.boundaries.forEach((boundary) => {
        boundary.draw()
        if (
            checkCollisionWithWall({
                hitbox: redPlayer,
                wall: boundary
            })
        ) {
            redPlayer.speedX = 0;
            redPlayer.speedY = 0;
        }
    })
    redPlayer.update();
    ylwPlayer.update();

    ylwPlayer.speedX = 0;
    ylwPlayer.speedY = 0;
    
}

startButton.onclick = function (){
    animate();
}


//--------------------------------------------------------------EVENT LISTENERS


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
