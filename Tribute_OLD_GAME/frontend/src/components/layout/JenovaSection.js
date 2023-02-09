import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Jenova = () => {
    useEffect(() => {
        ScrollReveal({
            reset: true,
            distance: '400px',
            duration: 2000,
            delay: 400
        });

        ScrollReveal().reveal('.logo-position', {
            delay: 200,
            origin: 'left'
        });

        ScrollReveal().reveal('.Nav-sh', {
            delay: 200,
            origin: 'left'
        });

        ScrollReveal().reveal('.text-from-left1', {
            delay: 500,
            origin: 'left'
        });
        ScrollReveal().reveal('.Image-metatron', {
            delay: 500,
            origin: 'right'
        });
        ScrollReveal().reveal('.Halo-of-Sun', {
            delay: 600,
            origin: 'left'
        });
        ScrollReveal().reveal('.text-from-right', {
            delay: 600,
            origin: 'right'
        });
        ScrollReveal().reveal('.Image-cult', {
            delay: 700,
            origin: 'right'
        });
        ScrollReveal().reveal('.text-from-left', {
            delay: 700,
            origin: 'left'
        });
        ScrollReveal().reveal('.slider__navi_HIS', {
            delay: 300,
            origin: 'right'
        });
        ScrollReveal().reveal('.flex__container_HIS', {
            delay: 300,
            origin: 'left'
        });
    }, []);

    return (
        <div className="FF-Jenova">
            <div className="Text-Format-FF-Jenova">
                <p className="text-from-left1">Approximately two thousand years ago an alien creature landed on Gaia, having traveled through space on a meteorite.
                    The impact created the North Crater, which froze over and a glacier formed around it over time.</p>
                <img className="Halo-of-Sun" src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675892736/Final%20Fantasy/Jenova_eyjvqi.webp" alt="" />
                <p className="text-from-left1">
                    The creature approached the Cetra and those who were taken victim were infected with a virus (hinted to be genetic material from the creature itself) that mutated them into monsters.
                    In this way, the creature destroyed most of the Cetra civilization. Their daughter race, the humans, hid away while the Cetra were almost eliminated.
                    The few Cetra survivors banded together for the sake of defeating the invader and quarantined it within the North Crater.
                    Despite their victory over the "calamity from the skies" the Cetra civilization was lost with their numbers dwindled to almost nothing while humans spread over the planet.
                    The alien would lie in wait for millennia as it was forgotten by humanity and the Cetra fell into legend.</p>

                <p className="text-from-right">Two-thousand years later almost all memory of the creature has faded.
                    The Shinra Electric Power Company rules the planet with mako energy, but is ever seeking a more efficient way to harvest it and consolidate their power.
                    The Cetra legend of the promised land piqued their interest, and the company began to research the Cetra, a race thought long extinct.
                    Approximately 30 years before the main events of Final Fantasy VII, Professor Gast Faremis exhumed the alien creature's remains and mistakenly identified it as a Cetra, naming it Jenova.
                    The Jenova Project became an effort by a number of Shinra scientists to use Jenova's cells to create a human-Cetra hybrid who would lead them to the promised land.
                    Shinra was, of course, unsuccessful at creating a Cetra with Jenova's cells, but those treated with the cells proved to be super-soldiers, which led to the members of SOLDIER, Shinra's elite military force, being injected with the cells, as well.
                    Sephiroth, Genesis Rhapsodos, and Angeal Hewley were born from the project during its first stages when Shinra was still trying to create a Cetra.
                    Most of the early research took place in Nibelheim's Shinra Mansion, and Jenova was contained within the mako reactor at Mt. Nibel.</p>

            </div>
        </div>
    );
}

export default Jenova;