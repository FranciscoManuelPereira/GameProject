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
                    let x = 30 * column;
                    let y = 30 * row;
                    this.boundaries.push(new Boundary(ctx, x, y));
                }
            }
        }
        
        this.boundaries.forEach((boundary) => {
            boundary.draw();

//-------------------------------------------------------------------------------------------COLLISION DETECTION NOT WORKING PROPERLY


/*             if (this.redPlayer.top() + this.redPlayer.speedY <= boundary.y + boundary.height && 
            this.redPlayer.right() + this.redPlayer.speedX >= boundary.x && 
            this.redPlayer.bottom() + this.redPlayer.speedY >= boundary.y && 
            this.redPlayer.left() + this.redPlayer.speedX <= boundary.x + boundary.width) {
                console.log('colision')
                this.redPlayer.speedX = 0;
                this.redPlayer.speedY = 0;
            } */
        });
    }
    

    update = () => {
        this.ctx.clearRect(0, 0, this.width, this.height)
        this.createBoundaries();
        redPlayer.draw();
        ylwPlayer.draw();
        
        redPlayer.speedX = 0;
        redPlayer.speedY = 0;
        redPlayer.movement();
        ylwPlayer.speedX = 0;
        ylwPlayer.speedY = 0;
        ylwPlayer.movement();

        
        console.log("working");
    }

    startLevel(){
        this.intervalId = setInterval(this.update, 1000/60);
    }
}