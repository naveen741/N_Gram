import './Quiz.css';
import {useState} from "react"
import Start from './Start';
import Play from './Play';
import Score from './Score';
function Quiz() {
  const [toQuiz, setToQuiz]=useState(false);
  const [toScore, setToScore]=useState(false);
  const [questions, setQuestions]=useState([]);
  const onStart=async (key)=>{
    const data= await fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple");
    const quest=await data.json();
    let array=quest.results
    for(let i=0;i< array.length;i++){
      const options=array[i].incorrect_answers
      options.push(array[i].correct_answer)
      for (let i = options.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));   
        let temp = options[i];
        options[i] = options[j];
        options[j] = temp;
      }
      array[i]={...array[i],  options};
      array[i].incorrect_answers=array[i].incorrect_answers.filter((data)=>(data !==array[i].correct_answer));
    }
      setQuestions(array)
      setToQuiz(true);
      console.log(questions)
  }
  const onPlay=(key)=>{
    console.log(questions)
    setToScore(true);
  }
  const onScore=(key)=>{
    setToQuiz(false);
    setToScore(false);
  }
  const getAnswer=(select,selectedOption,data)=>{
    //console.log(questions.map((x, i) => [i, x]).filter(x => x[1].question === data.question));
    if(select)
      questions[questions.map((x, i) => [i, x]).filter(x => x[1].question === data.question)[0][0]]={...data, selectedOption}; 
    else
    questions[questions.map((x, i) => [i, x]).filter(x => x[1].question === data.question)[0][0]]=data; 
    console.log(questions);
  }
  return (
    <div className="Quiz">
      <h1>MYQuiz</h1>
      <div className='myquiz'>
        <Start onStart={onStart} />
        {toQuiz && <Play onPlay={onPlay} getAnswer={getAnswer} questions={questions}/>}
        {toScore && <Score onScore={onScore} questions={questions} />}
      </div>
    </div>
  );
}

export default Quiz;
