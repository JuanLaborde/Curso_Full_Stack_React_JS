import React from 'react';
import '../styles/components/pages/ContactPage.css';
import VideoBackground from '../ImagesVideos/videos/Homevideo.mp4';
import facebookicon from '../ImagesVideos/images/facebook.png';
import twittericon from '../ImagesVideos/images/twitter.png';
import instagramicon from '../ImagesVideos/images/instagram.png';

const ContactoPage = (props) => {
    return (
        <main className="showcase">
            <video src={VideoBackground} autoPlay loop muted />
            <div className="container">
                <span className="big-circle"></span>
                <span className="small-cicle"></span>
                <div className="form">
                    <div className="contact-info">
                        <h3 className="title">Let's get in touch</h3>
                        <p className="text">
                            Send us a message about what games you would like us to add or comments about what you would
                            like to change on the page
                        </p>

                        <div className="social-media">
                            <p>Connect with us :</p>
                            <ul className="Social">
                                <li><a href=""><img src={facebookicon} alt="" /></a></li>
                                <li><a href=""><img src={twittericon} alt="" /></a></li>
                                <li><a href=""><img src={instagramicon} alt="" /></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="contact-form">
                        <span className="circle one"></span>
                        <span className="circle two"></span>

                        <form action="index.html" autocomplete="off">
                            <h3 className="title">Contact us</h3>
                            <div className="input-container">
                                <input type="text" name="name" className="input" />
                                <label for="">Username</label>
                                <span>Username</span>
                            </div>
                            <div className="input-container">
                                <input type="email" name="email" className="input" />
                                <label for="">Email</label>
                                <span>Email</span>
                            </div>
                            <div class="input-container">
                                <input type="tel" name="phone" className="input" />
                                <label for="">Favorite game</label>
                                <span>Favorite game</span>
                            </div>
                            <div class="input-container textarea">
                                <textarea name="message" class="input"></textarea>
                                <label for="">Message</label>
                                <span>Message</span>
                            </div>
                            <input type="submit" value="Send" className="btn" />
                        </form>
                    </div>
                </div>
            </div>


        </main>
    );
}

export default ContactoPage;