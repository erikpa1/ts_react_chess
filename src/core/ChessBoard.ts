import {ChessPiece} from "./ChessPiece";

import * as piece from "./ChessPieceBehaviours"
import {BishopBehaviour, KnightBehaviour, PawnBehaviour, QueenBehaviour, RookBehaviour, KingBehaviour} from "./ChessPieceBehaviours";

export class ChessBoard {

    playBoardMatrix: any[][]

    constructor() {
        this.playBoardMatrix = [
            this.CreateFiguresArray(false),
            this.CreatePawnArray(false),
            this.CreateNullArray(),
            this.CreateNullArray(),
            this.CreateNullArray(),
            this.CreateNullArray(),
            this.CreatePawnArray(true),
            this.CreateFiguresArray(true)
        ]
    }

    private CreateNullArray() {
        const array = []
        for (let i = 0; i < 8; i++) {
            array.push(null)
        }
        return array
    }

    private CreatePawnArray(isWhite: boolean) {
        const array = []
        for (let i = 0; i < 8; i++) {
            array.push(new ChessPiece(new PawnBehaviour(), isWhite))
        }
        return array
    }

    private CreateFiguresArray(isWhite: boolean) {
        return [
            new ChessPiece(new RookBehaviour(), isWhite),
            new ChessPiece(new BishopBehaviour(), isWhite),
            new ChessPiece(new KnightBehaviour(), isWhite),
            new ChessPiece(new QueenBehaviour(), isWhite),
            new ChessPiece(new KingBehaviour(), isWhite),
            new ChessPiece(new KnightBehaviour(), isWhite),
            new ChessPiece(new BishopBehaviour(), isWhite),
            new ChessPiece(new RookBehaviour(), isWhite),
        ]

    }

}