import React, { useState } from "react";
import "./light-contactus.css"; // Default light mode styles
import "./dark-contactus.css"; // Dark mode styles

const Contactus = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`contact-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="header">
        <h1>Contact Us</h1>
        <button onClick={toggleTheme} className="dark-mode-button">
          Toggle to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </header>
      <section>
        <h2>Get in Touch</h2>
        <p>Feel free to reach out to us!</p>
        <p>Phone: 9310839491</p>
        <p>Email: zcoders@example.com</p>
      </section>
    </div>
  );
};

export default Contactus;
