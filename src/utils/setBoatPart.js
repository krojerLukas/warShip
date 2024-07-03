import {newBoat} from "./newBoat";
import {useEffect} from "react";
import {checkIfNewBoat} from "./setBoatParts/checkIfNewBoat";

export const setBoatPart = (clickedTileInfoObject, currentPlayer, boatParts, setBoatParts, tileObjectsArray, setTileObjectsArray, handlePlayerObject) => {
    const tileHtml = clickedTileInfoObject.tileHtml
    const tileIndex = clickedTileInfoObject.tileIndex



    // const [currentBoatsArray, setCurrentBoatArray]
    let playerBoatsSetCounter= 0;

    // slices coordinate at Letter so only number (as string) returns
    const coordinateIntString = tileHtml.id.slice(1)

    if ((currentPlayer === 'player 1' && coordinateIntString <= 5) || (currentPlayer === 'player 2' && coordinateIntString >= 6)) {

        // boatpart gets added to boatparts array that keeps track of all clicked tiles that have a boatpart
        setBoatParts(prevParts => [...prevParts, tileHtml.id]);

        // updated array with all tiles as objects and set hasBoatPart to true when the coordinate of the object matches the id of the tile (the coordinate of the clicked tile)
        const newTileObjectsArray = tileObjectsArray.map(obj => obj.coordinate === tileHtml.id ? {
            ...obj,
            hasBoatPart: true
        } : obj)
        setTileObjectsArray(newTileObjectsArray)


        // function checks if tile is neighbour of existing tile - if not = new Boat has been defined by the player
        checkIfNewBoat(newTileObjectsArray, tileIndex, handlePlayerObject, currentPlayer, playerBoatsSetCounter);

        tileHtml.innerHTML = 'X';
    }

}