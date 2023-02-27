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

        let urlpost = `http://localhost:8080/api/posts`;

        axios.get<PostModel[]>(urlpost).then(response => {
          dispatch(setPost(response.data));
        })

        let urlcomment = `http://localhost:8080/api/comments`;
        axios.get<Comment[]>(urlcomment).then(response => {
            dispatch(setComment(response.data));
          })

        let url = `http://localhost:8080/api/login`;

        axios.post<User>(url,newUser).then(response => {
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
        <h2>Login</h2>
        <form>
            <p>
                <label>Email Address: </label>
                <input id='loginEmail' type="text" name = "email" required/>
            </p>
    
            <p>
                <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Password:  </label>
                <input id='loginPassword' type = "text" name = "password" required/>
            </p>
        </form>
        <p>
            <button onClick={clickHanler}  type = "submit" >Login</button>
        </p>
        <footer>
            <p>Do not have an account?
                <a href="/Register"> Create acccount</a>
            </p>
        </footer>
    </div>
    
}

export default LoginBox;