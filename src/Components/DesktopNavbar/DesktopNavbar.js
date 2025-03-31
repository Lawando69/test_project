import "./DesktopNavbar.css";
import Logo from "../Logo/Logo";

import React, {useContext} from "react";
import { Link } from "react-router-dom";

export default function DesktopNavbar(){
    return(
        <header id="desktop_container">
            <Logo/>
            <Link to="/" className="nav_link">Home</Link>
            <Link to="/exercise" className="nav_link">Exercise</Link>
            <Link to="/about" className="nav_link">About</Link>
        </header>
    )
}