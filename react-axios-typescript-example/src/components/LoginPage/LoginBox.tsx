import axios from 'axios';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { Login } from "../../models/Login";
import { User } from '../../models/User';
import { UProfile } from "../../models/UserProfile";
import { useAppDispatch, useAppSelector } from '../../shared/Redux/hook';
import CreatePost from '../CreatePost/CreatePost';
import UserProfile from '../UserProfile/UserProfile';
import "./LoginBox.css"
import { selectUser, setUser } from './UserSlice';



function LoginBox() {

    const user = useAppSelector(selectUser);

    const dispatch = useAppDispatch();

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
        })
    }

    // const [EP, setEP] = useState('');

    // const loginForm = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();


    //     const newLogin = {
    //         email: userEmail,
    //         password: userPassword
    //     }

    //     axios.post<Login>(`http://localhost:3000/user/login`, newLogin).then(response => {console.log(response.data);
    // })

    // }

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
            <button onClick={Login} type = "submit" >Login</button>
        </p>
        <footer>
            <p>Do not have an account?
                <a href="/Register"> Create acccount</a>
            </p>
        </footer>
    </div>
    
}


export default LoginBox;