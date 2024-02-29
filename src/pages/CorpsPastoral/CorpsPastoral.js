import React, {useEffect} from 'react'
import { motion } from 'framer-motion'
import { Example } from '../../components/Ap_Yvan_Castanou/Example';
import { PstCelestin } from '../../components/Pst_Celestin_Yao/PstCelestin';
import { PstTonny } from '../../components/Pst_Tonny_Tshibangu/PstTonny';
import { ApPatience } from '../../components/Ap_Patience_Katunda/ApPatience';
import { Link } from 'react-router-dom';
import './CorpsPastoral.css'

export default function CorpsPastoral() {
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
            <motion.p variants={present} initial="hidden" animate="visible" exit="exit" id='bv-home' className='present'>LE CORPS PASTORAL À</motion.p>
            <motion.p variants={present} initial="hidden" animate="visible" exit="exit" id='icc-head-home' className='present'>IMPACT CENTRE CHRÉTIEN</motion.p>
            <motion.p variants={present} initial="hidden" animate="visible" exit="exit" id='toronto-head-home' className='present'>TORONTO</motion.p>
            <Link to="/contact" style={{'textDecoration': 'none'}}><motion.p variants={btnPresent} initial="hidden" animate="visible" exit="exit"  class='btn-head' id='btn-one' href='/'>NOUS REJOINDRE ! &rarr;</motion.p></Link>
        </div>
        <div className='hero-four' id='yvcast'>
            <p className='title-hero hero-four-title' style={{'color':'white'}}>APÔTRE YVAN CASTANOU</p>
            <div className='hero-four-left' style={{'color':'white'}}>
                <p>Yvan Castanou est le Père fondateur des églises « Impact Centre Chrétien » implantées dans le monde, à travers lesquelles le Saint-Esprit transforme une multitude d’hommes 
                    et de femmes en de véritables adorateurs (disciples). Après avoir effectué un premier cursus biblique en Angleterre, il en a suivi une autre à l’Institut Biblique de Paris
                     et à l’Académie des Hautes Etudes Théologiques et Pastorales.</p>
                <a href='https://impactcentrechretien.com/pasteur-yvan-castanou/' target='_blank' style={{'textDecoration': 'none'}}><p className='btn-head btn-four'>EN SAVOIR PLUS &rarr;</p></a>
            </div>
            <div className='hero-four-right .example-container'>
                {/* <img src='couple_castanou.png' alt='couple_castanou' id='cp_castanou'/> */}
                <Example/>
            </div>
        </div>
        <div className='hero-four' id='celyao'>
            <p className='title-hero hero-four-title' >PASTEUR CELESTIN YAO</p>
            <div className='hero-four-left'>
                <p>Le Pasteur Célestin Yâo est le pasteur superviseur des églises ICC en Amérique du Nord. Il exerce le ministère pastoral depuis octobre 1999 et
                     il a vraiment à cœur la formation et le perfectionnement des saints. Les personnes que le Seigneur a placées à ses côtés témoignent de ce qu’il
                      a discerné et vu en elles le potentiel qu’elles ne percevaient pas encore.</p>
                <a href='https://impactcentrechretien.com/montreal/accueil-2/pasteur-celestin-yao/' target='_blank' style={{'textDecoration': 'none'}}><p className='btn-head btn-four'>EN SAVOIR PLUS &rarr;</p></a>
            </div>
            <div className='hero-four-right .example-container'>
                {/* <img src='couple_castanou.png' alt='couple_castanou' id='cp_castanou'/> */}
                <PstCelestin/>
            </div>
        </div>
        <div className='hero-four' id='tontshib'>
            <p className='title-hero hero-four-title' >PASTEUR TONNY TSHIBANGU</p>
            <div className='hero-four-left'>
                <p>Le Pasteur Célestin Yâo est le pasteur superviseur des églises ICC en Amérique du Nord. Il exerce le ministère pastoral depuis octobre 1999 et
                     il a vraiment à cœur la formation et le perfectionnement des saints. Les personnes que le Seigneur a placées à ses côtés témoignent de ce qu’il
                      a discerné et vu en elles le potentiel qu’elles ne percevaient pas encore.</p>
                <a href='https://impactcentrechretien.com/montreal/accueil-2/pasteur-celestin-yao/' target='_blank' style={{'textDecoration': 'none'}}><p className='btn-head btn-four'>EN SAVOIR PLUS &rarr;</p></a>
            </div>
            <div className='hero-four-right .example-container'>
                {/* <img src='couple_castanou.png' alt='couple_castanou' id='cp_castanou'/> */}
                <PstTonny/>
            </div>
        </div>
        <div className='hero-four' id='patkat'>
            <p className='title-hero hero-four-title' >ASSISTANT PASTEUR PATIENCE KATUNDA</p>
            <div className='hero-four-left'>
                <p>Le Pasteur Célestin Yâo est le pasteur superviseur des églises ICC en Amérique du Nord. Il exerce le ministère pastoral depuis octobre 1999 et
                     il a vraiment à cœur la formation et le perfectionnement des saints. Les personnes que le Seigneur a placées à ses côtés témoignent de ce qu’il
                      a discerné et vu en elles le potentiel qu’elles ne percevaient pas encore.</p>
                <a href='https://impactcentrechretien.com/montreal/accueil-2/pasteur-celestin-yao/' target='_blank' style={{'textDecoration': 'none'}}><p className='btn-head btn-four'>EN SAVOIR PLUS &rarr;</p></a>
            </div>
            <div className='hero-four-right .example-container'>
                {/* <img src='couple_castanou.png' alt='couple_castanou' id='cp_castanou'/> */}
                <ApPatience/>
            </div>
        </div>
    </div>
  )
}
