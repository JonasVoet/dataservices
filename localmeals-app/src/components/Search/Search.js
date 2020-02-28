import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';


import './search.scss';


const Search = () => {

    const valueRef = useRef(null);
    let history = useHistory();

    const handleClick = () => {
        history.push('products/search/' + valueRef.current.value)

        valueRef.current.value = "";
    }

    const handleEnter = (event) => {
        if (event.keyCode === 13) {

            history.push('products/search/' + valueRef.current.value)
            valueRef.current.value = "";

        }
    }




    return (
        <div className="button-container">
            <div id="search" className="form-inline  justify-content-center">
                <input ref={valueRef} onKeyDown={handleEnter} className="form-control mr-sm-2" type="Search" placeholder="Search a meal" aria-label="Search" />

                <button onClick={handleClick} className="button"><i className="fas fa-search"></i></button>

            </div>
        </div>
    )
}

export default Search;
