import React from 'react';
import '../styles/components/pages/ResidentEvilPage.css';
import Revideo from '../ImagesVideos/videos/Resident-Evil.mp4';
import RELogo from '../ImagesVideos/images/re2_logo.png';
import UmbrellaLogo from '../ImagesVideos/images/Umbrella-corp.png';

const REPage = (props) => {
    return (
        <main className="portal-top">
            <article className="Initial-page">
                <div className="Format-Video-Box">
                    <video id="Video-Background" src={Revideo} autoPlay loop muted></video>
                </div>
                <aside className="nav-top">
                    <p className="logo-position"><img src={RELogo} width="450" height="120"
                        loading="lazy" alt="" /></p>
                    <br />
                    <ul>
                        <li><a href="#Game-Section" className="underline-hover-efect-re">GAMES</a></li>
                        <li><a href="#History-Section" className="underline-hover-efect-re">HISTORY</a></li>
                        <li><a href="#Character-Section" className="underline-hover-efect-re">CHARACTERS</a></li>
                        <li><a href="#Bio-Weapon-Section" className="underline-hover-efect-re">BIO-WEAPONS</a></li>
                    </ul>
                </aside>
                <div className="banner-Umbrella">
                    <img className="Umbrella-Logo" src={UmbrellaLogo} alt="" />
                    <h6 className="Umbrella-speech">Our Business Is Life Itself...</h6>
                </div>
            </article>
            <article class="contents-page">
            <section class="section-games">
                <div class="inner-game">
                    <h3 id="Game-Section">GAMES
                        <span>Enter the survival horror</span>
                    </h3>
                    <div class="game-images">
                        <section id="imageSlide" class="faded faded-left faded-right">
                            <ul class="imageSlide__slider">
                                <li><img src="Images-video/Resident-Evil/RE0.jpg"/></li>
                                <li><img src="Images-video/Resident-Evil/RE1.jpg"/></li>
                                <li><img src="Images-video/Resident-Evil/RE2.jpg"/></li>
                                <li><img src="Images-video/Resident-Evil/RE3.jpg"/></li>
                                <li><img src="Images-video/Resident-Evil/RE4.jpg"/></li>
                                <li><img src="Images-video/Resident-Evil/RE5.jpg"/></li>
                                <li><img src="Images-video/Resident-Evil/RE6.jpg"/></li>
                                <li><img src="Images-video/Resident-Evil/RE7.jpg"/></li>
                                <li><img src="Images-video/Resident-Evil/RE8.jpg"/></li>
                                <li><img src="Images-video/Resident-Evil/RE-Resistance.jpg"/></li>
                                <li><img src="Images-video/Resident-Evil/RE_ORC.jpg"/></li>
                                <li><img src="Images-video/Resident-Evil/RE_OUTBREAK2_Home.jpg"/></li>
                                <li><img src="Images-video/Resident-Evil/RE_OUTBREAK_Home.jpg"/></li>
                                <li><img src="Images-video/Resident-Evil/RE0.jpg"/></li>
                                <li><img src="Images-video/Resident-Evil/RE1.jpg"/></li>
                                <li><img src="Images-video/Resident-Evil/RE2.jpg"/></li>
                                <li><img src="Images-video/Resident-Evil/RE3.jpg"/></li>
                                <li><img src="Images-video/Resident-Evil/RE4.jpg"/></li>
                                <li><img src="Images-video/Resident-Evil/RE5.jpg"/></li>
                                <li><img src="Images-video/Resident-Evil/RE6.jpg"/></li>
                                <li><img src="Images-video/Resident-Evil/RE7.jpg"/></li>
                                <li><img src="Images-video/Resident-Evil/RE8.jpg"/></li>
                                <li><img src="Images-video/Resident-Evil/RE-Resistance.jpg"/></li>
                                <li><img src="Images-video/Resident-Evil/RE_ORC.jpg"/></li>
                                <li><img src="Images-video/Resident-Evil/RE_OUTBREAK2_Home.jpg"/></li>
                                <li><img src="Images-video/Resident-Evil/RE_OUTBREAK_Home.jpg"/></li>
                            </ul>
                        </section>
                    </div>
                </div>
            </section>
            </article>
        </main>
    );
}

export default REPage;