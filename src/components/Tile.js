import {useEffect, useState} from "react";
import {click} from "@testing-library/user-event/dist/click";


export default function Tile ({handleClickedTile, coordinate}) {

    const handleClick = (e) => {
        handleClickedTile(e.target);
    }

    return (
        <div className="tile" id={coordinate} onClick={handleClick}>
            <div className="tile-circle"></div>
        </div>

    )

}


// Was kann der Component

// - Kachel kann angeklickt werden
// - Kachel muss mit