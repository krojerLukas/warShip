import Tile from "./Tile"
import {useEffect, useState} from "react";
import Playerhalf from "./Playerhalf";


const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const cols = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const shipParts = 5 + 3 + 2 + 1;


export default function Board({currentGameState, currentPlayer}) {
    const [tilesArray, setTilesArray] = useState([]);
    const [coordinatesArray, setCoordinatesArray] = useState([]);
    const [boatParts, setBoatParts] = useState([]);





    // Creates coordinates for each Tile and stores it in coordinatesArray
    useEffect(() => {
        let newCoordinatesArray = [];
        for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
            for (let colIndex = 0; colIndex < cols.length; colIndex++) {
                let temporaryCoordinate = rows[rowIndex] + cols[colIndex];
                newCoordinatesArray.push(temporaryCoordinate)
            }
        }
        setCoordinatesArray(newCoordinatesArray)
    }, []);






    useEffect(() => {
        // creates an object out of coordinatesArray
        const tileObjectsArray = coordinatesArray.map((coordinate) => ({
                coordinate: coordinate,
                hasBoatPart: false,
                isHit: false
            }
        ))

        // initializes Tile Component
        const tiles = tileObjectsArray.map((tile, index) => {
            return (
                <Tile key={tile.coordinate}
                      isHit={tile.isHit}
                      hasBoatPart={tile.hasBoatPart}
                      handleClickedTile={handleClickedTile}
                      currentGameState={currentGameState}
                      coordinate={coordinatesArray[index]}/>
            )
        })
        setTilesArray(tiles)
    }, [coordinatesArray, currentGameState, currentPlayer])





    // handles clicked Tile as html element
    const handleClickedTile = (tileHtml) => {

        // returns the entire coordinate ot the clicked tile
        const coordinateString = tileHtml.id

        // slices coordinate at Letter so only number (as string) returns
        const coordinateIntString = tileHtml.id.slice(1)

        // determines wether an 'X' (representing a boat part) is allowed to be set or not
        if (!boatParts.includes(tileHtml.id) && currentGameState === 'picking boat') {
            // console.log(currentPlayer, coordinateIntString)
            if ((currentPlayer === 'player 1' && coordinateIntString<=5) || (currentPlayer === 'player 2' && coordinateIntString>=6)) {
                setBoatParts(prevParts => [...prevParts, tileHtml.id]);
                const updatedObject = coordinatesArray.map((tileObj) => ({
                    // Update Object here
                }))
                tileHtml.innerHTML = 'X';
            }
        }
    }


    return (
        <div className="board">
            {tilesArray}
        </div>
    )
}

// Was kann der Component

// - Muss in 2 hälften geteilt werden
// - Muss random Schiffe in Tiles setzten
// -