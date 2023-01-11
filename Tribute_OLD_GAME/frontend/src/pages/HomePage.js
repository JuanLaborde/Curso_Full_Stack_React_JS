import React from 'react';
import '../styles/components/pages/HomePage.css';
import VideoBackground from '../ImagesVideos/videos/Homevideo.mp4';

const HomePage = (props) => {
    return (
        <main className="showcase">
            <video src={VideoBackground} autoPlay loop muted />
            <div className="text-principal-page">
                <h2>Tribute Game</h2>
                <h3>Games that marked your childhood</h3>
                <p>Who hasn't played a video game that marked their childhood? On this page we pay tribute to some of those
                    magical games that made our childhood great with hours and hours of fun.</p>
            </div>
        </main>
    );
}

export default HomePage;