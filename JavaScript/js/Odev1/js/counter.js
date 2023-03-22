let counter=localStorage.getItem("counter") ? Number(localStorage.getItem("counter")):0;
let counterDom=document.querySelector("#counter");
let increaseDOM=document.querySelector("#increase");
let decreaseDOM=document.querySelector("#decrease");

counterDom.innerHTML=counter;
increaseDOM.addEventListener("click",clickEvent);
decreaseDOM.addEventListener("click",clickEvent);


function clickEvent(){
   this.id=="increase" ? counterDom.innerHTML=counter+=1 : this.id="decrease" ? counterDom.innerHTML=counter-=1 : counter=0;
   localStorage.setItem("counter",counter);
}