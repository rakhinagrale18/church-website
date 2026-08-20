import {FaEnvelope, FaPhone, FaPhoneAlt, FaCheckCircle} from 'react-icons/fa'
import{FaLocationDot} from 'react-icons/fa6'
import{useState} from 'react'


function Contact() {

    const[showPopup, setShowPopup]= useState(false)

    const[formData, setformData]= useState({name: '', email: '', message: ''})

    const handleSubmit = (e) => {
        e.preventDefault() 

        const formData= new FormData(e.target)
      
        console.log("form Submitted:", formData)

        setShowPopup(true)

      setformData({name: '', email: '', message: ''})
        
         setTimeout(() => {
            setShowPopup(false)
          } , 5000)
        }
    
        
    
    return(
        <div className="container contact-container">
            <h1>Contact Us</h1>
            <div className="contact-grid">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="your name"  required />
                    <input type="email" placeholder="your email" required />
                    <textarea placeholder="your message"  required></textarea>
                    <button type="submit" className="btn-primary">Send Message</button>
                </form>

                <div className="contact-info">
                    <h3>Church Details</h3>
                    <p><b><FaLocationDot/>  Address:</b>123 Main Street, Anytown, Nagpur</p>
                    <p><b> <FaPhoneAlt/>  Phone:</b> 1234567890</p>
                    <p><b> <FaEnvelope/>  Email:</b> info@grace.com</p>
                </div>
                </div>

                <div className="maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842528.6241671187!2d73.85549841718394!3d19.86239330923258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0e682579a23%3A0xccfb7b35d4b8667d!2sSt.%20Francis%20De%20Sales%20Cathedral!5e0!3m2!1sen!2sin!4v1787117480696!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                </div>
        

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-box">
                        <div className="popup-icon"> <FaCheckCircle /> </div>
                        
                        <h2>Thank You!</h2>
                        <p>Your message has been sent successfully. we will get back to you soon.</p>
                        
                        
                        </div>
                    </div>
            
            )}
        </div>

    )
}


export default Contact;