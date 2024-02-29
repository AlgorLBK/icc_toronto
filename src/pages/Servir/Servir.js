import React, {useEffect, useRef, useState} from 'react';
import { motion } from 'framer-motion';
import './Servir.css';
import emailjs from "@emailjs/browser";
export default function Servir() {

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
    <div style={{'backgroundColor': '#70358E'}}>
        <div className='head-home-container'>
            <motion.p variants={present} initial="hidden" animate="visible" exit="exit" id='bv-home' className='present'>SERVIR À</motion.p>
            <motion.p variants={present} initial="hidden" animate="visible" exit="exit" id='icc-head-home' className='present'>IMPACT CENTRE CHRÉTIEN</motion.p>
            <motion.p variants={present} initial="hidden" animate="visible" exit="exit" id='toronto-head-home' className='present'>TORONTO</motion.p>
        </div>
        <div style={{'display': 'flex', 'flexDirection': 'column', 'justifyContent' : 'center', 'textAlign': 'center'}}>
            <div style={{'display': 'flex', 'justifyContent':'center', 'padding': '15px 5px 5px 5px', 'alignItems':'center'}} >
                <p style={{'textAlign':'center', 'width': '80%', 'color': 'white'}}>Vous voulez servir à ICC Toronto ? Laissez-nous vos informations et nous vous reviendrons le plus tôt possible.</p>
            </div>
            <div style={{'display': 'flex', 'justifyContent':'center', 'padding': '5px', 'color': 'white'}} >
                <p style={{'textAlign':'center', 'width': '80%'}}>Vous hésitez encore ? Jetez un coup d'oeil à nos ministères !</p>
            </div>            
            <a style={{ 'margin': ' 10px auto'}} class='btn-head' id='btn-one' href='/'>NOS MINISTÈRES &rarr;</a>
        </div>
        <div>
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
