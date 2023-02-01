/** @type {HTMLCanvasElement} */

class Level {
  constructor(ctx, width, height, redPlayer, ylwPlayer, map, name, color) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.redPlayer = redPlayer;
    this.ylwPlayer = ylwPlayer;
    this.boundaries = [];
    this.map = map;
    this.name = name;
    this.color = color;
  }

  createBoundaries() {
    const image1 = new Image();
    image1.src = "./docs/assets/forest.png";
    const image2 = new Image();
    image2.src = "./docs/assets/rock.png";
    const image3 = new Image();
    image3.src = "./docs/assets/well.png";
    const image4 = new Image();
    image4.src = "./docs/assets/wheat.png";
    const image5 = new Image();
    image5.src = "./docs/assets/house1.png";
    const image6 = new Image();
    image6.src = "./docs/assets/house2.png";
    const image7 = new Image();
    image7.src = "./docs/assets/house3.png";
    const image8 = new Image();
    image8.src = "./docs/assets/house4.png";
    const image9 = new Image();
    image9.src = "./docs/assets/house5.png";
    for (let row = 0; row < this.map.length; row++) {
      for (let column = 0; column < this.map[row].length; column++) {
        if (this.map[row][column] === 1) {
          let x = 32 * column;
          let y = 32 * row;
          this.boundaries.push(new Boundary(ctx, x, y, image1));
        } else if (this.map[row][column] === 2) {
          let x = 32 * column;
          let y = 32 * row;
          this.boundaries.push(new Boundary(ctx, x, y, image2));
        } else if (this.map[row][column] === 3) {
          let x = 32 * column;
          let y = 32 * row;
          this.boundaries.push(new Boundary(ctx, x, y, image3));
        } else if (this.map[row][column] === 4) {
          let x = 32 * column;
          let y = 32 * row;
          this.boundaries.push(new Boundary(ctx, x, y, image4));
        } else if (this.map[row][column] === 5) {
          let x = 32 * column;
          let y = 32 * row;
          this.boundaries.push(new Boundary(ctx, x, y, image5));
        } else if (this.map[row][column] === 6) {
          let x = 32 * column;
          let y = 32 * row;
          this.boundaries.push(new Boundary(ctx, x, y, image6));
        } else if (this.map[row][column] === 7) {
          let x = 32 * column;
          let y = 32 * row;
          this.boundaries.push(new Boundary(ctx, x, y, image7));
        } else if (this.map[row][column] === 8) {
          let x = 32 * column;
          let y = 32 * row;
          this.boundaries.push(new Boundary(ctx, x, y, image8));
        } else if (this.map[row][column] === 9) {
          let x = 32 * column;
          let y = 32 * row;
          this.boundaries.push(new Boundary(ctx, x, y, image9));
        }
        
      }
    }
  }

  /* startLevel(){
        function animate() {
    requestAnimationFrame(animate);
    } */
}
