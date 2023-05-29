import { useState } from 'react';
import { MdMailOutline } from 'react-icons/md';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { MdOutlineWhatsapp } from 'react-icons/md';
import { TiMessages } from "react-icons/ti";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { db } from '../Config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { Helmet } from 'react-helmet';
 
const Contact = () => {
    const [userMessage, setUserMessage] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [showModal, setShowModal] = useState(false);
    const CollectionRef = collection(db, 'harsha_portfolio_msg');

    let name, value;
    let handleInputs = (e) => {
        name=e.target.name;
        value = e.target.value;
        setUserMessage({...userMessage, [name]:value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(CollectionRef, userMessage);
            setShowModal(true);
        } catch (err) {
            console.log(err);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setUserMessage({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
    };

    return(
        <div>
            <Helmet>
                <meta name="description" content="Contact Harsha Masina by filling this form" />
                <meta name='keywords' content='Contact Form, Contact Mani Harsha' />
            </Helmet>
            <section id="contact" className='contact'>
                <h2><TiMessages /></h2>
                <h2>Contact Me</h2>
                <p>Get In Touch</p>

                <div className="container contact-container">
                    <div className="contact-options">
                        <article className="contact-option">
                            <MdMailOutline className="contact-option-icon" />
                            <h3>Email</h3>
                            <h4>harshamasina1999@gmail.com</h4>
                            <a href="mailto:harshamasina1999@gmail.com" target="_blank">Send a Mail</a> 
                        </article>

                        <article className="contact-option">
                            <AiOutlineLinkedin className="contact-option-icon" />
                            <h3>LinkedIn</h3>
                            <h4>Masina Mani Harsha</h4>
                            <a href="https://www.linkedin.com/in/masina-mani-harsha-349a1816b/" target="_blank">Send a message in LinkedIn</a> 
                        </article>

                        <article className="contact-option">
                            <MdOutlineWhatsapp className="contact-option-icon" />
                            <h3>Whatsapp</h3>
                            <h4>+91-9032330333</h4>
                            <a href="https://api.whatsapp.com/send?phone=+919032330333" target="_blank">Send a message in Whatsapp</a> 
                        </article>
                    </div> 

                    <form onSubmit={handleSubmit}>
                        <input 
                            type='text' 
                            name='name'
                            value={userMessage.name}
                            onChange={handleInputs}
                            placeholder='Enter Your Name' 
                            required 
                        />

                        <input 
                            type='email' 
                            name='email'
                            value={userMessage.email}
                            onChange={handleInputs}
                            placeholder='Enter Your Email' 
                            required 
                        />

                        <input 
                            type='tel' 
                            name='phone'
                            value={userMessage.phone}
                            onChange={handleInputs}
                            placeholder='Enter Your Phone Number' 
                            required 
                        />

                        <textarea 
                            name='message'
                            value={userMessage.message}
                            onChange={handleInputs}
                            rows='7' 
                            placeholder='Enter Your Message' 
                            required 
                        />
                        <button type='submit' className='btn-submit'>Send Message</button>
                    </form>
                </div>

                <Modal show={showModal} onHide={() => setShowModal(false)} centered className='contact-modal shadow-lg' size='lg'>
                    <Modal.Header>
                        <Modal.Title className='modal-title'>Message Sent Successfully</Modal.Title>
                    </Modal.Header>
                    
                    <Modal.Body>{userMessage.name}, Thank You for contacting me!</Modal.Body>
                    
                    <Modal.Footer>
                        <Button onClick={handleCloseModal} className='btn-modal'>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </section>
        </div>
    );
};

export default Contact;