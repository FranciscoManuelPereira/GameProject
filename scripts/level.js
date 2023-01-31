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
    const image = new Image();
    image.src = "../docs/assets/fruit_tree.png";
    for (let row = 0; row < map1.length; row++) {
      for (let column = 0; column < map1[row].length; column++) {
        if (map1[row][column] === 1) {
          let x = 32 * column;
          let y = 32 * row;
          this.boundaries.push(new Boundary(ctx, x, y, image));
        }
      }
    }
  }

  /* startLevel(){
        function animate() {
    requestAnimationFrame(animate);
    } */
}
