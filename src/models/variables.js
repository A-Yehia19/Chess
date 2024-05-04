import Game from './game'

var game = new Game(Date.now());
var gameVars = {
  game: game,
  activePiece: null
};

export { game, gameVars };
