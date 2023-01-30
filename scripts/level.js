/** @type {HTMLCanvasElement} */

class Level {
    constructor(ctx, width, height, redPlayer, ylwPlayer) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.redPlayer = redPlayer;
        this.ylwPlayer = ylwPlayer;
        this.boundaries = [];
    }

    createBoundaries() {

        for (let row = 0; row < map1.length; row++) {
            for(let column = 0; column < map1[row].length; column++) {
                if (map1[row][column] === 1) {
                    let x = 32 * column;
                    let y = 32 * row;
                    this.boundaries.push(new Boundary(ctx, x, y));
                }
            }
        }
        
        
/*             if (this.redPlayer.checkCollisionWithWall({player: this.redPlayer, wall: boundary})) {
                console.log('collision detected')
                this.redPlayer.speedX = 0;
                this.redPlayer.speedY = 0;
            } */



//-------------------------------------------------------------------------------------------COLLISION DETECTION NOT WORKING PROPERLY

            /* if (this.redPlayer.top() + this.redPlayer.speedY <= boundary.y + boundary.height &&
            this.redPlayer.bottom() + this.redPlayer.speedY >= boundary.y) return this.redPlayer.yCollision = true
            if (this.redPlayer.right() + this.redPlayer.speedX >= boundary.x &&
            this.redPlayer.left() + this.redPlayer.speedX <= boundary.x + boundary.width) return this.redPlayer.xCollision = true */


          /*   if (this.redPlayer.top() + this.redPlayer.speedY <= boundary.y + boundary.height && 
            this.redPlayer.right() + this.redPlayer.speedX >= boundary.x && 
            this.redPlayer.bottom() + this.redPlayer.speedY >= boundary.y && 
            this.redPlayer.left() + this.redPlayer.speedX <= boundary.x + boundary.width) {
                console.log('collision')
                this.redPlayer.speedX = 0;
                this.redPlayer.speedY = 0;
            } */
        ;
    }
    

    update = () => {
        this.ctx.clearRect(0, 0, this.width, this.height)
        redPlayer.draw();
        ylwPlayer.draw();

        redPlayer.movement();
        ylwPlayer.movement();
        this.boundaries.forEach((boundary) => {
            boundary.draw()
        })

        
        redPlayer.speedX = 0;
        redPlayer.speedY = 0;

        ylwPlayer.speedX = 0;
        ylwPlayer.speedY = 0;


    }

    startLevel(){
        this.intervalId = setInterval(this.update, 1000/60);
    }
}