import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Comment, CommentArray } from '../../models/Comment';
import { PostModel } from '../../models/PostModel';
import { User } from '../../models/User';
import { useAppDispatch, useAppSelector } from '../../shared/Redux/hook';
import { setComment } from '../Comment/CommentSlice';
import CreatePost from '../CreatePost/CreatePost';
import { addPost, setPost } from '../Post/PostSlice';
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
        let userEmail = document.querySelector<HTMLInputElement>("#emailAddress")?.value;
        let userPassword = document.querySelector<HTMLInputElement>("#password")?.value;

        console.log(userEmail);
        console.log(userPassword);
        
        

        const newUser = {
            id: 0,
            emailAddress: userEmail,
            password: userPassword,
            givenName: '',
            surname: ''
        }

        let urlpost = `http://localhost:8080/api/posts`;

        axios.get<PostModel[]>(urlpost).then(response => {
          dispatch(setPost(response.data));
        })

        // let urlcomment = `http://localhost:8080/api/comments`;
        // axios.get<Comment[]>(urlcomment).then(response => {
        //     dispatch(setComment(response.data));
        //   })

        let urlUser = `http://localhost:8080/api/login`;

        axios.post<User>(urlUser,newUser).then(response => {
            dispatch(setUser(response.data)); 
            if(response.data.emailAddress !== "User is not logged in"){
                navigate('/CreatePost');
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
                <input id='emailAddress' className='inputBox' type="text" name = "email" required/>
            </p>
    
            <p>
                <label id="passwordText">Password</label><br/>
                <input id='password' className='inputBox' type = "password" /*maxLength={10}*/ name = "password" required/>
            </p>
        </form>
        <p>
            <Button className="loginButton" onClick={Login}  type = "submit" >Login</Button>
        </p>
        <footer>
            <p id="noAccountText">Do not have an account?
                <a href="/Register"> Create acccount</a>
            </p>
        </footer>
    </div>
    
}

export default LoginBox;