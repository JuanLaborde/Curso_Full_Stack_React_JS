let spanTexts = document.getElementsByTagName("span");
        window.onload = function () {
            for (spanText of spanTexts) {
                spanText.classList.add("active");
            }
        }


let restartButton = document.querySelector("#restartButton");
restartButton.addEventListener('click', restartButtonpage, false);

function restartButtonpage(event) {
    window.location.reload();

}