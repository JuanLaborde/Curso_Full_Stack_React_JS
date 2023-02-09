import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const FirstCivilization = () => {
    useEffect(() => {
        ScrollReveal({
            reset: true,
            distance: '400px',
            duration: 2000,
            delay: 400
        });

        ScrollReveal().reveal('.logo-position-ac', {
            delay: 400,
            origin: 'left'
        });

        ScrollReveal().reveal('.Nav-move', {
            delay: 400,
            origin: 'left'
        });
        
        ScrollReveal().reveal('.Slider-masters', {
            delay: 400,
            origin: 'left'
        });

        ScrollReveal().reveal('.slider__navi_AC', {
            delay: 400,
            origin: 'right'
        });
        
        ScrollReveal().reveal('.flex__container_AC', {
            delay: 400,
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
        <div className="History-1st-civilization">
            <div className="Text-Format-1st-civilization">
                <img className="Image-metatron" src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675099536/Assassins%20Creed/Sword_uaplqv.png" alt="" />
                <p className="text-from-left1">The origins of the First Civilization are unclear. 
                They were responsible for the creation of Homo Sapiens, forming the species in their own image to be a capable, but docile workforce.</p>
                <p className="text-from-left1">In order to assure the control of humanity, various technologies were created, named Pieces of Eden. 
                These pieces tapped into a neuro-transmitter located deep within the human brain, ensuring total obedience. 
                However, there were some humans born without the neuro-transmitter, hypothesized by Clay to be hybrids of the First Civilization and humans, consequently making them immune to the Pieces' control.</p>
                <br />
                <p className="text-from-left1">Instigated by the theft of an Apple of Eden by Adam and Eve, the human rebellion soon erupted into full-scale war with their "gods". 
                While the First Civilization was more technologically advanced and powerful, humanity had the advantage of numbers; most likely outnumbering their creators by the millions, far too much for the Pieces of Eden to effectively handle. 
                The war did eventually end, although the casualties were greater than the First Civilization could have ever anticipated. The distraction of war had blinded them to all else, and their preoccupation with the conflict prevented them from seeing the signs of an impending danger from the "heavens".</p>
                <br />
                <img className="Halo-of-Sun" src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675099531/Assassins%20Creed/Apple_yfu4da.png" alt="" />
                <p className="text-from-right">A select few, not partaking in the war, were aware of the imminent catastrophe and endeavored to prevent it, thinking up various possible ways to protect the earth. 
                The Capitoline Triad, consisting of Minerva, Juno and Jupiter, would select the most promising solutions, following which they tested them in underground temples, also called vaults. 
                All offered solutions failed however, with none providing adequate protection against the massive solar flare that was to come. During this time, Juno was discovered to have her own plans for the world, seeking to conquer it, rather than save it, and was subsequently imprisoned by Minerva and Jupiter. 
                With their time having grown short, Minerva managed to construct a pedestal, called the Eye, which allowed one to alter the patterns and equations of existence and protect the earth by doing so.</p>
                <br />
                <p className="text-from-right">While both races survived the catastrophe, few of either species remained. 
                Working together, they rebuilt their world, though humanity continued to view their counterparts as gods. 
                Despite their survival, the First Civilization was unable to fully recover their numbers, and began an inevitable decline toward extinction.</p>
                <br />
                <img className="Image-cult" src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675099544/Assassins%20Creed/Message_cip8mm.jpg" alt="" />
                <p className="text-from-left">They knew, however, that the catastrophe which had burned their world before would eventually reoccur, and so they took steps to prevent it. 
                Utilizing a second Eye she had built, Minerva recorded a number of holographic, yet interactive, messages to serve as a warning to those who entered the Vault under what would become the city of Rome. 
                In it, Minerva warned of the impending doom, and spoke of the "Temples" that could save Earth from destruction, built by those who "knew to turn away from war". 
                Concurrently, several other members of the First Civilization took independent steps to influence the thriving human race, attempting to put their knowledge to stone or parchment, though these did not withstand the test of time.</p>
                <br />
                <p className="text-from-left">Barely 100 years after the creation of the Temples, the First Civilization was almost completely extinct.</p>
            </div>
        </div>
    );
}

export default FirstCivilization;