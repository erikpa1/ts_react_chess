import {ChessPieceBehaviourParent} from "./ChessPieceBehaviours";


export class ChessPiece {

    private behaviour: ChessPieceBehaviourParent
    private isWhite: boolean

    constructor(behaviour: ChessPieceBehaviourParent, isWhite: boolean) {
        this.behaviour = behaviour
        this.isWhite = isWhite
    }

    public GetName(): string {
        return this.behaviour.name
    }

    public GetIcon(): string {
        return this.behaviour.icon
    }

    public GetMoveMatrix(): number[][] {
        return this.behaviour.moveMatrix
    }

    public IsWhite() {
        return this.isWhite
    }


}