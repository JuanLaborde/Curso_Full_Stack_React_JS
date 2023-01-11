import React from 'react';
import '../styles/components/pages/SilentHillPage.css';

const SHPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>On the surface, Silent Hill is portrayed as what could
                    be
                    considered an archetypal, peaceful, New England tourist town for relaxation.
                    Chiefess among its industries are tourism and, to a lesser extent, agriculture.
                    <br />
                    However, Silent Hill is shown to be anything but ordinary. A religious extremist
                    doomsday cult known as the Order lurks about the town, orchestrating their
                    malefic
                    endeavors in the shadows. Adamant for the return of their God in order to reach
                    Paradise, the Order has been involved with murder, torture, child abuse, and has
                    even convinced parents to dismember, drown, and set their children on fire,
                    believing their sacrifices to appease God.
                    <br />
                    Worse yet, Silent Hill plays host to a horrific paranormal and supernatural
                    alternate reality known as the Fog World and Otherworld, home to all manner of
                    nightmarish monsters. It is also common to hear air-raid sirens between Fog
                    World
                    and Otherworld shifts.
                </p>
            </div>
            <div className="staff">
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="" alt=""/>
                        <h5>Harry Mason</h5>
                        <h6>S.T.A.R.S Memeber</h6>
                        <p>When Silent Hill became a tourist location around the 1900s, the
                            Order was formed at the same
                            time, and were despised by most of the local citizens, thus their union was carried out in
                            secret. With time, the cult infiltrated the public institutions of the town, gradually
                            gaining
                            more influence and power.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default SHPage;