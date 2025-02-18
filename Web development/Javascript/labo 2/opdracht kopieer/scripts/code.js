const setup = () => {
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);


}

const kopieer = () => {
    let txtInput = document.getElementById("txtInput");
    let tekst = txtInput.value;
    console.log(tekst);
    let txtOutput = document.getElementById("txtOutput");
    txtOutput.textContent = txtInput.value;
}
window.addEventListener("load", setup);
