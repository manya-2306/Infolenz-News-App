import React, { useState } from "react";
import "./light-awards.css"; // Default light mode styles
import "./dark-awards.css"; // Dark mode styles

const Awards = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`awards-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="header">
        <h1>Awards</h1>
        <button onClick={toggleTheme} className="dark-mode-button">
          Toggle to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </header>
      <section>
        <h2>Our Achievements</h2>
        <p>We are proud to have received numerous awards for our excellence in various fields.</p>
        {/* Add your awards content here */}
      </section>
    </div>
  );
};

export default Awards;
