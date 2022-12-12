import React from 'react';
import '../styles/components/pages/NosotrosPage.css';
const NosotrosPage = (props) => {
    return (
        <main className ="holder">
            <div className = "historia">
                <h2>Historia</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className = "staff">
                <h2>Staff</h2>
                <div className = "personas">
                    <div className = "persona">
                        <img src="img/nosotros/nosotros1.jpg" alt ="Juan Gomez" />
                        <h5>Juan Gomez</h5>
                        <h6>Gerente General</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className = "persona">
                        <img src="img/nosotros/nosotros2.jpg" alt ="Maria Alvarez" />
                        <h5>Maria Alvarez</h5>
                        <h6>Sub Gerente</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className = "persona">
                        <img src="img/nosotros/nosotros3.jpg" alt ="Agustin Sutton" />
                        <h5>Agustin Sutton</h5>
                        <h6>Recursos Humanos</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className = "persona">
                        <img src="img/nosotros/nosotros4.jpg" alt ="Juliana Tantem" />
                        <h5>Juliana Tantem</h5>
                        <h6>Gerente de Ventas</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className = "persona">
                        <img src="img/nosotros/nosotros5.jpg" alt ="Alberto Silveira" />
                        <h5>Alberto Silveira</h5>
                        <h6>Relaciones Publicas</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default NosotrosPage;