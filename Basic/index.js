
const nameButton = () =>{
    const name =document.getElementById("name").value;
    console.log(name);
    const id = document.getElementById("id").value;
    console.log(id);

    const newObj = {name, id};
    console.log(newObj);

    localStorage.setItem(id, JSON.stringify(newObj));

    

}

const new_id = localStorage.getItem("221002154");
console.log(new_id);

console.log(JSON.parse(new_id));


document.getElementById("clear").addEventListener("click", function(){
    localStorage.clear();
})