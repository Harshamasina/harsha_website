import { FaReact, FaNodeJs, FaAws, FaGitAlt } from "react-icons/fa";
import { BiBrain } from "react-icons/bi";
import { Helmet } from "react-helmet";
import skillsJson from "../Data/Skills.json"; // Adjust the path as needed

const Skills = () => {
  const { skillsData } = skillsJson;
  const iconMapping = {
    FaReact: FaReact,
    FaNodeJs: FaNodeJs,
    FaAws: FaAws,
    FaGitAlt: FaGitAlt,
  };

  const getSkillLevel = (level) => {
    switch (level) {
      case "1":
        return "Beginner";
      case "2":
        return "Intermediate";
      case "3":
        return "Experienced";
      default:
        return "";
    }
  };

  return (
    <div>
      <Helmet>
        <meta name="description" content="Skills of Harsha Masina" />
        <meta
          name="keywords"
          content="Skills, Skills of Harsha Masina, Frontend, Backend, Fullstack, Javascript, React, NodeJs, Express, MongoDB, MySQL, Java, Python, C#, C++, C, HTML, CSS, Bootstrap, SASS, Material UI, Redux, Redux-Toolkit, Redux-Saga, Jest, Enzyme, React Testing Library"
        />
      </Helmet>

      <section className="skill" id="skills">
        <h2>
          <BiBrain />
        </h2>
        <h2>Skills</h2>
        <p>
          I have worked with a variety of technologies and frameworks. I am familiar with the following:
        </p>
        <div className="skills-container">
            {
                skillsData.map((category, catIndex) => {
                const IconComponent = iconMapping[category.icon];

                return (
                    <div>
                        <h3>{category.category}</h3>
                        <div className="skills-content">
                            {
                                category.skills.map((skill, index) => (
                                    <article className="skill-details" key={index}>
                                    {
                                        IconComponent && (
                                            <IconComponent className="skill-details-icon" />
                                        )
                                    }
                        
                                    <div>
                                        <h4>{skill.name}</h4>
                                        <small className="skill-level">
                                        {getSkillLevel(skill.level)}
                                        </small>
                                    </div>
                                    </article>
                                ))
                            }
                        </div>
                    </div>
                );
            })}
        </div>
      </section>
    </div>
  );
};

export default Skills;
