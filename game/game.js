window.Game = (function() {
  var game;
  var entities = {};
  // cache keys to avoid an Object.getOwnPropertyNames call on every tick
  var allEntityKeys = [];
  // same here-- don't want an empty check 60 times per second
  var noEntitiesRegistered = true; 

  var addEntity = function(entity) {
    if(!entities.hasOwnProperty(entity.uuid)) {
      entities[entity.uuid] = entity;
      allEntityKeys = Object.getOwnPropertyNames(entities);
      noEntitiesRegistered = false;
    } else {
      console.log('something tried to register', entity.uuid, 'but it already exists');
    }
  };

  var removeEntity = function(entity) {
    if(entities.hasOwnProperty(entity.uuid)) {
      delete entities[entity.uuid];
      allEntityKeys = Object.getOwnPropertyNames(entities);
      if(allEntityKeys.length === 0) noEntitiesRegistered = true;
    } else {
      console.log('something tried to remove', entity.uuid, 'but it doesn\'t exist');
    }
  };

  // -------- PHASER GAME LOOPS
  var preload = function() {    
    game.load.image('background', 'assets/oceanbg.png');
    game.load.image('ship', 'assets/blockship.png');
  };

  var create = function() {
    game.stage.backgroundColor = '#000000';
    background = game.add.tileSprite(0, 0, 800, 600, 'background');
    // background.scale.setTo(0.5, 0.5);
    // game.world.setBounds(0,0,800,600);
    game.physics.startSystem(Phaser.Physics.ARCADE);
    // testing
    Game.addEntity(new Ship(game, 100, 100));
  };

  var update = function() {
    var i = allEntityKeys.length - 1;
    if(!noEntitiesRegistered) {
      do {
        entities[allEntityKeys[i]].tick();
      } while (i--);
    }
    
  };

  var render = function() {

  };

  game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', {
    preload: preload,
    create:  create,
    update:  update,
    render:  render
  }, false, true);

  return {
    addEntity: addEntity,
    removeEntity: removeEntity,
    game: game
    // cursors: cursors
  };
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
