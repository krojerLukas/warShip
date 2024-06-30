import {useEffect, useState} from "react";


// Styles
import './index.css';
import './style.css'

// Components
import Board from "./components/Board";
import BoatSetButton from "./components/BoatSetButton";

const gameStates = ['picking boat', 'game running', 'game over'];


const players = [{
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


    return (
        <div>
            <BoatSetButton buttonId={handlePlayerSwitchButton}/>
            <Board currentPlayer={currentPlayer} playerObjectsArray={players} currentGameState={currentGameState}/>
            <p>Spieler 1 hat {players[0].shipsOnSea} Schiffe auf See.</p>
            <p>Spieler 2 hat {players[1].shipsOnSea} Schiffe auf See.</p>
        </div>
    )

}

export default App;
