/* ========================================= Exercise 1 ===========================================================*/
function changeBackgroundColor(color) {
    document.querySelector('.body-color').style.backgroundColor = color;
}

/* ========================================= Exercise 2 ===========================================================*/
const messageEle = document.getElementById('message');
        const counterEle = document.getElementById('the-count');

        messageEle.addEventListener('input', function (e) {
            const target = e.target;
            const maxLength = target.getAttribute('maxlength');

            const currentLength = target.value.length;

            counterEle.innerHTML = `${currentLength}/${maxLength}`;
        });

