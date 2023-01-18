import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const CreedSection = () => {
    useEffect(() => {
        ScrollReveal({
            reset: true,
            distance: '400px',
            duration: 2000,
            delay: 400
        });
        ScrollReveal().reveal('.AC-logo-mini', {
            delay: 400,
            origin: 'bottom'
        });
        ScrollReveal().reveal('.Comment', {
            delay: 400,
            origin: 'right'
        });
        ScrollReveal().reveal('.Answer', {
            delay: 600,
            origin: 'left'
        });
    }, []);
    return (
        <div className="creed-speech">
            <span className="AC-logo-mini">?</span>
            <p className="Comment">Where other men blindly follow the truth remember:</p>
           
            <p className="Answer"> Nothing is True.</p>
            <br />
            <p className="Comment">Where other men are limited, by morality or law, remember:</p>
          
            <p className="Answer">Everything is permitted.</p>
            <br />
            <p className="Comment">We work in the dark, to serve the light.</p>
          
            <p className="Answer"> We are Assassins.</p>
        </div>
    );
}


export default CreedSection;