import Phaser from "phaser";

import mama_duck_pic from "../assets/sprites/mama_duck.png";
import mama_grab_pic from "../assets/sprites/mama_grab.png";

import baby_duck_pic from "../assets/sprites/baby_duck.png";

import water_pic from "../assets/water.png";
import cursor_pic from "../assets/cursor.png";


var mama;
var baby;
var curs;

function preload() {

  this.load.image("mama_duck_pic", mama_duck_pic);
  this.load.image("water_pic", water_pic);
  this.load.image("cursor_pic", cursor_pic);
  this.load.image("baby_duck_pic", baby_duck_pic);
 
}

function create() {

  console.log("from game.js");
  //water background 
  this.add.image(400, 300, "water_pic"); 
  mama =this.physics.add.sprite(400,300,"mama_duck_pic").setScale(1.5).setOrigin(0.5,0.5);
  mama.body.allowRotation = false;
 

  curs = this.add.image(0,0,"cursor_pic").setOrigin(0.5,0.5);
  var speed= 5;

  baby=this.physics.add.sprite(200,200,"baby_duck_pic");
  

  /*
  mama and baby collision function
  this.hits= function(mama){
    if(mama.y=== baby.y && mama.x===baby.x){
      Debug.log("collision detected");
      return true;
    }
  }
  */
//move to pointer
this.input.on('pointermove',function(pointer){
  curs.setVisible(true).setPosition(pointer.x,pointer.y);
  this.physics.moveToObject(mama,curs,speed,240);
},this);

}

function update() {
baby.angle+=1;

}


var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent:'phaser-example',
  physics:{
    default: 'arcade',
    arcade:{ debug: true }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
    
  }
};

export var game = new Phaser.Game(config);