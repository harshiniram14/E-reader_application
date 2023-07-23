import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../assets/Sample.css'


const Login = () => {
  const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);
  

    const navigate=useNavigate();

    const handlemail=(event)=>{
        event.preventDefault();
        setEmail(event.target.value);
    }


    const handlePwd=(event)=>{
        event.preventDefault();
        setPassword(event.target.value);
    }


    const handleSubmit=(event)=>{
        event.preventDefault();
        setFormErrors(validate({email,password}));
        
        if(isSubmit===true){
            navigate('/Home');
            event.preventDefault();
        }
    }

    

    const validate=(values)=>{
        const errors={};
        const reg=new RegExp("[0-9]")
        const preg=new RegExp("[A-Z][A-za-z0-9$_]+") 

        if(!values.email)
        errors.email="Email is Required";
        else{
            setIsSubmit(true);
        }
        if(!values.password){
        errors.password="Password is Required";
        setIsSubmit(false);
        }
        else if(!preg.test(values.password)){
        errors.password="Invalid password";
        setIsSubmit(false);
        }else{
            setIsSubmit(true);
        }
        return errors;
    }

  return (
    <>
      <div className="login-wrapper1">
        <form onSubmit={handleSubmit} className="login-container1">
          <h1>Login</h1>
          <input
            type="email"
            className="input-field"
            name="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={handlemail}
          />
          <p>{formErrors.email}</p>
          <input
            type="password"
            className="input-field1"
            name="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={handlePwd}
          />
          <p>{formErrors.password}</p>
          <button
            type="submit"
            className="submit-btn1"
          >
            Login
          </button>
        </form>
      </div>
      <div className="new-user1">
        <center>
          New to Flip?<a href="/Signup">Register now</a>
        </center>
      </div>
    </>
  );
};

export default Login;