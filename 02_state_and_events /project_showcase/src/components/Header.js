import { useState } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const handleToggleDarkMode = () => {
    setIsDarkMode(isDarkMode => !isDarkMode)
  }

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <nav>
        <button onClick={handleToggleDarkMode}>{isDarkMode ? "Light" : "Dark"} Mode</button>
      </nav>
    </header>
  );
}

export default Header;
