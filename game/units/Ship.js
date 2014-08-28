// ship class encapsulates:
// sprite and graphics-- particle trails etc?
// physics behavior
// control-- methods for move, steer, fire, etc
// properties: health, max speed?,
// state-- immobile? destroyed?
// spawn position

var Ship = Fiber.extend(function() {
  return{
    init: function(game, initialX, initialY) {
      // this.spriteName = 'ship';
      // this.initialPosition = [100, 100];
      // this.spriteAnchor = [0.5, 0.5];
      this.sprite = game.add.sprite(initialX, initialY, 'ship');
      this.sprite.anchor.setTo(0.5, 0.1);
      this.sprite.scale.setTo(0.5, 0.5);
      game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
      var currentSpeed = 0;
      var health = 100;
      this.getHealth = function() {
        return health;
      };

      this.tick = function() {
        cursors = game.input.keyboard.createCursorKeys();
        if (cursors.left.isDown)
            {
                this.sprite.angle -= 1;
            }
            else if (cursors.right.isDown)
            {
                this.sprite.angle += 1;
            }

            if (cursors.up.isDown)
            {
                //  The speed we'll travel at
                currentSpeed = 50;
            }
            if(currentSpeed > 0) {
              game.physics.arcade.velocityFromRotation(this.sprite.rotation - Math.PI/2, currentSpeed, this.sprite.body.velocity);
            }
      };
    }
  };
});

Fiber.mixin(Ship, hasUniqueId);


// i want the ship class to have a sprite. all ships must have a sprite, but
// it's something that will be defined by subclasses since it's unique to
// cruiser, carrier, etc.

// if left arrow is down, on that particular controller, the ship turns left
// control will be handled somewhere else, so how does this ship recieve that?