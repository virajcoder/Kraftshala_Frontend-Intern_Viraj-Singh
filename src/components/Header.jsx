import React from 'react';

const Header = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-teal-900 dark:bg-gray-800">
      <h1 className="text-white text-2xl font-bold text-yellow-500">Weather App</h1>
      <button
        onClick={toggleDarkMode}
        className="bg-yellow-500 text-gray-800 dark:bg-gray-600 dark:text-white p-2 rounded">
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};

export default Header;
