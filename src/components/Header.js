import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import './Header.css'
export default function Header() {

useEffect(() => {
    const handleScroll = () => {
      const navHeader = document.querySelector('.navHead');
      if (window.scrollY >= 70) {
        navHeader.classList.add("scrolled-nav");
      } else {
        navHeader.classList.remove("scrolled-nav");
      }
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"></link>
        <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 fixed-top navHead" style={{'padding':'0px 10px'}}>
            <a href="/" class="d-flex align-items-center link-body-emphasis text-decoration-none">
                <img src='LOGO-BLANC.png' width={60} height={60} alt="" style={{'marginTop': '5px'}} />
            </a>

            <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                <a class="me-3 py-2 link-body-emphasis text-decoration-none header-link" href="/">ACCUEIL</a>
                <Link class="me-3 py-2 link-body-emphasis text-decoration-none header-link" to="/servir">SERVIR</Link>
                <a class="me-3 py-2 link-body-emphasis text-decoration-none header-link" href="#" style={{'pointerEvents': 'none'}}>MINISTÈRES</a>
                <a class="me-3 py-2 link-body-emphasis text-decoration-none header-link" href="/contact">CONTACT</a>
            </nav>
        </div>
    </div>
  )
}
