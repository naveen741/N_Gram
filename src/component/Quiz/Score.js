
export default function Score(props){
    let  score=0;
    return(
        <div className="score" >
            <div className="content">
            <h1>Quiz</h1>
            {
                props.questions.map((data)=>(
                    <div className="QandA">
                        <div className="questions">{data.question}</div>
                        <div className="options">
                            { 
                                data.options.map((option)=>{
                                    let color;
                                    if(option === data.selectedOption){
                                        if(option === data.correct_answer){
                                            color="green";
                                            score++;
                                        }
                                        else{
                                            color="red";
                                        }
                                    }
                                    else if(option === data.correct_answer){
                                        color="green";
                                    }
                                    return(
                                    <button className="option" style={{background: color}} >{option}</button>
                                )})
                            }
                        </div>
                        
                    </div>
                ))
            }
            <h3>you Have scored : {score}</h3>
            <button className="nextBtn" onClick={()=>props.onScore("none")}>Play Again</button>
            </div>
        </div>
    );
}