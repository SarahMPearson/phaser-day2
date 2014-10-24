var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {

    game.load.spritesheet('button', 'img/buttons/button_sprite_sheet.png', 193, 71);
    game.load.image('background','img/starfield.jpg');

}

var button;
var button2;
var button3;
var background;

function create() {

    game.stage.backgroundColor = '#182d3b';

    background = game.add.tileSprite(0, 0, 800, 600, 'background');

    button = game.add.button(game.world.centerX - 95, 400, 'button', actionOnClick, this, 2, 1, 0);

    button.onInputOver.add(over, this);
    button.onInputOut.add(out, this);

//  Rotated button
    button2 = game.add.button(330, 200, 'button', changeSky, this, 2, 1, 0);
    button2.name = 'sky2';
    button2.angle = 24;
    button2.anchor.setTo(0.5, 0.5);

//	Set the anchor of the sprite in the center, otherwise it would rotate around the top-left corner
    button3 = game.add.button(200, 200, 'button', actionOnClick, this, 2, 1, 0);
    button3.anchor.setTo(0.5, 0.5);

}

function changeSky (button) {

    background.loadTexture(button.name);

}

function render () {

}

function over() {
    console.log('button over');
}

function out() {
    console.log('button out');
}

function actionOnClick () {

    background.visible =! background.visible;

}


function update(){

    button3.angle += .5;
}
