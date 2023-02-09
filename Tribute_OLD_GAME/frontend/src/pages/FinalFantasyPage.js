import React, { useEffect } from 'react';
import '../styles/components/pages/FinalFantasy.css';
import Footer from '../components/layout/Footer';
import Lateraltop from '../components/layout/Lateral-top';
import FFHistory from '../components/layout/FF-History';
import FFMateria from '../components/layout/FF-Materia';
import Jenova from '../components/layout/JenovaSection';
import FFCharacters from '../components/layout/FF-Characters';
import ScrollReveal from 'scrollreveal';


const FFPage = (props) => {
    useEffect(() => {
        ScrollReveal({
            reset: true,
            distance: '400px',
            duration: 2000,
            delay: 400
        });

        ScrollReveal().reveal('.image-stickFF', {
            delay: 200,
            origin: 'left'
        });   

        ScrollReveal().reveal('.Nav-FF', {
            delay: 200,
            origin: 'left'
        }); 

        ScrollReveal().reveal('.slider__navi_FFCH', {
            delay: 200,
            origin: 'right'
        });   
        ScrollReveal().reveal('.flex__item_FFCH--right', {
            delay: 200,
            origin: 'right'
        });   
        ScrollReveal().reveal('.flex__item_FFCH--left', {
            delay: 200,
            origin: 'left'
        });   
        
        ScrollReveal().reveal('.slider__navi_FF', {
            delay: 200,
            origin: 'right'
        });   
        ScrollReveal().reveal('.flex__item_FF--right', {
            delay: 200,
            origin: 'right'
        });   
        ScrollReveal().reveal('.flex__item_FF--left', {
            delay: 200,
            origin: 'left'
        });     
   
   
    }, []);
    return (
        <main className="portal-topFF" >
            <article className="Initial-pageFF">
                <div className="Format-Image-BoxFF">
                    <section className="fog">
                        <img className="Image-coverFF" src="https://gh.cdn.sewest.net/assets/ident/news/final-fantasy-vii-remake-zoom-backgrounds/en_US/ffviir-zoom-midgar-city.jpg?quality=65&width=100%25&height=100%25" id="Image-BackgroundFF"
                            alt="" />
                    </section>
                </div>
                <aside className="nav-topFF">
                    <div className="image-stickFF">
                        <p className="logo-positionFF"><img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675462703/Final%20Fantasy/FFVII_khvqis.png" width="600"
                            height="200" loading="lazy" alt="" /></p>
                    </div>

                    <div className="Nav-FF">
                        <ul>
                            <li><a href="#Characters-Section">CHARACTERS</a></li>
                            <li><a href="#History-Section">HISTORY</a></li>
                            <li><a href="#materia-Section">MATERIA</a></li>
                            <li><a href="#jenova-Section">JENOVA</a></li>
                        </ul>
                    </div>
                </aside>
            </article>
            <article className="contents-pageFF">
                <section className="FF-CH-Section">
                    <div className="inner-CH-FF">
                        <h3 className="h3-section-titleFF" id="Characters-Section">CHARACTERS
                            <span>Light vs dark</span>
                        </h3>
                        <FFCharacters />
                    </div>
                </section>
                <section className="history-section-FF">
                    <div className="inner-history-FF">
                        <h3 className="h3-section-title-h" id="History-Section">HISTORY
                            <span>The road to the promised land</span>
                        </h3>
                        <FFHistory />
                    </div>
                </section>
                <section className="materia-section">
                    <div className="inner-materia">
                        <h3 className="h3-section-title-h" id="materia-Section">MATERIA
                            <span>Power made crystal</span>
                        </h3>
                        <FFMateria />
                    </div>
                </section>
                <section className="jenova-section">
                    <div className="inner-jenova">
                        <h3 className="h3-section-title-h" id="jenova-Section">JENOVA
                            <span>Calamity from the skies</span>
                        </h3>
                        <Jenova />
                    </div>
                </section>
                <Footer />
            </article>
            <Lateraltop />
        </main>

    );
}

export default FFPage;