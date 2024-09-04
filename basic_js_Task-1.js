// problem 1 : Help The Zoo Manager

const calculateMoney=(ticketSell)=>{
    if( ticketSell > 0){
        let totalTicketPrice = 120 * ticketSell ;
        let afterSeceurityPay = totalTicketPrice - 500 ;
        let afterStafLuanch =  afterSeceurityPay - (50*8);
        let haveMoney = afterStafLuanch;
        console.log(haveMoney);
    }else{
        console.log("invalid number")
    }  
};
calculateMoney(10);
calculateMoney(1055);
calculateMoney(93);
calculateMoney(-130);


//problem 2 : Good Name , Bad Name
const checkName=(name)=>{
    if( typeof name === "string" ){
        if(name.includes("a","y","i","e","o","u","w") === true ){
            console.log("Bad Name");
        }else{
            console.log("Good Name");
        };
    }else{
        console.log("invalid");
    };
};

checkName("salman");
checkName("RAFEE");
checkName("jhankar");
checkName(199);
checkName(["Rashed"]);

//problem 3 : Virus in my Array

const mixArray = [1,null,undefined,18,-19,NaN,"12",[1,2],{ob:"lala"}];
const deleteinvalids=(array)=>{
    const numbers = [];
    if(Array.isArray(array)){
        for(const item of array){
            if(typeof item === "number" && !isNaN(item)){
                numbers.push(item);
            };
        };
        console.log(numbers);
    }else{
        console.log("invalid Array")
    }
};

deleteinvalids([1,null,undefined,18,-19,NaN,"12",[1,2],{ob:"lala"}]);
deleteinvalids(["1",{num:2},NaN]);
deleteinvalids([1,2,-3]);
deleteinvalids({num:[1,2,3]});

// problem 4 : Make A Great Password

const user = {name:"rakif", birthYear:2004, siteName:"google"}

const password=(object)=>{
    if(typeof object === "object" && (Object.keys(object).length) === 3 && object.birthYear.toString().length === 4 ){
        let password = object.siteName+"#"+object.name+"@"+object.birthYear
        console.log(password[0].toUpperCase() + password.slice(1));
    }else{
        console.log("invalid")
    }
}
password({name:"kolimuddin", birthYear:1999, siteName:"google"});
password({name:"rahat", birthYear:2002, siteName:"facebook"});
password({name:"toky", birthYear:200, siteName:"facebook"});


// problem 5 : Monthly Savings of a Freelancer

const monthlySavings=(array,number)=>{
    if(Array.isArray(array) && typeof number === "number"){
        let clientPayment = array;
        let getTotalPayment = 0;
        let needTaxPayment = [];
        let totalTaxPayment = 0;
        
        for(let i=0; i<clientPayment.length; i++){
            if(clientPayment[i] >= 3000){
                needTaxPayment.push(clientPayment[i]);
            };
        };
        for(let i=0;i<clientPayment.length;i++){
            getTotalPayment = getTotalPayment + clientPayment[i];
        }
        for(let i=0;i<needTaxPayment.length;i++){
            totalTaxPayment = totalTaxPayment + needTaxPayment[i];
        }
    
        let totalTax = (totalTaxPayment*20) / 100 ;
        let afterPaymentTax = getTotalPayment - totalTax;
        let livingCost = number ;
        let totalSavings = afterPaymentTax - livingCost;
    
        if(totalSavings < 0){
            console.log("Earn More")
        }else{
            console.log(totalSavings)
        }

    }else{
        console.log("invalid input")
    }
};



monthlySavings([1000,2000,3000],5400);
monthlySavings([1000,2000,2500],5000);
monthlySavings([900,2700,3400],10000);
monthlySavings(100,[900,2700,3400]);
monthlySavings([900,2700,3400],"0");

