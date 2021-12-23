import * as React from "react"

import * as bs from "react-bootstrap"


import {ChessBoard} from "../core/ChessBoard";
import {ChessPiece} from "../core/ChessPiece";

export class ChessPieceView extends React.Component<any, any> {

    chessBoard = new ChessBoard()

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        console.log("Mounted")
    }


    render_columns(columns: any, rowIndex: number) {
        return <bs.Container key={rowIndex} className={"row"}>
            {
                columns.map((column: any | ChessPiece, index: number) => {
                    return <bs.Col key={index} className={"box_a"}>
                        {rowIndex}
                    </bs.Col>
                })
            }
        </bs.Container>
    }

    render() {
        return (
            <bs.Container>
                {
                    this.chessBoard.playBoardMatrix.map((row: any[], index) => {
                        {
                            return <bs.Row key={index}>
                                {this.render_columns(row, index)}
                            </bs.Row>
                        }
                    })
                }
            </bs.Container>
        )
    }
}