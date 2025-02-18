const setup = () => {
    // let lblcursus = document.getElementById('lblcursus');
    // lblcursus.className = 'cursus';

    let lblcursus = document.getElementById('lblcursus');
    lblcursus.addEventListener('mouseover',change);

    let btnSend = document.getElementById('btnSend');
      btnSend.addEventListener("click", show);
}

const show = () => {
  let txtName = document.getElementById('txtName');
  if(txtName.value !== "") {
      alert("Jouw naam is "+ txtName.value);

      console.log("Jouw naam is "+txtName.value);


  }
  else{
      alert("gelieve naam in te vullen");
  }
}

const change = (e) => {
    let lblcursus = document.getElementById('lblcursus');
    lblcursus.className = 'cursus';
}


window.addEventListener("load", setup);