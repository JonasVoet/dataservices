import React, {useState} from 'react';
import Cover from '../Cover/Cover';
import './error.scss';

const Progress = ({done}) => {
    const [style, setStyle] = useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }

        setStyle(newStyle);
    }, 200);

    return (
		<div className="progress">
			<div className="progress-done" style={style}>
				{done}%
			</div>
		</div>
	)
}


const Error = () => {
    return (
     
        <div>
       <Cover />
		<div className=" container pt-5 text-center">
        <h1>I'm sorry but this site is only for admins!</h1>
        <p id="error">You will be redirected soon</p>
		<Progress done="100"/>
        </div>

        </div>
        
    

      
    )
}

export default Error;
