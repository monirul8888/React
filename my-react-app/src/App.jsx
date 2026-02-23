
import './App.css'

function App() {


  return (
    <>
    
      <h1>Vite + React</h1>
      <Person></Person>
      <Department></Department>
      
    
     
    </>
  )
}

function Person(){
  const dept = "CSE";
  return(
    <h1>Green University of Bangladesh Department of {dept}</h1>
  )
}


function Department(){
  return(
    <h2>
      Department List
      <ul>
        <li>CSE</li>
        <li>EEE</li>
        <li>BBA</li>
      </ul>
    </h2>
  )
}

export default App
