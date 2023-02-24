import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../shared/Redux/hook";
import { selectUser, setDefault } from "../LoginPage/UserSlice";
import "./NavigationBar.css";
function NavigationBar(){

  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();

  function gotoHome(){
    navigate('/Home');
  }
  return <div className="flex">
    
    <Link to ="/" className="left click">FaceSpace </Link>
    {
      user.emailAddress !== "User is not logged in" && 
      <div className="right click" onClick={() => {dispatch(setDefault())}}>Logout</div>
    }
    {
      user.emailAddress === "User is not logged in" && 
      <Link to ="/Login" className="right click">SignIn </Link>
    }
    {  
    user.emailAddress === "User is not logged in" && 
    <Link to ="/Register" className="right click">Register </Link>
    }
    {
      user.emailAddress !== "User is not logged in" && 
    <Link to ="/Post" className="right click">Post </Link>
    }
    {
      user.emailAddress !== "User is not logged in" && 
    <Link to ="/CreatePost" className="right click">CreatePost </Link>
    }
    {
      user.emailAddress !== "User is not logged in" &&  
    <Link to ="/MyProfile" className="right click">My Profile </Link>
    }

  
  </div>

}

export default NavigationBar;