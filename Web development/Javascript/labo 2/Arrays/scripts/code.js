const setup = () => {
    let familie = ["FamilieLid 1", "FamilieLid 2", "FamilieLid 3", "FamilieLid 4", "FamilieLid 5"];
    console.log(familie.length);


    for (let i = 0; i < familie.length; i=i+2) {
    console.log("Familielid " + familie[i]);
    }
    voegNaamToe(familie);// pass-by reference
console.log(familie.join("-"));
}

const voegNaamToe = (leden)=>{

    let naam = prompt("Voeg een naam toe");
    leden.push(naam);

    for(let i=0;i<leden.length;i++){
        console.log("FamilieLid " + leden[i]);
    }
}
window.addEventListener("load", setup);
