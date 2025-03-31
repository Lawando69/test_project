import "./MobileNavbar.css";
import Logo from "../Logo/Logo";

import React, {useState} from "react";
import MenuIcon from "../../Assets/Icons/menu_icon.svg";

export default function MobileNavbar(){
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleOpen(){
        setMenuOpen(!menuOpen);
    }

    var StringClass = "";
    if(menuOpen){
        StringClass = "menu_icon open";
    } else{
        StringClass = "menu_icon";
    }

    return(
        <header id="mobile_container">
            <Logo/>
            <img
                onClick={toggleOpen}
                className={StringClass}
                src={MenuIcon}
                alt="menu_icon"
                />
            <nav id="mobile_navbar" className={ menuOpen ? "open" : ""}>
                <a href="/">HOME</a>
                <a href="/exercise">EXERCISE</a>
                <a href="/about">ABOUT</a>
            </nav>
        </header>
    )
}