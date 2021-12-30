import * as React from "react"
import * as bs from "react-bootstrap";

import {ChessBoard} from "../core/ChessBoard";
import {ChessPiece} from "../core/ChessPiece";

import "./ChesBoardView.css"
import {ChessPieceView} from "./ChessPieceView";

export class ChessBoardView extends React.Component<any, any> {


    chessBoard = new ChessBoard()

    state = {
        pieceSize: 75
    }


    constructor(props: any) {
        super(props);
        this.onResize()
    }

    componentDidMount() {
        window.addEventListener("resize", () => {
            this.onResize()
        })


    }

    onResize() {
        let size = 75

        const wX = window.innerWidth
        const wY = window.innerHeight

        let smallerOne = Math.min(wX, wY)

        if (smallerOne < 8 * size) {
            this.setState({pieceSize: smallerOne / 8})
            return
        }

        this.setState({pieceSize: size})


    }

    render_columns(columns: any, stlpecIndex: number) {
        return (
            <>
                {
                    columns.map((piece: any | ChessPiece, riadokIndex: number) => {
                        return <ChessPieceView key={riadokIndex}
                                               piece={piece}
                                               x={riadokIndex}
                                               y={stlpecIndex}
                                               size={this.state.pieceSize}
                        />
                    })
                }
            </>
        )
    }

    render() {
        return (
            <bs.Container>
                {
                    this.chessBoard.playBoardMatrix.map((row: any[], index) => {
                        {
                            {
                                return this.render_columns(row, index)
                            }
                        }
                    })
                }
            </bs.Container>
        )
    }
}

