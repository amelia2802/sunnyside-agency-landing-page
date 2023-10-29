import Logo from "../images/logo.svg"
import facebookIcon from "../images/icon-facebook.svg"
import instaIcon from "../images/icon-instagram.svg"
import xIcon from "../images/icon-twitter.svg"
import pinterestIcon from "../images/icon-pinterest.svg"
export default function Footer(){
    return(
        <footer className="footer">
            <section className="footer-feed">
                <img className="footer-feed-item" src={require("../images/desktop/image-gallery-milkbottles.jpg")} alt="milk bottle" />
                <img className="footer-feed-item" src={require("../images/desktop/image-gallery-orange.jpg")} alt="orange" />
                <img className="footer-feed-item" src={require("../images/desktop/image-gallery-cone.jpg")} alt="cone" />
                <img className="footer-feed-item" src={require("../images/desktop/image-gallery-sugarcubes.jpg")} alt="sugarcubes" />
            </section>
            <section className="main-footer">
                <img className="footer-logo" src={Logo} alt="footer logo" />
                <section className="footer-nav">
                    <ul className="footer-list">
                        <li className="footer-list-item">About</li>
                        <li className="footer-list-item">Services</li>
                        <li className="footer-list-item">Projects</li>
                    </ul>
                </section>
                <section className="social">
                    <img className="social-media" src={facebookIcon} alt="facebook" />
                    <img className="social-media" src={instaIcon} alt="instagram" />
                    <img className="social-media" src={xIcon} alt="twitter" />
                    <img className="social-media" src={pinterestIcon} alt="pinterest" />
                </section>
                <div className="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
                    Coded by <a href="https://ameliadutta.netlify.app/" target="_blank" rel="noreferrer">Amelia D.</a>.
                </div>
            </section>
        </footer>
    )
}