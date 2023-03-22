let counter=0;
let counterDom=document.querySelector("#counter");
let increaseDOM=document.querySelector("#increase");
let decreaseDOM=document.querySelector("#decrease");

counterDom.innerHTML=counter;
increaseDOM.addEventListener("click",clickEvent);
decreaseDOM.addEventListener("click",clickEvent);


function clickEvent(){
    if(this.id=="increase")
        counterDom.innerHTML=counter+=1;
    else if(this.id="decrease")
        counterDom.innerHTML=counter-=1;
}