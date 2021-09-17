// create game state
var game = gameMod.create();
// main app loop
var loop = function(){
    setTimeout(loop, 1000);
    gameMod.update(game);
    console.log(game.count);
};
loop();
