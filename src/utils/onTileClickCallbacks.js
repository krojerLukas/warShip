import {useState} from "react";

export const setBoatPart = (tileHtml, tileIndex, currentPlayer, boatParts, setBoatParts, tileObjectsArray, setTileObjectsArray) => {

    // returns the entire coordinate ot the clicked tile
    const coordinateString = tileHtml.id

    // slices coordinate at Letter so only number (as string) returns
    const coordinateIntString = tileHtml.id.slice(1)

    // console.log(currentPlayer, coordinateIntString)
    if ((currentPlayer === 'player 1' && coordinateIntString <= 5) || (currentPlayer === 'player 2' && coordinateIntString >= 6)) {

        // boatpart gets added to boatparts array that keeps track of all clicked tiles that have a boatpart
        setBoatParts(prevParts => [...prevParts, tileHtml.id]);

        // updated array with all tiles as objects
        const newTileObjectsArray = tileObjectsArray.map(obj => obj.coordinate === coordinateString ? {
            ...obj,
            hasBoatPart: true
        } : obj)
        setTileObjectsArray(newTileObjectsArray)


        // Funktion, die nach 4 umliegenden Kacheln ausschau hält

        // kacheln links und rechts
        const leftTileObj= newTileObjectsArray[tileIndex-1];
        const rightTileObj= newTileObjectsArray[tileIndex+1];
        const upperTileObj= newTileObjectsArray[tileIndex-10];
        const lowerTileObj= newTileObjectsArray[tileIndex+10];

        if (leftTileObj.hasBoatPart || rightTileObj.hasBoatPart || upperTileObj.hasBoatPart || lowerTileObj.hasBoatPart) {
            console.log(true)
        } else {
            // Neues Boot
            console.log(false)
        }




        // Überprüfen, ob Bootteil neues Boot definiert - dafür müssen die 4 Kacheln (oben, unten, rechts links, nach Bootteilen überprüft werden)


        tileHtml.innerHTML = 'X';
    }

}