import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const FFMateria = () => {
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
        <div className="FF-Materia">
            <div className="Text-Format-FF-Materia">
                <p className="text-from-left1">The knowledge and wisdom of the Ancients is held in the materia. 
                Anyone with this knowledge can freely use the powers of the Land and the Planet. 
                That knowledge interacts between ourselves and the planet calling up magic.</p>
                
                <img className="Image-metatron" src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675641559/Final%20Fantasy/magic_sqrpz9.png" alt="" />
                <p className="text-from-left1">It is used for Materia that will grant spells in the Magic command, and can be used for either curative, effecting, or damaging spells.</p>
                
                <p className="text-from-left1">Command Materia that allows the user to equip certain command abilities in battle, which are not magic or summon commands. 
                The commands have various effects, though most are damaging.</p>
                
                <img className="Halo-of-Sun" src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675641559/Final%20Fantasy/summon_py0gdp.png" alt="" />
                <p className="text-from-right">Support Materia they add support abilities to the paired Magic, Command, or Summon Materia.</p>
                
                <p className="text-from-right">Independent Materia they allow the use of support abilities without the need of pairing the Materia with other Materia which provide command abilities, differentiating them from Support Materia.</p>
                <p className="text-from-right">Materia allows for summoned monsters to be used in equipment and battle for various effects. 
                Summon Materia typically has high stat penalties for equipping them, which they make up for with strong attacks and the ability to use or protect against various status effects and elements.</p>
                
                <img className="Image-cult" src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675641567/Final%20Fantasy/Black_Materia_rvepwk.webp" alt="" />
                <p className="text-from-left">The White Materia is used to speak directly with the Planet and once the Planet receives the message, the Materia glows green. 
                It is used to summon the "Ultimate White Magic", Holy, which summons the full power of the Planet to protect the continuation and harmony of life.</p>
                
                <p className="text-from-left">The Black Materia is a mysterious and incredibly powerful Materia, as well as one of the oldest, having existed since the time of Jenova and the Ancients. 
                It and its counterpart, the White Materia, are the two unique Materia, there being only one of each. 
                It is used to summon the "Ultimate Destructive Magic", Meteor, which has the power to destroy the entire Planet. 
                Few know of its existence, let alone how to use it.</p>
            </div>
        </div>
    );
}

export default FFMateria;