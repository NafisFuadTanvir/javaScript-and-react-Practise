import logo from './logo.svg';
import './App.css';

const student={
  name: "nafis",
  age: 22
};

const style={

  color:"white",
  backgroundColor:"purple"

};

function App() {

  const names=["nafis","fuad","tanvir","akkas","ali","motabbor"];

  return (

 
    
    <div className="App">
      {
        names.map(name=>  <li>name is:- {name}</li>)
      }

      <h2> Cricketar information</h2>
      <Cricketer name="Nafis Fuad Tanvir" age="22"></Cricketer>
      <Cricketer></Cricketer>
      <Cricketer></Cricketer>
      <Cricketer></Cricketer>
      <Cricketer></Cricketer>
      <h2> Footballer information</h2>
      <Footballer></Footballer>
      <Footballer></Footballer>
      <Footballer></Footballer>
      <Footballer></Footballer>
      <Footballer></Footballer>
      
    </div>
  );
}

function Cricketer(props){

 return (
  
  <div className='crickinfo'>
    <h1>Name:- {props.name} </h1>
    <p> Age:- {props.age}</p>
    <p>Address:- Boalkhali Upazila chittagong</p>
  </div>
  

 )
}

function Footballer(){

  return(
  <div className='container'>
    <h1>Name:- Neymar Junior</h1>
    <p>Country:- Brazil</p>
  </div>

  )
}


export default App;
