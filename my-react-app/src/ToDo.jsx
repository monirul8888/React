import  "./APP.css"
export default function ToDo({
    task = "Not Provided",
    done = false}){
    return(
      <div className="Student">
        <h4>Task: {task} </h4>
        <h4>isDone: {done ? "Completed" : "Pending"}</h4>
      </div>
    )
}