/** @type {HTMLCanvasElement} */

class Player {
    constructor(ctx, x, y, speedX, speedY, color){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
        this.w = 20;
        this.h = 28;
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    movement() {
        if (redKeys.w.pressed && lastRedKey === 'w') {
            redPlayer.speedY = -5
        } else if (redKeys.a.pressed && lastRedKey === 'a') {
            redPlayer.speedX = -5
        } else if (redKeys.s.pressed && lastRedKey === 's') {
            redPlayer.speedY = 5
        } else if (redKeys.d.pressed && lastRedKey === 'd') {
            redPlayer.speedX = 5
        }
        redPlayer.x += redPlayer.speedX;
        redPlayer.y += redPlayer.speedY;

        if (ylwKeys.eight.pressed && lastYlwKey === '8') {
            ylwPlayer.speedY = -5
        } else if (ylwKeys.four.pressed && lastYlwKey === '4') {
            ylwPlayer.speedX = -5
        } else if (ylwKeys.five.pressed && lastYlwKey === '5') {
            ylwPlayer.speedY = 5
        } else if (ylwKeys.six.pressed && lastYlwKey === '6') {
            ylwPlayer.speedX = 5
        }
        ylwPlayer.x += ylwPlayer.speedX;
        ylwPlayer.y += ylwPlayer.speedY;
    }

    top(){
        return this.y;
    }

    bottom(){
        return this.y + this.h;
    }

    left(){
        return this.x;
    }

    right(){
        return this.x + this.w;
    }

}

/* ctx.fillStyle = "red";
ctx.fillRect(300, 300, 30, 30);

ctx.fillStyle = "red";
ctx.fillRect(200, 200, 20, 20);

const rrh = new Image();
rrh.src = "../docs/assets/rrh.png"
rrh.addEventListener('load', function(){
    ctx.drawImage(rrh, 100, 100, 30, 30);
})

const yrh = new Image();
yrh.src = "../docs/assets/yrh.png"
yrh.addEventListener('load', function(){
    ctx.drawImage(yrh, 100, 150, 30, 30);
})

const rrh1 = new Image();
rrh1.src = "../docs/assets/rrh1.png"
rrh1.addEventListener('load', function(){
    ctx.drawImage(rrh1, 100, 200, 30, 30);
})

const yrh1 = new Image();
yrh1.src = "../docs/assets/yrh1.png"
yrh1.addEventListener('load', function(){
    ctx.drawImage(yrh1, 100, 250, 30, 30);
})

const rrh4 = new Image();
rrh4.src = "../docs/assets/rrh4.png"
rrh4.addEventListener('load', function(){
    ctx.drawImage(rrh4, 100, 300, 30, 30);
})

const yrh4 = new Image();
yrh4.src = "../docs/assets/yrh4.png"
yrh4.addEventListener('load', function(){
    ctx.drawImage(yrh4, 100, 350, 30, 30);
}) */

