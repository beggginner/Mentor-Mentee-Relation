import { Link } from 'react-router-dom';
import img3 from '../assets/illustration.png';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const Login = ({ email, password, setEmail, setPassword, emailError,
    passwordError, hasAccount, setHasAccount, handleLogin }) => {

    const [isValid, setIsValid] = useState(false);

    const user = ({
        email: email,
        password: password
    })

    const SignIn = () => {


        axios.post('http://localhost:3001/signin', user)
            .then(resp => {
                console.log(resp);
                if (resp.data == "true") {
                    console.log("here", resp.data === "true");
                    setIsValid(true);
                }
            });

    }

    return (
        <section className="login">
            <div className="loginContainer">
                <label>Login</label>
                <img src={img3} className="center" />
                <label>Username</label>
                <input type="text"
                    autofocus
                    required
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); user.email = email }}></input>
                <p className="errorMsg">{emailError}</p>

                <label>Password</label>
                <input type="password"
                    autofocus
                    required
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); user.password = password }}></input>
                <p className="errorMsg">{passwordError}</p>

                <div className="btnContainer">
                    {
                        <>
                            <button onClick={SignIn}>Verify</button>
                            {isValid ? <Link to="/dashboard"><button>Sign In</button></Link> : <></>}
                            <p>
                                Don't have an account?
                                <Link to='/choose'><span>Sign Up</span></Link>
                            </p >
                        </>
                    }

                </div >
            </div >
        </section >
    );
}

export default Login;