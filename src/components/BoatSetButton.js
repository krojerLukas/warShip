import {useEffect, useState} from "react";


export default function BoatSetButton ({buttonId}) {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <button key={1} id="1" onClick={() => buttonId('1')}>Spieler 1 Boot gesetzt</button>
            <button key={2} id="2" onClick={() => buttonId('2')}>Spieler 2 Boot gesetzt</button>
        </form>
    )
}
