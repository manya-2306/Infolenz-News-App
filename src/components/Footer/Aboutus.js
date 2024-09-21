import React, { useState } from "react";
import "./light-aboutus.css"; // Default light mode styles
import "./dark-aboutus.css"; // Dark mode styles

const Aboutus = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`about-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="header">
        <h1>About Us</h1>
        <button onClick={toggleTheme} className="dark-mode-button">
          Toggle to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </header>
      <section>
        <p>Welcome to the About Us page. Here you will find detailed information about us.</p>
        {/* Add your about us content here */}
      </section>
    </div>
  );
};

export default Aboutus;
