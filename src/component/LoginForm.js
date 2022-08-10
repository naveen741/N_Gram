import {  Link } from "react-router-dom";
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../API/ApiRequest';
import { useLazyQuery } from '@apollo/client'
import './LoginForm.css'
import { SIGNIN } from "../graphqlQueries";
export default function LoginForm(props){
    const [signin]=useLazyQuery(SIGNIN)
    const {handleSubmit, register}=useForm();
    const navigate=useNavigate();
    const onSubmit=(data,e)=>{
        
        data.user_moblieNo = parseInt(data.user_moblieNo) ;
        const reqdata={
            "signinUserInput":data
          }
        //   console.log(reqdata);
        // fetchData(data,"checkdata")
        signin({ variables: reqdata }).then(Response=>{
            // console.log(Response);
            if(Response.data.signin.message==='SUCCESS'){
                alert("sucessfully logged in")
                props.getmsg();
                navigate("/My_Application_Frontend/home");
            }
            else if(Response.data.signin.message==='USER NOT FOUND')
                alert("USER NOT FOUND!! Enter the credentails properly")
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