import React from 'react';
import './Footer.css';

const Footer = () => (
    <footer className='footer'>
        <p>&copy; {new Date().getFullYear()} Lopez Nicolas. Todos los derechos reservados.</p>
    </footer>
);

export default Footer;