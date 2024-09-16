import React, { useContext, useEffect, useState } from 'react';
import { contains } from '../../utils/Local Storage';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/User/Context';

const Home = () => {

    const navigate = useNavigate();
    const [ userData, setUserData ] = useState({});
    const { userDetails } = useContext(UserContext);

    useEffect(() => {
        if(!contains("authToken"))
        {
            navigate("/login");
            return;
        }

        const func = async () => {
            setUserData(await userDetails());
        }
        func();

        // eslint-disable-next-line
    }, []);

    return (
        <div>
            {
                userData ? 
                    <p>Name = {userData.name}</p>
                :
                    <p>Fetching...</p>
            }
        </div>
    )
}

export default Home;
