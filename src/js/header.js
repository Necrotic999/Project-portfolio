const headerBtns = document.querySelector('.header-burger');
const modal = document.querySelector('.modal')
const menuLink = document.querySelector('.menu-link')


headerBtns.addEventListener("click",e => {
    modal.classList.add('active')
} )

menuLink.addEventListener("click",e => {
    modal.classList.toggle('active')
} )

modal.addEventListener("click",e => {
    if(e.target === e.currentTarget) return
        modal.classList.remove('active')
    })
