import { MdOutlineWorkHistory } from "react-icons/md";
import { Helmet } from 'react-helmet';

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

                </div>
            </section>
        </div>
    )
};

export default Experience;