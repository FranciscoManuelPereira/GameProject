/** @type {HTMLCanvasElement} */

class Player {
    constructor(ctx, x, y, speedX, speedY, color, up, down, left, right){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
        this.width = 20;
        this.height = 28;
        this.xCollision = null;
        this.yCollision = null;
        this.level = null;
        this.up = up;
        this.down = down;
        this.left = left;
        this.right = right;
        this.keys = {
            up : false,
            left: false,
            down:false,
            right: false,
        }
        this.lastKey = ""
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    /* checkCollisionWithWall({player, wall}) {
        return (player.top() + player.speedY <= wall.y + wall.height && 
                player.right() + player.speedX >= wall.x && 
                player.bottom() + player.speedY >= wall.y && 
                player.left() + player.speedX <= wall.x + wall.width)
    } */
    crashWith(boundary) {
        return !(
          this.bottomLimit() + this.speedY < boundary.top() ||
          this.topLimit() + this.speedY > boundary.bottom() ||
          this.rightLimit() + this.speedX < boundary.left() ||
          this.leftLimit() + this.speedX > boundary.right()
        );
      }

    movement() {
        //console.log(this)
        if (this.keys.up && this.lastKey === this.up) this.speedY = -1;
        else if (this.keys.left && this.lastKey === this.left) this.speedX = -1;
        else if (this.keys.down && this.lastKey === this.down) this.speedY = 1;
        else if (this.keys.right && this.lastKey === this.right) this.speedX = 1; 

        this.level.boundaries.forEach((boundary) => {
         
            if (this.crashWith(boundary)) {
                if (this.keys.up && this.lastKey === this.up) this.speedY = 0;
                    else if (this.keys.left && this.lastKey === this.left) this.speedX = 0;
                    else if (this.keys.down && this.lastKey === this.down) this.speedY = 0;
                    else if (this.keys.right && this.lastKey === this.right) this.speedX = 0; 
                    } 
    }) 
    this.x += this.speedX;
    this.y += this.speedY;

        /* if (redKeys.w.pressed && lastRedKey === 'w') {
            level1.boundaries.forEach((boundary) => {
                if (redPlayer.checkCollisionWithWall({player: redPlayer, wall: boundary})) {
                    /* console.log(`${redPlayer.checkCollisionWithWall()}`) 
                    console.log(`speedY ${redPlayer.speedY}`)
                    redPlayer.speedY = 0;
                    console.log(`speedY ${redPlayer.speedY}`)
                } else {
                    redPlayer.speedY = -5
                }
            })
        } else if (redKeys.a.pressed && lastRedKey === 'a') {
            level1.boundaries.forEach((boundary) => {
                if (redPlayer.checkCollisionWithWall({player: redPlayer, wall: boundary})) {
                    console.log('collision detected')
                    redPlayer.speedX = 0;
                } else redPlayer.speedX = -5
            })
        } else if (redKeys.s.pressed && lastRedKey === 's') {
            level1.boundaries.forEach((boundary) => {
                if (redPlayer.checkCollisionWithWall({player: redPlayer, wall: boundary})) {
                    console.log('collision detected')
                    redPlayer.speedY = 0;
                } else redPlayer.speedY = 5
            })
        } else if (redKeys.d.pressed && lastRedKey === 'd') {
            level1.boundaries.forEach((boundary) => {
                if (redPlayer.checkCollisionWithWall({player: redPlayer, wall: boundary})) {
                    console.log('collision detected')
                    redPlayer.speedX = 0;
                } else redPlayer.speedX = 5
            })
        } */

/* 
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
        ylwPlayer.y += ylwPlayer.speedY; */
    }

    topLimit(){
        return this.y;
    }

    bottomLimit(){
        return this.y + this.height;
    }

    leftLimit(){
        return this.x;
    }

    rightLimit(){
        return this.x + this.width;
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

