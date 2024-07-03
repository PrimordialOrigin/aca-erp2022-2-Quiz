import './Quiz.css';

function Quiz() {
    return(
        <div className='container'>
            <h1>Javascript Quiz</h1>
            <div className="itemsContainer">
                <h3>1. What is JavaScript?</h3>
                <ul>
                    <li> JavaScript is a scripting language used to make the website interactive</li>
                    <li>JavaScript is an assembly language used to make the website interactive</li>
                    <li> JavaScript is a compiled language used to make the website interactive</li>
                    <li>None of the mentioned</li>
                </ul>
                <button>Next question</button>
            </div>
        </div>
    )
}

export default Quiz;