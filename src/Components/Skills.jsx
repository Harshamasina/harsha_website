import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { BiBrain } from "react-icons/bi";
import { Helmet } from "react-helmet"; 

const Skills = () => {
    const FrontEnd = [
        {
            name: "HTML",
            level: "3"
        },
        {
            name: "CSS",
            level: "2"
        },
        {
            name: "Bootstrap",
            level: "2"
        },
        {
            name: "React Bootstrap",
            level: "3"
        },
        {
            name: "SASS",
            level: "1"
        },
        {
            name: "Material UI",
            level: "1"
        },
        {
            name: "JavaScript",
            level: "2"
        },
        {
            name: "React JS",
            level: "2"
        },
        {
            name: "Vite",
            level: "3"
        },
        {
            name: "SEO",
            level: "1"
        }
    ];

    const Backend = [
        {
            name: "Node JS",
            level: "2"
        },
        {
            name: "Express JS",
            level: "2"
        },
        {
            name: "MongoDB",
            level: "2"
        },
        {
            name: "Mongoose",
            level: "2"
        },
        {
            name: "Firebase",
            level: "2"
        },
        {
            name: "MySQL",
            level: "1"
        },
        {
            name: "Python",
            level: "2"
        },
        {
            name: "REST API",
            level: "3"
        },
        {
            name: "Moment JS",
            level: "3"
        },
        {
            name: "Multer",
            level: "1"
        }
    ];

    const Cloud = [
        {
            name: "VPC",
            level: "2"
        },
        {
            name: "EC2",
            level: "3"
        },
        {
            name: "S3",
            level: "2"
        },
        {
            name: "Route 53",
            level: "3"
        },
        {
            name: "EBS",
            level: "2"
        },
        {
            name: "EFS",
            level: "2"
        },
        {
            name: "Nginx",
            level: "2"
        },
        {
            name: "Apache",
            level: "1"
        },
        {
            name: "SES",
            level: "1"
        },
        {
            name: "Cloud Watch",
            level: "2"
        }
    ];

    const Others = [
        {
            name: "Git",
            level: "2"
        },
        {
            name: "GitHub",
            level: "2"
        },
        {
            name: "VS Code",
            level: "2"
        },
        {
            name: "Terminal",
            level: "2"
        },
        {
            name: "Linux",
            level: "2"
        },
        {
            name: "Windows",
            level: "3"
        },
        {
            name: "Postman",
            level: "3"
        },
        {
            name: "MongoDB Atlas",
            level: "3"
        },
        {
            name: "GoDaddy",
            level: "3"
        },
        {
            name: "Putty",
            level: "1"
        }
    ];

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
                            {
                                FrontEnd.map((skill, i) => (
                                    <article className="skill-details" key={i}>
                                        <FaReact className="skill-details-icon" />
                                        <div>
                                            <h4>{skill.name}</h4>
                                            <small className="skill-level">
                                                {
                                                    skill.level === "1" ? "Beginner" :
                                                    skill.level === "2" ? "Intermediate" :
                                                    skill.level === "3" ? "Experienced" : ""
                                                }
                                            </small>
                                        </div>
                                    </article>
                                ))
                            }
                        </div>
                    </div>

                    <div className="skills-backend">
                        <h3>Backend Development</h3>
                        <div className="skills-content">
                            {
                                Backend.map((skill, i) => (
                                    <article className="skill-details" key={i}>
                                        <FaNodeJs className="skill-details-icon" />
                                        <div>
                                            <h4>{skill.name}</h4>
                                            <small className="skill-level">
                                                {
                                                    skill.level === "1" ? "Beginner" :
                                                    skill.level === "2" ? "Intermediate" :
                                                    skill.level === "3" ? "Experienced" : ""
                                                }
                                            </small>
                                        </div>
                                    </article>
                                ))
                            }
                        </div>
                    </div>

                    <div className="skills-cloud">
                        <h3>Cloud Technologies</h3>
                        <div className="skills-content">
                            {
                                Cloud.map((skill, i) => (
                                    <article className="skill-details" key={i}>
                                        <FaAws className="skill-details-icon" />
                                        <div>
                                            <h4>{skill.name}</h4>
                                            <small className="skill-level">
                                                {
                                                    skill.level === "1" ? "Beginner" :
                                                    skill.level === "2" ? "Intermediate" :
                                                    skill.level === "3" ? "Experienced" : ""
                                                }
                                            </small>
                                        </div>
                                    </article>
                                ))
                            }
                        </div>
                    </div>

                    <div className="skills-others">
                        <h3>Miscellaneous Technologies</h3>
                        <div className="skills-content">
                            {
                                Others.map((skill, i) => (
                                    <article className="skill-details" key={i}>
                                        <FaNodeJs className="skill-details-icon" />
                                        <div>
                                            <h4>{skill.name}</h4>
                                            <small className="skill-level">
                                                {
                                                    skill.level === "1" ? "Beginner" :
                                                    skill.level === "2" ? "Intermediate" :
                                                    skill.level === "3" ? "Experienced" : ""
                                                }
                                            </small>
                                        </div>
                                    </article>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;