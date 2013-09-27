'use strict';

var world = new Psykick.World({
        canvasContainer: document.getElementById('canvas-container'),
        width: 800,
        height: 600
    }),
    layer = world.createLayer(),
    spriteRenderSystem = new Psykick.Systems.Sprite(),
    rotateShipSystem = new Game.Systems.RotateShip(),
    ship = world.createEntity();

ship.addComponent(new Psykick.Components.Position({
    x: 400,
    y: 300
}));
ship.addComponent(new Psykick.Components.SpriteSheet({
    src: 'img/sprites/betaShip.png',
    xOffset: 6,
    yOffset: 0,
    frameWidth: 20,
    frameHeight: 28
}));

spriteRenderSystem.addEntity(ship);
rotateShipSystem.addEntity(ship);

layer.addEntity(ship);
layer.addSystem(spriteRenderSystem);
layer.addSystem(rotateShipSystem);
world.pushLayer(layer);