import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className="bg-body-tertiary text-center border-top border-dark mt-5 pt-4">
    {/* Grid container */}
    CONTACT DETAILS:
    <div className="container p-4 pb-0" style={{marginTop:'5px',marginBottom:'5px'}}>
      {/* Section: Social media */}
      <section className="mb-4">
        {/* Linkedin */}
        <a data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{backgroundColor: '#0082ca'}} href="https://www.linkedin.com/in/ssonikaa" role="button"><i className="fab fa-linkedin-in"></i> </a>
        {/* Github */}
        <a data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{backgroundColor: '#333333'}} href="https://github.com/SSonikaa" role="button"><i className="fab fa-github" /></a>
      </section>
      
    </div>
    {/* Grid container */}
    {/* Copyright */}
    <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)',marginTop:'5px'}}>
      © 2024 
      <a className="text-body" href="https://www.linkedin.com/in/ssonikaa">   SSonika</a>
    </div>
    {/* Copyright */}
  </footer>
  );
}

export default Footer;
