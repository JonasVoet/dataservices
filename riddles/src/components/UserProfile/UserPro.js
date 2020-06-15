import React, { useState, useEffect } from 'react';
import axios from 'axios';

 const UserPro = () => {

    const [user, setUser] = useState({});

    


    useEffect(() => {
        axios.get('https://riddles-backend.herokuapp.com/admin/users/admin/', {withCredentials:true})
        .then(res => {
            console.log(res.data);
            setUser(res.data);
        })
    }, []);

    

    return (
        <div>
            <h1>hej</h1>

    <h2>{user.name}</h2>
        
            
        </div>
    )
}

export default UserPro;
