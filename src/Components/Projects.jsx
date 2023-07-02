import { Helmet } from "react-helmet";
import { BsGithub } from "react-icons/bs";
import { MdOutlineWeb } from "react-icons/md";
import { TbApps } from "react-icons/tb";

const Projects = () => {
    return(
        <div>
            <Helmet>
                <meta name="description" content="Projects built by Harsha Masina" />
                <meta name='keywords' content='Projects related Cellix Bio, AvacaPharma, Cellix Bio MIS' />
            </Helmet>
            
            <section className="projects" id="projects">
                <h2><TbApps /></h2>
                <h2>Portfolio</h2>
                <p>My Recent Work</p>
                <div className="container portfolio-container">
                    <article className="portfolio-item">
                        <div className="portfolio-item-st">
                            <a href="https://snap-tube.netlify.app/" target="_blank">
                                <img src="https://cellix-bio-mis.s3.ap-south-1.amazonaws.com/Chatterbox/snaptube-high-resolution-logo-color-on-transparent-background.png" alt="Cellix Bio" target="_blank"/>
                            </a>
                        </div>
                        <h3>SnapTube</h3>
                        <p>Built this Vite - React Web Application using Material Ui. This Web App functions similarly to YouTube as a Google SignIn Video Sharing Platform. 
                            This app fetches data from the Rapid API. This App shows videos from several genres and can search for any video which is there in youtube. 
                            We can also view videos with this app and this app also responsive on all devices.  We can also see videos from certain content creators and stats about that channel.
                        </p>
                        <div className="portfolio-item-cta">
                            <a href="https://github.com/Harshamasina/SnapTube" target="_blank" className="btn-code"><BsGithub /> Code</a>
                            <a href="https://snap-tube.netlify.app/" className="btn-code" target="_blank"><MdOutlineWeb /> Live Page</a>
                        </div>
                    </article>

                    <article className="portfolio-item">
                        <div className="portfolio-item-cb">
                            <a href="https://mis.cellixbio.info/" target="_blank" >
                                <img src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.Icon.png" alt="Cellix Bio"/>
                            </a>
                        </div>
                        <h3>Cellix Bio MIS</h3>
                        <p>Built and hosted this Web App in AWS EC2. This Data Management Web App contains Cellix Bio's each Patent's life Cycle. This MIS App features OTP Login where certain employees in the company can able to access the web app. This app allows employee to know the due dates and annuity dates of the patents which are filed in 14 different countries.</p>
                        <div className="portfolio-item-cta">
                            <a href="https://github.com/Harshamasina/Cellix_MIS_Client" target="_blank" className="btn-code"><BsGithub /> Code</a>
                            <a href="https://mis.cellixbio.info/" target="_blank" className="btn-code"><MdOutlineWeb /> Live Page</a>
                        </div>
                    </article>

                    <article className="portfolio-item">
                        <div className="portfolio-item-ap">
                            <a href="https://www.avacapharma.com/" target="_blank">
                                <img src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Pharma+Main+Logo.png" alt="Cellix Bio"/>
                            </a>
                        </div>
                        <h3>Avaca Pharma</h3>
                        <p>Built and hosted Avaca Pharma Informative Web App in AWS EC2. Avaca Pharma is a operating subsidiary of Cellix Bio. This website is a single page web application and this app contains company's Intellectual Property (IP), Infrastructure of Lab, Pictures of the Laboratory, Technology, Services and also insights and media related to Avaca Pharma.</p>
                        <div className="portfolio-item-cta">
                            <a href="https://github.com/Harshamasina/Avaca_Pharma" target="_blank" className="btn-code"><BsGithub /> Code</a>
                            <a href="https://www.avacapharma.com/" target="_blank" className="btn-code"><MdOutlineWeb /> Live Page</a>
                        </div>
                    </article>

                    <article className="portfolio-item">
                        <div className="portfolio-item-cb">
                            <a href="https://cellixbio.com/" target="_blank" >
                                <img src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.Icon.png" alt="Cellix Bio"/>
                            </a>
                        </div>
                        <h3>Cellix Bio</h3>
                        <p>Built and hosted Cellix Bio Single Page Web App in AWS EC2. This App contains company's Pipeline, Intellectual Property (IP), Pipeline and insights related to Cellix Bio. Cellix Bio has over 650 International Patents where this web app display each patent's Therapeutic Areas, Formulas, drugs, Compounds, Methods of Making and Claims.</p>
                        <div className="portfolio-item-cta">
                            <a href="https://github.com/ssvamsee/Cellix_Bio" target="_blank" className="btn-code"><BsGithub /> Code</a>
                            <a href="https://cellixbio.com/" target="_blank" className="btn-code"><MdOutlineWeb /> Live Page</a>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default Projects;