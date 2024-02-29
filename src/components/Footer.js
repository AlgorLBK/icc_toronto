import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div className='footer-container'>
        <div className='left-footer'>
            <p className='footer-text'><a className='footer-link' href="https://www.google.com/maps?q=3875+McNicoll+Ave,+Toronto,+Ontario,+Canada" target="_blank">Rejoignez-nous ici ! (Ouvrir sur Google Maps)</a></p>
            <p className='footer-text'><a className='footer-link' href="tel:+18195259117" target='_blank'>Appelez-nous !</a></p>
            <p className='footer-text'><a className='footer-link' href="mailto:icctoronto@iccameriques.org" target='_blank'>Envoyez-nous un message électronique !</a></p>
        </div>
        <div className='right-footer'>
            <p className='footer-text'><a className='footer-link' href='https://www.youtube.com/@icctvtoronto' target='_blank'><img className='footer-logo' src='youtube.png'/>Youtube</a></p>
            <p className='footer-text'><a className='footer-link' href='https://www.instagram.com/egliseicc_toronto/' target='_blank'><img className='footer-logo' src='instagram.png'/>Instagram</a></p>
            <p className='footer-text'><a className='footer-link' href='https://www.facebook.com/egliseicctoronto?mibextid=YMEMSu' target='_blank'><img className='footer-logo' src='facebook.png'/>Facebook</a></p>
        </div>
    </div>
  )
}
