'use client';
import { useEffect, useState } from 'react';
import { SunIcon } from '../../public/icons/SunIcon';
import { MoonIcon } from '../../public/icons/MoonIcon';

export default function SwitchDarkMode() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Tenta recuperar o tema do localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      // Se não houver tema salvo, usa a preferência do sistema
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setTheme(systemTheme);
      document.documentElement.classList.add(systemTheme);
      localStorage.setItem('theme', systemTheme); // Salva a preferência no localStorage
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
  };

  return (
    <div className="sm:flex sm:gap-4">
      <div
        onClick={toggleTheme}
        className={`w-14 h-8 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 cursor-pointer ${
          theme === 'dark' ? 'justify-end' : 'justify-start'
        }`}
      >
        {theme === 'dark' ? (
          <SunIcon className="w-6 h-6 text-yellow-500" />
        ) : (
          <MoonIcon className="w-6 h-6 text-gray-800" />
        )}
        <div className="bg-white w-6 h-6 rounded-full shadow-md transform transition-transform"></div>
      </div>
    </div>
  );
}
