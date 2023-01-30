/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('start-button');



//--------------------------------------------------------------CREATING PLAYERS

const redPlayer = new Player (ctx, 0, 192, 0, 0, 'red', 'w', 's', 'a', 'd')
redPlayer.draw();
const ylwPlayer = new Player (ctx, 0, 230, 0, 0, 'yellow', "eight", "five", "four", "six")
ylwPlayer.draw();

//--------------------------------------------------------------CREATING LEVEL

const level1 = new Level(ctx, canvas.width, canvas.height, redPlayer, ylwPlayer);
level1.createBoundaries();

redPlayer.level = level1
ylwPlayer.level = level1


//--------------------------------------------------------------STARTING THE GAME

startButton.onclick = function (){
    level1.startLevel();
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
        case '8':
            ylwPlayer.keys.eight = true
            ylwPlayer.lastKey = 'w';
            break;
        case '4': 
            ylwPlayer.keys.four = true
            ylwPlayer.lastKey = '4';
            break;
        case '5': 
            ylwPlayer.keys.five = true
            ylwPlayer.lastKey = '5';
            break;
        case '6': 
            ylwPlayer.keys.six = true
            ylwPlayer.lastKey = '6';
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
        case '8':
            ylwKeys.eight = false
            break;
        case '4': 
            ylwKeys.four = false
            break;
        case '5': 
            ylwKeys.five = false
            break;
        case '6': 
            ylwKeys.six = false
            break;
    }
})
