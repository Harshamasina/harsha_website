import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import RotatingText from 'react-rotating-text';

const Banner = () => {
    const textOptions = ['MERN Stack', 'Full Stack',  'Web Developer', 'AWS Solution Architect'];
    
    return(
        <div>
            <section className="banner" id="home">
                <video className="background-video" autoPlay muted loop playsInline>
                    <source src="https://cellix-bio-mis.s3.ap-south-1.amazonaws.com/portfolio/Green+Gradient+Video.mp4" type="video/mp4" />
                </video>
                <div class="blur-overlay"></div>
                <Container>
                    <div className='content'>
                        <Row className="aligh-items-center">
                            <Col xs={12} md={6} xl={7}>
                                <div>
                                    <span className="tagline">Welcome to my Web Page</span>
                                    <h1>
                                        Hi! I'm Mani Harsha
                                    </h1>
                                    <h2>
                                        <RotatingText
                                            items={textOptions}
                                            pause={2000}
                                            emptyPause={1000}
                                        />
                                    </h2>
                                    <p>
                                        I am a MERN stack developer with a solid background in web development and a love for creating sophisticated web applications. Additionally, I am familiar with the AWS Solution Architecture. I worked for Cellix Bio Pvt Ltd as a Full Stack Developer. Upcoming IT Graduate Student in Missouri University of Science and Technology MO, USA.
                                    </p>
                                    <Router>
                                        <HashLink to="/#resume" style={{textDecoration: 'none'}}>
                                            <button>Know More <ArrowRightCircle size={25} /></button>
                                        </HashLink>
                                    </Router>
                                </div>
                            </Col>

                            <Col xs={12} md={6} xl={5}>
                                <div>
                                    <img src="https://cellix-bio-mis.s3.ap-south-1.amazonaws.com/portfolio/coder.png" alt="Header Img" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Banner;