export default function Play(props){
    const QandA=props.questions.map((data)=>{
        let styles=true;
        return(
        <div className="QandA">
            <div className="questions">{data.question}</div>
            <div className="options">
                { 
                    data.options.map((option)=>{
                        const btnClick=(evt,option,data)=>{
                            if(evt.target.style["background"] !== "yellow"){
                                styles && (evt.target.style["background"]= "yellow")
                                styles && props.getAnswer(true,option,data)
                                styles=false;
                            }
                            else{
                                evt.target.style["background"]= "#dfdfdf"
                                props.getAnswer(false,option,data)
                                styles=true;
                            }
                            //console.log(data)
                            
                        }
                        return(<div className="option"  onClick={(evt)=>btnClick(evt,option,data)}>{option}</div>)
                        
                    })
                }
            </div>
        </div>
    )})
    return(
        <div className="play" >
            <div className="content">
            <h1>Quiz</h1>
            {QandA}
            <button className="nextBtn" onClick={()=>props.onPlay("block")}>Submit answer</button>
            </div>
        </div>
    );
}