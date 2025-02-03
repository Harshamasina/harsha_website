import { Container } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsReddit } from "react-icons/bs";
import { BsThreads } from "react-icons/bs";
import { BsSnapchat } from "react-icons/bs";
import harsha_logo from "../assets/harsha_logo.png";

const Footer = () => {
    const onScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return(
        <footer className="footer">
            <Container className="footer-container">
                <img src={harsha_logo} alt="Logo" onClick={onScrollTop} style={{ cursor: 'pointer' }} />
                <div className="socials">
                    <a href="https://www.linkedin.com/in/harsha-masina/" target="_blank" rel="noreferrer" aria-label="Navigate to Linkedin Webpage"><BsLinkedin /></a>
                    <a href="https://github.com/Harshamasina" target="_blank" rel="noreferrer" aria-label="Navigate to Github Page"><BsGithub /></a>
                    <a href="https://www.facebook.com/mani.harsha.333?mibextid=ZbWKwL" target="_blank" rel="noreferrer" aria-label="Navigate to Facebook Page"><BsFacebook /></a>
                    <a href="https://instagram.com/harsha_masina?igshid=ZGUzMzM3NWJiOQ==" target="_blank" rel="noreferrer" aria-label="Navigate to Instagram Page"><BsInstagram /></a>
                    <a href="https://instagram.com/harsha_masina?igshid=ZGUzMzM3NWJiOQ==" target="_blank" rel="noreferrer" aria-label="Navigate to Threads Page"><BsThreads /></a>
                    <a href="https://twitter.com/HarshaMasina?t=7-bja-r2MuGxpeUWXtohxQ&s=09" target="_blank" rel="noreferrer" aria-label="Navigate to Twitter Page"><BsTwitterX /></a>
                    <a href="https://www.reddit.com/user/harsha_masina" target="_blank" rel="noreferrer" aria-label="Navigate to Reddit Page"><BsReddit /></a>
                    <a href="https://www.snapchat.com/add/myprofile?sender_web_id=1ce6a07d-91a0-4c4f-a645-b669bda57446&device_type=desktop&is_copy_url=true" target="_blank" rel="noreferrer" aria-label="Navigate to Snap Chat Page"><BsSnapchat /></a>
                </div>
                <p>&copy; {new Date().getFullYear()}. All Rights Reserved</p>
            </Container>
        </footer>
    );
};

export default Footer;