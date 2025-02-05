import { Helmet } from "react-helmet";
import { BsGithub } from "react-icons/bs";
import { MdOutlineWeb } from "react-icons/md";
import { TbApps } from "react-icons/tb";
import projectsJson from "../Data/Projects.json"; // Adjust the path as needed

const Projects = () => {
  const { projectsData } = projectsJson;

  const linkIconMapping = {
    BsGithub: BsGithub,
    MdOutlineWeb: MdOutlineWeb
  };

  return (
    <div>
      <Helmet>
        <meta name="description" content="Projects built by Harsha Masina" />
        <meta
          name="keywords"
          content="Projects related Cellix Bio, AvacaPharma, Cellix Bio MIS"
        />
      </Helmet>

        <section className="projects" id="projects">
            <h2><TbApps /></h2>
            <h2>Portfolio</h2>
            <p>Projects</p>
            <div className="portfolio-container">
                {
                    projectsData.map((project, index) => {
                        const linkContainerClass =
                        project.title === "Cellix Bio MIS" || project.title === "Cellix Bio"
                            ? "portfolio-item-mis"
                            : "portfolio-item-cta";

                        return (
                        <div className="portfolio-item" key={index}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className={linkContainerClass}>
                            {
                                project.links.map((link, i) => {
                                    const IconComponent = linkIconMapping[link.icon];
                                    return (
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-code"
                                        key={i}
                                    >
                                        <span className="button-span">
                                        {IconComponent && <IconComponent />} {link.label}
                                        </span>
                                    </a>
                                    );
                                })
                            }
                            </div>
                        </div>
                        );
                    })
                }
            </div>
        </section>
    </div>
  );
};

export default Projects;
