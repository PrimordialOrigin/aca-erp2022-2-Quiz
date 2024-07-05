import React, {useState, useContext} from 'react';
import Quiz from './components/quiz/Quiz'
import ScoreScreen from './components/scores/ScoreScreen';
import { AppContext } from './components/Context';
import User from './components/user/User';
import "./components/Style.css"
import BottomNav from './components/navigation/bottomnav';
import DrawerLeft from './components/navigation/drawer';

function App() {
  let [quizState, setQuizState] = useState("userForm");
  const [name,setName] = useState("")
  let [score, setScore] = useState(0);

  return (
    <div className="App">
      <AppContext.Provider value={{quizState, setQuizState, score, setScore, name, setName}}>
        <div style={{display: "flex",flexDirection: "column" ,gap: 10 }}>
          <div>
            {quizState === "userForm" && <User/>}
            {quizState === "container" && <Quiz/>}
            {quizState === "endGame" && <ScoreScreen/>}
          </div>
          <div>
            <DrawerLeft />
            <BottomNav />
          </div>
        </div>
      </AppContext.Provider> 
    </div>
  );
}

export default App;
