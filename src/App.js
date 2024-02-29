import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer';
import Jeunes from './pages/Jeunes/Jeunes';
import Hommes from './pages/Hommes/Hommes';
import Femmes from './pages/Femmes/Femmes';
import Enfants from './pages/Enfants/Enfants';
import CorpsPastoral from './pages/CorpsPastoral/CorpsPastoral';
import Servir from './pages/Servir/Servir';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services';

function App() {
  return (
    <Router><Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/hommes" element={<Hommes />} />
        <Route path="/services/femmes" element={<Femmes />} />
        <Route path="/services/jeunes" element={<Jeunes />} />
        <Route path="/services/enfants" element={<Enfants />} />
        <Route path="/corpspastoral" element={<CorpsPastoral />} />
        <Route path="/servir" element={<Servir />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services/>} />
      </Routes><Footer/>
    </Router>
  );
}

export default App;
