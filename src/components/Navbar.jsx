import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-gray-800">JD</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#home" className="text-gray-700 hover:text-gray-900 px-3 py-2">Home</a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 px-3 py-2">About</a>
              <a href="#experience" className="text-gray-700 hover:text-gray-900 px-3 py-2">Experience</a>
              <a href="#projects" className="text-gray-700 hover:text-gray-900 px-3 py-2">Projects</a>
              <a href="#skills" className="text-gray-700 hover:text-gray-900 px-3 py-2">Skills</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 px-3 py-2">Contact</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/Vedshree-Dhaybar" className="text-gray-700 hover:text-gray-900">
              <Github size={20} />
            </a>
            <a href="https://github.com/Vedshree-Dhaybar" className="text-gray-700 hover:text-gray-900">
              <Linkedin size={20} />
            </a>
            <a href="mailto:your.vedshreedhaybar@gamil.com" className="text-gray-700 hover:text-gray-900">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          {/* <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div> */}
        </div>
      </div>

      {/* Mobile menu */}
      {/* {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block text-gray-700 hover:text-gray-900 px-3 py-2">Home</a>
            <a href="#about" className="block text-gray-700 hover:text-gray-900 px-3 py-2">About</a>
            <a href="#experience" className="block text-gray-700 hover:text-gray-900 px-3 py-2">Experience</a>
            <a href="#projects" className="block text-gray-700 hover:text-gray-900 px-3 py-2">Projects</a>
            <a href="#skills" className="block text-gray-700 hover:text-gray-900 px-3 py-2">Skills</a>
            <a href="#contact" className="block text-gray-700 hover:text-gray-900 px-3 py-2">Contact</a>
          </div>
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;
