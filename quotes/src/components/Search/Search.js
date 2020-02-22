import React, { useRef } from 'react';

import { useHistory } from 'react-router-dom';

const Search = () => {

    const valueRef = useRef(null);
    let history = useHistory();


    const handleClick = () => {
        history.push("/quotes/search/" + valueRef.current.value)

        valueRef.current.value = "";
    }

    const handleEnter = (event) => {

        if (event.keyCode === 13) {
            history.push("/quotes/search/" + valueRef.current.value)

            valueRef.current.value = "";
        }
    }





    return (


        <div id="search" className="form-inline  justify-content-center">
            <input ref={valueRef} onKeyDown={handleEnter} className="form-control mr-sm-2" type="Search" placeholder="Search our collection of inspiring quotes...." aria-label="Search" />
            <button onClick={handleClick} className="btn btn-outline-sucess my-2"><i className="fas fa-search"></i></button>

        </div>


    )
}

export default Search;
