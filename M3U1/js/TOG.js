function LogoCharge() {
    let spanTexts = document.getElementsByTagName("span");
    for (spanText of spanTexts) {
        spanText.classList.add("active");
    }
}
window.onload = setTimeout(LogoCharge, 2500);

const menuToggle = document.querySelector('.toggle')
const menu = document.querySelector('.menu')

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    menu.classList.toggle('active')
});

gsap.to('.over-lay', { y: '-100vh', delay: 1.5 });
gsap.to('.layer-1', { y: '-100vh', delay: .5 });
gsap.to('.layer-2', { y: '-100vh', delay: .7 });
gsap.to('.layer-3', { y: '-100vh', delay: .9 });

    gsap.fromTo('.toggle',
    { x: '30rem', opacity: 0 },
    { x: 0, opacity: 1, ease: 'back.out(1.7)', delay: 2.1 });

gsap.fromTo('.text-principal-page',
    { x: '-30rem', opacity: 0 },
    { x: 0, opacity: 1, ease: 'back.out(1.7)', delay: 2 });

gsap.fromTo('.logo',
    { x: '-30rem', opacity: 0 },
    { x: 0, opacity: 1, ease: 'back.out(1.7)', delay: 2.1 });

function transitionFunction() {
    const transitionContainer = document.querySelector('.over-lay');
    gsap.set(".menu", { visibility: "hidden" });
    gsap.set(".toggle", { visibility: "hidden" });
    gsap.fromTo('.logo',
        { y: 0, opacity: 1 },
        { y: '-30rem', opacity: 0, ease: 'back.out(1.7)', delay: 0.2 });

    gsap.fromTo('.text-principal-page',
        { x: 0, opacity: 1 },
        { x: '-30rem', opacity: 0, ease: 'back.out(1.7)', delay: 0.2 });

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

const button = document.querySelector('.signin_up')

button.addEventListener('click', () => {
    transitionFunction()
});


function newPage() {
    window.location.href = "Signup-login.html";
}

