import React, {useEffect} from 'react';
import { motion } from 'framer-motion';
import './Enfants.css';
import { Link } from 'react-router-dom';

export default function Enfants() {
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
            <motion.p variants={present} initial="hidden" animate="visible" exit="exit" id='bv-home' className='present'>LES ENFANTS À</motion.p>
            <motion.p variants={present} initial="hidden" animate="visible" exit="exit" id='icc-head-home' className='present'>IMPACT CENTRE CHRÉTIEN</motion.p>
            <motion.p variants={present} initial="hidden" animate="visible" exit="exit" id='toronto-head-home' className='present'>TORONTO</motion.p>
            <Link to="/contact" style={{'textDecoration': 'none'}}><motion.p variants={btnPresent} initial="hidden" animate="visible" exit="exit"  class='btn-head' id='btn-one' href='/'>NOUS REJOINDRE ! &rarr;</motion.p></Link>
        </div>
        <div className='nos-programmes-container hommes-qui-sommes-nous'>
            <p className='programme-title hommes-qui-sommes-nous-title'>QUI SOMMES-NOUS ?</p>
              <p className='programme-comment hommes-qui-sommes-nous-comment'>Reconnaissant que les enfants sont un héritage de Notre Dieu, Impact Centre Chrétien valorise et met tout en œuvre pour que nos enfants grandissent conformément aux valeurs et aux principes du Royaume de Dieu, afin qu’ils ne s’en détournent pas quand ils seront grands.
                                                                            <br/>La vocation de l’équipe Impact Junior est de s’engager à œuvrer pour que chaque enfant évolue dans les meilleures conditions et avec pour seul objectif : Permettre aux enfants d’expérimenter très tôt l’amour de Jésus, leur meilleur et plus fidèle ami ! Impact Junior a en charge la transmission des valeurs bibliques aux enfants, au travers de supports pédagogiques, pratiques et ludiques qui rendent la parole de Dieu dynamique, attrayante et accessible à la compréhension de nos enfants.
                                                                            <br/>Impact Junior est animé par une équipe de moniteurs motivés pour l’enseignement et aspirant à transmettre le message du Royaume afin qu’il ait un réel impact dans la vie des enfants qui nous sont confiés.</p>
        </div>
    </div>
  )
}
