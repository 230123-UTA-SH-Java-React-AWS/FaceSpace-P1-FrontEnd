import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { User } from '../../models/User';
import { useAppDispatch, useAppSelector } from '../../shared/Redux/hook';
import CreatePost from '../CreatePost/CreatePost';
import "./LoginBox.css"
import { selectUser, setUser } from './UserSlice';
import Button from 'react-bootstrap/Button';

function LoginBox() {
    const user = useAppSelector(selectUser);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    function GotoUserPage(){
        if(user.emailAddress !== "User is not logged in"){
            navigate('/MyProfile');
        }
    }

    function Login(){
        let userEmail = document.querySelector<HTMLInputElement>("#loginEmail")?.value;
        let userPassword = document.querySelector<HTMLInputElement>("#loginPassword")?.value;

        const newUser = {
            id: 0,
            emailAddress: userEmail,
            password: userPassword,
            givenName: '',
            surname: ''
        }

        let url = `http://localhost:8080/api/login`;

        axios.post<User>(url,newUser).then(response => {
            dispatch(setUser(response.data)); 
            console.log(response.data);
            if(response.data.emailAddress !== "User is not logged in"){
                navigate('/MyProfile');
            }
        })
    }

    const clickHanler = () =>{
        GotoUserPage();
        Login();
    };

    return <div id = "LoginBorder" className= "center">
        <h3 id="login">Login</h3>
        <form id="formFormat">
            <p>
                <label id="emailText">Email Address</label><br/>
                <input className='inputBox' type="text" name = "email" required/>
            </p>
    
            <p>
                <label id="passwordText">Password</label><br/>
                <input className='inputBox' type = "text" name = "password" required/>
            </p>
        </form>
        <p>
            <Button className="loginButton" onClick={clickHanler}  type = "submit" >Login</Button>
        </p>
        <footer>
            <p id="noAccountText">Do not have an account?
                <a href="/Register"> Create acccount</a>
            </p>
        </footer>
    </div>
    
}

export default LoginBox;