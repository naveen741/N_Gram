import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../API/ApiRequest';
import './SignUpForm.css'
export default function SignUpForm(){
    const {handleSubmit, register}=useForm();
    const navigate=useNavigate()
    const onSubmit= (data,e)=>{
      console.log(data, e);
      if(data.user_password === data.repassword){
        delete data.repassword;
        fetchData(data,"savedata").then(Response=>{
          console.log(Response);
          if(Response.message==='SUCCESS'){
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