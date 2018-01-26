var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

var person;
var musica;
var pausada = false;
var cursors;
var video;
var sprite;

function preload() {
    // Carregando image;
        game.load.image("person", "https://vignette.wikia.nocookie.net/cuphead7697/images/a/a5/Cuphead_king_dice_sprite.png/revision/latest?cb=20171031103947&path-prefix=pt-br")
    // Carregando música
        game.load.audio("8bits", ["./primeiroProjeto/8bits.ogg", "./primeiroProjeto/8bits.mp3"]);
    // Carregando vídeo
        game.load.video("videoteste", "./primeiroProjeto/wormhole.mp4")
}

function create() {

    game.world.setBounds(0,0,2000,2000);

    // Definindo cor de fundo
         game.stage.backgroundColor = "#6600ff";
    // Criando o obj do personagem
        person = game.add.sprite(game.world.centerX, game.world.centerY,"person")
    // Ponto da rotação
        person.anchor.setTo(0.5, 0.5);
    // Criando obj de audio
        musica = game.add.audio("8bits");
    // Dar play
        musica.loop = true;
        musica.play();
    // Gerador de objs

    for(var i = 0; i < 150; i++){
        game.add.sprite(game.world.randomX, game.world.randomY, "person");
    }

    //game.input.onDown.add(shake, this);
    game.camera.onFadeComplete.add(resetFade, this);
    cursors = game.input.keyboard.createCursorKeys();
    /** 
    video = game.add.video("videoteste");
    video.play(true);
    video.addToWorld();
    **/


    video = game.add.video();
    video.onAccess.add(webcam, this);
    video.onError.add(webcamBlock, this);
    video.startMediaStream();
}

function pausa(){
    if(!pausada){
        musica.pause();
        pausada = !pausada;
    }else{
        musica.resume();
        pausada = !pausada;
    }
    
}

function webcam(video){
    sprite = video.addToWorld();

    var print = video.snapshot.addToWorld(game.width, game.height);
    print.anchor.set(1);
    game.input.onDown.add(tiraFoto, this);
}

function webcamBlock(video, erro){
    console.log("A CAMERA NÃO FOI ACEITA");
}

function tiraFoto(){
    video.grab();
}


/** 
function fade(){

    game.camera.fade(0xFF00FF, 5000)

}

**/

/** 
function flash(){
    game.camera.flash(0xffffff, 2000)
}
**/


function shake(){
    game.camera.shake(0.05, 5000);
}


function resetFade(){
    game.camera.resetFX();
}

function update() {

    if(cursors.up.isDown){
        game.camera.y -= 5;
    }else if(cursors.down.isDown){
        game.camera.y += 5;
    }

    if(cursors.left.isDown){
        game.camera.x -= 5;
    }else if(cursors.right.isDown){
        game.camera.x += 5;
    }

   person.rotation += 0.01;
}

function render() {
    game.debug.soundInfo(musica, 20, 32);
}