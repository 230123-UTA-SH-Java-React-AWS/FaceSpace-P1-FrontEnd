import axios from "axios";
import { useEffect, useState } from "react";
import { PostModel } from "../../models/PostModel";
import { User } from "../../models/User";
import { useAppDispatch, useAppSelector } from "../../shared/Redux/hook";
import { selectComment } from "../Comment/CommentSlice";
import { selectUser } from "../LoginPage/UserSlice";
import { addPost, selectPost} from "../Post/PostSlice";
import "./CreatePost.css"

function CreatePost(){
  const user = useAppSelector(selectUser);
  const posts = useAppSelector(selectPost);
  const comments = useAppSelector(selectComment);

  const [showComment, setShowComment] = useState(false);
  const [countLike, setCountLike] = useState(0);
  const [like, setLike] = useState(false);

  const[writtenPost, setWrittenPost] = useState('');
  const[writtenComment, setWrittenComment] = useState('');
  // const [listOfPost, setListOfPost] = useState<PostModel2[]>([]);

  const dispatch = useAppDispatch();

  const handleInputWrittenPost = (event: { target: {value: React.SetStateAction<string>;};}) => {
    setWrittenPost(event.target.value);
  }
  const handleInputWrittenComment = (event: { target: {value: React.SetStateAction<string>;};}) => {
    setWrittenComment(event.target.value);
  }

  function submitPost(){

    const newPost = {
      id: 0,
      writtenText: writtenPost,
      profileId: user.id
    }

    const url = "http://localhost:8080/api/posts";

    axios.post<PostModel>(url, newPost).then(response => {
      dispatch(addPost(response.data));
    })    
    
    console.log(writtenPost);
    
  }

  // function submitComment(id:number){
  //   const newComment = {
  //     id:0,
  //     writtenText: writtenComment,
  //     profileId: 0,
  //     postId: 0
  //   }
  // } 

  function Count(){
    if(like === true){
      setLike(false);
      setCountLike(countLike-1);
    }else{
      setLike(true);
      setCountLike(countLike+1);
    }
  }

  function Show(){
    if(showComment){
      setShowComment(false);
    }else{
      setShowComment(true);
    }
  }

  return <div className="Post_Border">
    
    <p>New Post</p>
    <input type="text" placeholder="Write what you want to post!" value={writtenPost} onChange={handleInputWrittenPost} />
    <button  id="newPost" type="submit" onClick={submitPost}>Post</button>
    {/* <button onClick={getPost}>GetPost</button> */}
    <div>{posts.Post.slice(0).reverse().map(posting => {
      if(posting.profileId == user.id){
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
        <p className="inf">{posting.writtenText}</p>

        {/* <hr></hr>
        <div className="Button">
        <button onClick={Count}>Like</button>
        {countLike}
        <button onClick={Show}>View Comment</button>
        </div>
        <hr></hr> */}


        {/* <div className="Comment" >
        <form action=""> */}
          {/* <textarea placeholder="Write what you want to comment!" value={writtenComment} onChange={handleInputWrittenComment}/> */}
        {/* </form>
        <button>Add Comment</button>

        </div> */}

        {/* <h6>Comment : </h6> */}
        {/* <div>{ShowC()}</div> */}

        </div>}
    }

)}
      
</div>
</div>
}
    

export default CreatePost;