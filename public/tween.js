var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {

    game.load.image('fire', '/img/skies/fire.png');
    game.load.image('chick', '/img/ladycop.png');
    game.load.image('master', '/img/sprites/master.png');
    game.load.image('ball', '/img/sprites/shinyball.png');

    game.load.spritesheet('ribbon', '/img/tests/tween/phaser.png', 70, 90);
    game.load.spritesheet('button', 'img/buttons/button_sprite_sheet.png', 193, 71);
    game.load.spritesheet('mum', 'img/sprites/metalslug_mummy37x45.png', 37, 45, 18);

}

var background;

function create() {

    background = game.add.sprite(0, 0, 'fire');

    var item;

    for (var i = 0; i < 6; i++)
    {
        item = game.add.sprite(190 + 69 * i, -100, 'ribbon', i);
        item.anchor.setTo(0.5,0.5);

        // Add a simple bounce tween to each character's position.
        game.add.tween(item).to({y: 240}, 2400, Phaser.Easing.Bounce.Out, true, 1000 + 400 * i, false);

        // Add another rotation tween to the same character.
        game.add.tween(item).to({angle: 360}, 2400, Phaser.Easing.Cubic.In, true, 1000 + 400 * i, false);
    }

    game.stage.backgroundColor = 0x2d2d2d;

    var sprite = game.add.sprite(100, 100, 'chick');
    sprite.scale.setTo(.4);

//  Here we'll chain 4 different tweens together and play through them all in a loop
    var tween = game.add.tween(sprite).to({ x: 600 }, 6000, Phaser.Easing.Linear.None)
    .to({ y: 300 }, 3000, Phaser.Easing.Linear.None)
    .to({ x: 100 }, 6000, Phaser.Easing.Linear.None)
    .to({ y: 100 }, 3000, Phaser.Easing.Linear.None)
    .loop()
    .start();

    var sprite = game.add.sprite(game.world.randomX, game.world.randomY, 'master');
    sprite.scale.setTo(2);
    sprite.anchor.setTo(0.5, 0.5);
    sprite.alpha = 0;

    game.add.tween(sprite).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);

    button = game.add.button(game.world.centerX + 200, 525, 'button', actionOnClick, this, 2, 1, 0);

    for (var i = 0; i < 150; i++)
      {
        var sprite = game.add.sprite(game.world.randomX,game.world.randomY,'ball');

        //  Fade in a sprite
        game.add.tween(sprite).to({ x: -2 }, Math.random() * 6000, Phaser.Easing.Sinusoidal.Out, true);


        //  This tween starts with a random length delay
        game.add.tween(sprite).to({ alpha: .5 }, Math.random() * 6000, Phaser.Easing.Quadratic.InOut, true, Math.random() * 500);
      }

      sprite = game.add.sprite(30, 500, 'chick');
      sprite.animations.add('walk');
      sprite.animations.play('walk', 50, true);


      sprite2 = game.add.sprite(40, 500, 'mum');
      sprite2.animations.add('walk');
      sprite2.animations.play('walk', 50, true);

      game.add.tween(sprite).to({x:game.width}, 10000, Phaser.Easing.Linear.None, true);
      game.add.tween(sprite2).to({x:game.width}, 10000, Phaser.Easing.Linear.None, true);

}

function actionOnClick () {

    background.visible =! background.visible;

}

function update(){

}
