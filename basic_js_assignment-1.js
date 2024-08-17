// problem-1
function checkDataTypes(val1,val2,val3){
    let checkValue1 = typeof val1;
    let checkValue2 = typeof val2;
    let checkValue3 = typeof val3;
    console.log(checkValue1);
    console.log(checkValue2);
    console.log(checkValue3);
};
checkDataTypes(12,"hello",true);
checkDataTypes({hell0:20},"hello",true);

// problem-2
function evalNumbers(num1,num2,operator){
    if (operator === "+"){
        console.log(num1 + num2);
    }else if(operator === "-"){
        console.log(num1 - num2);
    }else if(operator === "*"){
        console.log(num1 * num2);
    }else if (operator === "/"){
        console.log(num1 / num2);
    }else if(operator === "%"){
        console.log(num1 % num2);
    }else{
        console.log("invalid Operations");
    }
};
evalNumbers(10,30,"+");
evalNumbers(10,30,"-");
evalNumbers(10,30,"*");
evalNumbers(10,30,"/");
evalNumbers(10,30,"%");
evalNumbers(10,30,"**");


// problem-3
function greet(val1){
    console.log("wecome,"+val1+"!");
};
greet("Rakif");
greet("Rishad");


// problem-4
function findLargest(num1,num2,num3){
    if(num1>num2 & num1>num3){
        console.log("the largest number is: "+num1);
    }else if(num2>num1 & num2>num3){
        console.log("the largest number is: "+num2);
    }else{
        console.log("the largest number is: "+num3);
    }
};
findLargest(30,10,90);
findLargest(30,100,90);
findLargest(300,10,90);

// problem-5

let person={
    firstName:"Rakiful"
    ,lastName:"islam"
    ,Age:21
};

function getFullName(objectName){
    console.log(objectName.firstName+" "+objectName.lastName);
};

// getFullName(person);


// problem-6
function isEven(num1){
    console.log((num1 % 2 == 0)? "The number is Even":"The number is Odd");
};
isEven(33);
isEven(22);


// problem-7

function isEqual(num1,num2){
    console.log(num1===num2);
};

isEqual(5,5);
isEqual(5,"5");
isEqual(25,50);
isEqual("5","5");

// problem-8
function reverseArray(array){
    console.log(array.reverse());
}
reverseArray([1,2,3,4]);

// problem-9
let person2={
    Name:"Rakiful"
    ,Age:21
};
function getPropertyValue(objectName,propertyName){
    propertyname = objectName[propertyName];
    console.log(propertyname);
};
getPropertyValue(person2,"Age");
getPropertyValue(person2,"Name");


// problem-10
function parseToInteger(string){
    console.log(parseInt(string));
}
parseToInteger("123");