import './App.css'
import ToDo  from './ToDo'
function App() {

  return (
    <>
    
      <h1>React Core Concepts</h1>
      {/* <Person></Person>
      <Student name = "MoniRul" id="221002154" dept = "CSE"></Student>
      <Student name = "Akib" id="221002155" dept = "EEE"></Student>
      <Student name = "Takib" id="221002156" dept = "BBA"></Student>
    
      <Developer name = "MoniRul" tech ="Py"></Developer>
      <Developer name = "Akib" tech ="JS"></Developer> */
      
      
      }
      <ToDo task ="Python" done ={true}></ToDo>
      <ToDo task ="JavaScript" done ={false}></ToDo>
      <ToDo done = {false}></ToDo>
      
     
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


function Student({name, id, dept}){
  return(
   <div className='student'>
    <h3>Student Name: {name}</h3>
    <h3>Student ID: {id} </h3>
    <h3>Department: {dept} </h3>
   </div>
  )
}

export default App
