import React, {useEffect} from 'react';
import './Home.css';
import { Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import { Example } from '../../components/Ap_Yvan_Castanou/Example';

export default function Head_home() {
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
        {/* Header */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"></link>
        
        <div className='head-home-container'>
            <motion.p variants={present} initial="hidden" animate="visible" exit="exit" id='bv-home' className='present'>BIENVENUE À</motion.p>
            <motion.p variants={present} initial="hidden" animate="visible" exit="exit" id='icc-head-home' className='present'>IMPACT CENTRE CHRÉTIEN</motion.p>
            <motion.p variants={present} initial="hidden" animate="visible" exit="exit" id='toronto-head-home' className='present'>TORONTO</motion.p>
            <Link to="/contact" style={{'textDecoration': 'none'}}><motion.p variants={btnPresent} initial="hidden" animate="visible" exit="exit"  class='btn-head' id='btn-one'>NOUS REJOINDRE ! &rarr;</motion.p></Link>
        </div>
            <div id='transit-one' style={{ 'backgroundColor': 'red', 'height': '56px', 'backgroundImage': 'url(transit-one.png)'}}>
            
            </div>
        {/* Hero 1 */}
        
        <div className='hero-one' style={{'padding': '15px 15px'}}>
            <div class="row row-cols-1 row-cols-md-4 mb-3 text-center">
                <div class="col">
                    <div class="rounded-3 shadow-sm">
                        <a href='https://osezjesus.com/' style={{'textDecoration': 'none', 'color': 'black'}}  target='_blank' rel="noreferrer">
                            <img src='Osez-Jésus.png' alt='osez-Jésus' className='img-hero-one'/>
                            <p className='title-hero-one'>TÉMOIGNAGES</p>
                            <p className='comment-hero-one'>Découvrez les histoires extraordinaires de ceux qui ont expérimenté Jésus !</p>
                        </a>
                    </div>
                </div>
                <div class="col">
                    <div class="rounded-3 shadow-sm">
                        <a href='https://impactcentrechretien.com/le-parcours-de-croissance/' style={{'textDecoration': 'none', 'color': 'black'}}  target='_blank' rel="noreferrer">
                            <img src='pcnc.png' alt='formation' className='img-hero-one'/>
                            <p className='title-hero-one'>FORMATION</p>
                            <p className='comment-hero-one'>Notre désir, vous accompagner dans votre parcours pour faire de vous de véritables disciples de Christ.</p>
                        </a>
                    </div>
                </div>
                <div class="col">
                    <div class="rounded-3 shadow-sm">
                        <a href='https://impactcentrechretien.com/qui-sommes-nous/' style={{'textDecoration': 'none', 'color': 'black'}}  target='_blank' rel="noreferrer">
                            <img src='idée.png' alt='vision' className='img-hero-one'/>
                            <p className='title-hero-one'>NOTRE VISION</p>
                            <p className='comment-hero-one'>Ensemble, Découvrez ce qu’Impact Centre Chrétien veut faire à travers vous.</p> 
                        </a>
                    </div>
                </div>
                <div class="col">
                    <div class="rounded-3 shadow-sm">
                        <Link to="/services" style={{'textDecoration': 'none'}}><div style={{'textDecoration': 'none', 'color': 'black'}}>
                            <img src='services.png' alt='services' className='img-hero-one'/>
                            <p className='title-hero-one'>SERVICES</p>
                            <p style={{'color': 'black'}} className='comment-hero-one'>Rejoignez nos différentes plateformes destinées à vous aider et prendre soin de vous.</p>
                        </div></Link>
                        
                    </div>
                </div>
            </div>
        </div>
        
        {/* Hero 2 */}
        <div className='hero' id='hero-two'>
            <p className='title-hero' id='title-hero-two'>UNE FAMILLE, PLUSIEURES ADRESSES !</p>
            <p className='comment-hero' id='comment-hero-two'>Allez, faites de toutes les nations des disciples, 
                                        <br/>les baptisant au nom du Père, du Fils et du Saint-Esprit,
                <br/>Matthieu 28:19 (LSG)</p>
            <a href='https://impactcentrechretien.com/nos-familles/' target='_blank' className='btn-head' rel="noreferrer">NOS ADRESSES &rarr;</a>
        </div>
        
        {/* Hero 3 */}
        <div className='hero' id='hero-three'>
            <p className='title-hero' id='title-hero-three'>UN PARCOURS DE CROISSANCE SUR MESURE</p>
            <p className='comment-hero' id='comment-hero-three'>Vous désirez grandir dans votre foi et progresser dans votre marche avec Dieu ?
                                                                <br/>A ICC, nous avons également ce désir et ce fardeau qui consiste à construire des générations d’hommes et de femmes restaurés, consacrés et conscients de leur potentiel, qui influenceront positivement leur génération.
                                                                <br/>Accédez à l’ensemble de nos services conçus pour vous aider et vous accompagner dans votre souhait de grandir spirituellement.</p>
            <a href='https://impactcentrechretien.com/le-parcours-de-croissance/' target='_blank' className='btn-head' rel="noreferrer">DÉCOUVRIR &rarr;</a>
        </div>

        {/* Hero 4 */}
        <div className='hero-four'>
            <p className='title-hero hero-four-title'>CORPS PASTORAL</p>
            <div className='hero-four-left'>
                <p>Yvan Castanou est le Père fondateur des églises « Impact Centre Chrétien » implantées dans le monde, à travers lesquelles le Saint-Esprit transforme une multitude d’hommes et de femmes en de véritables adorateurs (disciples).<br/>
                    Après avoir effectué un premier cursus biblique en Angleterre, il en a suivi une autre à l’Institut Biblique de Paris et à l’Académie des Hautes Etudes Théologiques et Pastorales.</p>
                <Link to='/corpspastoral' style={{'textDecoration': 'none'}}><p  className='btn-head btn-four'>EN SAVOIR PLUS &rarr;</p></Link>
            </div>
            <div className='hero-four-right .example-container'>
                {/* <img src='couple_castanou.png' alt='couple_castanou' id='cp_castanou'/> */}
                <Example/>
            </div>
        </div>
        
        {/* Hero 5 */}
        <div className='hero' id='hero-five'>
            <p className='title-hero'>DES PLATEFORMES POUR TOUS</p>
            <div class="row row-cols-1 row-cols-md-4 mb-3 text-center">
                <Link to='/services/hommes' style={{'textDecoration': 'none'}}>
                    <div class="col">
                        <div class="rounded-3 shadow-sm">
                            <img src='mhi.png' alt='osez-Jésus' className='img-hero-five'/>
                            <p className='title-hero-five'>LES HOMMES</p>
                        </div>
                    </div>
                </Link>
                <Link to='/services/femmes' style={{'textDecoration': 'none'}}>
                    <div class="col">
                        <div class="rounded-3 shadow-sm">
                            <img src='mfi.png' alt='formation' className='img-hero-five'/>
                            <p className='title-hero-five'>LES FEMMES</p>
                        </div>
                    </div>
                </Link>
                <Link to='/services/jeunes' style={{'textDecoration': 'none'}}>
                    <div class="col">
                        <div class="rounded-3 shadow-sm">
                            <img src='mji.png' alt='vision' className='img-hero-five'/>
                            <p className='title-hero-five'>LES JEUNES</p>
                        </div>
                    </div>
                </Link>
                <Link to='/services/enfants' style={{'textDecoration': 'none'}}>
                    <div class="col">
                        <div class="rounded-3 shadow-sm">
                            <img src='mij.png' alt='services' className='img-hero-five'/>
                            <p className='title-hero-five'>LES ENFANTS</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}
