import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import User from '../UserProfile/UserPro';

 const Admin = () => {

    const [riddles, setRiddles] = useState({});
    const [redirect, setRedirect] = useState(false);
    
    

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('https://riddles-backend.herokuapp.com/riddles', {withCredentials: true})
        .then (res => {
            setRiddles(res.data);
            
        });
    }

    if (redirect) {
        return <Redirect to='/' />
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
        
        const r = window.confirm('Sure you wanna logout?');

        if (r === true) {

            axios.post('https://riddles-backend.herokuapp.com/auth/logout', {}, {withCredentials: true});

            setRedirect(true);

        } else {
            return;
        }      
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

        <section className="text-center">No riddles to show</section>
    );



    return (
    <div id="admin" className="container">
         
            <h1 className="text-center mt-5 mb-5">ADMIN</h1>

            <User />

            <button className="btn.btn-light mb-4" onClick={handleLogout}>Logout</button>

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
