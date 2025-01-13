import { useState, useEffect } from "react";
import { navLinks } from "../constants/index.js";



const Navitems = () =>{
    return(
        <ul className="nav-ul">
            {navLinks.map(({id, href, name}) =>(
                <li key={id} className="nav-li">
                    <a href={href} className="nav-li_a" onClick={() => {}}>
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    )
}

const Navbar= () =>{
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);
    
    
    
    return (
        <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
            isScrolled ? "bg-black" : "bg-black/0"
          }`}
        
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center py-5 mx-auto c-space">
              <a
                href="/"
                className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
              >
                <img src="assets/logo2.svg" alt="Logo" className="h-12 w-auto" />
              </a>
              <button
                onClick={toggleMenu}
                className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
                aria-label="Toggle menu"
              >
                <img
                  src={isOpen ? "/close.svg" : "/5.svg"}
                  alt="toggle"
                  className="w-6 h-6"
                />
              </button>
              <nav className="sm:flex hidden">
                <Navitems />
              </nav>
            </div>
          </div>
          <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
            <nav className="p-5">
              <Navitems />
            </nav>
          </div>
        </header>
      );
    };
    
    export default Navbar;