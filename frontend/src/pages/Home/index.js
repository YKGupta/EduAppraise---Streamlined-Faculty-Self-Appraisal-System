import React, { useContext, useEffect, useState } from 'react';
import { contains } from '../../utils/Local Storage';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/User/Context';
import Sidebar from '../../components/shared/Sidebar';

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
        userData ? 
            <section>
                <Sidebar />
            </section>
        :
            <div>
                Loading...
            </div>
    )
}

export default Home;
