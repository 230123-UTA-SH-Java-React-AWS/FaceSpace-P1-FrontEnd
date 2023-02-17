import { createContext, useContext, useState } from "react";
import "./Post.css";

function Post(){
  return <div className="Post_Border">
    
      <div className="username">
        <img className="image" src="https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="" />
        {
        //username from user slice store
        }
        <div className="text-center">YanWingTsui</div>
      </div>
      {
        //post information for user slic store
      }
      <p className="inf">Today is cold.</p>
    
    <hr></hr>
    <div className="Button">
      <button>Like</button>
      <button onClick={displayComment} >View Comment</button>
    </div>
    <hr></hr>
    <div className="Comment">
      <form action="">
        <textarea className= "input" typeof="text" placeholder="Write a comment"/>
       </form>
    
      <input className="Sbutton" type= "button" value= "Add Comment" />
    </div>
  </div>
}


// const [count, setCounter] = useState(0);

function Like(){
  let count;

  if(count = 0){
    
  }
}

function displayComment(){
  console.log("hi");
}
export default Post;