import { Link } from "react-router-dom";
import "./NavigationBar.css";
function NavigationBar(){
  return <div className="flex">
    
    <Link to ="/" className="click">FaceSpace </Link>
    <Link to ="/Login" className="right click">SignIn </Link>
    <Link to ="/" className="click">Register </Link>
  </div>

}

export default NavigationBar;