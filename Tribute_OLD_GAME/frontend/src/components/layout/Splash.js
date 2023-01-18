import React, { useEffect } from 'react';

const Splash = () => {
    useEffect(() => {
        const splash = document.querySelector('.splash');

        setTimeout(() => {
            splash.classList.add('display-none');
        }, 3000);
    }, []);

    return (
        <div className="splash">
            <h1 className="fade-in">Welcome, initiate to our brotherhood. You join of your own free will and we will tell you our story.</h1>
        </div>
    );
}

export default Splash;