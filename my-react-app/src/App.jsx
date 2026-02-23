
import './App.css'

function App() {


  return (
    <>
    
      <h1>React Core Concepts</h1>
      <Person></Person>
      <Student></Student>
      <Student></Student>
      <Developer name = "MoniRul" tech ="Py"></Developer>
      <Developer name = "Akib" tech ="JS"></Developer>
  
     
    </>
  )
}

function Developer(props){
  
  return(
    <div style={{
      border: "2px solid green",
      borderRadius: "20px"
    }}>
      <h3>Developer: {props.name}</h3>
      <h3>Technology: {props.tech}</h3>
    </div>
  )
}


function Person(){
  const dept = "CSE";

  const personStyle = {
    color: "green",
    textAlign: "middle",
    fontSize: "30px"
  }


  return(
    <h1 style = {personStyle}>Green University of Bangladesh</h1>
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


function Student(){
  return(
   <div className='student'>
    <p>Name: </p>
    <p>ID: </p>
   </div>
  )
}

export default App
