'use client'
import { useState } from 'react';
import { SunIcon } from '../../public/icons/SunIcon';
import { MoonIcon } from '../../public/icons/MoonIcon';

export default function SwitchDarkMode(){
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(newTheme);
      };
    return(
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