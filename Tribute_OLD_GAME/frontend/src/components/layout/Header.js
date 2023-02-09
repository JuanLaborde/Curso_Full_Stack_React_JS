import React from 'react';
import '../../styles/components/layout/Header.css';

const Header = (props) => {
    let spanTexts = document.getElementsByTagName("span");
    window.onload = function () {
        for (spanTexts of spanTexts) {
            spanTexts.classList.add("active");
        }
    }
    return (

        <header>
            <div className="logo" id="Logo-top">
                <h1>OLD GAME</h1>
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
        </header>
    );
}

export default Header;