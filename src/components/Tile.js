import {useEffect, useState} from "react";
import {click} from "@testing-library/user-event/dist/click";


export default function Tile ({handleClickedTile, currentGameState, coordinate}) {

    const setBoatClickEvent = (e) => {
        // player sets boat part by clicking on his own tile
        handleClickedTile(e.target);
        console.log(currentGameState)
    }

    const guessBoatPartClickEvent = (e) => {
        handleClickedTile(e.target)
        // player makes attack by clicking on enemies tile
        console.log(currentGameState)
    }

    return (
        <div className="tile" id={coordinate} onClick={currentGameState === "picking boat" ? setBoatClickEvent : guessBoatPartClickEvent}>
            <div className="tile-circle"></div>
        </div>

    )

}
