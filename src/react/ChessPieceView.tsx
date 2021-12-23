import * as React from "react"

import {ChessBoard} from "../core/ChessBoard";
import {ChessPiece} from "../core/ChessPiece";

export class ChessPieceView extends React.Component<any, any> {

    chessBoard = new ChessBoard()

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        console.log("MOunted")
    }


    render_columns(columns: any) {
        return <div>
            {
                columns.map((column: any | ChessPiece) => {
                    return <div className={"box_a"}>
                    </div>
                })
            }
        </div>
    }

    render() {
        return (
            <div>
                {
                    this.chessBoard.playBoardMatrix.map((row: any[]) => {
                        {
                            return <div className={"box_a"} key={""}>
                                {this.render_columns(row)}
                            </div>
                        }
                    })
                }
            </div>
        )
    }
}