
// function printHello(name){
//     console.log("Merhaba " +name);
// }

// printHello("Erkan");

/******** */
function addition(num1,num2){
    // console.log(num1+num2);
    return num1+num2;
}

let asd= addition(2,6);

console.log(asd);

/******* */


var num1=7;
var num2=45;

function addition2(){
    var num3=11;
    return num1+num2+num3;
}

/********Async */
/* 
function printScreen1(){
    console.log("First");
}

function printScreen2(){
   setTimeout(function(){
    console.log("Second");
   },3000);
}

function printScreen3(){
    console.log("Third");
}

printScreen1();
printScreen2();
printScreen3();

*/


/******** */
/*
function printScreen1(){
    console.log("First");
}

function printScreen2(callback1,callback2){
    setTimeout(function(){
        callback1();
        console.log("Second");
        callback2();
    },3000)
}

function printScreen3(){
    console.log("Third");
}
printScreen2(printScreen1,printScreen3);
*/

// const carpim=(sayi1,sayi2) => sayi1*sayi2;
// console.log(carpim(3,5));

/*
let experience=prompt("Experience",4)

const developer=experience<5 ? ()=>alert("Yeterince Deneyimli"):()=>alert("Bilmiyor");

developer();
*/

function pow(x,n){
    let result=1;
    for (let i = 0; i < n; i++) {
        result*=x;        
    }
    return result;
}


//alert(pow(2,3));

(aa)=>{
    console.log("Merhaba ASD");
}


// const seriesList = list => {
  
//     list.forEach((series, index) => {
//       console.log(`${index+1}. ${series}`) 
//     });
//   };
  
//   seriesList(["Firefly", "The Mandalorian","Breaking Bad"]);


//   const newArray = (nums) => {

//     const newNums = nums.map(e=>{  
//         if(e%2==0){
//             return e*2
//         }else if(e%2==1){
//             return e*3
//         }
//     });
//    return newNums 
// }

// console.log(newArray([1,2,3,4,5])); 

// iç içe elementler çağrıldı  
const selectBox = document.querySelector('#selectColor');
const button = document.querySelector('#button');
const form = document.querySelector('.inputText');  
const cerceve = document.querySelector('.container');
selectBox.addEventListener('click' ,function(){
    console.log("selectBox");    
    })
form.addEventListener('click',function(){
    console.log("form");
    })
cerceve.addEventListener('click',function(){
    console.log('cerceve');
    })