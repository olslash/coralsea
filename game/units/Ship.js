// ship class encapsulates:
// sprite and graphics-- particle trails etc?
// physics behavior
// control-- methods for move, steer, fire, etc
// properties: health, max speed?,
// state-- immobile? destroyed?

var Ship = Fiber.extend(function() {
  return{
    init: function() {
      var health = 100;

      this.getHealth = function() {
        return health;
      };

      this.tick = function() {
        // console.log(this.uuid, 'tick');
      };
    }
  };
});

Fiber.mixin(Ship, hasUniqueId);
var s = new Ship(Game);
Game.addEntity(s);

// i want the ship class to have a sprite. all ships must have a sprite, but
// it's something that will be defined by subclasses since it's unique to
// cruiser, carrier, etc.