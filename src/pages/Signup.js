import { useState , Component} from "react";
import { useNavigate } from "react-router-dom";
import '../assets/Sample.css'
import axios from "axios";

const Signup = (props) => {


  
  const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [name,setName]=useState("");

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

    const handleName=(event)=>{
      event.preventDefault();
      setName(event.target.value);
  }



    const handleSubmit=(event)=>{
        event.preventDefault();
        const data = {
          email: email,
          name: name,
          password:password,
          
        };
        axios.post('http://127.0.0.1:8080/post', data)
      
        setFormErrors(validate({name, email,password}));
        
        if(isSubmit===true){
          navigate('/Home');
          event.preventDefault();
        }
    }

    

    const validate=(values)=>{
        const errors={};
        const reg=new RegExp("[0-9]")
        const preg=new RegExp("[A-Z][A-za-z0-9$_]+") 

        if(!values.name){
          errors.name="Name is Required";
          setIsSubmit(false);
          }
          else if(reg.test(values.name)){
          errors.name="Name must contain only alphabets";
          setIsSubmit(false);
          }else{
              setIsSubmit(true);
          }
  
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
          <h1>Sign Up</h1>
          <input
            type="text"
            className="input-field1"
            name="name"
            id="name"
            placeholder="name"
            value={name}
            onChange={handleName}
          />
          <p>{formErrors.name}</p>
          <input
            type="email"
            className="input-field1"
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
            Submit
          </button>
        </form>
      </div>
      <div className="new-user1">
        <center>
          Already have Flip?<a href="/Login">Click me</a>
        </center>
      </div>
    </>
  );
};

export default Signup;