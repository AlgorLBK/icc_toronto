import React, {useEffect, useRef, useState} from 'react';
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";
import './Contact.css';
export default function Contact() {

    useEffect(() => {
    window.scrollTo(0, 0);
    }, []);

    const present = {
        hidden: { opacity: 0, y: -200 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        exit: { opacity: 0, y: -20 },
    };

    // const btnPresent = {
    //     hidden: { opacity: 0, y: 180 },
    //     visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    //     exit: { opacity: 0, y: -20 },
    // };

    const formRef = useRef();
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
        ...form,
        [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs
        .send(
            "service_hka7cmf",
            "template_3gg3ums",
            {
            from_name: form.firstName + " " + form.lastName + " <" + form.phoneNumber + ">",
            to_name: "Algor",
            from_email: form.email,
            to_email: "algorlombako@gmail.com",
            message: form.message,
            },
            "2jWdWpeQxw1DuAhIg"
        )
        .then(
            () => {
            setLoading(false);
            alert("Merci. Nous vous reviendrons aussi tôt que possible.");

            setForm({
                firstName: "",
                lastName: "",
                phoneNumber: "",
                email: "",
                message: ""
            });
            },
            (error) => {
            setLoading(false);
            console.error(error);

            alert("Oops ! Il y a eu une erreur. Veuillez réessayer s'il vous plaît.");
            }
        );
    };

  return (
    <div>
        <div className='head-home-container'>
            <motion.p variants={present} initial="hidden" animate="visible" exit="exit" id='bv-home' className='present'>CONTACTER</motion.p>
            <motion.p variants={present} initial="hidden" animate="visible" exit="exit" id='icc-head-home' className='present'>IMPACT CENTRE CHRÉTIEN</motion.p>
            <motion.p variants={present} initial="hidden" animate="visible" exit="exit" id='toronto-head-home' className='present'>TORONTO</motion.p>
        </div>
        <div style={{'backgroundColor': '#F1F3F4','display': 'flex', 'flexDirection': 'column', 'justifyContent' : 'center', 'textAlign': 'center', 'padding':'30px'}}>
            <p>L'église se situe au 3875 McNicoll Avenue, Suite 200.</p>
            <iframe
                id='map'
                width="600"
                height="300"
                style={{'border':'0', 'margin':'auto'}}
                loading="lazy"
                allowfullscreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.8466251082396!2d-79.28185428456233!3d43.8071913791163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d994e1bfcccb%3A0x4c4b83bc3011b1a6!2s3875%20McNicoll%20Ave%2C%20Scarborough%2C%20ON%20M1X%202E1%2C%20Canada!5e0!3m2!1sen!2sus!4v1671544908107!5m2!1sen!2sus">
            </iframe>
        </div>
        <div style={{'backgroundColor': '#70358E','display': 'flex', 'flexDirection': 'column', 'justifyContent' : 'center', 'textAlign': 'center'}}>
            <div style={{'display': 'flex', 'justifyContent':'center', 'padding': '15px 5px 5px 5px', 'alignItems':'center'}} >
                <p style={{'textAlign':'center', 'width': '80%', 'color': 'white'}}>Pour nous contacter il vous suffit de remplir ce formulaire et nous vous reviendrons le plus tôt possible.</p>
            </div>
            <div style={{'display': 'flex', 'justifyContent':'center', 'padding': '5px', 'color': 'white'}} >
                <p style={{'textAlign':'center', 'width': '80%'}}>Sentez-vous à l'aise, à très bientôt !</p>
            </div>
        </div>
          <div style={{ 'backgroundColor': '#70358E' }}>
            <form ref={formRef} onSubmit={handleSubmit} id="contactForm" action="#" method="post">
                <label for="firstName">Prénom :</label>
                <input onChange={handleChange} value={form.firstName} type="text" id="firstName" name="firstName" required/>

                <label for="lastName">Nom :</label>
                <input onChange={handleChange} value={form.lastName} type="text" id="lastName" name="lastName" required/>

                <label for="phoneNumber">Numéro de téléphone :</label>
                <input onChange={handleChange} value={form.phoneNumber} type="tel" id="phoneNumber" name="phoneNumber" required/>

                <label for="email">Adresse e-mail :</label>
                <input onChange={handleChange} value={form.email}  type="email" id="email" name="email" required/>

                <label for="message">Message :</label>
                <textarea onChange={handleChange} value={form.message} id="message" name="message" rows="4" required></textarea>

                <button type='submit' id="submitButton" value="Submit">
                    {loading ? "Envoi..." : "Envoyer"}
                </button>
            </form>
        </div>
    </div>
  )
}
