function getUsers(){
fetch('https://reqres.in/api/users/5')
.then(res => res.json())
.then(data => console.log(data));
}
function addUser(){
    fetch('https://reqres.in/api/users',{
        method:'POST',
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify({
            name:"KHK"
        })
    })
    .then(res => res.json())
    .then(data => console.log(data));
}
function getUserById(id){
    fetch('https://reqres.in/api/users/'+id)
    .then(res => res.json())
    .then(data => console.log(data));
}    
