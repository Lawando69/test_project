import "./DesktopNavbar.css";
import Logo from "../Logo/Logo";
import ProfileIcon from "../../Assets/Icons/profile_icon.svg";

import { Link } from "react-router-dom";

export default function DesktopNavbar(){
    return(
        <header className="desktop_container">
            <Logo/>
            <Link to="/" className="nav_link">Home</Link>
            <Link to="/exercise" className="nav_link">Exercise</Link>
            <Link to="/about" className="nav_link">About</Link>
            <Link to="/auth" className="nav_link"><img src={ProfileIcon} alt="Profile Icon" className="profile_icon"/></Link>
        </header>
    )
}