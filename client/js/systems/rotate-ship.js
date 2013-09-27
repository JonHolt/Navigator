'use strict';

Game.Systems.RotateShip = (function() {
    var isKeyDown = Psykick.Helper.isKeyDown,
        KEYS = Psykick.Keys;

    var RotateShip = function() {
        this.RequiredComponents = ['SpriteSheet', 'Position'];
    };

    Psykick.Helper.extend(RotateShip, Psykick.BehaviorSystem);

    RotateShip.prototype.update = function(delta) {
        if (this.ActionOrder.length === 0) {
            return;
        }

        var ship = this.ActionOrder[0],
            position = ship.getComponent('Position'),
            rotationChange = 5 * delta;

        if (isKeyDown(KEYS.Right)) {
            position.rotation += rotationChange;
        } else if (isKeyDown(KEYS.Left)) {
            position.rotation -= rotationChange;
        }
    };

    return RotateShip;
})();