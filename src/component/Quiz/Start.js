
export default function Start(props){
    return (
        <div className="start">
            <div className='StartContent'>
                <h1>Myquiz</h1>
                <button className="nextBtn" onClick={()=>props.onStart("block")}>Start Quiz</button>
            </div>
        </div>
    );
}