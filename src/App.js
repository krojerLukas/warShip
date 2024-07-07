import {useEffect, useState} from "react";


// Styles
import './index.css';
import './style.css'

// Components
import Board from "./components/Board";
import BoatSetButton from "./components/BoatSetButton";

const gameStates = ['picking boat', 'game running', 'game over'];


let player1 = {
    name: 'player 1',
    boatsOnSea: 0,
    boatsPartsSet: 0,
    hits: 0
}

let player2 = {
    name: 'player 2',
    boatsOnSea: 0,
    boatsPartsSet: 0,
    hits: 0
}


const App = () => {
    const [currentGameState, setCurrentGameState] = useState(gameStates[0]) // game Starts with initially 'picking boat'
    const [currentPlayer, setCurrentPlayer] = useState(player1.name);

    const [player1Object, setPlayer1Object] = useState(player1);
    const [player2Object, setPlayer2Object] = useState(player2);


    const handlePlayerSwitchButton = (buttonId) => {
        console.log("The button id is: " + buttonId)

        if (buttonId === '1') {
            // Player 2 now picking boat
            setCurrentPlayer(player2Object.name)
        } else {
            // Player 2 set all boats and pressed button
            setCurrentGameState(gameStates[1])
        }
    }

    const updatePlayerObject = (currentPlayer) => {

        switch (currentPlayer) {
            case 'player 1' :
                const updatedPlayer1Object = {
                    ...player1Object,
                    boatsOnSea: player1Object.boatsOnSea+1
                }
                setPlayer1Object(updatedPlayer1Object)
                break;

            case 'player 2':
                const updatedPlayer2Object = {
                    ...player2Object,
                    boatsOnSea: player2Object.boatsOnSea+1
                }
                setPlayer2Object(updatedPlayer2Object)
                break;

            default:
                break;
        }

    }

    return (
        <div>
            <BoatSetButton buttonId={handlePlayerSwitchButton}/>
            <Board currentPlayerString={currentPlayer} playerObjectsArray={[player1Object, player2Object]} currentGameState={currentGameState}
                   handlePlayerObject={updatePlayerObject}/>
            <p>Spieler 1 hat {player1Object.boatsOnSea} Schiffe auf See.</p>
            <p>Spieler 2 hat {player2Object.boatsOnSea} Schiffe auf See.</p>
        </div>
    )

}

export default App;
