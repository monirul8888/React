import './App.css'

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
      {/* <button onClick = "handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>

      <button onClick={function(){
        alert("Clciked 2");
      }}>Click Me 2</button>

      <button onClick={handleClick3}>Click 3</button>

      <button onClick={()=>handleClick5(5)}>Click 5</button>
    
     
    </>
  )
}

export default App
