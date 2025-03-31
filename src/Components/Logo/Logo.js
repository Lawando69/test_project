import "./Logo.css";
import LogoImage from "../../Assets/Images/Ashborn_logo_v2.png";

export default function Logo(){
    return(
        <a id="logo" href="/">
            <img 
                src={LogoImage}
                alt="Ashborn Logo"
                className="logo_image"/>
        </a>
    )
}


