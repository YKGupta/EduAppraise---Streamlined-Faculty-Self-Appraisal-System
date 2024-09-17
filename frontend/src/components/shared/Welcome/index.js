import React, { useContext } from 'react';
import UserContext from '../../../context/User/Context';

const Welcome = () => {

    const { user } = useContext(UserContext);

    return (
        <section>
            <h1>Welcome { user.name }</h1>
        </section>
    )
}

export default Welcome;
