import Phaser from "phaser";

const config = {
  // WebGL (Web graphics library)) JS Api for rendering 2D amd 3D graphics
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    // Arcade physics plugin, manages physics simulation
    default: "arcade",
    arcade: {
      // gravity: { y: 200 },
    },
  },
  scene: {
    preload,
    create,
    update,
  },
};

const VELOCITY = 200;

let bird = null;

// Loading assets , such as images, music, animations ....
function preload() {
  // 'this' context - scene
  // contains functions and properties we can use;
  this.load.image("sky", "assets/sky.png");
  this.load.image("bird", "assets/bird.png");
}

function create() {
  this.add.image(0, 0, "sky").setOrigin(0);
  bird = this.physics.add
    .sprite(config.width * 0.1, config.height / 2, "bird")
    .setOrigin(0);

  bird.body.velocity.x = VELOCITY;
}

// if bird position x is same or larger than width of canvas go back to the left
// if bird postion x is smaller or equal to zero then move back to the right
function update(time, delta) {
  if (bird.x >= config.width - bird.width) {
    bird.body.velocity.x = -VELOCITY;
  } else if (bird.x <= 0) {
    bird.body.velocity.x = VELOCITY;
  }
}

new Phaser.Game(config);
