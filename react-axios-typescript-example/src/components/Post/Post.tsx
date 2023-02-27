import { createContext, useContext, useState } from "react";
import "./Post.css";
import { Comment } from "../../models/Comment";
import Comments from "../Comment/Comments";
import { useAppSelector } from "../../shared/Redux/hook";
import { selectUser } from "../LoginPage/UserSlice";
import { selectPostInfo } from "./PostSlice";
import { PostModel } from "../../models/PostModel";

function Post(){

  // const [lisOfComment, setListOfComment] = useState<Comment[]>([]);
  const [showComment, setShowComment] = useState(false);
  const [countLike, setCountLike] = useState(0);
  const [like, setLike] = useState(false);
  const user = useAppSelector(selectUser);
    const posts = useAppSelector(selectPostInfo);

  // function submitComment(){
  //   let comment = document.querySelector<HTMLInputElement>("#comment")?.value || "";

  //   console.log(comment);

  //   setListOfComment([{comment}, ...lisOfComment]);
    

  //   console.log(lisOfComment);
  //   return <div>
  //     <p>{comment}</p>
  //   </div>
  // }

  function Show(){
    if(showComment){
      setShowComment(false);
    }else{
      setShowComment(true);
    }
  }

  // function ShowC(){
  //   if(showComment == true){
  //     return <div className="grid-Box">
  //     Comment:
  //     <hr></hr>
  //     {
  //     lisOfComment.map(comment => {
  //       return <Comments {...comment}/>
  //   })
  //     }
  //     </div>
  //   }
  // }

  function Count(){
    if(like == true){
      setLike(false);
      setCountLike(countLike-1);
    }else{
      setLike(true);
      setCountLike(countLike+1);
    }
  }

  return <div className="Post_Border">
    
      <div className="username">
        <img className="image" src="https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="" />
        {
        //username from user slice store
        }
        <div className="text-center">
          {user.givenName} {user.surname}
          </div>
      </div>
      {
        //post information for user slic store
      }
      <p className="inf">Today is cold.</p>
    
    <hr></hr>
    <div className="Button">
      <button onClick={Count}>Like</button>
      {countLike}
      <button onClick={Show}>View Comment</button>
    </div>
    <hr></hr>
    <div className="Comment">
      <form action="">
        <textarea id="comment" className= "input" typeof="text" placeholder="Write a comment"/>
       </form>
    
      <input className="Sbutton" type= "button" value= "Add Comment"  />
    </div>
    {/* <div>{ShowC()}</div> */}
  </div>

}

export default Post;