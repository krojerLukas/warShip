export const checkIfNewBoat = (newTileObjectsArray, tileIndex, handlePlayerObject, currentPlayer, playerBoatsSetCounter) => {

    // all 4 surrounding tiles in direct contact with clicked tile (left, right, up, down)
    const leftTileObj= newTileObjectsArray[tileIndex-1];
    const rightTileObj= newTileObjectsArray[tileIndex+1];
    const upperTileObj= newTileObjectsArray[tileIndex-10];
    const lowerTileObj= newTileObjectsArray[tileIndex+10];

    const neighbourTileObjectsArray = [newTileObjectsArray[tileIndex-1], newTileObjectsArray[tileIndex+1], newTileObjectsArray[tileIndex-10], newTileObjectsArray[tileIndex+10]];
    const existingNeighbourTilesObjectsArray = neighbourTileObjectsArray.filter(obj => obj !== undefined)

    // each element in array returns wether it is next to a existing boat part
    let defineNewBoat = existingNeighbourTilesObjectsArray.every(elem => elem === false);

    console.log(defineNewBoat)

    if (defineNewBoat) {
        console.log("Its a new boat")
        // increases boats to current player by 1
        handlePlayerObject(currentPlayer, playerBoatsSetCounter++);
    }

}