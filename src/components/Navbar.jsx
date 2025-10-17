import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Button from './Button';

/**
 * Navbar component for site navigation
 * @returns {JSX.Element} - Navbar component
 */
const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            PLP Task Manager
          </h1>
          <nav className="flex items-center space-x-4">
            <Button
              variant="secondary"
              size="sm"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
