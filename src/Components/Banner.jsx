import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import RotatingText from 'react-rotating-text';
import { useEffect, useState } from 'react';
import gradient_video from "../assets/gradient_video.mp4";
import developer from "../assets/developer.png";
import cert from "../assets/cert.webp";

const Banner = () => {
    const textOptions = ['Full Stack',  'AWS Certfied Developer', 'Java Web Developer', 'MERN Stack'];
    const [isIOSorMac, setIsIOSorMac] = useState(false);

    useEffect(() => {
        const iOSorMacAgent = /(Mac|iPhone|iPod|iPad)/i.test(navigator.userAgent);
        setIsIOSorMac(iOSorMacAgent);
    }, []);

    return(
        <div>
            <section className="banner" id="home">
                {
                    isIOSorMac ? (
                            <img
                                className="background-image"
                                src="https://cellix-bio-mis.s3.ap-south-1.amazonaws.com/portfolio/ios+gradient.png"
                                alt="Background Image"
                            />
                    ) : (
                        <video
                            className="background-video"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                        >
                            <source src={gradient_video} type="video/mp4" />
                        </video>
                    )
                }
                
                <div className="blur-overlay"></div>
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
                                        I am a Full stack developer with a solid background in web development and a love for creating sophisticated web applications using AI. Additionally, I am familiar with the AWS Cloud Architecture. I am currently working as a Full Stack Developer in CGI INC. IT Graduate Student from Missouri University S&T MO, USA.
                                    </p>
                                    <a href='https://www.credly.com/badges/854c1786-4e3a-4200-a2c1-ddfe939d8760/embedded' target='_blank'>
                                        <div className='credly_container'>
                                            <img src={cert} alt='AWS Certification' />
                                        </div>
                                    </a>
                                    <Router>
                                        <HashLink to="/#resume" style={{textDecoration: 'none'}}>
                                            <button>Know More <ArrowRightCircle size={25} /></button>
                                        </HashLink>
                                    </Router>
                                </div>
                            </Col>

                            <Col xs={12} md={6} xl={5}>
                                <div className='coder-img'>
                                    <img src={developer} alt="Header Img" />
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
