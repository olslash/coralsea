var Game = (function() {
  var updateCallbacks = {};
  // cache keys to avoid an Object.getOwnPropertyNames call on every tick
  var updateCallbackKeys = [];
  // same here-- don't want an empty check 60 times per second
  var callbacksEmpty = true; 

  this.addUpdateCallback = function(key, cb) {
    if(!updateCallbacks.hasOwnProperty(key)) {
      updateCallbacks[key] = cb;
      updateCallbackKeys = Object.getOwnPropertyNames(updateCallbacks);
      callbacksEmpty = false;
    } else {
      console.log('something tried to register', key, 'but it already exists');
    }
  };

  this.removeUpdateCallback = function(key) {
    if(updateCallbacks.hasOwnProperty(key)) {
      delete updateCallbacks[key];
      updateCallbackKeys = Object.getOwnPropertyNames(updateCallbacks);
      if(updateCallbackKeys.length === 0) callbacksEmpty = true;
    } else {
      console.log('something tried to remove', key, 'but it doesn\'t exist');
    }
  };

  var preload = function() {

  };

  var create = function() {

  };

  var update = function() {
    var i = updateCallbackKeys.length - 1;
    var callback;
    if(!callbacksEmpty) {
      do {
        updateCallbacks[updateCallbackKeys[i]]();
      } while (i--);
    }
    
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
