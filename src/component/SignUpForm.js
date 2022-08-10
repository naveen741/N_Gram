import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../API/ApiRequest';
import { useMutation } from '@apollo/client';
import './SignUpForm.css'
import { SIGNUP } from '../graphqlQueries';
export default function SignUpForm(){
    const [signup] = useMutation(SIGNUP);
    const {handleSubmit, register}=useForm();
    const navigate=useNavigate()
    const onSubmit= (data,e)=>{
      // console.log(data, e);
      if(data.user_password === data.repassword){
        delete data.repassword;
        data.user_moblieNo = parseInt(data.user_moblieNo) ;
        const reqdata={
            "signupUserInput":data
          }
          // console.log(reqdata);
        // fetchData(data,"savedata")
        signup({ variables: reqdata }).then(Response=>{
          console.log(Response);
          if(Response.data.signup.message==='SUCCESS'){
              alert("sucessfully Signed Up")
              navigate("/My_Application_Frontend");
          }
          else
            alert("Something went wrong please try again")
        })
        .catch((error)=>{alert("Something went wrong please try again")})
      }
      }
    return(
      <div className="resgister">
            <div className="signup-header">
                <h2>Sign Up</h2>
            </div>
            <form className='signup' onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">UserName: </label>
                <input id="name"{...register("user_Name")} placeholder="Enter your name" type="text" required/>
                <label htmlFor="moblieNo">Moblie No: </label>
                <input id="moblieNo" {...register("user_moblieNo")} placeholder="Enter your Mobile Number" type="tel" pattern="[0-9]{10}" required/>
                <label htmlFor="password">Password : </label>
                <input id="password" {...register("user_password")} type="password" placeholder="Enter the password" required/>
                <label htmlFor="re-password">Re-enter Password : </label>
                <input id="re-password" {...register("repassword")} placeholder="Enter the password again" type="password" required/>
                <button id="submit" type="submit">Sign-up</button>
            </form>
     </div>
    );
}