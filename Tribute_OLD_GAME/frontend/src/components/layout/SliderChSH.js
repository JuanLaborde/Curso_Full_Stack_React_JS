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
                    <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675030849/Silent-Hill-Characters/Harry_Mason_numfgk.webp" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>H</span>arry <span>M</span>ason - Silent Hill</h2>
                        <p>Father of Cherryl Mason.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675019257/Silent-Hill-Characters/CherylMason_b1afuh.webp" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>C</span>herryl <span>M</span>ason - Silent Hill</h2>
                        <p>The kind part of Alessa Gillespie.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675019257/Silent-Hill-Characters/CybilBennett_zl0foi.webp" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>C</span>ybil <span>B</span>ennett - Silent Hill</h2>
                        <p>Police officer from Brahms.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675019516/Silent-Hill-Characters/LisaGarland_ismi6o.webp" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>L</span>isa <span>G</span>arlan - Silent Hill</h2>
                        <p>Nurse in Alchemilla Hospital.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675019991/Silent-Hill-Characters/MicahelKauffman_ez04z8.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>M</span>ichael <span>K</span>aufman - Silent Hill</h2>
                        <p>Director of Alchemilla Hospital.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675020090/Silent-Hill-Characters/DahliaGillespie_qxqgdk.webp" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>D</span>ahlia <span>G</span>illespie - Silent Hill</h2>
                        <p>Leader of the Cult and mother of Alessa.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675020425/Silent-Hill-Characters/Alessa_Gillespie_qimhjt.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>A</span>lessa <span>G</span>illespie - Silent Hill</h2>
                        <p>Creator of the dark world of Silent Hill.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675020528/Silent-Hill-Characters/James_Sunderland_xaj86p.webp" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>J</span>ames <span>S</span>underland - Silent Hill 2</h2>
                        <p>He killed his wife Mary.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675020618/Silent-Hill-Characters/Mary_Sunderland_ofrqnw.webp" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>M</span>ary <span>S</span>underland - Silent Hill 2</h2>
                        <p>Cancer patient asked her husband to kill her.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675021376/Silent-Hill-Characters/Maria_vqjciv.webp" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>M</span>aria - Silent Hill 2</h2>
                        <p>An illusion representing his wife, created by James.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675021779/Silent-Hill-Characters/Angela_orosco_no0c6w.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>A</span>ngela <span>O</span>rosco - Silent Hill 2</h2>
                        <p>She is searching the town for her missing mother.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675022055/Silent-Hill-Characters/Eddie_Dombrowski_t4t8mo.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>E</span>ddie <span>D</span>ombrowski - Silent Hill 2</h2>
                        <p>A mentally unstable person who kills for pleasure.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675022214/Silent-Hill-Characters/Heather_Mason_cdbi2w.webp" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>H</span>eather <span>M</span>ason - Silent Hill 3</h2>
                        <p>In the past Cherryl the good side of Alessa.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675022664/Silent-Hill-Characters/Douglas_Cartland_kn3zdx.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>D</span>ouglas <span>C</span>artland - Silent Hill 3</h2>
                        <p>Private detective hired by the Cult to find Heater.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675022759/Silent-Hill-Characters/Vincent_Smith_ih5zz5.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>V</span>incent <span>S</span>mith - Silent Hill 3</h2>
                        <p>Claudia's brother and member of the Cult.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675022858/Silent-Hill-Characters/Claudia_Wolf_qoswar.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>C</span>laudia <span>W</span>olf - Silent Hill 3</h2>
                        <p>New head of the Cult who wants to use Header to resurrect the god of the Cult.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675022985/Silent-Hill-Characters/Henry_Townshend_s672bl.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>H</span>enry <span>T</span>ownshend - Silent Hill The Room</h2>
                        <p>The one chosen to become the 21st victim of Walter Sullivan.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675023276/Silent-Hill-Characters/Eileen_Galvin_omnvdy.gif" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>E</span>ileen <span>G</span>alvin - Silent Hill The Room</h2>
                        <p>Neighbor of Henry and who was chosen to be the 20th victim.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675023431/Silent-Hill-Characters/Cynthia_Velasquez_pjtvqs.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>C</span>ynthia <span>V</span>elasquez - Silent Hill The Room</h2>
                        <p>Victim number 16 of Walter Sullivan.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675023556/Silent-Hill-Characters/Walter_Sullivan_l57jl7.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>W</span>alter <span>S</span>ullivan - Silent Hill The Room</h2>
                        <p>Serial killer and fanatic of the Cult who wants to carry out the ritual of the 21 sacraments to bring the Goddess.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675023699/Silent-Hill-Characters/Alex_Shepherd_jy2ig9.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>A</span>lex <span>S</span>hepherd - Silent Hill Homecoming</h2>
                        <p>He killed his brother in an accident, but later he found out that he was going to be sacrificed by the Cult for their god.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675028613/Silent-Hill-Characters/joshua_eefh3m.webp" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>J</span>oshua <span>S</span>hepherd - Silent Hill Homecoming</h2>
                        <p>Alex's dead brother.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675031162/Silent-Hill-Characters/AdamJoshia_wn027s.webp" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>A</span>dam <span>S</span>hepherd - Silent Hill Homecoming</h2>
                        <p>Member of one of the founding families of the Cult who planned to sacrifice his son Joshua.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675028715/Silent-Hill-Characters/Lillian_Shepherd_jmy67l.webp" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>L</span>illian <span>S</span>hepherd - Silent Hill Homecoming</h2>
                        <p>Woman in catatonic state after failing to sacrifice her son Joshua.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675029237/Silent-Hill-Characters/Sam_Bartlett_nmiqqp.webp" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>S</span>am <span>B</span>artlett - Silent Hill Homecoming</h2>
                        <p>Mayor of Shepherd's Glen, who buried his son alive as part of the pact with the Cult.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675029580/Silent-Hill-Characters/Martin_Fitch_n13tz8.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>M</span>artin <span>F</span>itch - Silent Hill Homecoming</h2>
                        <p>Member of one of the founding families, he killed his daughter by dismemberment as part of the pact with the Cult.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675029698/Silent-Hill-Characters/Elle_Holloway_vl5bs0.webp" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>E</span>lle <span>H</span>olloway - Silent Hill Homecoming</h2>
                        <p>Alex's friend and survivor of the Cult's sacrifices.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675029812/Silent-Hill-Characters/Curtis_Ackers_yl7rzo.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>C</span>urtis <span>A</span>ckers - Silent Hill Homecoming</h2>
                        <p>Cult member who wants to kill Alex to complete the ritual imposed by the Cult.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675029939/Silent-Hill-Characters/Murphy_Pendleton_q2xmsm.jpg" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>M</span>urphy <span>P</span>endleton - Silent Hill Downpour</h2>
                        <p>Prisoner who was imprisoned for killing his son's murderer.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675029998/Silent-Hill-Characters/Anne_Cunningham_lthx0k.webp" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>A</span>nne <span>C</span>unningham - Silent Hill Downpour</h2>
                        <p>Daughter of Frank Coleridge, who was murdered by Murphy in return for a favor done by another police officer.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675030075/Silent-Hill-Characters/Howard_Blackwood_umy4wm.webp" alt="" />
                    <div className="info-ch-sh">
                        <h2><span>H</span>oward <span>B</span>lackwood - Silent Hill Downpour</h2>
                        <p>Postmaster of Silent Hill who was trapped in the town despite having no connection to the Cult.</p>
                    </div>
                </div>
                <div className="slide-ch-sh">
                    <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675030216/Silent-Hill-Characters/George_Sewell_elchfa.webp" alt="" />
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