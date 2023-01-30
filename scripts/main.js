/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('start-button');



//--------------------------------------------------------------CREATING PLAYERS

const redPlayer = new Player (ctx, 0, 192, 0, 0, 'red')
redPlayer.draw();
const ylwPlayer = new Player (ctx, 0, 230, 0, 0, 'yellow')
ylwPlayer.draw();

//--------------------------------------------------------------CREATING LEVEL

const level1 = new Level(ctx, canvas.width, canvas.height, redPlayer, ylwPlayer);
level1.createBoundaries();


//--------------------------------------------------------------STARTING THE GAME

startButton.onclick = function (){
    level1.startLevel();
  }

//--------------------------------------------------------------EVENT LISTENERS

const redKeys = {
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
}

let lastRedKey = '';
let lastYlwKey ='';

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
            redKeys.w.pressed = true
            lastRedKey = 'w';
            break;
        case 'a': 
            redKeys.a.pressed = true
            lastRedKey = 'a';
            break;
        case 's': 
            redKeys.s.pressed = true
            lastRedKey = 's';
            break;
        case 'd': 
            redKeys.d.pressed = true
            lastRedKey = 'd';
            break;
        case '8':
            ylwKeys.eight.pressed = true
            lastYlwKey = '8';
            break;
        case '4': 
            ylwKeys.four.pressed = true
            lastYlwKey = '4';
            break;
        case '5': 
            ylwKeys.five.pressed = true
            lastYlwKey = '5';
            break;
        case '6': 
            ylwKeys.six.pressed = true
            lastYlwKey = '6';
            break;
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'w':
            redKeys.w.pressed = false
            break;
        case 'a': 
            redKeys.a.pressed = false
            break;
        case 's': 
            redKeys.s.pressed = false
            break;
        case 'd': 
            redKeys.d.pressed = false
            break;
        case '8':
            ylwKeys.eight.pressed = false
            break;
        case '4': 
            ylwKeys.four.pressed = false
            break;
        case '5': 
            ylwKeys.five.pressed = false
            break;
        case '6': 
            ylwKeys.six.pressed = false
            break;
    }
})
