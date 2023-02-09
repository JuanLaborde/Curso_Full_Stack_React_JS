import React, { useEffect } from 'react';
import '../styles/components/pages/HomePage.css';
import ScrollReveal from 'scrollreveal';

const HomePage = (props) => {
    useEffect(() => {
        ScrollReveal({
            reset: true,
            distance: '400px',
            duration: 2000,
            delay: 400
        });

        ScrollReveal().reveal('.text-principal-page', {
            delay: 200,
            origin: 'left'
        });      
   
   
    }, []);
    return (
        <main className="showcase">
            <video src="ImagesVideos//videos/Homevideo.mp4" autoPlay loop muted />
            <div className="text-principal-page">
                <h2 className="Text1">OLD GAME <span>TRIBUTE</span></h2>
                <h3 className="Text2">Games that marked your childhood</h3>
                <p className="Text3">Who hasn't played a video game that marked their childhood? On this page we pay tribute to some of those
                    magical games that made our childhood great with hours and hours of fun.</p>
            </div>
        </main>
    );
}

export default HomePage;