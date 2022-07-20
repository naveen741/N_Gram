import { useEffect, useState } from 'react';
import './OnlineCompiler.css';
import Editor from "@monaco-editor/react";

import { data } from './data';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CodeNavbar from '../component/onlineCompiler/CodeNavbar';

// import Axios from 'axios';

//import spinner from './spinner.svg';
export default function OnlineCompiler(){
    // State variable to set users source code
  const [userCode, setUserCode] = useState(``);
 
  // State variable to set editors default language
  const [userLang, setUserLang] = useState("Python");
 
  // State variable to set editors default theme
  const [userTheme, setUserTheme] = useState("vs-dark");
 
  // State variable to set editors default font size
  const [fontSize, setFontSize] = useState(20);
 
  // State variable to set users input
  const [userInput, setUserInput] = useState("");
  const [questionNo, setQuestionNo] = useState(0); 
 
  // State variable to set users output
  const [userOutput, setUserOutput] = useState([]);
  const [ExpectedOutput, setExpectedOutput] = useState([]);
 
  // Loading state variable to show spinner
  // while fetching data
  const [loading, setLoading] = useState(false);
  const [toggle, settoggle] = useState(true); 
  const [isInput, setIsInput] = useState(false); 
  const options = {
    fontSize: fontSize
  }
 
  // Function to call the compile endpoint
  function compile() {
    setLoading(true);
    clearOutput();
    if (userCode === ``) {
      return
    }
    const callApi=(testCase,i)=>{
      
      
      const reqBody={
        code: userCode,
        lang: userLang,
        input: userInput !== ""? userInput:testCase.input ,
        inputRadio: data[0].isInput,
        crtCode: data[0].answer
      }
      //sending out code and other details to the backend to compile
      fetch(`https://safe-reaches-72795.herokuapp.com/onlineCompiler`,{
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqBody)
      }).then(datas => {return parseJSON(datas) })
        .then(Response=>{
          // console.log(Response);
          let temp1= userOutput;
          temp1[i]=Response;
          console.log(i);
          setUserOutput(temp1);
          setLoading(false);
          settoggle(false)
          setTimeout(()=>{settoggle(true)},10);
        })
        .catch(error => { return error })
      function parseJSON (response) {
        return response.json()
      }
    }
    let x=0, i=0;
    for(let testCase of data[0].TestCase){
    // data[0].TestCase.map((testCase)=>{
    
    setTimeout(()=>callApi(testCase,i++),10000*x);
    x++;
    
    
  }
    // Axios.post(`http://localhost:8000/compilecode`, {
    //   code: userCode,
    //   lang: userLang,
    //   input: userInput ,
    //   inputRadio: userInput !== ""
    // }).then((res) => {
    //       console.log(res);
    //     setUserOutput(res.data);
    // }).then(() => {
    //   setLoading(false);
    // })
    // Post request to compile endpoint
    // Axios.post(`http://localhost:8000/compile`, {
    //   code: userCode,
    //   language: userLang,
    //   input: userInput }).then((res) => {
    //       console.log(res);
    //     setUserOutput(res.data);
    // }).then(() => {
    //   setLoading(false);
    // })
  }
 
  // Function to clear the output screen
  function clearOutput() {
    setUserOutput([]);
    setExpectedOutput([]);
  }
  const q1=data[questionNo].question;
  
  return (
    <div className='OnlineCompiler' onCopy={e=>e.preventDefault()} onPaste={e=>e.preventDefault()} >
      <CodeNavbar
          userLang={userLang} setUserLang={setUserLang}
          userTheme={userTheme} setUserTheme={setUserTheme}
          fontSize={fontSize} setFontSize={setFontSize}
        />
      
      <div className="codingPage">
        <div className='codequestion'>{q1}</div>
        <div className="codeMain">
          <div className="top-container">
            {/* <textarea onPaste={e=>e.preventDefault()}></textarea> */}
          {/* <input type="text" value="" id="myInput"/> */}
            <Editor
             
              options={options}
              height="85%"
              width="75vw"
              theme={userTheme}
              language={userLang}
              defaultLanguage="Python"
              defaultValue="# Enter your code here"
              onChange={(value) => { setUserCode(value) }}
            />
            <button className="run-btn" onClick={() => compile()}>
              Run
            </button>
          </div>
          <div className="bottom-container">
            <label>
            <input id='isinput' type='checkbox' onClick={(e)=>{setIsInput(e.target.checked)}}/>
            Custom Input</label>
          {isInput &&<div className="input-box">
              <h4>Input:</h4>
              <textarea id="code-inp" onChange=
                {(e) => setUserInput(e.target.value)}>
              </textarea>
            </div>}
            <div className="output-box">
            <h4>Output:</h4>
            {loading ? (
              <div className="spinner-box">
                <h2>Loading</h2>
                {/* <img src={spinner} alt="Loading..." /> */}
              </div>
            ) : (
              toggle &&<div className='testCaseoutput'>
                {userOutput && userOutput.map((outputs, index)=>(
                  
                  <Accordion key={index}>
                    <AccordionSummary 
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content">
                      TestCase {index+1}
                    </AccordionSummary>
                    <AccordionDetails>
                      <pre>Your Output:{outputs.output}</pre>
                      <pre>Expected Output:{outputs.crtOutput}</pre>
                      {outputs.output===outputs.crtOutput?<p style={{color: "green"}}>TestCase Passed</p>:<p style={{color: "red"}}>TestCase Failed</p>}
                    </AccordionDetails>
                 
                </Accordion>
                ))}
                {/* <button onClick={() => { clearOutput() }}
                    className="clear-btn">
                    Clear
                </button> */}
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}