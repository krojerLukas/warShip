import {useEffect, useState} from "react";
import {click} from "@testing-library/user-event/dist/click";


export default function Tile ({handleClickedTile, currentGameState, coordinate, index}) {

    const handleClick = (e) => {
        handleClickedTile(e.target, index);
        console.log(currentGameState)
    }

    return (
        <div className="tile" id={coordinate} onClick={handleClick}>
            <div className="tile-circle"></div>
        </div>

    )

}
