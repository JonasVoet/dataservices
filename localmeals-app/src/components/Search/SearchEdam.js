import React, { useRef } from 'react';

const SearchEdam = (props) => {

    const valueRef = useRef(null);

    const handleClick = () => {
        props.onSearch(valueRef.current.value);
        valueRef.current.value = "";
    }

    const handleEnter = (event) => {
        if (event.keyCode === 13) {

            props.onSearch(valueRef.current.value);
            valueRef.current.value = "";
        }
    }

    return (
        <div className="button-container">
            <div id="searchedam" className="form-inline  justify-content-center">
                <input ref={valueRef} onKeyDown={handleEnter} className="form-control mr-sm-2" type="Search" placeholder="e.g., salad, chicken, chocolate" aria-label="Search" />

                <button onClick={handleClick} className="button"><i className="fas fa-search"></i>


                </button>
            </div>
        </div>
    )
}

export default SearchEdam;
