const userForm = document.getElementById("userForm");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");
const input5 = document.getElementById("input5");
const dataLoad = document.getElementById("loadData");

let userObject={};

let firstName = "";
let lastName = "";
let email = "";
let phone = null;
let address = "";

input1.addEventListener("change",function(event){
    firstName = event.target.value
});
input2.addEventListener("change",function(event){
    lastName = event.target.value
});
input3.addEventListener("change",function(event){
    email = event.target.value
});
input4.addEventListener("change",function(event){
    phone = event.target.value
});
input5.addEventListener("change",function(event){
    address = event.target.value
});


const submitWork=(event)=>{
    event.preventDefault();
    userObject.name=(firstName+" "+lastName);
    userObject.Email=email;
    userObject.Phone=phone;
    userObject.Address=address;
    console.log(userObject);
}

console.log(userObject) //<<<< its not work why ...?

// Submit The Form
userForm.addEventListener("submit",submitWork);