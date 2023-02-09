
import React, { useEffect, useState } from 'react';
import '../styles/components/pages/ContactPage.css';
import ScrollReveal from 'scrollreveal';
import axios from 'axios';

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
    useEffect(() => {
        ScrollReveal({
            reset: true,
            distance: '400px',
            duration: 2000,
            delay: 400
        });

        ScrollReveal().reveal('.big-circle', {
            delay: 400,
            origin: 'top'
        });

        ScrollReveal().reveal('.small-cicle', {
            delay: 500,
            origin: 'bottom'
        });

        ScrollReveal().reveal('.Icon1', {
            delay: 600,
            origin: 'top'
        });
        ScrollReveal().reveal('.Icon2', {
            delay: 700,
            origin: 'top'
        });
        ScrollReveal().reveal('.Icon3', {
            delay: 800,
            origin: 'top'
        });

        ScrollReveal().reveal('.contact-info', {
            delay: 200,
            origin: 'top'
        });
        ScrollReveal().reveal('.contact-form', {
            delay: 300,
            origin: 'bottom'
        });
   
    }, []);

    const initialForm = {
        name: '',
        email: '',
        game: '',
        message: ''
    }

    const [sending, setSending] =useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contact',
        formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

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
                                <li className="Icon1"><a href="https://www.facebook.com/"><img src="ImagesVideos/images/facebook.png" alt="" /></a></li>
                                <li className="Icon2"><a href="https://twitter.com/?lang=es"><img src="ImagesVideos/images/twitter.png" alt="" /></a></li>
                                <li className="Icon3"><a href="https://www.instagram.com/"><img src="ImagesVideos/images/instagram.png" alt="" /></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="contact-form">
                        <span className="circle one"></span>
                        <span className="circle two"></span>

                        <form action="/contact" method="post" onSubmit={handleSubmit} autoComplete="off">
                            <h3 className="title">Contact us</h3>
                            <div className="input-container">
                                <input type="text" name="name" value={formData.name} onChange = {handleChange} className="input" />
                                <label htmlFor="">Username</label>
                                <span>Username</span>
                            </div>
                            <div className="input-container">
                                <input type="text" name="email" value={formData.email} onChange = {handleChange} className="input" />
                                <label htmlFor="">Email</label>
                                <span>Email</span>
                            </div>
                            <div className="input-container">
                                <input type="text" name="game" value={formData.game} onChange = {handleChange} className="input" />
                                <label htmlFor="">Favorite game</label>
                                <span>Favorite game</span>
                            </div>
                            <div className="input-container textarea">
                                <textarea name="message" value={formData.message} onChange = {handleChange} className="input"></textarea>
                                <label htmlFor="">Message</label>
                                <span>Message</span>
                            </div>
                            <input type="submit" value="Send" className="btn" />
                            {sending ? <p className="message-send">Sending....</p> : null}
                            {msg ? <p className="message-send">{msg}</p> : null}
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ContactoPage;