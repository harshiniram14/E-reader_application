import React from "react";
import "../assets/home.css";
import NavBar from "../Navbar";
import "../assets/Navbar.css"
import "../assets/home.css"
import Footer from "./footer";

function Home() {
  return (
    <div>
         <NavBar/>
         
    <div className="home">
        <center>

      <h1>Welcome to FLIP</h1>
      <p>Start with our hot books</p>
        </center>
      {/* Add your photo grid code here */}
      {/* Photo Grid */}
  <div className="row">

<div className="column">
  <a href="/killing">
  <img src="https://i.postimg.cc/FsfmhZG8/11b32a461f8380cfedfded1f277a0fb1.jpg" alt="ks"style={{ width: "100%" }} />
  </a>
  
  <a href="#">
  <img src="https://i.postimg.cc/JnPmzYfV/de82cfbf197ccc2c7546867cb99f4df8.jpg" alt="sai" style={{ width: "100%" }} />
  </a>
  
  <img src="https://i.postimg.cc/k5CdFd9P/9684f5b9c80cb620db681c52afbf2491.jpg" alt="mob" style={{ width: "100%" }} />
  <img src="https://i.postimg.cc/MHNCnCt4/1b074a35b787b5469588318033e85946.jpg" alt="demon" style={{ width: "100%" }} />
  <img src="https://i.postimg.cc/qR7SjJ5S/23864840cd4b59ed0985d63b6deb8e1b.jpg" alt="dragon" style={{ width: "100%" }} />
  <img src="https://i.postimg.cc/W4TQq662/5f9e0fc1a31a07e4484473c7afd835dc.jpg" alt="hunter" style={{ width: "100%" }} />
  <img src="https://i.postimg.cc/RVnrk0Zz/98fd15d5b69e0f8f90a44be959bff360.jpg" alt="op" style={{ width: "100%" }} />
</div>
<div className="column">
  <a href="#">
  <img src="https://i.postimg.cc/85n33885/a556c8e63373057c84fdcbf294f1bf4e.jpg" alt="naruto" style={{ width: "100%" }} />
  </a>
  <img src="https://i.postimg.cc/9Q53CjDw/c1daa2111cd92b088c1456a85ec2bb9e.jpg" alt="ghoul" style={{ width: "100%" }} />
  <img src="https://i.postimg.cc/vZWJmSnq/c6cdd36ef0e3ca592e08e062436e3d2d.jpg" alt="death" style={{ width: "100%" }} />
  <img src="https://i.postimg.cc/prmNXWQz/cc4a64f3e0f9dd57a8aa3fa0d14de855.jpg" alt="para" style={{ width: "100%" }} />
  <img src="https://i.postimg.cc/66PJbZw0/e722e4582484e2cf0f438d0598149277.jpg" alt="bleach" style={{ width: "100%" }} />
  <img src="https://i.postimg.cc/GpK6F8qv/e8de5f94776c99c8ad31058697d09886.jpg" alt="sunbean" style={{ width: "100%" }} />
  <img src="https://i.postimg.cc/MKGLTzFM/a1339d918b771483bd4d1b1c6b388299.jpg" alt="lawlesskid" style={{ width: "100%" }} />
</div>
<div className="column">
  <a href="#">
  <img src="https://i.postimg.cc/y6TqxQ65/44191ae02e0cf2b99bd26705cfd392a0.jpg" alt="aot" style={{ width: "100%" }} />
  </a>
  <img src="https://i.postimg.cc/7LzdkXQK/5bb4a65e9dc21635cb365a8347d185c5.jpg" alt="chainsaw" style={{ width: "100%" }} />
  <img src="https://i.postimg.cc/Dz1jD08D/69728ad3e0bd827b9f86cacd3dc65cf4.jpg" alt="opm" style={{ width: "100%" }} />
  <img src="https://i.postimg.cc/sXpkpKYM/94ef768cbe2574d61258c58b4aaa81c4.jpg" alt="jujutsu" style={{ width: "100%" }} />
  <img src="https://i.postimg.cc/k4KmT7mX/9704e8e297035feae2f3fc947d8e4a4f.jpg" alt="psychobank" style={{ width: "100%" }} />
  <img src="https://i.postimg.cc/Cxz9vwCT/0516a6fb483b31b95e294be7c7c38ccd.jpg" alt="myheroac" style={{ width: "100%" }} />
  <img src="https://i.postimg.cc/Cx5pWGg2/010d5e4fcb223db351ffe5e188fdc606.jpg" alt="perfectcrime" style={{ width: "100%" }} />
</div>
<div className="column">
  <a href="#">
  <img src="https://i.postimg.cc/52YkBn1f/c046583a53bb7811eaddaecd281452df.jpg" alt="bluelock" style={{ width: "100%" }} />
  </a>
  <img src="https://i.postimg.cc/Qd2Y01x1/c0c716b8b57fd75f57e8f0853161cbe2.jpg" alt="vinlandsaga" style={{ width: "100%" }} />
  <img src="https://i.postimg.cc/2y0XwtVS/e75829ab515ad7c64dcf5edc1b44199f.jpg" alt="haikyu" style={{ width: "100%" }} />
  <img src="https://i.postimg.cc/nrp6T720/e94d9d0b4ed7d09078697d3d4c1024ae.jpg" alt="neverland" style={{ width: "100%" }} />
  <img src="https://i.postimg.cc/2jGJr12N/f63df569235dcf445e0e02b6ee2a6176.jpg" alt="spyxfamily" style={{ width: "100%" }} />
  <img src="https://i.postimg.cc/DZKDys9n/fa358e86eef793031e7f9577cfeaf32f.jpg" alt="spritedaway" style={{ width: "100%" }} />
  <img src="https://i.postimg.cc/Rhmz82S1/55bec5f0a477da9b6d87c5cdf5a2cb68.jpg" alt="capricorn" style={{ width: "100%" }} />
</div>
</div>
    </div>
    <Footer/>
    </div>
   
  );
}

export default Home;
