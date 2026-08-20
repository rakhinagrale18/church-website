import {Link} from 'react-router-dom'
import{FaLocationDot} from 'react-icons/fa6'
import{FaPhoneAlt} from 'react-icons/fa'
import{FaEnvelope, FaClock} from 'react-icons/fa'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-col">
                    <h3 className="logo">Grace Church</h3>
                    <p>A place of Faith, Community and Hope. Everyone is welcome to join our family.</p>
                </div>

                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <Link to="/">Home</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/community">Community</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                <div className="footer-col">
                    <h4>Contact Info </h4>
                    <p><b> <FaLocationDot/>  Address:</b>123 Main Street, Anytown, Nagpur</p>
                    <p><b><FaPhoneAlt/>  Phone:</b> 1234567890</p>
                    <p><b> <FaEnvelope/>  Email:</b> info@grace.com</p>
                </div>

                <div className="footer-col">
                    <h4> <FaClock/>  Service Timings </h4>
                    <p>Sunday: 9:00 am & 11:00 am</p>
                    <p>Wednesday: 7:00 pm</p>
                </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Grace Church. All rights reserved.</p>
                    <p>Emphasizing Faith, Community and Accessibility.</p>
                </div>

        </footer>

    )
}

export default Footer;