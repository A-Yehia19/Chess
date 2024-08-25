import Game from './game'
import io from "socket.io-client";

const socket = io(import.meta.env.BACKEND_HOST);
var game = new Game(Date.now());
var gameVars = {
  game: game,
  activePiece: null
};

export { game, gameVars, socket };
