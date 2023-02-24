import axios from "axios";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../shared/Redux/hook";
import { selectUser } from "../LoginPage/UserSlice";


function CreatePost(){
  const user = useAppSelector(selectUser);

  const[writtenPost, setWrittenPost] = useState('');

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


  return <div className="Post_Border">
    <p>New Post</p>
    <input type="text" placeholder="Write what you want to post!" value={writtenPost} onChange={handleInputWrittenPost} />
    <button  id="newPost" type="submit" onClick={submitPost}>Post</button>
  </div> 
}

export default CreatePost;