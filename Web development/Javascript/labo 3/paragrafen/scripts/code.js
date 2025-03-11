const setup = () => {
   let elem =document.getElementsByClassName("belangrijk") ;

for (let i = 0; i < elem.length; i++) {
    elem[i].className+=" opvallend";
    // elem[i].classList.add("opvallend");
}

}
window.addEventListener("load", setup);