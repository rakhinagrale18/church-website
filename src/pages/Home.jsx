import {Link} from 'react-router-dom'

function Home() {
    return(
        <div>
            <section className="hero">
                
                <h1>Welcome to Grace Church</h1>
                <p>A place of Faith, Community and Hope</p>
                <Link to="/contact" className="btn-primary">Join Us This Sunday</Link>

            </section>

            <section className="about-section">
                <h2>About Us</h2>
                <p>We are a community dedicated to worship, service and growing together in faith. everyone is welcome here to experience the love of God.</p>
            </section>
            </div>
    )
}

export default Home;