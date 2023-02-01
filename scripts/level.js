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
    const image1 = new Image();
    image1.src = "../docs/assets/fruit_tree.png";
    const image2 = new Image();
    image2.src = "../docs/assets/rock.png";
    const image3 = new Image();
    image3.src = "../docs/assets/well.png";
    const image4 = new Image();
    image4.src = "../docs/assets/wheat.png";
    for (let row = 0; row < map1.length; row++) {
      for (let column = 0; column < map1[row].length; column++) {
        if (map1[row][column] === 1) {
          let x = 32 * column;
          let y = 32 * row;
          this.boundaries.push(new Boundary(ctx, x, y, image1));
        } else if (map1[row][column] === 2) {
          let x = 32 * column;
          let y = 32 * row;
          this.boundaries.push(new Boundary(ctx, x, y, image2));
        } else if (map1[row][column] === 3) {
          let x = 32 * column;
          let y = 32 * row;
          this.boundaries.push(new Boundary(ctx, x, y, image3));
        } else if (map1[row][column] === 4) {
          let x = 32 * column;
          let y = 32 * row;
          this.boundaries.push(new Boundary(ctx, x, y, image4));
        }
        
      }
    }
  }

  /* startLevel(){
        function animate() {
    requestAnimationFrame(animate);
    } */
}
