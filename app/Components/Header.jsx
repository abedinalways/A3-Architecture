'use client'
import React, { useState } from 'react';
import { X, Menu } from 'lucide-react';
import { motion} from 'framer-motion';
const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'News', href: '#news' },
  ];

  return (
    <>
      {/* Top Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-[700px] animate-fade-in"
        style={{ animationDelay: '0.2s' }}
      >
        <nav className="flex items-center justify-between px-6 py-3 bg-[#F8EDE3] text-[#8D493A] rounded-md shadow-lg backdrop-blur-sm">
          <h1 className="font-bold font-[Archivo] text-xl tracking-wide">
            Troscán
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 font-semibold items-center">
            {menuItems.map(item => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="hover:text-[#71372a] transition-colors duration-200 cursor-pointer"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="hidden md:inline-block">
            <button className="bg-[#8D493A] text-[#F8EDE3] font-[Archivo] rounded-md text-md font-bold px-6 py-2 hover:bg-[#71372a] transition-all duration-200 transform hover:scale-105 shadow-md">
              Contact Us
            </button>
          </a>

          {/* Mobile Hamburger Icon */}
          <button
            className="md:hidden bg-[#8D493A] text-[#F8EDE3] p-2 rounded hover:bg-[#71372a] transition-colors duration-200"
            onClick={() => setIsMobileOpen(true)}
          >
            <Menu size={20} />
          </button>
        </nav>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-240 bg-white max-h-1/3 p-6 animate-fade-in"
          style={{
            animation: 'fadeIn 0.3s ease-out',
            backdropFilter: 'blur(8px)',
          }}
        >
          {/* Close button */}
          <div className="flex justify-between items-start">
            <h1 className="font-bold text-xl text-[#8D493A] tracking-wide">
              Troscán
            </h1>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="bg-[#8D493A] text-white p-2 rounded hover:bg-[#71372a] transition-colors duration-200"
            >
              <X size={18} />
            </button>
          </div>

          {/* Menu links */}
          <ul className="mt-6  text-center text-[#8D493A] font-semibold text-sm">
            {menuItems.map((item, index) => (
              <li
                key={item.name}
                style={{
                  animation: `slideInUp 0.4s ease-out ${
                    (index + 1) * 0.1
                  }s both`,
                }}
              >
                <a
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block py-2 hover:text-[#71372a] transition-colors duration-200 cursor-pointer"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <div
            className="mt-6 flex justify-center"
            style={{ animation: 'slideInUp 0.4s ease-out 0.5s both' }}
          >
            <a href="#contact">
              <button
                className="bg-[#8D493A] text-[#F8EDE3] rounded-md text-md font-bold px-6 py-3 hover:bg-[#71372a] transition-all duration-200 transform hover:scale-105 shadow-md"
                onClick={() => setIsMobileOpen(false)}
              >
                Contact us
              </button>
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </>
  );
};

export default Header;
