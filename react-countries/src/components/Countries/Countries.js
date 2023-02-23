import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {

  const[countries,setCountries]=useState([]);

  useEffect(()=>{
   fetch("https://restcountries.com/v3.1/all")
   .then(res=>res.json())
   .then(data=>setCountries(data));


  },[])

    return (
        <div className='cou'>
            {
                countries.map(country=> <Country
                
                name={country.name.common} area={country.area}
                image={country.flags.png}
                
                ></Country>)
            }
        </div>
    );
};

export default Countries;