import React, {useContext, useState, useEffect} from "react";
import { AppContext } from '../Context';

function User() {

    let {setQuizState} = useContext(AppContext);
    let [username, setUsername] = useState("");

    function getName(event){
        setUsername(event.target.value);
    }

    useEffect(() =>{
        localStorage.setItem("Name",JSON.stringify(username))
    }, [username]);
    
     const next = () => {setQuizState("container")}
  return (
    <div className="userForm">
        <h1 className="test">WELCOME PARTICIPATION</h1>
        <div className="item">
            <input type="text" value={username} placeholder="Enter your name" onChange={getName}/>
            <button onClick={next}>Enter</button>
        </div>
    </div>
  )
}

export default User
