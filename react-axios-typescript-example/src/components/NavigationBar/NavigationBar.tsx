import { Link } from "react-router-dom";
import "./NavigationBar.css";
function NavigationBar(){
  return <div className="flex">
    
    <Link to ="/" className="left click">FaceSpace </Link>
    <Link to ="/Login" className="right click">SignIn </Link>
    <Link to ="/Register" className="right click">Register </Link>
    <Link to ="/Post" className="right click">Post </Link>
   
  </div>

}

export default NavigationBar;