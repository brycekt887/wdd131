let selectElem = document.querySelector('select');
let logo = document.querySelector('.logo'); 

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;

    if (current == 'dark') {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";

        document.querySelector('.container').style.backgroundColor = "#333";
        document.querySelector('.container').style.border = "1px solid #777";

        logo.style.filter = "brightness(0) invert(1)"; 
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

        document.querySelector('.container').style.backgroundColor = "white";
        document.querySelector('.container').style.border = "1px solid #ccc";

        logo.style.filter = "none";
    }
}