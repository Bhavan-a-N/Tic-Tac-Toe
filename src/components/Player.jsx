import { useState } from "react"

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [ playerName, setPlayerName] = useState(initialName)
    const [ isEditing, setIsEditing] = useState(false);

    function handleEditing(){
        setIsEditing((editing) => !editing);

        if(isEditing){
          onChangeName(symbol, playerName);  
        }
    }

    function handleChange(event){
        setPlayerName(event.target.value)  
    }

    let toolbar = <span className="player-name">{ playerName }</span>
    if(isEditing){
        toolbar = <input type="text" required value={playerName} onChange={handleChange}/>
        }

    return (
    <li className={isActive ? 'active' : undefined}>
        <span className="player">
            {toolbar}
            <span className="player-symbol">{ symbol }</span>
        </span>
        <button  onClick={handleEditing}>{isEditing ? "Save" : "Edit" } </button>
    </li>
    )
}