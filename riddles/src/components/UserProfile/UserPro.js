import React, { useState, useEffect } from 'react';
import axios from 'axios';

 const UserPro = () => {

    const [user, setUser] = useState({});

    


    useEffect(() => {
        axios.get('https://riddles-backend.herokuapp.com/admin/users/admin/5ee1423ae6731a2610d32b5d', {withCredentials:true})
        .then(res => {
            console.log(res.data);
            setUser(res.data);
        })
    }, []);

    

    return (
        <div>
            <h4>Velkommen:</h4> <p>{user.name}</p>

    
        
            
        </div>
    )
}

export default UserPro;
