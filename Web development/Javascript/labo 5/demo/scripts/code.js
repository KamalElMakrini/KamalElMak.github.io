const setup = () => {

    document.getElementById("imgPhoto").addEventListener("mouseover", change);
    document.getElementById("imgPhoto").addEventListener("mouseout", mouseOut);
}

const change = () => {
    let photo = document.getElementById("imgPhoto");
    photo.src = "kat2.jpeg";
    photo.alt = "kat";
    photo.className = "size";
    document.getElementById("txtTekst").innerHTML = "photo";
}

const mouseOut = () => {
    let photo = document.getElementById("imgPhoto");
    photo.src = "vives.png";
    photo.alt = "vives";
    photo.className = "size";
    document.getElementById("txtTekst").innerHTML = "Vives";
}
window.addEventListener("load", setup);
