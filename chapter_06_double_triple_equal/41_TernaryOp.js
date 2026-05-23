let rajkumar_age=18;
let rj_will_go_goa =rajkumar_age>=18?"Rj will go to Goa":"No Goa for Rj ";
console.log(rj_will_go_goa);

    let a=10;
    a+=10;
    console.log(a);

let actualstatuscode=200;
let expectedstatuscode=200;
let testResult =actualstatuscode===expectedstatuscode?"Test is passed":"Test is failed";
console.log(testResult);

let environment ="staging";
let baseUrl= environment==="Prod"?
"https://www.google.com":"https://www.staging.google.com";
console.log(baseUrl);

let isCI=true;
let browserMode=isCI?"headless":"headed";
console.log("Launching the browser in "+browserMode+" mode");

let responenseTime=500;
let sla=1000;
let slaResult=responenseTime<=sla?"SLA is met":"SLA is not met";
console.log(`Response time: ${responenseTime} ms, SLA: ${sla} ms, Result: ${slaResult}  `);

let condition=true;
let isSKMale=condition? true:false;
console.log("Is SK male? "+isSKMale);

let age=25;
let ispramodage=age>=25?"Pramod is an adult":"Pramod is a minor";       
console.log(ispramodage);

let pramod_age=45;
let is_pramod_d=pramod_age>=18?(pramod_age>=26?"Pramod is a senior citizen":"Pramod is an adult"):"Pramod is a minor";
console.log(is_pramod_d);

let statuscode=404;
let category=
statuscode<300?"Success":
statuscode<400?"Redirection":
statuscode<500?"Client Error": "Server Error";
console.log(`Status code: ${statuscode}, Category: ${category}`);


let x=10;   
let y=20;
let max=x> y ? x : y;
console.log("The maximum value is: "+max);  

let i=20;
let j=12;
let k=37;
let maxofthree=i>j?(i>k?i:k):(j>k?j:k);
console.log("The maximum value among three numbers is: "+maxofthree);


