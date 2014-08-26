var Game = (function() {
  var updateCallbacks = {};
  var callbackKeys = [];

  this.addUpdateCallback = function(key, cb) {
    if(!updateCallbacks.hasOwnProperty(key)) {
      updateCallbacks[key] = cb;
      callbackKeys = Object.getOwnPropertyNames(updateCallbacks);
    }
  
  };

  this.removeUpdateCallback = function(key) {

  };

  var preload = function() {

  };

  var create = function() {

  };

  var update = function() {
    var i = callbackKeys.length;
    do {
      updateCallbacks[callbackKeys[i]]();
    } while (i--);
  };

  var render = function() {

  };

  var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', {
    preload: preload,
    create:  create,
    update:  update,
    render:  render
  }, false, true);
})();




// var worldX = 800, worldY = 600;


// function preload() {
//   // LOADING TEXT

//   game.load.image('background', '../assets/blackbg.png');
  
//   // background.scale.setTo(0.5, 0.5);
// }

// function create() {
//   background = game.add.tileSprite(0, 0, 5000, 5000, 'background');
//   background.scale.setTo(0.5, 0.5);

//   game.physics.startSystem(Phaser.Physics.ARCADE);
//   // game.world.setBounds(0, 0, worldX, worldY);


//   // game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
//   game.scale.fullScreenScaleMode = Phaser.ScaleManager.NO_SCALE;
//   // game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

// }

// function update() {

// }

// function render() {

// }
