import React from 'react';
import Cosmetic from '../cosmetic/Cosmetic';

const Cosmetics = () => {

 const cosmetics= [
 {id: 20100243, Name: "Nafis  Tanvir"},
 {id: 2010024,  Name: " Fuad Tanvir"},
 {id: 201002439, Name: "Nafis Fuad "},
 {id: 201002432, Name: "Nafis Fuad Tanvir"},
 {id: 201002434, Name: "Nafis Fu Tanvir"}

 ]

    return (
        <div>
            <h1>Welcome to the cosmetics shop</h1>

            {
                cosmetics.map(cosmetic=><Cosmetic

                 key={cosmetic.id}
                 cosmetic={cosmetic}
                 
                 
                 
                 ></Cosmetic>)
            }
            
        </div>
    );
};

export default Cosmetics;