var game = new Phaser.Game(
  800,
  600,
  Phaser.AUTO,
  '',
  { preload: preload, create: create, update: update });

function preload() {
  game.load.image('background', 'assets/starfield-bg.jpg')
}

var background

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE)
  background = game.add.sprite(0, 0,'background')
  background.width = 800
  background.height = 600
}

function update() {
}
