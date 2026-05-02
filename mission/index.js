let selectElem = document.querySelector('select');
let logo = document.querySelector('.logo');
let headerImg = document.querySelector('.header-img');
let container = document.querySelector('.container');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;

    if (current == 'dark') {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";

        container.style.backgroundColor = "#333";
        container.style.border = "1px solid #777";

        headerImg.setAttribute('src', 'images/dark-top.png');
        logo.setAttribute('src', 'images/byu-dark.png');
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

        container.style.backgroundColor = "white";
        container.style.border = "1px solid #ccc";

        headerImg.setAttribute('src', 'images/top.png');
        logo.setAttribute('src', 'images/byui-logo-blue.webp');
    }
}