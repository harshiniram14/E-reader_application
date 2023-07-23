import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import "./assets/Navbar.css";
import "./assets/footer.css";
import "./assets/megamenu.css";
import 'font-awesome/css/font-awesome.min.css';

function NavBar() {
  
  
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="topnav">
    <a href="/about" className="act">
      FLIP
    </a>
    <a href="/home">Home</a>
    <Link to="/Library">Library</Link>
    <a href="/wishlist">Wishlist</a>
   
  
    <div className="dropdown">
    <a href="/genres" className="genre12">Genres</a>
    <div className="dropdown-content">
      <a href="/Action">Action</a>
      <a href="/adventure">Adventure</a>
      <a href="/comedy">Comedy</a>
      <a href="/fantasy">Fantasy</a>
      <a href="/horror">Horror</a>
      <a href="/romance">Romance</a>
      <a href="/scifi">Sci-fi</a>
      <a href="/thriller">Thriller</a>
      <a href="/yaoi">Yaoi</a>
    </div>
  </div>
    <div className="user-icon">
    <span className="fa fa-user"></span>
  </div>
  <a href="/Login">

  <div className="sign-out-icon">
    <span className="fa fa-sign-out"></span>
  </div>
  </a>
    
    
  </div>

  
    </>
  );
}

export default NavBar;