import { useState } from "react";

export function Player({name, symbol}) {

    const [isEditing, setIsEditing] = useState(false);

    function handleClick(){

        setIsEditing(true);
    }

    var control = <span className="player-name"> {name}</span>

    if(isEditing){
        control = <input></input>
    }

    return (
        <>
            <li>
                <span className="player">
                    {control}
                    <span className="player-symbol">{symbol}</span>
                </span>
                <button id="editButton" onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
            </li>
            
        </>
    );


}
