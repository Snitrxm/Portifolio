/* Abre e fecha menu lateral mobile */

const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains('bi-list')
    ? menuMobile.classList.replace('bi-list', 'bi-x')
    : menuMobile.classList.replace('bi-x', 'bi-list');
    body.classList.toggle('menu-nav-active')
});

/* Fecha o menu quando clicar em algum item */

const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
    item.addEventListener('click', () =>{
        if(body.classList.contains('menu-nav-active')){
            body.classList.remove('menu-nav-active')
            menuMobile.classList.replace('bi-x', 'bi-list')
        }
    })
})

/* Animar items */

const item =document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;
    console.log(windowTop)

    item.forEach(elemtent => {
        if(windowTop > elemtent.offsetTop){
            elemtent.classList.add('animate')
        } else {
            elemtent.classList.remove('animate')
        }
    });
};

animeScroll()


window.addEventListener('scroll', ()=>{
    animeScroll();
})

const button = document.querySelector('#btn-enviar')
const btnLoader = document.querySelector('#btn-loader')

button.addEventListener('click', ()=>{
    btnLoader.style.display = "block";
    button.style.display = "none"
})

/* tirar mensagem dps de 5 segundos */

setTimeout(() => {
    document.querySelector('#alerta').style.display = 'none';
    document.querySelector('#alerta').style.transition = 'all 1s';
}, 5000 )