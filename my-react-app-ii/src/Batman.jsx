import { useState } from "react";

export default function Batsman({name}){

    let [runs, setRuns] = useState(0);

    const [six, setSix] = useState(0);
    const [four, setFour] = useState(0);

    const handleSingle=()=> {
        const updatedRuns = runs+1;
        setRuns(updatedRuns);
    }
    const handleSix=()=>{
        const updatedRuns =runs+6;
        const updatedSix = six+1;
        setSix(updatedSix);
        
        setRuns(updatedRuns);
    }

    

    return(
         <div>
        <h1>Player Information</h1>
        <ul>
            <li>Name: {name} </li>
            {
                runs>50 && <h3>Your Score : 50</h3>
            }
            <li>Runs : {runs}</li>
            <li>Number of Six: {six}</li>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleSix}>Six</button>
        </ul>
    </div>
    )

}

