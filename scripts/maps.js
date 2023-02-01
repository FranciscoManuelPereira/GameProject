/** @type {HTMLCanvasElement} */

class Boundary {
  constructor(ctx, x, y, image) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = 32;
    this.height = 32;
    this.image = image;
  }

  draw() {
    this.ctx.drawImage(this.image, this.x, this.y);
    /*         ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, this.width, this.height); */
  }
  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.height;
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.width;
  }
}

const map1 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 2, 2, 2, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 2, 2, 2, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 4],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 4],
  [1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 3],
  [1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 2, 2, 2, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const map2 = [
  [5, 6, 6, 5, 5, 8, 5, 5, 6, 6, 6, 5, 5, 5, 5, 8, 8, 5, 5, 6, 6, 7, 5, 5, 5, 5, 6, 6, 5, 5, 9, 8, 5, 5, 9, 8, 5, 6, 6, 5],
  [5, 0, 0, 0, 0, 5, 0, 5, 0, 0, 0, 5, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 6],
  [6, 0, 6, 6, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 6, 6, 0, 6, 6, 5, 0, 6, 5, 6, 0, 7, 0, 5, 0, 5, 7, 6, 6, 5, 0, 5, 8, 7, 5, 6],
  [6, 0, 0, 6, 0, 0, 0, 5, 0, 7, 5, 5, 0, 0, 0, 9, 0, 0, 0, 0, 0, 5, 0, 0, 0, 7, 0, 0, 0, 5, 0, 0, 0, 6, 0, 0, 0, 0, 0, 9],
  [8, 7, 0, 5, 0, 6, 0, 0, 0, 7, 0, 7, 7, 6, 0, 9, 8, 7, 6, 6, 7, 7, 0, 6, 6, 5, 0, 5, 5, 8, 5, 5, 0, 7, 0, 9, 5, 5, 0, 5],
  [6, 0, 0, 6, 0, 5, 6, 5, 0, 0, 0, 0, 5, 6, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 0, 7],
  [6, 0, 0, 6, 6, 5, 6, 5, 0, 5, 0, 8, 9, 9, 0, 5, 6, 6, 6, 5, 0, 5, 6, 5, 0, 5, 8, 5, 0, 7, 7, 6, 0, 9, 5, 5, 0, 0, 0, 5],
  [9, 0, 0, 7, 0, 0, 5, 0, 0, 5, 0, 0, 0, 0, 0, 7, 0, 5, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 0, 0, 0 ,5],
  [5, 0, 0, 7, 5, 0, 5, 5, 0, 8, 5, 5, 0, 5, 6, 7, 0, 8, 0, 9, 9, 6, 0, 6, 6, 7, 6, 5, 0, 8, 0, 6, 0, 6, 7, 9, 6, 0, 0, 8],
  [5, 6, 0, 7, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 6, 0, 6, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 7, 0, 5, 5, 0, 5, 0, 0, 8],
  [8, 6, 0, 5, 0, 5, 6, 6, 7, 7, 5, 5, 0, 5, 7, 7, 0, 6, 8, 5, 8, 6, 0, 5, 0, 5, 0, 7, 8, 9, 6, 5, 0, 9, 6, 0, 0, 0, 0, 5],
  [8, 5, 0, 0, 0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 0, 0, 0, 5, 0, 0, 0, 6, 0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 0, 5, 7, 0, 5, 7, 9, 5],
  [5, 5, 5, 0, 9, 9, 0, 5, 0, 9, 0, 5, 0, 7, 7, 0, 5, 5, 0, 5, 0, 5, 0, 6, 9, 5, 0, 5, 8, 7, 0, 5, 0, 7, 5, 0, 6, 5, 6, 5],
  [5, 0, 0, 0, 5, 5, 0, 0, 0, 9, 0, 0, 0, 5, 0, 0, 0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 9],
  [6, 6, 6, 6, 7, 6, 9, 9, 5, 5, 6, 6, 7, 7, 5, 5, 9, 6, 6, 5, 5, 7, 8, 7, 5, 8, 5, 9, 8, 5, 7, 7, 5, 5, 5, 6, 6, 6, 5, 5],
];

const map3 = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 2, 0, 2, 2, 0, 2, 2, 0, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0, 2],
  [2, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 2, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 2, 2, 2, 0, 0, 2],
  [2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 2, 0, 2, 0, 2, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 0, 2, 0, 2, 2, 2, 2, 0, 0, 0, 2, 2],
  [2, 2, 2, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 2, 0, 2, 0, 2, 2, 2, 0, 0, 2, 2, 2, 2],
  [2, 0, 0, 2, 2, 2, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 0, 0, 0, 2, 0, 2, 0, 2, 2, 2, 0, 2, 2, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2],
  [2, 0, 0, 2, 2, 2, 0, 2, 0, 2, 0, 2, 2, 2, 0, 2, 0, 2, 2, 2, 0, 2, 0, 2, 0, 0, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 0, 0, 2],
  [2, 2, 2, 2, 0, 0, 0, 2, 0, 2, 0, 2, 0, 0, 0, 2, 0, 2, 2, 2, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 2, 0, 2, 2, 2, 0, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 2, 2, 2, 2],
  [2, 0, 2, 2, 2, 2, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2],
  [2, 0, 2, 2, 0, 0, 0, 2, 0, 2, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 2, 0, 2],
  [2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];
