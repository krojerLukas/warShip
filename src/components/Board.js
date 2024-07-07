import Tile from "./Tile"
import {useEffect, useState} from "react";
import { setBoatPart } from "../utils/setBoatPart"


const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const cols = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const boatPartsPerPlayer = 5 + 3 + 2 + 1;

let clickedTileInfoObject = {
    tileHtml: undefined,
    tileIndex: undefined
}
let tempObject = {};


export default function Board({currentGameState, currentPlayerString, playerObjectsArray, handlePlayerObject}) {
    const [tileObjectsArray, setTileObjectsArray] = useState([]);
    const [coordinatesArray, setCoordinatesArray] = useState([]);

    currentPlayerString === 'player 1' ? tempObject = playerObjectsArray[0] : tempObject = playerObjectsArray[1];

    // Array with id of clicked boat parts
    const [boatPartsArr, setBoatPartsArr] = useState([]);

    // Creates coordinates for each Tile and stores it in coordinatesArray
    useEffect(() => {
        let newCoordinatesArray = [];
        for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
            for (let colIndex = 0; colIndex < cols.length; colIndex++) {
                let temporaryCoordinate = rows[rowIndex] + cols[colIndex];
                newCoordinatesArray.push(temporaryCoordinate);
            }
        }
        setCoordinatesArray(newCoordinatesArray)
    }, []);


    useEffect(() => {
        // creates an object out of coordinatesArray
        const initialTileObjectsArray = coordinatesArray.map((coordinate) => ({
                coordinate: coordinate,
                hasBoatPart: false,
                isHit: false
            }
        ))

        setTileObjectsArray(initialTileObjectsArray)
    }, [coordinatesArray]);




    // handles clicked Tile as html element
    const handleClickedTile = (tileHtml, tileIndex) => {

        clickedTileInfoObject = {
            tileHtml: tileHtml,
            tileIndex: tileIndex
        }

        if (!boatPartsArr.includes(tileHtml.id) && boatPartsArr.length < boatPartsPerPlayer-1) {
            // if id of tile is not in boatPartsArr Array and player has not set all his boat parts
            // if so, an 'X' (representing a boat part) is allowed to be set (setting a (possible new) boatPart)

            switch (currentGameState) {
                case 'picking boat':
                    setBoatPart(clickedTileInfoObject, currentPlayerString, setBoatPartsArr, tileObjectsArray, setTileObjectsArray, handlePlayerObject);
                    break;


                case 'game running':
                    console.log('Das ist ein Kommentar, der nur ausgeführt wird, wenn das Spiel auch wirklich läuft.');
                    break;

                    // TODO: 'game over' anders platzieren, so, dass switch case gar nicht erreicht wird.
                case 'game over':
                    break;

                default:
                    break;

            }

        }
    }



    return (
        <div className="board">
            {
                // initializes Tile Component
                tileObjectsArray.map((tile, index) => (

                    <Tile index={index}
                          key={tile.coordinate}
                          isHit={tile.isHit}
                          hasBoatPart={tile.hasBoatPart}
                          handleClickedTile={handleClickedTile}
                          coordinate={coordinatesArray[index]}
                          currentGameState={currentGameState}
                    />

                ))
            }
        </div>
    )
}
