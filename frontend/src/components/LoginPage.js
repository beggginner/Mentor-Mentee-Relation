import { useState, useEffect } from 'react';
import Login from './Login';
import Home from './Home';

function LoginPage() {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    };

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    };

    const handleLogin = () => {
        clearErrors();
    };

    const handleSignUp = () => {
        clearErrors();
    };

    return (
        <div className="App">
            {user ? (
                <Home />
            ) : (
                <Login
                    email={email}
                    password={password}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    emailError={emailError}
                    passwordError={passwordError}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    handleLogin={handleLogin}
                    handleSignUp={handleSignUp}
                />
            )
            }
        </div>
    );
}

export default LoginPage;