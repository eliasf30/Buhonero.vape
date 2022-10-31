import "./hero.css"
import logo from "../../images/buhonero.png"
import {BsInstagram} from 'react-icons/bs'
export default function Hero() {
    return (
        <div className="hero_Div">
            <img src={logo} style={{margin:"2%"}} />
            <a className="location" href="https://www.google.com/maps/place/C%C3%B3rdoba,%20Argentina">cordoba, argentina</a>
            <a href="https://www.instagram.com/buhonero.vape/">
                <button className="instagramButton">
                    <BsInstagram className="instaIcon"/>
                    <p className="instagramP">@buhonero.vape</p>
                    
                </button>
            </a>
            <p>VAPE STORE</p>
            <p>Productos originales</p>
            <p>📍 Córdoba capital</p>
            <p>Atención 24/7</p>
            <p>Envío gratis</p>
            
        </div>

    )
}
