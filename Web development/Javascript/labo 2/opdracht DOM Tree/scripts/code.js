const setup = () => {
    let pElement=document.getElementById("txtOutput")
    let button= document.getElementById("btnWelkom");
    pElement.innerHTML="Welkom!";
    button.addEventListener("click", function(){
        if(pElement.innerHTML==="Hello World!"){
            pElement.innerHTML= "Welkom!";
        }
        else{
            pElement.innerHTML= "Hello World!";
        }

    })
button.addEventListener('click', (btnWelkom) => {})
}
window.addEventListener("load", setup);