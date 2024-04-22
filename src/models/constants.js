class Constants {
    // Board colors
    static BOARD_COLOR_BLACK = '⬛';
    static BOARD_COLOR_WHITE = '□';
    static BOARD_COLOR_BORDER = '0';

    // Player IDs (changable)
    static PLAYER_ID_WHITE = 1;
    static PLAYER_ID_BLACK = 2;

    // Player colors (and pieces)
    static PLAYER_COLOR_WHITE = 'white';
    static PLAYER_COLOR_BLACK = 'black';

    // Piece types
    static PIECE_TYPE_PAWN = 'pawn';
    static PIECE_TYPE_ROOK = 'rook';
    static PIECE_TYPE_KNIGHT = 'knight';
    static PIECE_TYPE_BISHOP = 'bishop';
    static PIECE_TYPE_QUEEN = 'queen';
    static PIECE_TYPE_KING = 'king';

    // Unicode characters for chess pieces
    static PIECE_ASSET_PAWN_WHITE = '♙';
    static PIECE_ASSET_PAWN_BLACK = '♟';
    static PIECE_ASSET_ROOK_WHITE = '♖';
    static PIECE_ASSET_ROOK_BLACK = '♜';
    static PIECE_ASSET_KNIGHT_WHITE = '♘';
    static PIECE_ASSET_KNIGHT_BLACK = '♞';
    static PIECE_ASSET_BISHOP_WHITE = '♗';
    static PIECE_ASSET_BISHOP_BLACK = '♝';
    static PIECE_ASSET_QUEEN_WHITE = '♕';
    static PIECE_ASSET_QUEEN_BLACK = '♛';
    static PIECE_ASSET_KING_WHITE = '♔';
    static PIECE_ASSET_KING_BLACK = '♚';

    // Cell status
    static CELL_STATUS_EMPTY = 'empty';
    static CELL_STATUS_OCCUPIED_PLAYER = 'player';
    static CELL_STATUS_OCCUPIED_OPPONENT = 'opponent';
    static CELL_STATUS_OUT_OF_BOUNDS = 'out-of-bounds';
}

export default Constants;
