import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import User from '../UserProfile/UserPro';

 const Admin = () => {

    const [riddles, setRiddles] = useState({});
    
    

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('https://riddles-backend.herokuapp.com/riddles', {withCredentials: true})
        .then (res => {
            setRiddles(res.data)
        });
    }

    

    const handleDelete = (id) => {
        if (window.confirm('Sure you wanna delete this riddle?')) {
            axios.delete('https://riddles-backend.herokuapp.com/riddles/admin/' + id, {withCredentials: true})
            .then(res => {
                console.log(res);
                fetchData();
            });
        }
    }

    const handleLogout = () => {

            axios.post('https://riddles-backend.herokuapp.com/auth/logout', {}, {withCredentials: true});
    }

    const riddlesList = riddles.length ? (
        riddles.map(riddle => {
            return (

                <tr key={riddle._id}>
                <th scope="row">{riddle._id}</th>
                <td>{riddle.riddleText}</td>
                <td>{riddle.answer}</td>
                <td><Link to={`/edit/${riddle._id}`}><i className="fas fa-pencil-alt"></i></Link></td>
                <td><i onClick={() => handleDelete(riddle._id)} className="fas fa-minus-circle"></i></td>

            </tr>

            )
        })
    ) : (

        <div className="text-center">No riddles to show</div>
    );



    return (
    <div id="admin" className="container">
         
            <h1 className="text-center mt-5 mb-5">ADMIN</h1>

            <User />

            <button onClick={handleLogout}>Logout</button>

            <table className="table">
                <thead>
                    <tr>
                        <th className="heading" scope="col">ID</th>
                        <th className="heading" scope="col">Riddle text</th>
                        <th className="heading" scope="col">Answer</th>
                        <th className="heading" scope="col">Edit</th>
                        <th className="heading" scope="col">Delete</th>
                    </tr>

                    <tr>

                        <th className="heading" scope="col"> <Link to="/add"><i className="fas fa-plus-circle"></i>   </Link>Add new riddle</th>
                    </tr>



                </thead>

                <tbody>


                    {riddlesList}
                </tbody>

            </table>
        </div>
    )
}



export default Admin;
