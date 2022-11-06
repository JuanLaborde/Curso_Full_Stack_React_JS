const inputs = document.querySelectorAll(".input-ct");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

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

gsap.fromTo('.form-cntc',
    { y: '-50rem', opacity: 0 },
    { y: 0, opacity: 1, ease: 'back.out(1.7)', delay: 1.5 });

gsap.fromTo('.logo',
    { y: '-30rem', opacity: 0 },
    { y: 0, opacity: 1, ease: 'back.out(1.7)', delay: 1.6 });

gsap.fromTo('.big-circle',
    { x: '-30rem', opacity: 0 },
    { x: '-40%', opacity: 1, ease: 'back.out(1.7)', delay: 2.5 });

gsap.fromTo('.small-cicle',
    { x: '30rem', opacity: 0 },
    { x: '-40%', opacity: 1, ease: 'back.out(1.7)', delay: 2.8 });

gsap.fromTo('.face-1',
    { y: '-30rem', opacity: 0 },
    { y: 0, opacity: 1, ease: 'back.out(1.7)', delay: 3 });

gsap.fromTo('.twit-1',
    { y: '-30rem', opacity: 0 },
    { y: 0, opacity: 1, ease: 'back.out(1.7)', delay: 3.3 });

gsap.fromTo('.insta-1',
    { y: '-30rem', opacity: 0 },
    { y: 0, opacity: 1, ease: 'back.out(1.7)', delay: 3.6 });

function transitionFunction() {
    const transitionContainer = document.querySelector('.over-lay');

    gsap.fromTo('.logo',
    { y: 0, opacity: 0 },
    { y: '-30rem', opacity: 1, ease: 'back.out(1.7)', delay: 0.1 });

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

function newPage() {
    window.location.href = "index.html";
}


