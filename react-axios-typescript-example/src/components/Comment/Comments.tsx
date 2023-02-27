import axios from "axios";
import { useState } from "react";
import { Comment } from "../../models/Comment";
import { useAppSelector } from "../../shared/Redux/hook";
import { selectUser } from "../LoginPage/UserSlice";
import { selectPostInfo } from "../Post/PostSlice";
import { selectComment } from "./CommentSlice";


function Comments(){

  const user = useAppSelector(selectUser);
  const posts = useAppSelector(selectPostInfo);
  const comments = useAppSelector(selectComment);
  const[writtenComment, setWrittenComment] = useState('');
  const handleInputWrittenComment = (event: { target: {value: React.SetStateAction<string>;};}) => {
    setWrittenComment(event.target.value);
  }
  

  function showComment(){
    console.log(comments.Comment);
  }

  function submitComment(){
    const newComment = {
      id: 0,
      writtenText: writtenComment,
      profileId: user.id,
      postId: 0,
    }

    const url = `http://localhost:8080/api/posts`;

    axios.post<Comment>(url, newComment).then(response => {
      console.log(response.data);
    })

  }

  return <div className="comment-box">
    <div className="username">
        <img className="image" src="https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="" />
        {
        //username from user slice store
        }
        <div className="text-center">YanWingTsui</div>
      </div>

      <input type="text" />
      {/* <button type="text" placeholder="Write what you want to post!" value={writtenComment} onChange={handleInputWrittenComment}>Submit</button> */}
      <button onClick={showComment}> Get</button>
    
    <p className="username">{}</p>
    <hr></hr>
  </div>
}

export default Comments;

