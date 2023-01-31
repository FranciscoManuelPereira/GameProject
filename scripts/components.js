/** @type {HTMLCanvasElement} */

class Player {
  constructor(ctx, x, y, speedX, speedY, color, up, down, left, right) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.color = color;
    this.width = 20;
    this.height = 28;
    this.level = null;
    this.up = up;
    this.down = down;
    this.left = left;
    this.right = right;
    this.keys = {
      up: false,
      left: false,
      down: false,
      right: false,
    };
    this.lastKey = "";
    this.PowerUp = false;
    this.powerUpTimer = 0;
    this.powerUplimit;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update() {
    this.draw();
    this.x += this.speedX;
    this.y += this.speedY;
  }

  /*   topLimit(){
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
 */
}

class PowerUp {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = 25;
    this.height = 25;
  }
  draw() {
    ctx.fillStyle = "pink";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
