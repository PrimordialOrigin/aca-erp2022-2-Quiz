import React, {useState, useContext} from 'react';
import Quiz from './components/quiz/Quiz'
import ScoreScreen from './components/scores/ScoreScreen';
import { AppContext } from './components/Context';
import User from './components/user/User';
import "./components/Style.css"
import BottomNav from './components/navigation/bottomnav';

function App() {
  let [quizState, setQuizState] = useState("userForm");
  let [score, setScore] = useState(0);

  return (
    <div className="App">
      <AppContext.Provider value={{quizState, setQuizState, score, setScore}}>
        {quizState === "userForm" && <User/>}
        {quizState === "container" && <Quiz/>}
        {quizState === "endGame" && <ScoreScreen/>}
        <BottomNav />
      </AppContext.Provider> 
    </div>
  );
}

export default App;
