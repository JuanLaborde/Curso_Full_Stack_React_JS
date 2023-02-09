import React from 'react';
import {NavLink} from "react-router-dom";
import '../../styles/components/layout/Nav.css';

const Nav = (props) => {
    return (
        <nav>
            <div className="menu">
                <ul>
                    <li className="underline-hover-efect"><NavLink activeclassname="activo" to="/">Home</NavLink></li>
                    <li className="underline-hover-efect"><NavLink activeclassname="activo" to="/assassinscreed">Assassins Creed</NavLink></li>
                    <li className="underline-hover-efect"><NavLink activeclassname="activo" to="/finalfantasy7">Final Fantasy VII</NavLink></li>
                    <li className="underline-hover-efect"><NavLink activeclassname="activo" to="/residentevil">Resident Evil</NavLink></li>
                    <li className="underline-hover-efect"><NavLink activeclassname="activo" to="/silenthill">Silent Hill</NavLink></li>
                    <li className="underline-hover-efect"><NavLink activeclassname="activo" to="/contact">Contact</NavLink></li>
                    <li className="underline-hover-efect"><NavLink activeclassname="activo" to="/news">News</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;