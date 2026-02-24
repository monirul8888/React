import './App.css'
import  Batsman from "./Batman.jsx";

function App() 
{
 function handleClick(){
  alert("I am Clicked")
 }


 function handleClick3(){
  alert("I am Clicked 3");
 }

const  handleClick5=(num)=>{
  const newNumber = num+2;
  alert(newNumber);
 }

  return (
    <>
      
      <h1>Vite + React</h1>

      <Batsman name="Monirul"></Batsman>


     
    
     
    </>
  )
}

export default App
