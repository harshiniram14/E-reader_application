import React, {useState} from 'react'
const Useform = (validate) => {
  const[values,setValues]=useState({
    name:"",
    email:"",
    password:""
  });

  const[errors,setErrors]=useState({});

  const handleChange=(e)=>{
    const {name,value}=e.target;

    setValues((prevValues)=>{
        return{
            ...prevValues,
            [name]:value,
        };
    });
};

const handleSubmit=(event)=>{
    event.preventDefault();
    setErrors(validate(values));
}
return {handleChange,values, handleSubmit, errors};
};

export default Useform;