import {  Link } from "react-router-dom";
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../API/ApiRequest';
import './LoginForm.css'
export default function LoginForm(props){
    const {handleSubmit, register}=useForm();
    const navigate=useNavigate();
    const onSubmit=(data,e)=>{
        console.log(data, e);
        fetchData(data,"checkdata").then(Response=>{
            console.log(Response);
            if(Response.message==='SUCCESS'){
                alert("sucessfully logged in")
                props.getmsg();
                navigate("/My_Application_Frontend/home");
            }
            else if(Response.message==='INCORRECT DETAILS')
                alert("Enter the credentails properly")
            else
                alert("Something went wrong please try again")
        })
        .catch((error)=>{alert("Something went wrong please try again")})
        
        
    }
    return(
        <div className="login">
            <div className="signin-header">
                <h2>Login</h2>
            </div>
            <form className="signin" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">UserName: </label>
                <input id="name"{...register("user_Name")} placeholder="Enter your name" type="text" required/>
                <label htmlFor="moblieNo">Moblie No: </label>
                <input id="moblieNo" {...register("user_moblieNo")} placeholder="Enter your Mobile Number" type="tel" pattern="[0-9]{10}" required/>
                <label htmlFor="password">Password : </label>
                <input id="password" {...register("user_password")} type="password" placeholder="Enter the password" required/>
                <button id="submit" type="submit">Sign-in</button>
            </form>
            
            <div className="signin-footer">
                <h3>If you dont have account,<Link to="/My_Application_Frontend/signupform">sign-up</Link></h3>
            </div>
        </div>
    );
}