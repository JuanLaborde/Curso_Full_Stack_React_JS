const Header = (props) => {
    let spanTexts = document.getElementsByTagName("span");
    window.onload = function () {
        for (spanTexts of spanTexts) {
            spanTexts.classList.add("active");
        }
    };
    return (
        <header>
            <div className="logo">
                <h2>OLD GAME</h2>
                <div className="back-text">
                    <span>T</span>
                    <span>R</span>
                    <span>I</span>
                    <span>B</span>
                    <span>U</span>
                    <span>T</span>
                    <span>E</span>
                </div>
            </div>
            <div className="toggle"></div>
        </header>
    )
}

export default Header;