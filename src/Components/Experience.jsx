import { MdOutlineWorkHistory, MdOutlineBiotech } from "react-icons/md";
import { Helmet } from 'react-helmet';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TbReportMoney } from "react-icons/tb";
import { RiMentalHealthLine } from "react-icons/ri";

const Experience = () => {
    return (
        <div>
            <Helmet>
                <meta name="description" content="Resume of Harsha Masina" />
                <meta name='keywords' content='Resume, Harsha Masina, Resume of Harsha Masina' />
            </Helmet>

            <section className="experience" id="experience">
                <h2><MdOutlineWorkHistory /></h2>
                <h2>Work History</h2>
                <p>Present and Past Experience</p>
                <div className="experience-container">
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(71,184,132)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(71,184,132)' }}
                            date="Feb 2025 - present"
                            iconStyle={{ background: 'rgb(71,184,132)', color: '#fff' }}
                            icon={<TbReportMoney />}
                            textClassName="exp-content"
                        >
                            <h3 className="vertical-timeline-element-title">CGI INC, Full Stack Developer</h3>
                            <h4 className="vertical-timeline-element-subtitle">USA</h4>
                            <p>
                                Architected and deployed JWT-secured Spring Boot microservices with MySQL APIs and React dashboards, containerized via Docker and validated through Postman/Swagger.
                            </p>
                            <span>Microservices, Spring Boot, JWT · Docker, React.js</span>
                        </VerticalTimelineElement>
                    </VerticalTimeline>

                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(71,184,132)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(71,184,132)' }}
                            date="Jan 2203 - Aug 2023"
                            iconStyle={{ background: 'rgb(71,184,132)', color: '#fff' }}
                            icon={<MdOutlineBiotech />}
                            position="right"
                            textClassName="exp-content"
                        >
                            <h3 className="vertical-timeline-element-title">Cellix Bio, Full Stack Developer</h3>
                            <h4 className="vertical-timeline-element-subtitle">Hyderbad, India</h4>
                            <p>
                                Built a MERN-stack patent management app with MongoDB-backed Node.js APIs, Firebase security, and AWS EC2/S3 deployment, automating annuity reminders.
                            </p>
                            <span>MERN · AWS EC2/S3 · Firebase Auth · Patent Management · Automation</span>
                        </VerticalTimelineElement>
                    </VerticalTimeline>

                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(71,184,132)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(71,184,132)' }}
                            date="Mar 2021 - Dec 2022"
                            iconStyle={{ background: 'rgb(71,184,132)', color: '#fff' }}
                            icon={<RiMentalHealthLine />}
                            textClassName="exp-content"
                        >
                            <h3 className="vertical-timeline-element-title">Value Labs, Software Developer</h3>
                            <h4 className="vertical-timeline-element-subtitle">Hyderbad, India</h4>
                            <p>
                                Developed Node.js and Spring Boot microservices with MySQL/PostgreSQL, event-driven Kafka pipelines, and automated document workflows using PDFBox and Drools.
                            </p>
                            <span>Microservices · Kafka · Spring Boot · Express.js · Automated Workflows</span>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </section>
        </div>
    )
};

export default Experience;