
import { useState } from "react";
import "./LoginBox.css"


function LoginBox() {
    return <div id = "LoginBorder" className= "center">
        <h2>Login</h2>
        <form>
            <p>
                <label>Email Address: </label>
                <input type="text" name = "email" required/>
            </p>
    
            <p>
                <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Password:  </label>
                <input type = "text" name = "password" required/>
            </p>
        </form>
        <p>
            <button type = "submit">Login</button>
        </p>
        <footer>
            <p>Do not have an account?
                <a href=""> Create acccount</a>
            </p>
        </footer>
    </div>
}


export default LoginBox;