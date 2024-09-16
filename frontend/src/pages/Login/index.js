import React, { useContext } from 'react';
import Input from '../../components/atoms/Input';
import styles from './Login.module.scss';
import UserContext from '../../context/User/Context';

const Login = ({ className }) => {

    const { email, setEmail, password, setPassword, loginHandler } = useContext(UserContext);

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
