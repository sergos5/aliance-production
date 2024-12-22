'use strict'

const navbar = document.querySelector('.navbar')
const logo = document.querySelector('.logo-svg use')
const mMenu = document.querySelector('.mobile-menu')
const mMenuToggle = document.querySelector('.mobile-menu-toggle')

window.addEventListener('scroll', () => {
    if (this.scrollY > 1) {
        navbar.classList.add('navbar-light')
        logo.href.baseVal = "./image/sprite.svg#logo-dark"
    } if (this.scrollY === 0 && !mMenu.classList.contains('is-open')) {
        navbar.classList.remove('navbar-light')
        logo.href.baseVal = "./image/sprite.svg#logo-light"
    }
})

mMenuToggle.addEventListener('click', (event) => {
    event.preventDefault()
    mMenu.classList.toggle('is-open')

    if (mMenu.classList.contains('is-open')) {
        navbar.classList.add('navbar-light')
        logo.href.baseVal = "./image/sprite.svg#logo-dark"

    } else if (!mMenu.classList.contains('is-open') && window.scrollY === 0) {
        navbar.classList.remove('navbar-light')
        logo.href.baseVal = "./image/sprite.svg#logo-light"
    }
})