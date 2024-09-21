import React, { useState } from "react";
import "./light-help.css"; // Default light mode styles
import "./dark-help.css"; // Dark mode styles

const Help = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`help-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="header">
        <h1>Help</h1>
        <button onClick={toggleTheme} className="dark-mode-button">
          Toggle to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </header>
      <section>
        <p>If you need assistance, you're in the right place! Here are some resources to help you.</p>
        {/* Add your help content here */}
      </section>
    </div>
  );
};

export default Help;
