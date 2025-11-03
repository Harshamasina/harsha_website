import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { BsGithub } from "react-icons/bs";
import harsha_logo_white from "../assets/harsha_logo_white.png";

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const onScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    const handleNavClick = (value) => {
        onUpdateActiveLink(value);
        setExpanded(false);
    };

    return (
        <Router>
            <Navbar
                expand="lg"
                expanded={expanded}
                onToggle={setExpanded}
                className={scrolled ? 'scrolled' : ''}
            >
                <Container>
                    <Navbar.Brand href="/">
                        <img className='nav-img' src={harsha_logo_white} alt="Logo" />
                    </Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link
                                as={HashLink}
                                to="/#home"
                                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => handleNavClick('home')}
                            >
                                HOME
                            </Nav.Link>

                            <Nav.Link
                                as={HashLink}
                                to="/#skills"
                                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => handleNavClick('skills')}
                            >
                                SKILLS
                            </Nav.Link>

                            <Nav.Link
                                as={HashLink}
                                to="/#experience"
                                className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => handleNavClick('experience')}
                            >
                                EXPERIENCE
                            </Nav.Link>

                            <Nav.Link
                                as={HashLink}
                                to="/#projects"
                                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => handleNavClick('projects')}
                            >
                                PROJECTS
                            </Nav.Link>

                            <Nav.Link
                                as={HashLink}
                                to="/#resume"
                                className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => handleNavClick('resume')}
                            >
                                RESUME
                            </Nav.Link>

                            <Nav.Link
                                as={HashLink}
                                to="/#certifications"
                                className={activeLink === 'certifications' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => handleNavClick('certifications')}
                            >
                                CERTIFICATIONS
                            </Nav.Link>

                            <Nav.Link
                                as={HashLink}
                                to="/#contact"
                                className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => handleNavClick('contact')}
                            >
                                CONTACT
                            </Nav.Link>
                        </Nav>
                        <div className="navbar-cta">
                            <a
                                className="navbar-github"
                                href="https://github.com/Harshamasina"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Open GitHub profile in a new tab"
                                onClick={() => setExpanded(false)}
                            >
                                <span>GitHub</span>
                                <BsGithub />
                            </a>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    );
};

export default NavBar;
