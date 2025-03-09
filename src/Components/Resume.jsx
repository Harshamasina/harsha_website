import { Helmet } from 'react-helmet';
import { MdOutlineDownload } from 'react-icons/md';
import { TbFileReport } from 'react-icons/tb';
import resume from "../assets/resume.png";
import resumePdf from '../assets/Mani_Harsha_Resume.pdf';

const Resume = () => {
    return(
        <div>
            <Helmet>
                <meta name="description" content="Resume of Harsha Masina" />
                <meta name='keywords' content='Resume, Harsha Masina, Resume of Harsha Masina' />
            </Helmet>
            
            <section className="resume" id="resume">
                <h2><TbFileReport /></h2>
                <h2>Resume</h2>
                <p>Check out my resume</p>
                <div className="resume-container">
                    <div className='resume_img'>
                        <img src={resume} alt="Header Img" />
                    </div>
                    
                    <div className='resume-btn'>
                        <a href={resumePdf} target="_blank" rel="noopener noreferrer">
                            <span>View or Download My Resume <MdOutlineDownload /></span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Resume;