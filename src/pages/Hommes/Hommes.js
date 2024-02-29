import React, {useEffect} from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hommes.css'
export default function Hommes() {
    useEffect(() => {
    window.scrollTo(0, 0);
    }, []);

    const present = {
        hidden: { opacity: 0, y: -200 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        exit: { opacity: 0, y: -20 },
    };

    const btnPresent = {
        hidden: { opacity: 0, y: 180 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        exit: { opacity: 0, y: -20 },
    };

  return (
    <div>
        <div className='head-home-container'>
            <motion.p variants={present} initial="hidden" animate="visible" exit="exit" id='bv-home' className='present'>LES HOMMES À</motion.p>
            <motion.p variants={present} initial="hidden" animate="visible" exit="exit" id='icc-head-home' className='present'>IMPACT CENTRE CHRÉTIEN</motion.p>
            <motion.p variants={present} initial="hidden" animate="visible" exit="exit" id='toronto-head-home' className='present'>TORONTO</motion.p>
            <Link to="/contact" style={{'textDecoration': 'none'}}><motion.p variants={btnPresent} initial="hidden" animate="visible" exit="exit"  class='btn-head' id='btn-one' href='/'>NOUS REJOINDRE ! &rarr;</motion.p></Link>
        </div>
        <div className='nos-programmes-container hommes-qui-sommes-nous'>
            <p className='programme-title hommes-qui-sommes-nous-title'>QUI SOMMES-NOUS ?</p>
            <p className='programme-comment hommes-qui-sommes-nous-comment'>La plateforme des Hommes d’Impact a pour mission d’œuvrer à la construction d’hommes matures et modèles qui utilisent les principes de la Parole de Dieu pour faire la différence dans leur génération. Conscients de notre rôle d’ambassadeurs pour les nations.<br/> Nous voulons impacter notre génération par notre témoignage, par nos valeurs et par les actions concrètes tournées vers ceux qui ne connaissent pas encore le Seigneur Jésus.
                                            Nous offrons aux hommes de toute origine sociale, professionnelle et géographique une plateforme de communion et d’échange sur les principales questions que se pose l’homme moderne dans son identité propre et la réalisation de sa destinée en Christ-Jésus.</p>
        </div>
        <div className='nos-programmes-container notre-vision'>
            <p className='programme-title'>NOTRE VISION</p>
            <p className='programme-comment'>Être une plateforme qui permette aux hommes de progresser ensemble dans leur foi, de créer des relations et amitiés véritables, de bénéficier d’enseignements, de soutien et services spécifiques à leurs besoins propres.
                                            Être un cadre d’édification et de communion fraternelle pour tous les hommes faisant partie de la grande famille ICC, pour ceux qui souhaitent intégrer une plateforme de croissance, de maturité spirituelle et de propulsion vers leur destinée ainsi que tous ceux qui souhaitent découvrir collectivement une vie passionnante et réellement motivée par l’essentiel.
                                            Apporter des réponses pratiques et inspirées aux défis du quotidien
                                            Faciliter l’intégration dans une église qui se veut une véritable famille
                                            Créer un réseau entre hommes
                                            Agir collectivement</p>
        </div>
        <div className='nos-programmes-container nos-programmes'>
            <p className='programme-title'>NOS PROGRAMMES</p>
            <p className='programme-comment'>Nous nous retrouvons pour former des hommes dynamiques, motivés et prêts à relever le défi contemporain : être en communion avec Christ et impacter notre société. Pour cela, nous allions des moments de détente avec des activités édifiantes pour un épanouissement total !</p>
            <div className='nos-programmes-hero'>
                <div id='nos-programmes-hero-one'>
                    {/* <p className='programme-title-head'>DIVERTISSEMENT</p> */}
                    <img className='programme-image' src='../hommes_1.jpg' alt="divertissement" />
                </div>
                <div id='nos-programmes-hero-two'>
                    {/* <p className='programme-title-head'>ÉVANGÉLISATION</p> */}
                    <img className='programme-image' src='../hommes_2.jpg' alt="divertissement" />
                </div>
                <div id='nos-programmes-hero-three'>
                    {/* <p className='programme-title-head'>PRIÈRE</p> */}
                    <img className='programme-image' src='../hommes_3.jpg' alt="divertissement" />
                </div>
            </div>
            
              
        </div>
    </div>
  )
}
