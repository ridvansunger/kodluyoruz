let userName=prompt("Kullanıcı adınızı giriniz.");

var myName=document.querySelector("#myName");
myName.innerHTML=userName.toUpperCase();



const showTime =() => {
    let myClock=document.querySelector("#myClock");
    let date=new Date();
    myClock.innerHTML=`${date.getHours()}: ${date.getMinutes()}:${date.getSeconds()} <br> ${date.toDateString("dd/mm/yyyy")}`  
}

setInterval(showTime,1000);