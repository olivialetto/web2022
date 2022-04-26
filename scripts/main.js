if (new Date().getHours() > 18) {
//alert(new Date().getHours());
const html = document.querySelector('html');
html.style.backgroundColor = 'black';
html.style.color = 'white';
}
if (new Date().getHours() > 18) {
const wrapper = document.getElementsByClassName('wrapper');
wrapper[0].style.backgroundColor = 'black';
wrapper[0].style.color = 'yellow';
}
