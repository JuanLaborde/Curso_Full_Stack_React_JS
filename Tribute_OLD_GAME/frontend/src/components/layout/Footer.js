import React from 'react';
import '../../styles/components/layout/Footer.css';

const Footer = (props) => {
    return (
        <footer id="footer-SH">
            <div className="footer-SH_copy">
                <div className="footer-SH_copy-left">
                    <div className="logo-footer">
                        <img src="ImagesVideos/images/Logo2TOG2.png" alt="" />
                    </div>
                    <div className="flex-content">

                        <div className="contact-footer">
                            <p>Page developed only for delivery of the end of the Diploma course in full stack web programming with React JS</p>
                            <p>By Juan Martin Laborde, 2023.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-SH_copy-right">

            </div>
        </footer>
    );
}

export default Footer;