import {ChessPiece} from "./ChessPiece";

import * as piece from "./ChessPieceBehaviours"
import {BishopBehaviour, KnightBehaviour, PawnBehaviour, QueenBehaviour, RookBehaviour} from "./ChessPieceBehaviours";

export class ChessBoard {

    playBoardMatrix: any[][]

    constructor() {
        this.playBoardMatrix = [
            this.CreateFiguresArray(true),
            this.CreatePawnArray(true),
            this.CreateNullArray(),
            this.CreateNullArray(),
            this.CreateNullArray(),
            this.CreateNullArray(),
            this.CreatePawnArray(true),
            this.CreateFiguresArray(false)
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
            new ChessPiece(new QueenBehaviour(), isWhite),
            new ChessPiece(new KnightBehaviour(), isWhite),
            new ChessPiece(new BishopBehaviour(), isWhite),
            new ChessPiece(new RookBehaviour(), isWhite),
        ]

    }

}