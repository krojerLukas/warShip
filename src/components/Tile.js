import {useEffect, useState} from "react";
import {click} from "@testing-library/user-event/dist/click";


export default function Tile ({handleClickedTile, currentGameState, coordinate}) {


    const handleClick = (e) => {
        handleClickedTile(e.target);
        console.log(currentGameState)
    }

    const handleIngameClick = (e) => {
        console.log(currentGameState)
    }

    return (
        <div className="tile" id={coordinate} onClick={currentGameState === "picking boat" ? handleClick : handleIngameClick}>
            <div className="tile-circle"></div>
        </div>

    )

}


// Was kann der Component

// - Kachel kann angeklickt werden
// - Kachel muss mit