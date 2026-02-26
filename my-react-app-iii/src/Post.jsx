export default function Post({post}){

    console.log(post);

    const {title, body} = post;

    return(
        <div className="card">
         <h2>{title}</h2>
         <p>{body}</p>
         </div>
        
    )
}



// {
//     "userId": 10,
//     "id": 99,
//     "title": "temporibus sit alias delectus eligendi possimus magni",
//     "body": "quo deleniti praesentium dicta non quod\naut est molestias\nmolestias et officia quis nihil\nitaque dolorem quia"
// }