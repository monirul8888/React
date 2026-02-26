import { use } from "react"
export default function Friends({friendsPromise}){

     const friends = use(friendsPromise);
     
    return(
       
        <div className="card">
            <h2>Friends = {friends.length}</h2>
        </div>
    )
}