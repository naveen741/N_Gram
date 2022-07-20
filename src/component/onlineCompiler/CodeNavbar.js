import React from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import './CodeNavbar.css';
 
const CodeNavbar = ({userLang, setUserLang, userTheme,
                setUserTheme, fontSize, setFontSize}) => {
    const languages = [
        { value: "C", label: "C" },
        { value: "C++", label: "C++" },
        { value: "Python", label: "Python" },
        { value: "Java", label: "Java" },
    ];
    const themes = [
        { value: "vs-dark", label: "Dark" },
        { value: "light", label: "Light" },
    ]
    const navigate = useNavigate()
    return (
        <div className="navbar">
            <h1>Tring Code Compiler</h1>
            <div className='codingOption'>
                <Select options={languages} value={userLang}
                        onChange={(e) => setUserLang(e.value)}
                        placeholder={userLang} />
                <Select options={themes} value={userTheme}
                        onChange={(e) => setUserTheme(e.value)}
                        placeholder={userTheme} />
                <div className='sizeButton'>
                    <label>Font Size</label>
                    <input type="range" min="18" max="30"
                        value={fontSize} step="2"
                        onChange={(e) => { setFontSize(e.target.value)}}/>
                </div>
                <button onClick={()=>{navigate("/My_Application_Frontend");}}>Submit</button>
            </div>
        </div>
    )
}
export default CodeNavbar