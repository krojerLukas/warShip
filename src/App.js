import {useEffect, useState} from "react";


// Styles
import './index.css';
import './style.css'

// Components
import Board from "./components/Board";
import BoatSetButton from "./components/BoatSetButton";

const gameStates = ['picking boat', 'game running', 'game over'];

const players = [
    'player 1',
    'player 2'
]


const App = () => {
    const [currentGameState, setCurrentGameState] = useState(gameStates[0]) // game Starts with initially 'picking boat'
    const [currentPlayer, setCurrentPlayer] = useState(players[0]);


    const handlePlayerSwitchButton = (buttonId) => {
        console.log("The button id is: " + buttonId)

        if (buttonId === '1') {
            // Player 2 now picking boat
            setCurrentPlayer(players[1])
        } else {
            // Player 2 set all boats and pressed button
            setCurrentGameState(gameStates[1])
        }
    }


    return (
        <div>
            <BoatSetButton buttonId={handlePlayerSwitchButton}/>
            <Board currentPlayer={currentPlayer} currentGameState={currentGameState}/>
        </div>
    )

}

export default App;
