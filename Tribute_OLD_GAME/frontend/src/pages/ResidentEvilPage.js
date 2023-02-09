import React, { useEffect } from 'react';
import '../styles/components/pages/ResidentEvilPage.css';
import Aos from "aos";
import "aos/dist/aos.css";
import Slider from '../components/layout/REBowSlider';
import ReCharacterSlider from '../components/layout/ChRESlider';
import Footer from '../components/layout/Footer';
import Lateraltop from '../components/layout/Lateral-top';

const REPage = (props) => {
    useEffect(() => {
        Aos.init({ duration: 1000, easing: 'ease' });

    }, [])

    return (
        <main className="portal-top">
            <article className="Initial-page">
                <div className="Format-Video-Box">
                    <video id="Video-Background" src="ImagesVideos/videos/Resident-Evil.mp4" autoPlay loop muted></video>
                </div>
                <aside className="nav-top" >
                    <p className="logo-position" data-aos="fade" data-aos-delay="500"><img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080156/Resident%20Evil/re2_logo_aitrxu.png" width="450" height="120"
                        loading="lazy" alt="" /></p>
                    <br />
                    <ul data-aos="fade-right">
                        <li><a href="#Game-Section" className="underline-hover-efect-re">GAMES</a></li>
                        <li><a href="#History-Section" className="underline-hover-efect-re">HISTORY</a></li>
                        <li><a href="#Character-Section" className="underline-hover-efect-re">CHARACTERS</a></li>
                        <li><a href="#Bio-Weapon-Section" className="underline-hover-efect-re">BIO-WEAPONS</a></li>
                    </ul>
                </aside>
                <div className="banner-Umbrella">
                    <img className="Umbrella-Logo" data-aos="fade-right" src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080162/Resident%20Evil/Umbrella-corp_gb4j5u.png" alt="" />
                    <h6 className="Umbrella-speech" data-aos="fade-left">Our Business Is Life Itself...</h6>
                </div>
            </article>
            <article className="contents-page">
                <section className="section-games">
                    <div className="inner-game">
                        <h3 id="Game-Section" data-aos="flip-left">GAMES
                            <span>Enter the survival horror</span>
                        </h3>
                        <div className="game-images">
                            <section id="imageSlide" className="faded faded-left faded-right">
                                <ul className="imageSlide__slider">
                                    <li><img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080452/Resident%20Evil/Games/RE0_eef1nv.jpg" alt="" /></li>
                                    <li><img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080453/Resident%20Evil/Games/RE1_xrg0tb.jpg" alt="" /></li>
                                    <li><img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080453/Resident%20Evil/Games/RE2_vs4ths.jpg" alt="" /></li>
                                    <li><img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080453/Resident%20Evil/Games/RE3_ftubzt.jpg" alt="" /></li>
                                    <li><img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080453/Resident%20Evil/Games/RE4_tqxvax.jpg" alt="" /></li>
                                    <li><img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080453/Resident%20Evil/Games/RE5_kn8fes.jpg" alt="" /></li>
                                    <li><img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080452/Resident%20Evil/Games/RE6_mwcfni.jpg" alt="" /></li>
                                    <li><img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080453/Resident%20Evil/Games/RE7_e03nqd.jpg" alt="" /></li>
                                    <li><img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080453/Resident%20Evil/Games/RE8_igxcao.jpg" alt="" /></li>
                                    <li><img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080453/Resident%20Evil/Games/RE-Resistance_o416y3.jpg" alt="" /></li>
                                    <li><img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080452/Resident%20Evil/Games/RE_ORC_a803ow.webp" alt="" /></li>
                                    <li><img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080452/Resident%20Evil/Games/RE_OUTBREAK_Home_kvdo4r.webp" alt="" /></li>
                                    <li><img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080452/Resident%20Evil/Games/RE_OUTBREAK2_Home_exdpjm.webp" alt="" /></li>
                                    <li><img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080452/Resident%20Evil/Games/RE0_eef1nv.jpg" alt="" /></li>
                                    <li><img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080453/Resident%20Evil/Games/RE1_xrg0tb.jpg" alt="" /></li>
                                    <li><img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080453/Resident%20Evil/Games/RE2_vs4ths.jpg" alt="" /></li>
                                    <li><img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080453/Resident%20Evil/Games/RE3_ftubzt.jpg" alt="" /></li>
                                    <li><img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080453/Resident%20Evil/Games/RE4_tqxvax.jpg" alt="" /></li>
                                    <li><img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080453/Resident%20Evil/Games/RE5_kn8fes.jpg" alt="" /></li>
                                    <li><img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080452/Resident%20Evil/Games/RE6_mwcfni.jpg" alt="" /></li>
                                    <li><img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080453/Resident%20Evil/Games/RE7_e03nqd.jpg" alt="" /></li>
                                    <li><img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080453/Resident%20Evil/Games/RE8_igxcao.jpg" alt="" /></li>
                                    <li><img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080453/Resident%20Evil/Games/RE-Resistance_o416y3.jpg" alt="" /></li>
                                    <li><img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080452/Resident%20Evil/Games/RE_ORC_a803ow.webp" alt="" /></li>
                                    <li><img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080452/Resident%20Evil/Games/RE_OUTBREAK_Home_kvdo4r.webp" alt="" /></li>
                                    <li><img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080452/Resident%20Evil/Games/RE_OUTBREAK2_Home_exdpjm.webp" alt="" /></li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </section>
                <section className="history-section">
                    <div className="inner-history">
                        <h3 id="History-Section" data-aos="flip-left">HISTORY
                            <span>Everything has a beginning</span>
                        </h3>
                        <section className="sec-01">
                            <div className="container" data-aos="flip-left">
                                <div className="content">
                                    <div className="image">
                                        <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080838/Resident%20Evil/History/Resident-evil-0_sni9zy.webp" alt="" />
                                    </div>
                                    <div className="text-box">
                                        <h4 className="info-title">Resident Evil 0</h4>
                                        <p>In the year 1998, the Raccoon City Police Department dispatched their elite unit
                                            S.T.A.R.S. Bravo
                                            Team to investigate a series of bizarre murders on the outskirts of the
                                            Midwestern
                                            city.

                                            While en route, the team's helicopter is forced to make an emergency landing
                                            falling
                                            a sudden
                                            engine failure. The team set out from the crash site only to discover that the
                                            forest where they
                                            landed hid an overturned military vehicle, dead soldiers, and orders for the
                                            transport of Billy
                                            Coen, a prisoner who had been sentenced to death.

                                            As the team continue their search of the area, rookie member Rebecca Chambers
                                            discovers a
                                            passenger train. Seeing no signs of life, she steps on board...</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="sec-02">
                            <div className="container" data-aos="flip-right">
                                <div className="content">
                                    <div className="text-box2">
                                        <h4 className="info-title">Resident Evil 1</h4>
                                        <p>In the year 1998, the Raccoon City Police Department dispatched their elite unit
                                            S.T.A.R.S. Bravo
                                            Team to investigate a series of bizarre murders on the outskirts of the
                                            Midwestern
                                            city.

                                            After Bravo Team goes missing the S.T.A.R.S. Alpha Team set out to survey the
                                            forest
                                            where Bravo
                                            Team was last heard from, only to discover the wreckage of Bravo Team's
                                            helicopter
                                            and the
                                            corpse of their pilot.

                                            Chris Redfield leads Alpha Team deeper into the forest to continue their search,
                                            where their
                                            unit is ambushed by a pack of undead dogs. The team flee into a nearby mansion,
                                            unaware of the
                                            horrors to come...
                                        </p>
                                    </div>
                                    <div className="image2">
                                        <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080838/Resident%20Evil/History/Resident-evil-1_ikfpkv.jpg" alt="" data-aos="fade-left" />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="sec-01">
                            <div className="container" data-aos="flip-left">
                                <div className="content">
                                    <div className="image">
                                        <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080837/Resident%20Evil/History/Resident-evil-2_mxfbgl.jpg" alt="" data-aos="flip-left" />
                                    </div>
                                    <div className="text-box">
                                        <h4 className="info-title">Resident Evil 2</h4>
                                        <p>On September 29, 1998, two months after the events in the Arklay Mountains, most
                                            citizens of the
                                            Midwestern American mountain community Raccoon City have been transformed into
                                            zombies by the
                                            T-virus, a biological weapon secretly developed by the pharmaceutical company
                                            Umbrella. Leon S.
                                            Kennedy, a police officer on his first day of duty, and Claire Redfield, a
                                            college
                                            student
                                            looking for her brother Chris, make their way to the Raccoon Police Department.
                                            They
                                            discover
                                            that most of the police force have been killed, and that Chris has left town to
                                            investigate
                                            Umbrella's headquarters in Europe...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="sec-02">
                            <div className="container" data-aos="flip-right">
                                <div className="content">
                                    <div className="text-box2">
                                        <h4 className="info-title">Resident Evil 3</h4>
                                        <p>A series of strange disappearances have been occurring in Racoon City. A
                                            specialist
                                            squad of the
                                            police force known as S.T.A.R.S. has been investigating the case, and have
                                            determined that the
                                            pharmaceutical company Umbrella and their biological weapon, the T-Virus, are
                                            behind
                                            the
                                            incidents. Jill Valentine try to make this truth known, but find that the police
                                            department
                                            itself is under Umbrella's sway and their reports are rejected out of hand.
                                            However, soon reports of a grisly "cannibal virus" begin to surface.Jill is
                                            determined to
                                            survive.But Umbrella
                                            send a porwerfull BOW to kill her.
                                        </p>
                                    </div>
                                    <div className="image2">
                                        <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080837/Resident%20Evil/History/Resident-evil-3_fqhkuw.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="sec-01">
                            <div className="container" data-aos="flip-left">
                                <div className="content">
                                    <div className="image">
                                        <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080838/Resident%20Evil/History/Resident-evil-4_mm7nzq.jpg" alt="" data-aos="flip-left" />
                                    </div>
                                    <div className="text-box">
                                        <h4 className="info-title">Resident Evil 4</h4>
                                        <p>Following the unprecedented disaster of the Raccoon City Incident, the Umbrella
                                            Corporation has
                                            collapsed under the weight of public outrage and government intervention. Leon
                                            S.
                                            Kennedy
                                            survived the city's fall, and has now been assigned as a special agent reporting
                                            to
                                            the
                                            President of the United States.
                                            After the President's daughter is kidnapped, Leon is tasked with following
                                            eyewitness reports
                                            leading him to a small village in Europe to look for her. Even the horrors of
                                            Raccoon City
                                            couldn't prepare Leon for the secrets he would soon discover...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="sec-02">
                            <div className="container" data-aos="flip-right">
                                <div className="content">
                                    <div className="text-box2">
                                        <h4 className="info-title">Resident Evil 5</h4>
                                        <p>Ten years ago, the Umbrella Corporation unleashed a biological threat of
                                            unprecedented proportions on Raccoon City. Chris Redfield, one of the few
                                            survivors of the incident, is now working as an agent for the Bioterrorism
                                            Security Assessment Alliance (BSAA). His mission: head to the Kijuju Autonomous
                                            Zone in an undisclosed African country and apprehend an arms dealer specializing
                                            in biological weapons. Little did he know that a darker force was at play--one
                                            that bore a familiar face...
                                        </p>
                                    </div>
                                    <div className="image2">
                                        <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080837/Resident%20Evil/History/Resident-evil-5_bm42fe.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="sec-01">
                            <div className="container" data-aos="flip-left">
                                <div className="content">
                                    <div className="image">
                                        <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080838/Resident%20Evil/History/Resident-evil-6_j9xvps.jpg" alt="" data-aos="flip-left" />
                                    </div>
                                    <div className="text-box">
                                        <h4 className="info-title">Resident Evil 6</h4>
                                        <p> In the face of the continuing threat posed by bioterrorism, the president of the
                                            United States decides to finally shed light on the truth of what happened in
                                            Raccoon City's. On the day of his speech, a bioterrorist attack rocks
                                            the seminar hall--and the truth is swallowed in darkness.
                                            However, the fight is not yet lost. In Tall Oaks, USA, Leon S. Kennedy--framed
                                            for the president's assassination--tries to save the locals from the zombie
                                            threat. In Lianshiang, Chris Redfield must combat a bioterrorism situation of
                                            his own. In the Republic of Edonia, a land wracked by civil war, Jake is hunted
                                            by something inhuman. And behind it all is Ada--though to what end, no one
                                            knows.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="sec-02">
                            <div className="container" data-aos="flip-right">
                                <div className="content">
                                    <div className="text-box2">
                                        <h4 className="info-title">Resident Evil 7</h4>
                                        <p>When Ethan Winters opened his inbox, the last thing he expected was to find an
                                            email from his wife; she had been missing for three years.
                                            The message was simple: "Come get me," and an address in Louisiana.
                                            This leads Ethan to a decrepit mansion in the heart of the bayou. The place has
                                            a seriously creepy vibe, but Ethan continues his search – until a stranger
                                            attacks him and knocks him unconscious.
                                            Ethan has no idea what awaits him when he wakes up...for he is now in the
                                            clutches of the Baker family.
                                        </p>
                                    </div>
                                    <div className="image2">
                                        <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080838/Resident%20Evil/History/Resident-evil-7_coshic.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="sec-01">
                            <div className="container" data-aos="flip-left">
                                <div className="content">
                                    <div className="image" style={{'backgroundColor':'black'}}>
                                        <img
                                            src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675080839/Resident%20Evil/History/Resident-evil-8_ib23xa.png" alt="" data-aos="flip-left" />
                                    </div>
                                    <div className="text-box">
                                        <h4 className="info-title">Resident Evil 8</h4>
                                        <p>Set a few years after the horrifying events in the Baker Family Manor,
                                            the all-new storyline begins with Ethan Winters and his wife Mia living peacefully in a new location,
                                            free from their past nightmares.
                                            Just as they are building their new life together,
                                            tragedy befalls them once again.
                                            When BSAA captain Chris Redfield attacks their home,
                                            Ethan must once again head into hell to get his kidnapped daughter back.
                                            But behind it all is a mysterious sect and Ethan must uncover the darkest secrets to get his daughter back.
                                            Mother Miranda the leader of the cult, kidnapped RosseMary to use her power to revive his dead daughter 100 years ago.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
                <section className="characters-section">
                    <div className="inner-characters">
                        <h3 id="Character-Section" data-aos="flip-left">CHARACTER
                            <span>About heroes and villains</span>
                        </h3>
                    </div>
                    <ReCharacterSlider />
                </section>
                <section className="bioweapon-section">
                    <div className="inner-bioweapon">
                        <h3 id="Bio-Weapon-Section" data-aos="flip-left">BIO-WEAPON
                            <span>Bio Organic Weapons</span>
                        </h3>
                    </div>
                    <Slider />
                </section>
                <Footer />
            </article>
            <Lateraltop />
        </main>
    );
}

export default REPage;