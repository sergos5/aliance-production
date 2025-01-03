'use strict'

const navbar = document.querySelector('.navbar')
const logo = document.querySelector('.logo-svg use')
const mMenu = document.querySelector('.mobile-menu')
const mMenuToggle = document.querySelector('.mobile-menu-toggle')

const lightModeOn = () => {
    navbar.classList.add('navbar-light')
    logo.href.baseVal = "image/sprite.svg#logo-dark"
}

const lightModeOff = () => {
    navbar.classList.remove('navbar-light')
    logo.href.baseVal = "image/sprite.svg#logo-light"
}

const openMenu = () => {
    mMenu.classList.add('is-open')
    mMenuToggle.classList.add('close-menu')
    document.body.style.overflow = 'hidden'
    lightModeOn()
}

const closeMenu = () => {
    mMenu.classList.remove('is-open')
    mMenuToggle.classList.remove('close-menu')
    document.body.style.overflow = ''
    if (window.scrollY === 0) lightModeOff()
}

window.addEventListener('scroll', () => {
    (this.scrollY > 1) ? lightModeOn() : lightModeOff()
})

mMenuToggle.addEventListener('click', (event) => {
    event.preventDefault()
    mMenu.classList.contains('is-open') ? closeMenu() : openMenu()
})