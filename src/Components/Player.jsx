import { useState } from "react";

export function Player({initialName, symbol, isActive, onChangeName}) {
    const[playerName, setPlayerName] = useState(initialName);

    const [isEditing, setIsEditing] = useState(false);

    function handleClick(){

        setIsEditing((Editing) => !Editing );
        if(isEditing){
            onChangeName(symbol, playerName);
        }
        
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    var control = <span className="player-name"> {playerName}</span>

    if(isEditing){
        control = <input type="text" required value={playerName} onChange={handleChange}></input>
    }

    return (
        <>
            <li className={isActive ? 'active' : undefined}> 
                <span className="player">
                    {control}
                    <span className="player-symbol">{symbol}</span>
                </span>
                <button type="button" id="editButton" onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
            </li>
            
        </>
    );


}
