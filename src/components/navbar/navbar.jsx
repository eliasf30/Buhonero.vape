import "./navbar.css"
import { BsWhatsapp } from 'react-icons/bs';

export default function Navbar() {
    return (
        <div className="navbar">
            <a href="https://api.whatsapp.com/send/?phone=3515743464&text=Tengo+una+consulta+sobre+tu+tienda+online&type=phone_number&app_absent=0">
                <BsWhatsapp className="whatsappIcon" />
            </a>
            <h1 className="navbarTitle">Buhonero Vape</h1>
            

        </div>
    )
}