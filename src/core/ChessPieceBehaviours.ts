/*
Strelec - Bishop
Kon - Kniht
Pesiak - Pawn
Kralovna - Qeen
Veza - Rook
 */


class ChessPieceBehaviourParent {

    public name = "default"
    public icon = "icons/pawn.svg"

    public moveMatrix = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]


}

class PawnBehaviour extends ChessPieceBehaviourParent {
    public icon = "icons/pawn.svg"
}

class BishopBehaviour extends ChessPieceBehaviourParent {
    public icon = "icons/bishop.svg"
}

class KnightBehaviour extends ChessPieceBehaviourParent {
    public icon = "icons/knight.svg"
}

class RookBehaviour extends ChessPieceBehaviourParent {
    public icon = "icons/rook.svg"
}

class QueenBehaviour extends ChessPieceBehaviourParent {
    public icon = "icons/queen.svg"
}

class KingBehaviour extends ChessPieceBehaviourParent {
     public icon = "icons/king.svg"
}

export {
    ChessPieceBehaviourParent,
    PawnBehaviour,
    QueenBehaviour,
    RookBehaviour,
    KnightBehaviour,
    BishopBehaviour,
    KingBehaviour
}