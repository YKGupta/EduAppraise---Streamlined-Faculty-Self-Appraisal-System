import React, { useState } from 'react';
import UserContext from '../Context';
import UserData from '../../../data/users.json';

const UserProvider = ({ children }) => {

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const loginHandler = (event) => {
        event.preventDefault();

        // TODO: Replace with API Call

        let json = {
            success: false,
            message: "Not Found"
        };

        for(let user of UserData)
        {
            if(user.email === email)
            {
                json.message = "Invalid Credentials";
                if(user.password === password)
                {
                    json.message = "User Found!";
                    json.success = true;
                    break;
                }
            }
        }
        console.log(json);
        if(json.success)
        {
            
        }
        else
        {

        }
    };

    return (
        <UserContext.Provider value={{ email, setEmail, password, setPassword, loginHandler }}>
            { children }
        </UserContext.Provider>
    )
}

export default UserProvider;
