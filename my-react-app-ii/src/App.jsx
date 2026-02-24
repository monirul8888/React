import './App.css'

function App() {
 function handleClick(){
  alert("I am Clicked")
 }
  return (
    <>
      
      <h1>Vite + React</h1>
      {/* <button onClick = "handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
    
     
    </>
  )
}

export default App
