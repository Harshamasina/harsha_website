import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { GrCertificate } from 'react-icons/gr';
import { TbClipboardData } from 'react-icons/tb';
import { CgWebsite } from 'react-icons/cg';
import { LiaAws } from 'react-icons/lia';
import { MdDataObject } from 'react-icons/md';
import certificationsData from '../Data/Certifications.json';

const Certifications = () => {
    const credlyRef = useRef(null);

    const iconsMap = {
        TbClipboardData: TbClipboardData,
        CgWebsite: CgWebsite,
        LiaAws: LiaAws,
        MdDataObject: MdDataObject,
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.credly.com/assets/utilities/embed.js';
        script.async = true;
        if (credlyRef.current) {
            credlyRef.current.appendChild(script);
        }
    }, []);

    return (
        <div>
            <Helmet>
                <meta name="description" content="Certifications of Harsha Masina" />
                <meta name="keywords" content="Certifications, Harsha Masina, Certifications of Harsha Masina" />
            </Helmet>

            <section className="certifications" id="certifications">
                <h2><GrCertificate /></h2>
                <h2>Certifications</h2>
                <p>Check out my Accredited Certifications</p>

                <div className="certificate_container">
                    {
                        certificationsData.certificationsData.map(cert => {
                            const IconComponent = iconsMap[cert.icon];
                            return (
                                <div key={cert.id} className="certificate">
                                    <span>{IconComponent && <IconComponent />}</span>
                                    <h3>{cert.title}</h3>
                                    <h5>{cert.institution}, ({cert.date})</h5>
                                </div>
                            );
                        })
                    }
                </div>

                <div className='credly_container'>
                    <div
                        ref={credlyRef}
                        className="credly"
                        data-iframe-width="350"
                        data-iframe-height="220"
                        data-share-badge-id="854c1786-4e3a-4200-a2c1-ddfe939d8760"
                        data-share-badge-host="https://www.credly.com"
                    />
                </div>
            </section>
        </div>
    );
};

export default Certifications;
