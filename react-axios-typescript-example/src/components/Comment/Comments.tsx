import { Comment } from "../../models/Comment";


function Comments(){
  return <div className="comment-box">
    <div className="username">
        <img className="image" src="https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="" />
        {
        //username from user slice store
        }
        <div className="text-center">YanWingTsui</div>
      </div>
    
    <p className="username">{}</p>
    <hr></hr>
  </div>
}

export default Comments;
