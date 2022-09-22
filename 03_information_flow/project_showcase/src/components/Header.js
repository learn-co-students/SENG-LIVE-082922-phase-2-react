import React from "react";

const Header = ({ isDarkMode, onToggleDarkMode }) => {
  

  const handleToggleDarkMode = (e) => {
    onToggleDarkMode();
  }

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleToggleDarkMode}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
    </header>
  );
}

export default Header;
