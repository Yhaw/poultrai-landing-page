import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';
import logo from "../../../src/images/logo/poultrai_logo_no-bg.png";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Impact', href: '/impact' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-light-gray/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="flex items-center justify-center group-hover:scale-105 transition-transform">
                <img
                  src={logo}
                  alt="PoultrAI Logo"
                  className="h-10 w-auto md:h-12 lg:h-14 object-contain"
                />
              </div>
              <span className="font-heading font-bold text-xl text-dark">PoultrAI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 hover:scale-105 ${location.pathname === link.href
                      ? 'text-primary'
                      : 'text-dark-light hover:text-primary'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button>Get in touch</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-dark-light hover:text-primary p-2 rounded-xl transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-light-gray/20 animate-slide-up">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`hover:bg-light-bg block px-3 py-2 rounded-xl text-base font-medium transition-all duration-200 flex items-center justify-between group ${location.pathname === link.href
                    ? 'text-primary'
                    : 'text-dark-light hover:text-primary'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button className="w-full">Get in touch</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}