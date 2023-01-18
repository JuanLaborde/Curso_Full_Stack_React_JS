import React, { useState } from 'react';
function SliderCHSH() {
    const [slideNumber, setSlideNumber] = useState(0);
    const slides = [...document.querySelectorAll(".slide-ch-sh")];
    const numberOfSlides = slides.length;
    const handleNextClick = () => {

        slides.forEach((slide) => {
            slide.classList.remove("active");
        });

        setSlideNumber(prevSlideNumber => {
            if (prevSlideNumber === numberOfSlides - 1) {
                return 0;
            }
            return prevSlideNumber + 1;
        });

        slides[slideNumber].classList.add("active");
    };
    return (
        <section className="format-section-ch-sh">
            <div className="slider-ch-sh">
                <div className="slide-ch-sh active">
                    <img src="Images-video/Resident-Evil/CH-images/Chris.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>H</span>arry <span>M</span>ason - Silent Hill</h2>
                        <p>Father of Cherryl Mason.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="Images-video/Resident-Evil/CH-images/Jill.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>C</span>herryl <span>M</span>ason - Silent Hill</h2>
                        <p>The kind part of Alessa Gillespie.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="Images-video/Resident-Evil/CH-images/Barry.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>C</span>ybil <span>B</span>ennett - Silent Hill</h2>
                        <p>Police officer from Brahms.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="Images-video/Resident-Evil/CH-images/rebr0.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>L</span>isa <span>G</span>arlan - Silent Hill</h2>
                        <p>Nurse in Alchemilla Hospital.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="Images-video/Resident-Evil/CH-images/billr0.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>M</span>ichael <span>K</span>aufman - Silent Hill</h2>
                        <p>Director of Alchemilla Hospital.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="Images-video/Resident-Evil/CH-images/Leon.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>D</span>ahlia <span>G</span>illespie - Silent Hill</h2>
                        <p>Leader of the Cult and mother of Alessa.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="Images-video/Resident-Evil/CH-images/Claire.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>A</span>lessa <span>G</span>illespie - Silent Hill</h2>
                        <p>Creator of the dark world of Silent Hill.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="Images-video/Resident-Evil/CH-images/Ada.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>J</span>ames <span>S</span>underland - Silent Hill 2</h2>
                        <p>He killed his wife Mary.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="Images-video/Resident-Evil/CH-images/Sherry.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>M</span>ary <span>S</span>underland - Silent Hill 2</h2>
                        <p>Cancer patient asked her husband to kill her.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="Images-video/Resident-Evil/CH-images/Annette.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>M</span>aria - Silent Hill 2</h2>
                        <p>An illusion representing his wife, created by James.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="Images-video/Resident-Evil/CH-images/Carlos.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>A</span>ngela <span>O</span>rosco - Silent Hill 2</h2>
                        <p>She is searching the town for her missing mother.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="Images-video/Resident-Evil/CH-images/Brad.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>E</span>ddie <span>D</span>ombrowski - Silent Hill 2</h2>
                        <p>A mentally unstable person who kills for pleasure.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="Images-video/Resident-Evil/CH-images/Ashley.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>H</span>eather <span>M</span>ason - Silent Hill 3</h2>
                        <p>In the past Cherryl the good side of Alessa.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="Images-video/Resident-Evil/CH-images/Luis.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>D</span>ouglas <span>C</span>artland - Silent Hill 3</h2>
                        <p>Private detective hired by the Cult to find Heater.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="Images-video/Resident-Evil/CH-images/Sheva.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>V</span>incent <span>S</span>mith - Silent Hill 3</h2>
                        <p>Claudia's brother and member of the Cult.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="Images-video/Resident-Evil/CH-images/Jake.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>C</span>laudia <span>W</span>olf - Silent Hill 3</h2>
                        <p>New head of the Cult who wants to use Header to resurrect the god of the Cult.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="Images-video/Resident-Evil/CH-images/Ethan.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>H</span>enry <span>T</span>ownshend - Silent Hill The Room</h2>
                        <p>The one chosen to become the 21st victim of Walter Sullivan.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="Images-video/Resident-Evil/CH-images/Mia.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>E</span>ileen <span>G</span>alvin - Silent Hill The Room</h2>
                        <p>Neighbor of Henry and who was chosen to be the 20th victim.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="Images-video/Resident-Evil/CH-images/Weskerre0.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>C</span>ynthia <span>V</span>elasquez - Silent Hill The Room</h2>
                        <p>Victim number 16 of Walter Sullivan.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="Images-video/Resident-Evil/CH-images/Marcus.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>W</span>alter <span>S</span>ullivan - Silent Hill The Room</h2>
                        <p>Serial killer and fanatic of the Cult who wants to carry out the ritual of the 21 sacraments to bring the Goddess.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="Images-video/Resident-Evil/CH-images/Birkin.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>A</span>lex <span>S</span>hepherd - Silent Hill Homecoming</h2>
                        <p>He killed his brother in an accident, but later he found out that he was going to be sacrificed by the Cult for their god.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="Images-video/Resident-Evil/CH-images/Oswell.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>J</span>oshua <span>S</span>hepherd - Silent Hill Homecoming</h2>
                        <p>Alex's dead brother.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="Images-video/Resident-Evil/CH-images/Brian.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>A</span>dam <span>S</span>hepherd - Silent Hill Homecoming</h2>
                        <p>Member of one of the founding families of the Cult who planned to sacrifice his son Joshua.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="Images-video/Resident-Evil/CH-images/Nikolai.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>L</span>illian <span>S</span>hepherd - Silent Hill Homecoming</h2>
                        <p>Woman in catatonic state after failing to sacrifice her son Joshua.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="Images-video/Resident-Evil/CH-images/Ramon.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>S</span>am <span>B</span>artlett - Silent Hill Homecoming</h2>
                        <p>Mayor of Shepherd's Glen, who buried his son alive as part of the pact with the Cult.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="Images-video/Resident-Evil/CH-images/Jackk.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>M</span>artin <span>F</span>itch - Silent Hill Homecoming</h2>
                        <p>Member of one of the founding families, he killed his daughter by dismemberment as part of the pact with the Cult.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="Images-video/Resident-Evil/CH-images/Osmund.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>E</span>lle <span>H</span>olloway - Silent Hill Homecoming</h2>
                        <p>Alex's friend and survivor of the Cult's sacrifices.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="Images-video/Resident-Evil/CH-images/Ricardo.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>C</span>urtis <span>A</span>ckers - Silent Hill Homecoming</h2>
                        <p>Cult member who wants to kill Alex to complete the ritual imposed by the Cult.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="Images-video/Resident-Evil/CH-images/Excella.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>M</span>urphy <span>P</span>endleton - Silent Hill Downpour</h2>
                        <p>Prisoner who was imprisoned for killing his son's murderer.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="Images-video/Resident-Evil/CH-images/Dereck.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>A</span>nne <span>C</span>unningham - Silent Hill Downpour</h2>
                        <p>Daughter of Frank Coleridge, who was murdered by Murphy in return for a favor done by another police officer.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="Images-video/Resident-Evil/CH-images/Carla.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>H</span>oward <span>B</span>lackwood - Silent Hill Downpour</h2>
                        <p>Postmaster of Silent Hill who was trapped in the town despite having no connection to the Cult.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="Images-video/Resident-Evil/CH-images/Evelin.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>G</span>eorge <span>S</span>ewell - Silent Hill Downpour</h2>
                        <p>Corrupt and sadistic policeman who likes to make deals with prisoners in exchange for favors which include murder.</p>
                    </div>
                </div>
                
                <div className="navigation-ch-sh">
                    <i className="fas fa-chevron-right next-btn" onClick={handleNextClick}></i>
                </div>
            </div>
        </section>
    );
}

export default SliderCHSH;