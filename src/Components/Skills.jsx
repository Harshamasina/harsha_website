import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { BiBrain } from "react-icons/bi";
import { Helmet } from "react-helmet"; 

const Skills = () => {
    return(
        <div>
            <Helmet>
                <meta name="description" content="Skills of Harsha Masina" />
                <meta name='keywords' content='Skills, Skills of Harsha Masina, Frontend, Backend, Fullstack, Javascript, React, NodeJs, Express, MongoDB, MySQL, Java, Python, C#, C++, C, HTML, CSS, Bootstrap, SASS, Material UI, Redux, Redux-Toolkit, Redux-Saga, Jest, Enzyme, React Testing Library,' />
            </Helmet>
            <section className="skill" id="skills">
                <h2><BiBrain /></h2>
                <h2>Skills</h2>
                <p>I have worked with a variety of technologies and frameworks. I am familiar with the following</p>
                <div className="skills-container">
                    <div className="skills-frontend">
                        <h3>Frontend Development</h3>
                        <div className="skills-content">
                            <article className="skill-details">
                                <FaReact className="skill-details-icon" />
                                <div>
                                    <h4>HTML</h4>
                                    <small className="skill-level">Experienced</small>
                                </div>
                            </article>

                            <article className="skill-details">
                                <FaReact className="skill-details-icon" />
                                <div>
                                    <h4>CSS</h4>
                                    <small className="skill-level">Intermediate</small>
                                </div>
                            </article>

                            <article className="skill-details">
                                <FaReact className="skill-details-icon" />
                                <div>
                                    <h4>Bootstrap</h4>
                                    <small className="skill-level">Experienced</small>
                                </div>
                            </article>

                            <article className="skill-details">
                                <FaReact className="skill-details-icon" />
                                <div>
                                    <h4>SASS</h4>
                                    <small className="skill-level">Intermediate</small>
                                </div>
                            </article>

                            <article className="skill-details">
                                <FaReact className="skill-details-icon" />
                                <div>
                                    <h4>Material UI</h4>
                                    <small className="skill-level">Intermediate</small>
                                </div>
                            </article>

                            <article className="skill-details">
                                <FaReact className="skill-details-icon" />
                                <div>
                                    <h4>JavaScript</h4>
                                    <small className="skill-level">Intermediate</small>
                                </div>
                            </article>

                            <article className="skill-details">
                                <FaReact className="skill-details-icon" />
                                <div>
                                    <h4>Ajax</h4>
                                    <small className="skill-level">Experienced</small>
                                </div>
                            </article>

                            <article className="skill-details">
                                <FaReact className="skill-details-icon" />
                                <div>
                                    <h4>React JS</h4>
                                    <small className="skill-level">Intermediate</small>
                                </div>
                            </article>

                            <article className="skill-details">
                                <FaReact className="skill-details-icon" />
                                <div>
                                    <h4>Vite</h4>
                                    <small className="skill-level">Intermediate</small>
                                </div>
                            </article>

                            <article className="skill-details">
                                <FaReact className="skill-details-icon" />
                                <div>
                                    <h4>SEO</h4>
                                    <small className="skill-level">Intermediate</small>
                                </div>
                            </article>
                        </div>
                    </div>

                    <div className="skills-backend">
                        <h3>Backend Development</h3>
                        <div className="skills-content">
                            <article className="skill-details">
                                <FaNodeJs className="skill-details-icon" />
                                <div>
                                    <h4>Node JS</h4>
                                    <small className="skill-level">Experienced</small>
                                </div>
                            </article>

                            <article className="skill-details">
                                <FaNodeJs className="skill-details-icon" />
                                <div>
                                    <h4>Express JS</h4>
                                    <small className="skill-level">Intermediate</small>
                                </div>
                            </article>

                            <article className="skill-details">
                                <FaNodeJs className="skill-details-icon" />
                                <div>
                                    <h4>MongoDB</h4>
                                    <small className="skill-level">Intermediate</small>
                                </div>
                            </article>

                            <article className="skill-details">
                                <FaNodeJs className="skill-details-icon" />
                                <div>
                                    <h4>Mongoose</h4>
                                    <small className="skill-level">Intermediate</small>
                                </div>
                            </article>

                            <article className="skill-details">
                                <FaNodeJs className="skill-details-icon" />
                                <div>
                                    <h4>Firebase</h4>
                                    <small className="skill-level">Experienced</small>
                                </div>
                            </article>

                            <article className="skill-details">
                                <FaNodeJs className="skill-details-icon" />
                                <div>
                                    <h4>MySQL</h4>
                                    <small className="skill-level">Intermediate</small>
                                </div>
                            </article>

                            <article className="skill-details">
                                <FaNodeJs className="skill-details-icon" />
                                <div>
                                    <h4>Python</h4>
                                    <small className="skill-level">Intermediate</small>
                                </div>
                            </article>

                            <article className="skill-details">
                                <FaNodeJs className="skill-details-icon" />
                                <div>
                                    <h4>REST API</h4>
                                    <small className="skill-level">Experienced</small>
                                </div>
                            </article>

                            <article className="skill-details">
                                <FaNodeJs className="skill-details-icon" />
                                <div>
                                    <h4>Moment JS</h4>
                                    <small className="skill-level">Experienced</small>
                                </div>
                            </article>

                            <article className="skill-details">
                                <FaNodeJs className="skill-details-icon" />
                                <div>
                                    <h4>Postman</h4>
                                    <small className="skill-level">Experienced</small>
                                </div>
                            </article>
                        </div>
                    </div>

                    <div className="skills-cloud">
                        <h3>Cloud Technologies</h3>
                        <div className="skills-content">
                            <article className="skill-details">
                                <FaAws className="skill-details-icon" />
                                <div>
                                    <h4>VPC</h4>
                                    <small className="skill-level">Experienced</small>
                                </div>
                            </article>

                            <article className="skill-details">
                                <FaAws className="skill-details-icon" />
                                <div>
                                    <h4>EC2</h4>
                                    <small className="skill-level">Experienced</small>
                                </div>
                            </article>

                            <article className="skill-details">
                                <FaAws className="skill-details-icon" />
                                <div>
                                    <h4>S3</h4>
                                    <small className="skill-level">Experienced</small>
                                </div>
                            </article>

                            <article className="skill-details">
                                <FaAws className="skill-details-icon" />
                                <div>
                                    <h4>Route 53</h4>
                                    <small className="skill-level">Experienced</small>
                                </div>
                            </article>

                            <article className="skill-details">
                                <FaAws className="skill-details-icon" />
                                <div>
                                    <h4>EBS</h4>
                                    <small className="skill-level">Intermediate</small>
                                </div>
                            </article>

                            <article className="skill-details">
                                <FaAws className="skill-details-icon" />
                                <div>
                                    <h4>EFS</h4>
                                    <small className="skill-level">Intermediate</small>
                                </div>
                            </article>

                            <article className="skill-details">
                                <FaAws className="skill-details-icon" />
                                <div>
                                    <h4>Nginx</h4>
                                    <small className="skill-level">Intermediate</small>
                                </div>
                            </article>

                            <article className="skill-details">
                                <FaAws className="skill-details-icon" />
                                <div>
                                    <h4>Apache</h4>
                                    <small className="skill-level">Intermediate</small>
                                </div>
                            </article>

                            <article className="skill-details">
                                <FaAws className="skill-details-icon" />
                                <div>
                                    <h4>SES</h4>
                                    <small className="skill-level">Experienced</small>
                                </div>
                            </article>

                            <article className="skill-details">
                                <FaAws className="skill-details-icon" />
                                <div>
                                    <h4>Cloud Watch</h4>
                                    <small className="skill-level">Intermediate</small>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;