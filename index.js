document.querySelector(".form").addEventListener("submit",(e)=>{
    e.preventDefault();

    // for USER local server

    // let user = {
    //     username : document.getElementById("name").value,
    //     password : document.getElementById("pass").value,
    // }

    // console.log(user);


    // fetch("http://localhost:8090/user/4",{
    //     method : "PATCH",
    //     headers : {"Content-Type": "application/json"},
    //     body : JSON.stringify(user),
    // })
    // .then((res)=> res.json)
    // .then((data)=> console.log(data));


    // For CART Local Server 

    let cart = {
        product : document.getElementById("name").value,
        quantity : document.getElementById("pass").value,
    }
    console.log(cart);

    fetch("http://localhost:8090/cart/7",{
        method : "DELETE",
        // headers : {"Content-Type": "application/json"},
        // body : JSON.stringify(cart),
    })
    .then((res)=> res.json)
    .then((data)=> console.log(data));

})