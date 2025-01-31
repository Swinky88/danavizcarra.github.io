import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button 
      onClick={toggleDarkMode}
      className="theme-toggle"
    >
      {darkMode ? '🌙' : '☀️'}
    </button>
  );
} 