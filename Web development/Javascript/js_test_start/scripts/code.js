const setup = () => {
    let select = document.getElementById('select');
    select.addEventListener('change', photo);

}

const photo = () => {
    let eenEi = document.getElementById('eenEi');
    let imgKip = document.getElementById('img');
    let zonderEi = document.getElementById('zonderEi');

    if (eenEi) {
        imgKip.src= "images/with-egg.png" ;
        document.getElementById("img").textContent=photo;
    }
    else if (zonderEi) {
        imgKip.src =;
        document.getElementById("img").textContent=photo;
    }
}
window.addEventListener("load", setup);