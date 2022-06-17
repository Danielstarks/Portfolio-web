let menu = documento.querySelector('#menu-icons');
let navlist = documento.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle("bx-x");
    navlist.classList.toggle('open');
};