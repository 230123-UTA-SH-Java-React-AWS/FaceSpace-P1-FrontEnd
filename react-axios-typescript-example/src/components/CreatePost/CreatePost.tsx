import axios from "axios";
import { useEffect, useState } from "react";
import { PostModel } from "../../models/PostModel";
import { User } from "../../models/User";
import { useAppDispatch, useAppSelector } from "../../shared/Redux/hook";
import { selectUser } from "../LoginPage/UserSlice";
import Post from "../Post/Post";
import { addPost, selectPostInfo, setPost } from "../Post/PostSlice";


function CreatePost(){
  const user = useAppSelector(selectUser);

  const[writtenPost, setWrittenPost] = useState('');
  // const [listOfPost, setListOfPost] = useState<PostModel2[]>([]);
  const posts = useAppSelector(selectPostInfo);
  const dispatch = useAppDispatch();

  const handleInputWrittenPost = (event: { target: {value: React.SetStateAction<string>;};}) => {
    setWrittenPost(event.target.value);
  }

  function submitPost(){

    const newPost = {
      id:0,
      writtenText: writtenPost,
      profileId: user.id
    }

    const url = `http://localhost:8080/api/post`;

    axios.post<PostModel>(url, newPost).then(response => {
      dispatch(addPost(response.data));
    })    
    
  }

  // function getPost(){
  //   let userId = user.id;

  //   let url = `http://localhost:8080/api/posts`;

  //   axios.get<PostModel>(url).then(response => {
  //     dispatch(setPostModel(response.data));
  //   })

  // }

  function hi(){
<<<<<<< HEAD
      console.log((posts.Post[0].id));
      console.log((posts.Post[0].writtenText));
      console.log((posts.Post[0].profileId));
      console.log((posts.Post));
      console.log(user.id);

=======
    //  console.log((posts.Post.step[0].id));
    //  console.log((posts.Post.step[0].writtenText));
    //  console.log((posts.Post.step[0].profileId));
    //  console.log((posts.Post));
     console.log(posts.Post);
>>>>>>> 465ea949bc7c633da6bb28a9edae6405546555a9
     
    // posting = posts.step[1];
    // console.log(posting);
    
  }


  return <div className="Post_Border">
    
    <p>New Post</p>
    <input type="text" placeholder="Write what you want to post!" value={writtenPost} onChange={handleInputWrittenPost} />
    <button  id="newPost" type="submit" onClick={submitPost}>Post</button>
    {/* <button onClick={getPost}>GetPost</button> */}
    <button onClick={hi}>Get</button>
    <div>{posts.Post.map(posting => {return <div>{posting.writtenText}</div>})}</div>
    
  </div> 
}

export default CreatePost;