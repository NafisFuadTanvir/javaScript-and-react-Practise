import React from 'react';
import './Country.css'

const Country = (props) => {

   
    return (
        <div className='co'>
            <h2>Name:-{props.name}</h2>
            <h3>Area:-{props.area}</h3>
            <img src={props.flags} alt="" />
        </div>
    );
};

export default Country;