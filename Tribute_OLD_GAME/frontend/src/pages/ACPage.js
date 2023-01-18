import React from 'react';
import '../styles/components/pages/Assassins.css';
import Splash from '../components/layout/Splash';
import CreedSection from '../components/layout/creed-section';

const ACPage = (props) => {
    return (
        <main className="portal-top-AC">
            <Splash />
            <article className="Initial-page-ac">
                <aside className="nav-top-ac">
                    <p className="logo-position-ac"><img src="ImagesVideos/images/ACImages/Assassins-Creed-Logo.png" width="450"
                        height="220" loading="lazy" alt="" /></p>
                    <br />
                    <ul>
                        <li style={{ '--clr': 'white' }}><a href="#creed-Section"
                            data-text="&nbsp;CREED&nbsp;">&nbsp;CREED&nbsp;</a></li>
                        <li style={{ '--clr': 'white' }}><a href="#games-Section"
                            data-text="&nbsp;GAMES&nbsp;">&nbsp;GAMES&nbsp;</a></li>
                        <li style={{ '--clr': 'white' }}><a href="#great-masters-Section"
                            data-text="&nbsp;MASTERS&nbsp;">&nbsp;MASTERS&nbsp;</a></li>
                        <li style={{ '--clr': 'white' }}><a href="#first-civilization-Section"
                            data-text="&nbsp;CIVILIZATION&nbsp;">&nbsp;CIVILIZATION&nbsp;</a></li>
                        <li style={{ '--clr': 'white' }}><a href="#Artifacs-section"
                            data-text="&nbsp;TEMPLARS&nbsp;">&nbsp;TEMPLARS&nbsp;</a></li>
                        <li style={{ '--clr': 'white' }}><a href="#animus-sections"
                            data-text="&nbsp;ANIMUS&nbsp;">&nbsp;ANIMUS&nbsp;</a></li>
                        <li style={{ '--clr': 'white' }}><a href="#history-section"
                            data-text="&nbsp;HISTORY&nbsp;">&nbsp;HISTORY&nbsp;</a></li>
                    </ul>
                </aside>
            </article>
            <article className="contents-page-ac">
                <section className="section-creed">
                    <div className="inner-creed">
                        <h3 id="creed-Section">CREED
                            <span>Our ancient belief</span>
                        </h3>
                        <CreedSection />
                    </div>
                </section>
                <section className="games-section-ac">
                    <div className="inner-games-ac">
                        <h3 id="games-Section">GAMES
                            <span>Relive the history</span>
                        </h3>
                        <div className="game-images">
                        <section id="imageSlide" className="faded faded-left faded-right">
                            <ul className="imageSlide__slider">
                                <li><img src="https://upload.wikimedia.org/wikipedia/en/5/52/Assassin%27s_Creed.jpg" alt="" /></li>
                                <li><img
                                    src="https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Assassins_Creed_2_Box_Art.JPG/220px-Assassins_Creed_2_Box_Art.JPG" alt="" />
                                </li>
                                <li><img
                                    src="https://upload.wikimedia.org/wikipedia/en/2/2a/Assassins_Creed_brotherhood_cover.jpg" alt="" />
                                </li>
                                <li><img
                                    src="https://upload.wikimedia.org/wikipedia/en/d/d9/Assassins_Creed_Revelations_Cover.jpg" alt="" />
                                </li>
                                <li><img
                                    src="https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Assassin%27s_Creed_III_Game_Cover.jpg/220px-Assassin%27s_Creed_III_Game_Cover.jpg" alt="" />
                                </li>
                                <li><img
                                    src="https://upload.wikimedia.org/wikipedia/en/2/28/Assassin%27s_Creed_IV_-_Black_Flag_cover.jpg" alt="" />
                                </li>
                                <li><img src="https://upload.wikimedia.org/wikipedia/en/a/ae/Assassin%27s_Creed_Rogue.jpg" alt="" />
                                </li>
                                <li><img
                                    src="https://upload.wikimedia.org/wikipedia/en/4/41/Assassin%27s_Creed_Unity_cover.jpg" alt="" />
                                </li>
                                <li><img
                                    src="https://upload.wikimedia.org/wikipedia/en/f/f2/Assassin%27s_Creed_Syndicate_cover.jpg" alt="" />
                                </li>
                                <li><img
                                    src="https://upload.wikimedia.org/wikipedia/en/4/4a/Assassin%27s_Creed_Origins_Cover_Art.png" alt="" />
                                </li>
                                <li><img src="https://upload.wikimedia.org/wikipedia/en/9/99/ACOdysseyCoverArt.png" alt="" /></li>
                                <li><img
                                    src="https://upload.wikimedia.org/wikipedia/en/f/ff/Assassin%27s_Creed_Valhalla_cover.jpg" alt="" />
                                </li>
                                <li><img
                                    src="https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Assassin%27s_Creed_Mirage_cover.jpeg/220px-Assassin%27s_Creed_Mirage_cover.jpeg" alt="" />
                                </li>
                                <li><img src="https://upload.wikimedia.org/wikipedia/en/5/52/Assassin%27s_Creed.jpg" alt="" /></li>
                                <li><img
                                    src="https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Assassins_Creed_2_Box_Art.JPG/220px-Assassins_Creed_2_Box_Art.JPG" alt="" />
                                </li>
                                <li><img
                                    src="https://upload.wikimedia.org/wikipedia/en/2/2a/Assassins_Creed_brotherhood_cover.jpg" alt="" />
                                </li>
                                <li><img
                                    src="https://upload.wikimedia.org/wikipedia/en/d/d9/Assassins_Creed_Revelations_Cover.jpg" alt="" />
                                </li>
                                <li><img
                                    src="https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Assassin%27s_Creed_III_Game_Cover.jpg/220px-Assassin%27s_Creed_III_Game_Cover.jpg" alt="" />
                                </li>
                                <li><img
                                    src="https://upload.wikimedia.org/wikipedia/en/2/28/Assassin%27s_Creed_IV_-_Black_Flag_cover.jpg" alt="" />
                                </li>
                                <li><img src="https://upload.wikimedia.org/wikipedia/en/a/ae/Assassin%27s_Creed_Rogue.jpg" alt="" />
                                </li>
                                <li><img
                                    src="https://upload.wikimedia.org/wikipedia/en/4/41/Assassin%27s_Creed_Unity_cover.jpg" alt="" />
                                </li>
                                <li><img
                                    src="https://upload.wikimedia.org/wikipedia/en/f/f2/Assassin%27s_Creed_Syndicate_cover.jpg" alt="" />
                                </li>
                                <li><img
                                    src="https://upload.wikimedia.org/wikipedia/en/4/4a/Assassin%27s_Creed_Origins_Cover_Art.png" alt="" />
                                </li>
                                <li><img src="https://upload.wikimedia.org/wikipedia/en/9/99/ACOdysseyCoverArt.png/" alt="" /></li>
                                <li><img
                                    src="https://upload.wikimedia.org/wikipedia/en/f/ff/Assassin%27s_Creed_Valhalla_cover.jpg" alt="" />
                                </li>
                                <li><img
                                    src="https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Assassin%27s_Creed_Mirage_cover.jpeg/220px-Assassin%27s_Creed_Mirage_cover.jpeg" alt="" />
                                </li>
                            </ul>
                        </section>
                    </div>
                    </div>
                    
                </section>
            </article>
        </main>
    );
}

export default ACPage;