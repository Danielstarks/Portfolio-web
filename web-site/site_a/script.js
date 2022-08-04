var el = document.querySelector('.menu-mobile-icon');

el.addEventListener('click',()=>{

    var menuItens = document.querySelector('.menu-itens');
    
    if(menuItens.classList.contains('show')){
        menuItens.classList.add('hidde');
        menuItens.classList.remove('show');
    }else{
        menuItens.classList.add('show');
        menuItens.classList.remove('hidde');
    }


    


});