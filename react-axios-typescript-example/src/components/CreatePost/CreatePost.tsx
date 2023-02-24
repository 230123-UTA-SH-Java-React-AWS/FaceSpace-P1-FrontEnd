import axios from "axios";
import { useEffect, useState } from "react";
import { PostModel } from "../../models/PostModel";
import { User } from "../../models/User";
import { useAppSelector } from "../../shared/Redux/hook";
import { selectUser } from "../LoginPage/UserSlice";


function CreatePost(){
  const user = useAppSelector(selectUser);

  const[writtenPost, setWrittenPost] = useState('');
  const [listOfPost, setListOfPost] = useState<PostModel[]>([]);

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

  function getPost(){
    let postId = user.id;

    let url = `http://localhost:8080/api/posts/${postId}`;

    axios.get<PostModel>(url).then(response => {
      console.log(response.data);

      setListOfPost([response.data,...listOfPost]);
      
    })

  }


  return <div className="Post_Border">
    <p>New Post</p>
    <input type="text" placeholder="Write what you want to post!" value={writtenPost} onChange={handleInputWrittenPost} />
    <button  id="newPost" type="submit" onClick={submitPost}>Post</button>
  </div> 
}

export default CreatePost;