const setup = () => {
        let btnTry = document.getElementById("btnTry");

        // Event-based programming
        btnTry.addEventListener("mouseover", mouseHover);
        btnTry.addEventListener("click", onClick);
        btnTry.addEventListener("mouseout", mouseOut);

        // eventListeners CSS
        document.getElementById("btnWithoutBullets")
            .addEventListener("click", withoutBullets);

        document.getElementById("btnWithBullets")
            .addEventListener("click", withBullets);

        //eventListeners difference between "textContent" and "innerHTML"

        document.getElementById("btnContent")
            .addEventListener("click", changeContent);

    }

// mouseHoverFunction
const mouseHover = () => {
        document.getElementById("event").innerHTML += "Mouse Hovered!<br>";

}

// onClickFunction
const onClick = () => {
        document.getElementById("event").innerHTML += "Mouse Clicked!<br>";
}

// mouseOutFunction

const mouseOut = () => {
        document.getElementById("event").innerHTML += "Mouse Out!<br>";
}


//ChangeCSS
const withoutBullets = () => {

        let listItems = document.getElementsByTagName("li");
        for (let i = 0; i < listItems.length; i++) {
               /* listItems[i].style.listStyleType = "none";
                listItems[i].style.backgroundColor = "red";*/
                // 2e manier
               // listItems[i].className = "listItemsStyleNone colorRed";

                //3e manier
                listItems[i].classList.remove("listItemsStyleDisc");
                listItems[i].classList.remove("colorWhite");
                listItems[i].classList.add("listItemsStyleNone");
        }
}

const withBullets = () => {
        let listItems = document.getElementsByTagName("li");
        for (let i = 0; i < listItems.length; i++) {
                //eerste manier => dit niet zo goed
               /* listItems[i].style.listStyleType = "disc";
                listItems[i].style.backgroundColor = "white";*/

                //2e manier
               // listItems[i].className = "listItemsStyleDisc colorWhite";

                //3e manier
                listItems[i].classList.remove("colorWhite");
                listItems[i].classList.add("listItemsStyleDisc");
        }
}

// difference between "textContent" and "innerHTML"
const changeContent = () => {
        document.getElementById("textContent")
            .textContent ="<a href='https://www.vives.be'>VIVES</a>";
        document.getElementById("innerHTML")
            .innerHTML ="<a href='https://www.vives.be'>VIVES</a>";
}

window.addEventListener("load", setup);