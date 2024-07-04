import React, {useState, useContext} from 'react';
import Quiz from './components/Quiz'
import ScoreScreen from './components/ScoreScreen';
import { AppContext } from './components/Context';


function App() {
  let [quizState, setQuizState] = useState("container");
  let [score, setScore] = useState(0);

  return (
    <div className="App">
      <AppContext.Provider value={{quizState, setQuizState, score, setScore}}>
        {quizState === "container" && <Quiz/>}
        {quizState === "endGame" && <ScoreScreen/>}
      </AppContext.Provider> 
    </div>
  );
}

export default App;
