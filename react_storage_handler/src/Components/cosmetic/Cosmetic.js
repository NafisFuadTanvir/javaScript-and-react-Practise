import React from 'react';

const Cosmetic = (props) => {

    const {id,Name}= props.cosmetic;
    return (
        <div>
            <h2>Name is:- {Name} </h2>
            <p>Id is:-{id} </p>
        </div>
    );
};

export default Cosmetic;