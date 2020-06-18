import React from 'react';
import { useParams } from 'react-router-dom';

 const UserPro = () => {



    const {userName} = useParams();
    

    return (
        <div>
            <h4>Velkommen:</h4> <p>{userName}</p>

        </div>
    )
}

export default UserPro;
