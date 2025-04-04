import "./Auth.css";
import ranImage from "../../Assets/Images/random-hd-wallpaper-preview.jpg";

export default function Auth(){
    return(
        <div className="auth_container">
            <img src={ranImage}/>
            <h1>This is the authentication system</h1>
        </div>

    )
}