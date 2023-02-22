import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';



function App() {

  
  return (
    <div className="App">
   
   <ExternalUsers></ExternalUsers>
      
    </div>
  );
}



function ExternalUsers(){

  const [users,setUsers]= useState([]);
  useEffect(()=>{

  fetch("https://jsonplaceholder.typicode.com/users")
  .then(res=>res.json())
  .then(data=>setUsers(data))

  },[])

return (
<div>
  <h2>External Users</h2>
   {
    users.map(user=><User name={user.name} email={user.email}></User>)
   }
</div>

)

}

function User(props){

  return (
   <div style={{border:'2px solid gray',margin:"20px",padding:"20px"}}>
    <h3>Name:-{props.name}</h3>
    <p>Email:- {props.email}</p>
   </div>
 

  )

}


function Counter(){

  const [count, setCount]= useState(55);

  const increaseState=()=>{

   const newCount= count+1;
   setCount(newCount);

  }
      
  const decreaseState=()=>{

    const newCount= count-1;
    setCount(newCount);

  }
   return(

  <div>

  <h1>counter:-{count} </h1>
  <button onClick={increaseState}>Increase</button>
  <button onClick={decreaseState}>Decrease</button>

  </div>


   )
}





// const products= [

//   {name:"laptop",price:54000},
//   {name:"Mobile",price:19900},
//   {name:"watch",price:2000},
//   {name:"watch",price:2000},
//   {name:"watch",price:2000},
//   {name:"watch",price:2000}

//  ]
// {
//   products.map(product=> <Product name={product.name} price={product.price}></Product>)
// }

// {/* <Product name="Laptop" price="54000"></Product>
// <Product name="Mobile" price="19999"></Product>
// <Product name="Watch" price="1500"></Product> */}

// function Product(props){
// return (

//   <div className="product">
//  <h3>Name:-{props.name} </h3>
//  <p>Price:-{props.price} </p>

//   </div>

//   )
// }


export default App;
