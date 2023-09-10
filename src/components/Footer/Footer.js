import React from "react";
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  };
    return (
      <footer>
        <div className="white">
        <button className="pa3 w-100 mb5 white bg-green" onClick={scrollToTop}>Scroll back</button>
        <div>
      <h1> BrandName </h1>
      <h1> BrandName </h1>
      <h1> BrandName </h1>
      <h1> BrandName </h1>
        </div>
      
    </div>
      </footer>
  );
}

export default Footer;