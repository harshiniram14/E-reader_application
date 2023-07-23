import React, { useState } from 'react';
import '../assets/killing.css'
import 'font-awesome/css/font-awesome.min.css';
function Killing() {
  const [isThumbsDown, setIsThumbsDown] = useState(false);

  const handleClick = () => {
    setIsThumbsDown(!isThumbsDown);
  };
  return(
    <>
        <h2 className="heading">
          Killing Stalking
        </h2>
        
        <div className="responsive">
          <div className="gallery">
            <img src="https://i.postimg.cc/FsfmhZG8/11b32a461f8380cfedfded1f277a0fb1.jpg" alt="killing" width={600} height={400} />
        <div className="desc">
        <table style={{ width: "100%" }}>
        <tbody>
        <tr>
          <th>Genre :</th>          
          <td><a href="/action">Action</a>,<a href="/horror">Horror</a>,<a href="/yaoi">Yaoi</a></td>
        </tr>
        <tr>
          <th>Author :</th>
          <td>Koogi</td>
        </tr>
        <tr>
          <th>Chapters :</th>
          <td>88</td>
        </tr>
        </tbody>
        </table>
        </div>
        </div>
        <br></br>
        <div className="btns">
          <button type="submit" className="read">Read Now</button><></>
          <button type="submit" className="wish">Add to wishlist</button>
        </div>

        </div>

        

        <div className="descrip">


          <h3>Description:</h3>
          <br></br>
        <p>

        The story follows Bum, a young, mentally ill man with a difficult past. After becoming infatuated with Oh Sangwoo, a peer from his time in the military who saved him from a rape attempt, he decides to enter Sangwoo's home while he is out of his house. Bum finds a tied up, bruised woman in Sangwoo's basement and before he is able to free her, he is discovered by Sangwoo, who is revealed to be a serial killer. Sangwoo then breaks Bum's ankles and despite Bum's previous love for him, Sangwoo puts Bum into a highly abusive and manipulative relationship until the very end.
        </p>
        <br></br>
        <h3>Rating:</h3>
        <div className='star'>

        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star" />
        <span className="fa fa-star" />
        </div>
        </div>
        <br></br>
        <h3>Like/ Dislike:</h3>
        <div className='like'>
        <i className={`fa ${isThumbsDown ? 'fa-thumbs-down' : 'fa-thumbs-up'}`} onClick={handleClick}></i>
        </div>
    </>
  );
}

export default Killing;