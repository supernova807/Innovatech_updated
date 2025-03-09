import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar({ onNavClick }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (id) => {
    if (onNavClick) onNavClick(); // Close PDF when clicking a link

    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-800">
      <div className="container px-4 mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <img className="h-[60px] w-[60px] mr-4" src={logo} alt="logo" />
          <span className="text-2xl font-bold tracking-tight">InnovaTech Software</span>
        </div>

        {/* Centered Navigation Items */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <ul className="hidden lg:flex space-x-12">
            <li>
              <button onClick={() => handleNavClick("features")} className="hover:text-green-500">
                Features
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("workflow")} className="hover:text-green-500">
                Workflow
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("projects")} className="hover:text-green-500">
                Projects
              </button>
            </li>
           
          </ul>
        </div>

        {/* Contact Us Button */}
        <div className="hidden lg:flex">
          <Link to="/contact" onClick={onNavClick} className="bg-gradient-to-r from-green-500 to-green-900 py-2 px-3 rounded-md text-white font-semibold">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleNavbar}>{mobileOpen ? <X /> : <Menu />}</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
          <ul>
            <li className="py-4">
              <button onClick={() => handleNavClick("features")} className="hover:text-green-500">
                Features
              </button>
            </li>
            <li className="py-4">
              <button onClick={() => handleNavClick("workflow")} className="hover:text-green-500">
                Workflow
              </button>
            </li>
            <li className="py-4">
              <button onClick={() => handleNavClick("projects")} className="hover:text-green-500">
                Projects
              </button>
            </li>
          
          </ul>
        
        </div>
      )}
    </nav>
  );
}

export default Navbar;
