function sendHandle(event){
    event.preventDefault();

    let name=document.querySelector("#name").value;
    let lastname=document.querySelector("#lastname").value;

    alert(`${name} ${lastname} welcome`)
}