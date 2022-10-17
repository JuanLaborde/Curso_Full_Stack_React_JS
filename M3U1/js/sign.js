function LogoCharge() {
    let spanTexts = document.getElementsByTagName("span");
    for (spanText of spanTexts) {
        spanText.classList.add("active");
    }
}
window.onload = setTimeout(LogoCharge, 2500);

gsap.to('.over-lay', { y: '-100vh', delay: 1.5 });
gsap.to('.layer-1', { y: '-100vh', delay: .5 });
gsap.to('.layer-2', { y: '-100vh', delay: .7 });
gsap.to('.layer-3', { y: '-100vh', delay: .9 });

gsap.fromTo('.container',
    { y: '-50rem', opacity: 0 },
    { y: 0, opacity: 1, ease: 'back.out(1.7)', delay: 1 });

gsap.fromTo('.logo',
    { y: '-30rem', opacity: 0 },
    { y: 0, opacity: 1, ease: 'back.out(1.7)', delay: 1.5 });

gsap.fromTo('.left-panel',
    { x: '-30rem', opacity: 0 },
    { x: 0, opacity: 1, ease: 'back.out(1.7)', delay: 1.5 });

gsap.fromTo('.forms-container',
    { x: '30rem', opacity: 0 },
    { x: 0, opacity: 1, ease: 'back.out(1.7)', delay: 2 });


const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});

function transitionFunction() {
    const transitionContainer = document.querySelector('.over-lay');

    gsap.fromTo('.container',
        { y: 0, opacity: 1 },
        { y: '-50rem', opacity: 0, ease: 'back.out(1.7)', delay: 0.1 });

    gsap.fromTo('.logo',
        { y: 0, opacity: 1 },
        { y: '-30rem', opacity: 0, ease: 'back.out(1.7)', delay: 0.2 });

    gsap.fromTo('.left-panel',
        { x: 0, opacity: 1 },
        { x: '-30rem', opacity: 0, ease: 'back.out(1.7)', delay: 0.2 });

    gsap.fromTo('.forms-container',
        { x: 0, opacity: 1 },
        { x: '30rem', opacity: 0, ease: 'back.out(1.7)', delay: 0.3 });

    const transition1 = gsap.from(transitionContainer, {
        y: "-100vh",
        autoAlpha: 0,
        duration: 0.5,
        delay: 0,
        paused: true,
        ease: Power4.easeInOut
    });

    const transition2 = gsap.to(transitionContainer, {
        y: "100vh",
        duration: 1,
        delay: 0,
        paused: true,
        ease: Power4.easeInOut,
        onComplete: TweenLite.delayedCall(1.5, newPage)
    });
    transition1.play();
    transition2.play();

}

const button = document.querySelector('.btn-home')

button.addEventListener('click', () => {
    transitionFunction()
});

const button2 = document.querySelector('.btn-home2')

button2.addEventListener('click', () => {
    transitionFunction()
});


function newPage() {
    window.location.href = "index.html";
}