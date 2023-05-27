import { MdOutlineDownload } from 'react-icons/md';
import { TbFileReport } from 'react-icons/tb';

const Resume = () => {
    return(
        <section className="resume" id="resume">
            <h2><TbFileReport /></h2>
            <h2>Resume</h2>
            <p>Check out my resume</p>
            <div className="resume-container">
                <div>
                    <img src="https://cellix-bio-mis.s3.ap-south-1.amazonaws.com/portfolio/drawing.png" alt="Header Img" />
                </div>
                <div className='resume-btn'>
                    <a href="https://cellix-bio-mis.s3.ap-south-1.amazonaws.com/portfolio/Harsha's+Resume.pdf" download="resume" target="_blank">
                        <span>View or Download My Resume <MdOutlineDownload /></span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Resume;