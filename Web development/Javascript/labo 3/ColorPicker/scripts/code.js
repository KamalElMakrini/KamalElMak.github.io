const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
}

const update = () => {

   console.log("update");


    document.getElementById("lblRed").innerHTML = document.getElementById("sldRed").value;

    document.getElementById("lblGreen").innerHTML = document.getElementById("sldGreen").value;

    document.getElementById("lblBlue").innerHTML = document.getElementById("sldBlue").value;


    document.getElementById("swatch").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
}
window.addEventListener("load", setup);