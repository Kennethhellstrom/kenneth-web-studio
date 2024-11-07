'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { literata } from '@/app/fonts/font';
import SwitchDarkMode from './Switchdarkmode';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-sky-300/15 dark:bg-gray-900 h-32 ">
  <div className="mx-auto flex h-full max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-teal-600 dark:text-teal-300">
          <span className="sr-only">Home</span>
          <Image
            src="/images/logo.webp"
            alt="Logo"
            width={150}
            height={100}
            layout="fixed"
          />
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          {/* Mobile Menu (hidden by default, shown when isMenuOpen) */}
          <nav
            aria-label="Global"
            className={`fixed ${literata.className} inset-0 z-50 flex-col items-center justify-center bg-white dark:bg-gray-800 p-10 text-center space-y-6 transform transition-transform ${
              isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            } md:translate-x-0 md:relative md:bg-transparent md:dark:bg-transparent md:flex md:space-y-0 md:space-x-6 md:flex-row`}
          >
            {isMenuOpen && (
              <button
                onClick={closeMenu}
                className="absolute top-4 right-4 p-2 text-gray-500 dark:text-white"
                aria-label="Close menu"
              >
                &times; {/* Use an 'X' character to indicate closing */}
              </button>
            )}
            <ul className="flex flex-col md:flex-row items-center gap-6 text-sm font-bold">
              <li>
                <Link href="/#QuemSomos" className="text-gray-500 transition hover:text-blue-600 dark:text-white dark:hover:text-blue-400 text-lg" onClick={closeMenu}>
                  Quem Somos
                </Link>
              </li>

              <li>
                <Link href="/#Servicos" className="text-gray-500 transition hover:text-blue-600 dark:text-white dark:hover:text-blue-400 text-lg" onClick={closeMenu}>
                  Serviços
                </Link>
              </li>

              <li>
                <Link href="/#Qualidades" className="text-gray-500 transition hover:text-blue-600 dark:text-white dark:hover:text-blue-400 text-lg" onClick={closeMenu}>
                  Qualidades
                </Link>
              </li>

              <li>
                <Link href="/#Blog" className="text-gray-500 transition hover:text-blue-600 dark:text-white dark:hover:text-blue-400 text-lg" onClick={closeMenu}>
                  Blog
                </Link>
              </li>

               <li>
                <Link href="/#Form" className="text-gray-500 transitionv  hover:text-blue-600 dark:text-white dark:hover:text-blue-400 text-lg" onClick={closeMenu}>
                  Orçamento Rapido
                </Link>
              </li>

              {/*<li>
                <Link href="/blog" className="text-gray-500 transition hover:text-blue-600 dark:text-white dark:hover:text-blue-600 text-lg" onClick={closeMenu}>
                  Blog
                </Link>
              </li> */}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            {/* Dark mode switch */}
            <SwitchDarkMode />
            <button
              onClick={toggleMenu}
              className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
