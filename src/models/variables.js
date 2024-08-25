import Game from './game'
import io from "socket.io-client";

const socket = io(import.meta.env.VITE_BACKEND_HOST);
var game = new Game(parseInt(Date.now()));
var gameVars = {
  game: game,
  activePiece: null
};

export { game, gameVars, socket };
