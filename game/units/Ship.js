// ship class encapsulates:
// sprite and graphics-- particle trails etc?
// physics behavior
// control-- methods for move, steer, fire, etc
// properties: health, max speed?,
// state-- immobile? destroyed?

var Ship = Fiber.extend(function() {
  return{
    init: function(game) {
      var health = 100;

      this.getHealth = function() {
        return health;
      };

      this.tick = function() {

      };

      game.addUpdateCallback(this.uuid, this.tick);
    }
  };
});

Fiber.mixin(Ship, hasUniqueId);
var s = new Ship(Game);