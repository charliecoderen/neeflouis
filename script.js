

var body = document.body;
var btnMand = document.querySelector('article .mand');

function addProd() {
    body.classList.add('shop');
}
 

btnMand.addEventListener('click', addProd);


