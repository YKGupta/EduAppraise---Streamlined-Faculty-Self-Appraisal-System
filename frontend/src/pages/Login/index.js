import React, { useContext } from 'react';
import Input from '../../components/atoms/Input';
import styles from './Login.module.scss';
import UserContext from '../../context/User/Context';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { put } from '../../utils/Local Storage';

const Login = ({ className }) => {

    const { email, setEmail, password, setPassword, login } = useContext(UserContext);
    const navigate = useNavigate();

    const loginHandler = async (event) => {
        event.preventDefault();
        const success = await login();
        toast("Trying");
        if(success)
        {
            // Navigate to home page
            put("authToken", success);
            navigate("/home");
        }
    };

    return (
        <div className={`${className} ${styles.container}`}>
            <form onSubmit={loginHandler} className={`${styles.form}`}>
                <h2>Login</h2>
                <Input type="text" placeHolder="Enter your email" state={email} setState={setEmail} />
                <Input type="password" placeHolder="Enter your password" state={password} setState={setPassword} />
                <Input type="submit" state={'Submit'} />
            </form>
        </div>
    )
}

export default Login;
