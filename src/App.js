import {useEffect, useState} from "react";


// Styles
import './index.css';
import './style.css'

// Components
import Board from "./components/Board";
import BoatSetButton from "./components/BoatSetButton";

const gameStates = ['picking boat', 'game running', 'game over'];


let players = [{
    name: 'player 1',
    shipsOnSea: 0,
    shipPartsSet: 0,
    hits: 0
}, {
    name: 'player 2',
    shipsOnSea: 0,
    shipPartsSet: 0,
    hits: 0
}]


const App = () => {
    const [currentGameState, setCurrentGameState] = useState(gameStates[0]) // game Starts with initially 'picking boat'
    const [currentPlayer, setCurrentPlayer] = useState(players[0].name);

    // Irgendwas ist falsch mit dem State
    // Ich wear gerade dabei den Couter für gesetzte neue Schiffe einzubauen
    const [currentPlayerObjects, setCurrentPlayerObjects] = useState(players[0], players[1])


    const handlePlayerSwitchButton = (buttonId) => {
        console.log("The button id is: " + buttonId)

        if (buttonId === '1') {
            // Player 2 now picking boat
            setCurrentPlayer(players[1].name)
        } else {
            // Player 2 set all boats and pressed button
            setCurrentGameState(gameStates[1])
        }
    }

    const updatePlayerObject = (currentPlayer) => {

        switch (currentPlayer) {
            case 'player 1' :
                console.log("Test")
                const updatedPlayerObject = players.map(obj => obj.name === currentPlayer ? {
                    ...obj,
                    shipsOnSea: obj.shipsOnSea+1
                } : obj)
                setCurrentPlayerObjects(players[0], updatedPlayerObject)
                console.log(currentPlayerObjects)
                break;
            case 'player 2':
                console.log(currentPlayer)
                break;

            default:
                break;
        }

    }

    return (
        <div>
            <BoatSetButton buttonId={handlePlayerSwitchButton}/>
            <Board currentPlayer={currentPlayer} playerObjectsArray={players} currentGameState={currentGameState}
                   handlePlayerObject={updatePlayerObject}/>
            <p>Spieler 1 hat {currentPlayerObjects[0]} Schiffe auf See.</p>
            <p>Spieler 2 hat {currentPlayerObjects[1]} Schiffe auf See.</p>
        </div>
    )

}

export default App;
