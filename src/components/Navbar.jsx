import {Link} from 'react-router-dom'
import {FaChurch} from 'react-icons/fa'

function Navbar() {
    return(
        <nav className="navbar">
            <div className="container nav-container">
                <h1 className="logo"> <FaChurch/>  Grace Church</h1>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/community">Community</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </nav>
    )   
}

export default Navbar;