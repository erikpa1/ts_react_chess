/*
Strelec - Bishop
Kon - Kniht
Pesiak - Pawn
Kralovna - Qeen
Veza - Rook
 */

class ChessPieceBehaviourParent {

    public name = "default"
    public icon = "pawn.svg"

    public moveMatrix = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]


}

class PawnBehaviour extends ChessPieceBehaviourParent {

}

class BishopBehaviour extends ChessPieceBehaviourParent {

}

class KnightBehaviour extends ChessPieceBehaviourParent {

}

class RookBehaviour extends ChessPieceBehaviourParent {

}

class QueenBehaviour extends ChessPieceBehaviourParent {

}


export {
    ChessPieceBehaviourParent,
    PawnBehaviour,
    QueenBehaviour,
    RookBehaviour,
    KnightBehaviour,
    BishopBehaviour
}