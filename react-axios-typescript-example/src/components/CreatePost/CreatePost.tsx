import axios from "axios";
import { useEffect, useState } from "react";
import { PostModel, PostModel3 } from "../../models/PostModel";
import { User } from "../../models/User";
import { useAppDispatch, useAppSelector } from "../../shared/Redux/hook";
import { selectUser } from "../LoginPage/UserSlice";
import Post from "../Post/Post";
import { selectPostInfo, setPostModel } from "../Post/PostSlice";


function CreatePost(){
  const user = useAppSelector(selectUser);

  const[writtenPost, setWrittenPost] = useState('');
  // const [listOfPost, setListOfPost] = useState<PostModel2[]>([]);
  const posts = useAppSelector(selectPostInfo);
  const dispatch = useAppDispatch();
  let posting: PostModel;

  const handleInputWrittenPost = (event: { target: {value: React.SetStateAction<string>;};}) => {
    setWrittenPost(event.target.value);
  }

  function submitPost(){

    const newPost = {
      writtenText: writtenPost,
      profileId: user.id
    }

    const url = `http://localhost:8080/api/posts`;

    axios.post<Comment>(url, newPost).then(response => {
      console.log(response.data);
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
     console.log((posts.Post[0].id));
     console.log((posts.Post[0].writtenText));
     console.log((posts.Post[0].profileId));
     console.log((posts.Post));
    // posting = posts.step[1];
    // console.log(posting);
    
  }


  return <div className="Post_Border">
    <p>New Post</p>
    <input type="text" placeholder="Write what you want to post!" value={writtenPost} onChange={handleInputWrittenPost} />
    <button  id="newPost" type="submit" onClick={submitPost}>Post</button>
    {/* <button onClick={getPost}>GetPost</button> */}
    <button onClick={hi}>Get</button>
  </div> 
}

export default CreatePost;