import Phaser from "phaser";

import mama_duck from "../assets/mama_duck.png";
import mama_grab from "../assets/mama_grab.png";
import water from "../assets/water.png";

function preload() {
  this.load.image("mama_duck", mama_duck);
  this.load.image("mama_grab", mama_grab);
  this.load.image("water", water);
}

function create() {

  this.add.image(400, 300, "water");
}

function update() {}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

export const game = new Phaser.Game(config);