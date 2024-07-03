export const checkIfNewBoat = (newTileObjectsArray, tileIndex, handlePlayerObject, currentPlayer, playerBoatsSetCounter) => {

    // all 4 surrounding tiles in direct contact with clicked tile (left, right, up, down)
    const leftTileObj= newTileObjectsArray[tileIndex-1];
    const rightTileObj= newTileObjectsArray[tileIndex+1];
    const upperTileObj= newTileObjectsArray[tileIndex-10];
    const lowerTileObj= newTileObjectsArray[tileIndex+10];

// each element in array returns wether it is next to a existing boat part
    const isNextToBoatPartArray = [leftTileObj.hasBoatPart, rightTileObj.hasBoatPart, upperTileObj.hasBoatPart, lowerTileObj.hasBoatPart]
    let defineNewBoat = isNextToBoatPartArray.includes(true)

    if (defineNewBoat) {
        // increases boats the player has set by 1
        handlePlayerObject(currentPlayer, playerBoatsSetCounter++);
    }

}