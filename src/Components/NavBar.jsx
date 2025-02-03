import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { BsGithub } from "react-icons/bs";
import harsha_logo_white from "../assets/harsha_logo_white.png";

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

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

    return (
        <Router>
            <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
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
                                onClick={() => onUpdateActiveLink('home')}
                            >
                                HOME
                            </Nav.Link>

                            <Nav.Link
                                as={HashLink}
                                to="/#skills"
                                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => onUpdateActiveLink('skills')}
                            >
                                SKILLS
                            </Nav.Link>

                            <Nav.Link
                                as={HashLink}
                                to="/#projects"
                                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => onUpdateActiveLink('projects')}
                            >
                                PROJECTS
                            </Nav.Link>

                            <Nav.Link
                                as={HashLink}
                                to="/#resume"
                                className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => onUpdateActiveLink('resume')}
                            >
                                RESUME
                            </Nav.Link>

                            <Nav.Link
                                as={HashLink}
                                to="/#contact"
                                className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => onUpdateActiveLink('resume')}
                            >
                                CONTACT
                            </Nav.Link>
                        </Nav>

                        <span className="navbar-text">
                            <>
                                <button className="vvd">
                                    <span><a href='https://github.com/Harshamasina' target='_blank'>Github <BsGithub /></a></span>
                                </button>
                            </>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    );
};

export default NavBar;