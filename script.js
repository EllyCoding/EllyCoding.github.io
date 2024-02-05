gsap.from(".common", {x: 800, delay: 1, duration: 2})
gsap.from(".common_welcome_animation", {x: 600, duration: 2, delay: 2, opacity: 0, })
gsap.to(".common_welcome_animation", {x: -400, y: -300, duration: 2, delay: 4, })
gsap.to(".sign", {
    text: "by EllyCoding ©",
    duration: 2,
    delay: 6
})
gsap.from(".ideas", {y: 200, delay: 8, duration: 2, opacity: 0})
gsap.from(".arrow", {y: -60,ease: "bounce", duration: 3, delay: 9, repeat: 2, opacity: 0})


const boxes = document.querySelector(".element-animation");
const btn = document.querySelector(".boton");
btn.addEventListener("click", function(){
    boxes.classList.add("showBoxes");
})



const coctails = document.querySelector(".NOcoctails");
const btnTwo = document.querySelector(".animated-button1");
btnTwo.addEventListener("click", function() {
    coctails.classList.add("showCoctails");
    gsap.from(".showCoctails", {x: 300, duration: 2})
    gsap.to(".react", {
        text: "React is in process... Coming soon!",
        duration: 3,
        delay: 1
    })
})
