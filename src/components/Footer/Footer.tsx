import "./Footer.css"
const Footer =()=>{
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-left">
                        <div className="footer-logo">
                            <img src="/assets/images/Logo.png" alt="Logo"/>
                        </div>
                        <p className="footer-description">We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
                        <ul className="footer-contact">
                            <li>
                                <img src="/assets/images/messageicon.svg" alt="Message Icon"/>
                                <span>hello@littlelearners.com</span>
                            </li>
                            <li>
                                <img src="/assets/images/callicon.svg" alt="Call Icon"/>
                                <span>+91 91813 23 2309</span>
                            </li>
                            <li>
                                <img src="/assets/images/locationicon.svg" alt="Location Icon"/>
                                <span>Somewhere in the World</span>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-linkes">
                        <div className="footer-col">
                            <h4>Home</h4>
                            <ul>
                                <li>Features</li>
                                <li>Our Testimonials</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>About Us</h4>
                            <ul>
                                <li>Our Mission</li>
                                <li>Our Vission</li>
                                <li>Awards and Recognitions</li>
                                <li>History</li>
                                <li>Teachers</li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Academics</h4>
                            <ul>
                                <li>Special Features</li>
                                <li>Gallery</li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Contact Us</h4>
                            <ul>
                                <li>Information</li>
                                <li>Map & Direction</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="footer-devider"></hr>
                <div className="footer-middle">
                    <ul className="footer-policies">
                        <li>Terms of Service </li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                    </ul>
                    <div className="footer-socials">
                        <a href="#" className="social-icon">
                            <img src="/assets/images/facebookicon.svg" alt="FaceBook Icon"/>     
                        </a>
                        <a href="#" className="social-icon">
                            <img src="/assets/images/twitericon.svg" alt="Twitter Icon"/>     
                        </a>
                        <a href="#" className="social-icon">
                            <img src="/assets/images/linkedicon.svg" alt="Linked Icon"/>     
                        </a>
                    </div>
                </div>
                <hr className="footer-devider"></hr>
                <div className="footer-bottom">
                    <p>Copyright © [2023] Little Learners Academy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;