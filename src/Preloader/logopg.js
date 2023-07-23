import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../assets/logopg.css";


const LogoPage = () => {
    const navigate = useNavigate();
  
    useEffect(() => {
      const redirectTimer = setTimeout(() => {
        navigate("/Landingpage");
      }, 3000);
  
      return () => clearTimeout(redirectTimer);
    }, [navigate]);
  
    return (
      <div className="logo-container">       
        <img src="https://i.postimg.cc/ctrmsX9b/fliplogo.png" alt="Logo" />        
      </div>
    );
  };
  
  export default LogoPage;
  