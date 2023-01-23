
import React, { useEffect } from 'react';
import '../styles/components/pages/ContactPage.css';

const ContactoPage = (props) => {
    useEffect(() => {
        const inputs = document.querySelectorAll(".input");

        function focusFunc() {
            let parent = this.parentNode;
            parent.classList.add("focus");
        }

        function blurFunc() {
            let parent = this.parentNode;
            if (this.value === "") {
                parent.classList.remove("focus");
            }
        }

        inputs.forEach((input) => {
            input.addEventListener("focus", focusFunc);
            input.addEventListener("blur", blurFunc);
        });

        return () => {
            inputs.forEach((input) => {
                input.removeEventListener("focus", focusFunc);
                input.removeEventListener("blur", blurFunc);
            });
        }
    }, []);
    return (
        <main className="showcase">
            <video src="ImagesVideos/videos/Homevideo.mp4" autoPlay loop muted />
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
                                <li><a href="https://www.facebook.com/"><img src="ImagesVideos/images/facebook.png" alt="" /></a></li>
                                <li><a href="https://twitter.com/?lang=es"><img src="ImagesVideos/images/twitter.png" alt="" /></a></li>
                                <li><a href="https://www.instagram.com/"><img src="ImagesVideos/images/instagram.png" alt="" /></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="contact-form">
                        <span className="circle one"></span>
                        <span className="circle two"></span>

                        <form action="index.html" autoComplete="off">
                            <h3 className="title">Contact us</h3>
                            <div className="input-container">
                                <input type="text" name="name" className="input" />
                                <label htmlFor="">Username</label>
                                <span>Username</span>
                            </div>
                            <div className="input-container">
                                <input type="email" name="email" className="input" />
                                <label htmlFor="">Email</label>
                                <span>Email</span>
                            </div>
                            <div className="input-container">
                                <input type="tel" name="phone" className="input" />
                                <label htmlFor="">Favorite game</label>
                                <span>Favorite game</span>
                            </div>
                            <div className="input-container textarea">
                                <textarea name="message" className="input"></textarea>
                                <label htmlFor="">Message</label>
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