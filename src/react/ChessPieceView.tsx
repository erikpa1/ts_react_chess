import * as React from "react"
import * as bs from "react-bootstrap"

import {ChessPiece} from "../core/ChessPiece";

import "./ChesBoardView.css"


export class ChessPieceView extends React.Component<any, any> {

    chessAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h"]

    render() {
        return <bs.Container
            className={"box"}
            style={this.getPieceStyle(this.props.x, this.props.y)}>
            {/*{this.chessAlphabet[this.props.x] + "" + (8 - this.props.y)}*/}
            <bs.Image src={this.getPieceIcon()}
                      style={this.getPieceIconStyle()}
            />

        </bs.Container>
    }


    getPieceIconStyle() {
        const piece: ChessPiece = this.props.piece

        const commonStyle = {
            margin: "5px"
        }

        if (piece) {
            if (piece.IsWhite()) {
                return {...commonStyle}
            } else {
                return {...commonStyle, filter: "invert(100%)"}
            }
        } else {
            return {}
        }

    }

    getPieceIcon() {
        const piece: ChessPiece = this.props.piece
        if (piece) {
            return piece.GetIcon()
        } else {
            return ""
        }
    }


    getPieceStyle(x: number, y: number) {
        const offset = this.getLeftSideOffset()

        const posX = (x * this.props.size) + offset.x
        const posY = (y * this.props.size) + offset.y

        let flipFlopColor = 0

        if (x === 7) {
            if (y % 2 !== 0) {
                flipFlopColor = 0
            } else {
                flipFlopColor = 1
            }
        } else {
            if (y % 2 === 0) {
                if (x % 2 === 0) {
                    flipFlopColor = 0
                } else {
                    flipFlopColor = 1
                }
            } else {
                if (x % 2 === 0) {
                    flipFlopColor = 1
                } else {
                    flipFlopColor = 0
                }
            }

        }

        let bgColor = flipFlopColor === 0 ? "orange" : "brown"


        return {
            left: `${posX}px`,
            top: `${posY}px`,
            width: `${this.props.size}px`,
            height: `${this.props.size}px`,
            background: bgColor

        }
    }

    getLeftSideOffset() {
        const elementSize = this.props.size

        const windowsSizeX = window.innerWidth
        const windowsSizeY = window.innerHeight

        let tmpX = (windowsSizeX - (elementSize * 8)) * 0.5
        let tmpY = (windowsSizeY - (elementSize * 8)) * 0.5

        return {x: tmpX, y: tmpY}
    }




}