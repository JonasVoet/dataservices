import React, {useState} from "react";
import Axios from 'axios';



 const Login = () => {

     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");


    function handleSubmit(e){
        e.preventDefault();
        Axios.post("http://localhost:3000/users/user/login", {
             email,
             password
        }).then(response => {
            window.location.href = `/edituser/${response.data}`
        }).catch(error => {
            if(error.response.status === 400){
                alert("Wrong email or password!");
            }
        });
    }


    return (
       <form onSubmit={handleSubmit}>
            <label htmlFor="">Email</label>
            <input type="text" onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password"/>
            <button type="submit">Login</button>
        </form>
    )
}

export default Login;
