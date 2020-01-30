import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const JokeAdmin = () => {

    const [jokes, setJokes] = useState({});

    useEffect(() => {
        axios.get('http://localhost:3000/jokes')
            .then(res => {
                console.log(res);
                setJokes(res.data)

            })
    }, [])


    const jokeList = jokes.length ? (
        jokes.map(joke => {
            return (

              

                <tbody key={joke.id}>

                
     <tr>
      <th scope="row">{joke._id}</th>
      <td>{joke.title}</td>
       <td>{joke.jokeText}</td>
       <td><i className="fas fa-pencil-alt"></i></td>
       <td><i className="fas fa-minus-circle"></i></td>
     
    </tr>


                </tbody>
              

            )
        })
    ) : (
            <div className="center">Ingen jokes at vise</div>
        );




    return (
        <div className="container">

            <h1 className="text-center mb-5">ADMIN</h1>

            <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Overskrift</th>
      <th scope="col">Joketekt</th>
      <th scope="col">Ret</th>
      <th scope="col">Slet</th>
    </tr>

    <tr>
    <th scope="col"><i className="fas fa-plus-circle"></i>Opret Ny</th>
    </tr>
  </thead>

  {/* <tbody> */}
  {jokeList}

  {/* </tbody> */}
  
</table>

            

        </div>
    )
}

export default JokeAdmin;
