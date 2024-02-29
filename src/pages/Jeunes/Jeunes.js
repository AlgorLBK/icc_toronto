import React, {useEffect} from 'react';
import './Jeunes.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
export default function Jeunes() {

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
            <motion.p variants={present} initial="hidden" animate="visible" exit="exit" id='bv-home' className='present'>LES JEUNES À</motion.p>
            <motion.p variants={present} initial="hidden" animate="visible" exit="exit" id='icc-head-home' className='present'>IMPACT CENTRE CHRÉTIEN</motion.p>
            <motion.p variants={present} initial="hidden" animate="visible" exit="exit" id='toronto-head-home' className='present'>TORONTO</motion.p>
            <Link to="/contact" style={{'textDecoration': 'none'}}><motion.p variants={btnPresent} initial="hidden" animate="visible" exit="exit"  class='btn-head' id='btn-one' href='/'>NOUS REJOINDRE ! &rarr;</motion.p></Link>
        </div>
        <div className='nos-programmes-container notre-vision nos-valeurs'>
            <p className='programme-title'>NOS VALEURS</p>
              <p className='programme-comment'>Nos valeurs, C DIEU ! Il s’agit de bâtir une jeunesse :</p>
                  <ul id='valeur-list'>
                      <li>C comme CONSACRÉE, des jeunes résolus à se préserver en vivant une vie de sainteté.</li>
                                                <li>D comme DYNAMIQUE afin de servir notre génération et être des sources de bénédiction pour notre famille, nos amis, notre entourage.</li>
                                                <li>I comme INFLUENTE afin d’être des modèles pour les jeunes de notre génération, par nos actes, nos paroles et notre attitude.</li>
                                                <li>E comme EPANOUIE et vivant en harmonie avec Dieu pour un développement spirituel et émotionnel.</li>
                                                <li>U comme UNIE, partageant des moments de joie et de bonheur favorisant une unité totale.</li>
                  </ul>
                                                
        </div>
        <div className='nos-programmes-container nos-programmes'>
            <p className='programme-title'>NOS PROGRAMMES</p>
            <p className='programme-comment'>Nous nous retrouvons pour former des jeunes dynamiques, motivés et prêts à relever le défi contemporain : être en communion avec Christ et impacter notre société.<br /> Pour cela, nous allions des moments de détente avec des activités édifiantes pour un épanouissement total !</p>
            <div className='nos-programmes-hero'>
                <div id='nos-programmes-hero-one' className='sub-hero'>
                    <p className='programme-title-head'>DIVERTISSEMENT</p>
                    <p>Parce que nous croyons qu'il est important de communier entre frères et sœurs.</p>
                    <p className='verset-jeunes'>Cantique des degrés. De David. Voici, oh! qu'il est agréable, qu'il est doux Pour des frères de demeurer ensemble!<br/>Psaumes 133:1 (LSG)</p>
                    <img className='programme-image' src='../divertissement.jpg' alt="divertissement" />
                </div>
                <div id='nos-programmes-hero-two' className='sub-hero'>
                    <p className='programme-title-head'>ÉVANGÉLISATION</p>
                    <p>Parce que nous ne voulons pas garder le bonheur qu'est Christ pour nous-mêmes.</p>
                    <p className='verset-jeunes'>Car ainsi nous l'a ordonné le Seigneur: Je t'ai établi pour être la lumière des nations, Pour porter le salut jusqu'aux extrémités de la terre.<br/>Actes 13:47 (LSG)</p>
                    <img className='programme-image' src='../évangélisation.jpg' alt="évangélisation" />
                </div>
                <div id='nos-programmes-hero-three' className='sub-hero'>
                    <p className='programme-title-head'>PRIÈRE</p>
                    <p>Parce que nous savons que la prière est la respiration de l'enfant de Dieu.</p>
                    <p className='verset-jeunes'>Car là où deux ou trois sont assemblés en mon nom, je suis au milieu d'eux.<br/>Matthieu 18:20 (LSG)</p>
                    <img className='programme-image' src='../prière.jpg' alt="prière" />
                </div>
            </div>
            
              
        </div>
    </div>
  )
}
