import React, {useEffect} from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

export default function Femmes() {
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
            <motion.p variants={present} initial="hidden" animate="visible" exit="exit" id='bv-home' className='present'>LES FEMMES À</motion.p>
            <motion.p variants={present} initial="hidden" animate="visible" exit="exit" id='icc-head-home' className='present'>IMPACT CENTRE CHRÉTIEN</motion.p>
            <motion.p variants={present} initial="hidden" animate="visible" exit="exit" id='toronto-head-home' className='present'>TORONTO</motion.p>
            <Link to="/contact" style={{'textDecoration': 'none'}}><motion.p variants={btnPresent} initial="hidden" animate="visible" exit="exit"  class='btn-head' id='btn-one' href='/'>NOUS REJOINDRE ! &rarr;</motion.p></Link>
        </div>
        <div className='nos-programmes-container hommes-qui-sommes-nous'>
            <p className='programme-title hommes-qui-sommes-nous-title'>QUI SOMMES-NOUS ?</p>
            <p className='programme-comment hommes-qui-sommes-nous-comment'>Aujourd’hui encore, au 21ème siècle, Dieu veut construire des témoignages d’exception au travers de nos vies. Il nous a fixé rendez-vous dès à présent, demeurant dans l’expectative que nos vies laissent un témoignage qui parlera de façon puissante à cette génération et à de nombreuses générations après nous afin de lui rendre gloire. Décidons dès aujourd’hui de nous libérer de toutes les limitations dans lesquelles nous nous étions nous mêmes enfermées et de manifester dans notre génération, l’immense potentiel qu’Il a déposé en nous ! Nous occuperons nos places, celles qu’Il a réservées pour nous femmes d’exception !</p>
        </div>
        <div className='nos-programmes-container notre-vision'>
            <p className='programme-title'>NOTRE MISSION</p>
            <p className='programme-comment'>Être pour vous un centre de refuge si vous êtes en détresse, un centre de guérison si vous êtes blessée, un centre d’épanouissement si vous rêvez de déployer votre immense potentiel et un centre de transformation si vous voulez apprendre à devenir un leader dont le témoignage influence votre conjoint, vos enfants et toutes les personnes qui vous entourent. Pour y arriver, notre équipe vous propose des programmes divers.</p>
        </div>
        <div className='nos-programmes-container nos-programmes'>
            <p className='programme-title'>NOS RENCONTRES</p>
            <p className='programme-comment'>Des ateliers tout au long de l’année pour faciliter les échanges.
                                            Des Retraites entre Femmes d’Impact se déroule dans un cadre verdoyant, calme et reposant.
                                            Des conférences comme « Khayil » où pendant quatre jours des oratrices de renommée internationale nous challenge à être ces femmes vertueuses.</p>
            <div className='nos-programmes-hero'>
                <div id='nos-programmes-hero-one'>
                    {/* <p className='programme-title-head'>DIVERTISSEMENT</p> */}
                    <img className='programme-image' src='../femmes_1.jpg' alt="divertissement" />
                </div>
                <div id='nos-programmes-hero-two'>
                    {/* <p className='programme-title-head'>ÉVANGÉLISATION</p> */}
                    <img className='programme-image' src='../femmes_2.jpg' alt="divertissement" />
                </div>
                <div id='nos-programmes-hero-three'>
                    {/* <p className='programme-title-head'>PRIÈRE</p> */}
                    <img className='programme-image' src='../femmes_3.jpg' alt="divertissement" />
                </div>
            </div>              
        </div>
    </div>
  )
}
