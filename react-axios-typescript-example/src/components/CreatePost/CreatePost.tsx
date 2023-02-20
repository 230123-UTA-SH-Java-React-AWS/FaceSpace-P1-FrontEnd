import Post from "../Post/Post";

function CreatePost(){
  return <div className="Post_Border">
    <p>New Post</p>
    <input type="text" />
    <button onClick={Post}>Post</button>
  </div>
}

export default CreatePost;