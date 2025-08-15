import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Verifica se o usuário está rolando a página
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Alternar o menu mobile
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 shadow-lg p-4`}
      style={{ backgroundColor: '#F8FFF8', color: '#3B4134' }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo e Título */}
        <div className="flex items-center space-x-4">
          <div className="h-16 w-16 flex-shrink-0">
            <img src="/img/logo.png" alt="Logo Instituto EDMA" className="h-full w-full object-contain rounded-full" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold tracking-wide whitespace-nowrap" style={{ color: '#3B4134' }}>
              INSTITUTO EDMA
            </h1>
            <p className="text-sm italic" style={{ color: '#3B4134' }}>
              Terapia Canabinóide
            </p>
          </div>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {['Home', 'Produtos', 'Contato', 'O Instituto EDMA'].map((item, index) => {
              // Configura os links de acordo com as páginas no Next.js
              const path = item === 'Home'
                ? '/'
                : item === 'Produtos'
                ? '/produtos'
                : item === 'Contato'
                ? '/contato'
                : '/oInstituto'; // Para o item "O Instituto EDMA"
              return (
                <li key={index}>
                  <Link href={path}>
                    <div className="relative hover:border-b-2 hover:border-[#3B4134] border-b-transparent transition-all duration-300">
                      {item}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Botão ASSOCIE-SE */}
          <Link href="/associe-se">
            <button
              className="px-4 py-2 text-sm font-bold border-2 border-[#3B4134] rounded-full transition-all duration-300"
              style={{ color: '#3B4134' }}
            >
              ASSOCIE-SE
            </button>
          </Link>
        </nav>

        {/* Menu hambúrguer para dispositivos móveis */}
        <div className="md:hidden">
          <button
            className="focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
              style={{ color: '#3B4134' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu de navegação móvel */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden bg-opacity-50 p-4 transition-all duration-500 ease-in-out transform"
          style={{ color: '#3B4134' }}
        >
          <ul className="space-y-4">
            {['Home', 'Produtos', 'Contato', 'O Instituto EDMA'].map((item, index) => {
              // Configura os links de acordo com as páginas no Next.js
              const path = item === 'Home'
                ? '/'
                : item === 'Produtos'
                ? '/produtos'
                : item === 'Contato'
                ? '/contato'
                : '/oInstituto'; // Para o item "O Instituto EDMA"
              return (
                <li key={index}>
                  <Link href={path}>
                    <div className="relative hover:border-b-2 hover:border-[#3B4134] border-b-transparent transition-all duration-300">
                      {item}
                    </div>
                  </Link>
                </li>
              );
            })}

            {/* Botão ASSOCIE-SE no menu mobile */}
            <li>
              <Link href="/associe-se">
                <button
                  className="w-full px-4 py-2 text-sm font-bold border-2 border-[#3B4134] rounded-full transition-all duration-300"
                  style={{ color: '#3B4134' }}
                >
                  ASSOCIE-SE
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
