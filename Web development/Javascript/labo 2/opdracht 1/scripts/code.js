const setup = () => {
    window.alert("Dit is een mededeling");

    window.confirm("Weet u het zeker?");
    console.log(window.confirm);

    window.prompt("Wat is uw naam", "onbekend");



}
window.addEventListener("load", setup);