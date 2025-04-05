import React from 'react'
import emailjs from 'emailjs-com';
import styles from './contactform.module.css'

const ContactForm = () => {

    const SERVICE_ID = "service_andrew";
    const TEMPLATE_ID = "template_uvhadgc";
    const PUBLIC_KEY = "XseJFrnvUKExPPOeV";

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                alert('Message Sent Successfully')
            }, (error) => {
                console.log(error.text);
                alert('Something went wrong!')
            });
        e.target.reset()
    };
    return (
        <div className={styles.form}>

        <form className={styles.formContainer} onSubmit={handleOnSubmit}>
            <h2>Send me a message. Let's have a chat!</h2>
            <div className={styles.formElement}>
                <label htmlFor="from_name">Name</label>
                <input type="text" id="from_name" name="from_name" placeholder="Your name.." required />
            </div>

            <div className={styles.formElement}>
                <label>E-mail</label>
                <input type="email" id="from_email" name="from_email" placeholder="Your email.." required />
            </div>
            <div className={styles.formElement}>
                <label htmlFor="message">Message</label>
                <textarea name="message" rows="8" cols="30" placeholder="Your message.." required />
            </div>
            <button type='submit' className='formButton'>Submit</button>
        </form>

        <div className={styles.image}></div>
        </div>
    )
}

export default ContactForm;