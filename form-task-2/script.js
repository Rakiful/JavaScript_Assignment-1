const myList = document.getElementById("myList");
const loadDataBtn = document.getElementById("loadDataBtn");


const studentArray=["ashaful vai","rakif","rishad","zakia","imtiaz","labib tahsin"];

let index = 0

const loadData=()=>{
    
    for(var i = index; i<studentArray.length; i++){
        const listItem = document.createElement("li");
        listItem.innerText=studentArray[i]
        myList.appendChild(listItem);
        index++;
        break;
    };

    if (index >= studentArray.length) {
        alert("its last ! we have no more student");
    }
};

