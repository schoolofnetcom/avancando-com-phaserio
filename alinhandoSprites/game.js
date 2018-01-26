var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {
    game.load.image("caixa", './alinhandoSprites/caixa.png');
}

function create() {
    // Definindo cor de fundo
         game.stage.backgroundColor = "#6600ff";
    var sprite1 = game.add.sprite(70,250,"caixa");
    var sprite2 = game.add.sprite(0,0, "caixa").alignTo(sprite1, Phaser.RIGHT_CENTER, 16);
    var sprite3 = game.add.sprite(0, 0, "caixa").alignTo(sprite2,Phaser.RIGHT_CENTER, 16);
}

function update() {
  
}

function render() {
    
}