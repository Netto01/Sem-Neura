import React, { useState, useEffect } from 'react';
import { Brain, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Conteúdos', href: '#conteudos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-2 bg-petrol-800 rounded-lg text-white transform group-hover:rotate-12 transition-transform duration-300">
            <Brain size={24} strokeWidth={2.5} />
          </div>
          <span className="text-xl font-bold text-petrol-900 tracking-tight">
            Sem Neura
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-slate-600 hover:text-petrol-800 font-medium transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-softYellow-400 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#conteudos"
            className="px-5 py-2 bg-petrol-800 text-white rounded-full font-medium hover:bg-petrol-900 transition-colors shadow-lg shadow-petrol-800/20 text-sm"
          >
            Começar Agora
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-petrol-800 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-700 hover:text-petrol-800 py-2 border-b border-gray-50"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contato"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center py-3 bg-petrol-800 text-white rounded-xl font-bold mt-2"
          >
            Entrar em Contato
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;