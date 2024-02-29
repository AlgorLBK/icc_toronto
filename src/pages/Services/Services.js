import React, {useEffect} from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import './Services.css'

export default function Services() {
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
            <motion.p variants={present} initial="hidden" animate="visible" exit="exit" id='bv-home' className='present'>LES SERVICES À</motion.p>
            <motion.p variants={present} initial="hidden" animate="visible" exit="exit" id='icc-head-home' className='present'>IMPACT CENTRE CHRÉTIEN</motion.p>
            <motion.p variants={present} initial="hidden" animate="visible" exit="exit" id='toronto-head-home' className='present'>TORONTO</motion.p>
            <Link to="/contact" style={{'textDecoration': 'none'}}><motion.p variants={btnPresent} initial="hidden" animate="visible" exit="exit"  class='btn-head' id='btn-one' href='/'>NOUS REJOINDRE ! &rarr;</motion.p></Link>
        </div>
        <div className='hero-four' style={{'backgroundColor': '#D9D9D9'}}>
            <p className='title-hero hero-four-title' style={{'color':'black'}}>POUR LES HOMMES</p>
            <div className='hero-four-left' style={{'color':'black'}}>
                <p>Une plateforme de communion, d’échanges sur les principales questions que se pose l’homme moderne, dans son identité propre et dans la réalisation de sa destinée.</p>
                <Link to="/services/hommes" style={{'textDecoration': 'none'}}><p className='btn-head btn-four'>EN SAVOIR PLUS &rarr;</p></Link>
            </div>
            <div className='hero-four-right '>
                <img src="mhi.png" alt='hommes' className='img-services'/>
            </div>
        </div>
        <div className='hero-four' style={{'backgroundColor': '#70358E'}}>
            <p className='title-hero hero-four-title' style={{'color':'white'}}>POUR LES FEMMES</p>
            <div className='hero-four-left' style={{'color':'white'}}>
                <p>Nous voulons donner aux femmes chrétiennes, de toute culture et tout âge, l’opportunité de se rassembler, de s’encourager et de se déployer, afin d’influencer positivement leur environnement.</p>
                <Link to="/services/femmes" style={{'textDecoration': 'none'}}><p className='btn-head btn-four'>EN SAVOIR PLUS &rarr;</p></Link>
            </div>
            <div className='hero-four-right '>
                <img src="mfi.png" alt='femmes' className='img-services'/>
            </div>
        </div>
        <div className='hero-four' style={{'backgroundColor': '#F9D03B'}}>
            <p className='title-hero hero-four-title' style={{'color':'black'}}>POUR LES JEUNES</p>
            <div className='hero-four-left' style={{'color':'black'}}>
                <p>Notre profond désir à Impact Centre Chrétien est d’encourager, d’équiper et de consolider la jeunesse chrétienne francophone.
                    Ainsi, de Toronto jusqu’aux extrémités de la Terre, une jeunesse consciente, distinguée, focalisée et déterminée à vivre et manifester les standards de Christ, est en train de se lever pour impacter positivement sa génération.</p>
                <Link to="/services/jeunes" style={{'textDecoration': 'none'}}><p className='btn-head btn-four'>EN SAVOIR PLUS &rarr;</p></Link>
            </div>
            <div className='hero-four-right '>
                <img src="mji.png" alt='jeunes' className='img-services'/>
            </div>
        </div>
        <div className='hero-four' style={{'backgroundColor': '#BAFFA9'}}>
            <p className='title-hero hero-four-title' style={{'color':'black'}}>POUR LES ENFANTS</p>
            <div className='hero-four-left' style={{'color':'black'}}>
                <p>Reconnaissant que les enfants sont un héritage de Notre Dieu, Impact Centre Chrétien valorise et met tout en œuvre pour que nos enfants grandissent conformément aux valeurs et aux principes du Royaume de Dieu, afin qu’ils ne s’en détournent pas quand ils seront grands.
                    Notre désir, s’engager à œuvrer pour que chaque enfant évolue dans les meilleures conditions et avec pour seul objectif : Permettre aux enfants d’expérimenter très tôt l’amour de Jésus, leur meilleur et plus fidèle ami !</p>
                <Link to="/services/enfants" style={{'textDecoration': 'none'}}><p className='btn-head btn-four'>EN SAVOIR PLUS &rarr;</p></Link>
            </div>
            <div className='hero-four-right '>
                <img src="mij.png" alt='enfants' className='img-services'/>
            </div>
        </div>
        <div className='hero-four' style={{'backgroundColor': '#848484'}}>
            <p className='title-hero hero-four-title' style={{'color':'white'}}>POUR LES CÉLIBATAIRES</p>
            <div className='hero-four-left' style={{'color':'white'}}>
                <p>Nous sommes convaincus que célibat ne rime pas avec solitude. Mais il s’agit d’une période de transition qui doit être mise à profit pour mieux vous préparer au niveau spirituel, émotionnel, physique et mental à rencontrer le conjoint que Dieu enverra vers vous.</p>
                <Link to="/contact" style={{'textDecoration': 'none'}}><p className='btn-head btn-four'>NOUS CONTACTER &rarr;</p></Link>
            </div>
            <div className='hero-four-right '>
                <img src="mij.png" alt='contact' className='img-services'/>
            </div>
        </div>
        <div className='hero-four' style={{'backgroundColor': '#057491'}}>
            <p className='title-hero hero-four-title' style={{'color':'white'}}>POUR LES SOINS PASTORAUX</p>
            <div className='hero-four-left' style={{'color':'white'}}>
                <p>Parce que prendre soin des âmes est notre priorité à Impact Centre Chrétien, l’équipe pastorale se tient à votre disposition pour vous aider et vous accompagner.</p>
                <Link to="/contact" style={{'textDecoration': 'none'}}><p className='btn-head btn-four'>NOUS CONTACTER &rarr;</p></Link>
            </div>
            <div className='hero-four-right '>
                <img src="soins.png" alt='soins' className='img-services'/>
            </div>
        </div>
        <div className='hero-four' style={{'backgroundColor': '#F9D03B'}}>
            <p className='title-hero hero-four-title' style={{'color':'white'}}>POUR LES NOUVEAUX</p>
            <div className='hero-four-left' style={{'color':'white'}}>
                <p>À Impact Centre Chrétien, Nous voulons accueillir et prendre soin des nouvelles personnes qui nous rejoignent. Une équipe de conseillers se tient à votre disposition.</p>
                <Link to="/contact" style={{'textDecoration': 'none'}}><p className='btn-head btn-four'>NOUS CONTACTER &rarr;</p></Link>
            </div>
            <div className='hero-four-right '>
                <img src="bienvenue.png" alt='nouveaux' className='img-services'/>
            </div>
        </div>
    </div>
  )
}
