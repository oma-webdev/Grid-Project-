var t1 = gsap.timeline()
let close = document.querySelector('.ri-close-line')
let ham = document.querySelector('.ri-menu-fill')
let right = document.querySelector('#right')
let body = document.querySelector('body')
let main = document.querySelector('.main')

t1.to("#right", {
    right: '0',
    duration: 0.8
})
t1.from("h4", {
    x: 100,
    duration: 0.5,
    opacity: 0,
    stagger: 0.24
})
t1.from(close, {
    y: -50,
    duration: 1,
    opacity: 0,
})
t1.pause()

ham.addEventListener('click', function () {
    t1.play()
})

close.addEventListener('click', function () {
    t1.reverse();
})

body.addEventListener('click', function (event) {
    if (event.target.classList == 'main') {
        t1.reverse();
    }
})
