import React from 'react';
import '../styles/components/pages/newsPage.css';
import Footer from '../components/layout/Footer';

const NewsPage = (props) => {
    return (
        <main className="portal-top-news">
            <article className="Initial-page-news">
                <div className="Format-Video-Box-news">
                    <video id="Video-Background-news" src="ImagesVideos/videos/newsback.mp4" autoPlay loop muted></video>
                </div>
                <h1 className='Title-news'>OLD GAME TRIBUTE - NEWS</h1>
            <section className="FormatSectionNews">
                <div className="card-news">
                    <div className="ImgBx">
                        <img src="ImagesVideos/images/Logo2TOG2.png" alt="" />
                    </div>
                    <div className="content">
                        <div className='details'>
                            <h2>Page release</h2>
                            <div className='data'>
                                <p>We announce the launch of this page, made with love for games and players. On this page you can see things about your favorite games and if you like you can to share data about them. We hope you like it.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-news">
                    <div className="ImgBx">
                        <img src="ImagesVideos/images/Silent-Hill/SHLogo.png" alt="" />
                    </div>
                    <div className="content">
                        <div className='details'>
                            <h2>Face your worst nightmares</h2>
                            <div className='data'>
                                <p>The acclaimed psychological horror game is here. Delve into the streets of Silent Hill reviewing its history throughout the tribute page to this great game.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-news">
                    <div className="ImgBx">
                        <img src="ImagesVideos/images/re2_logo.png" alt="" />
                    </div>
                    <div className="content">
                        <div className='details'>
                            <h2>Page release</h2>
                            <div className='data'>
                                <p>We announce the launch of this page, made with love for games and players. On this page you can see things about your favorite games and if you like to share data about them. We hope you like it.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-news">
                    <div className="ImgBx">
                        <img src="ImagesVideos/images/re2_logo.png" alt="" />
                    </div>
                    <div className="content">
                        <div className='details'>
                            <h2>Page release</h2>
                            <div className='data'>
                                <p>We announce the launch of this page, made with love for games and players. On this page you can see things about your favorite games and if you like to share data about them. We hope you like it.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="FormatSectionNews2">
                <div className="card-news">
                    <div className="ImgBx">
                        <img src="ImagesVideos/images/Logo2TOG2.png" alt="" />
                    </div>
                    <div className="content">
                        <div className='details'>
                            <h2>Page release</h2>
                            <div className='data'>
                                <p>We announce the launch of this page, made with love for games and players. On this page you can see things about your favorite games and if you like you can to share data about them. We hope you like it.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-news">
                    <div className="ImgBx">
                        <img src="ImagesVideos/images/Silent-Hill/SHLogo.png" alt="" />
                    </div>
                    <div className="content">
                        <div className='details'>
                            <h2>Page release</h2>
                            <div className='data'>
                                <p>We announce the launch of this page, made with love for games and players. On this page you can see things about your favorite games and if you like to share data about them. We hope you like it.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-news">
                    <div className="ImgBx">
                        <img src="ImagesVideos/images/re2_logo.png" alt="" />
                    </div>
                    <div className="content">
                        <div className='details'>
                            <h2>Page release</h2>
                            <div className='data'>
                                <p>We announce the launch of this page, made with love for games and players. On this page you can see things about your favorite games and if you like to share data about them. We hope you like it.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-news">
                    <div className="ImgBx">
                        <img src="ImagesVideos/images/re2_logo.png" alt="" />
                    </div>
                    <div className="content">
                        <div className='details'>
                            <h2>Page release</h2>
                            <div className='data'>
                                <p>We announce the launch of this page, made with love for games and players. On this page you can see things about your favorite games and if you like to share data about them. We hope you like it.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            </article>
            
            <Footer />

        </main>
    );
}

export default NewsPage;