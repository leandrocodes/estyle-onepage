let burguer = document.querySelector('.burger')
let navMenu = document.querySelector('.navbar-menu')

burguer.addEventListener('click', () => {
  burguer.classList.toggle('is-active')
  navMenu.classList.toggle('is-active')
})