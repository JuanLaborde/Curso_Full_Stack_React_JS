import {Link} from "react-router-dom";

const Nav = (props) => {
    return (
        <div className="menu">
            <ul>
                <li><Link to="/login" className="signin_up">Log In/Sign Up</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/assassinscreed">Assassins Creed</Link></li>
                <li><Link to="/residentevil">Resident Evil</Link></li>
                <li><Link to="/silenthill">Silent Hill</Link></li>
            </ul>
        </div>
    )
}

export default Nav;