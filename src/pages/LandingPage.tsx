import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Hero from "../components/HomePage/Hero";
import About from "../components/HomePage/About";
import PastEvents from "../components/HomePage/PastEvents";
import Misc from "../components/HomePage/Misc";
import Footer from "../components/HomePage/Footer";

export default function AEAHomepage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              {/* <div className="h-10 relative">
                <img src="/aea_logo.png" alt="AEA Logo" className="w-full h-full object-contain filter brightness-0 invert" />
              </div> */}
              <span className="text-2xl font-light tracking-widest">AEA</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-12">
              <a
                href="#about"
                className="text-sm tracking-wider hover:text-gray-400 transition-colors duration-300"
              >
                ABOUT
              </a>
              <a
                href="#events"
                className="text-sm tracking-wider hover:text-gray-400 transition-colors duration-300"
              >
                EVENTS
              </a>
              <a
                href="#competition"
                className="text-sm tracking-wider hover:text-gray-400 transition-colors duration-300"
              >
                COMPETITION
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black/98 backdrop-blur-md">
            <div className="px-6 py-8 space-y-6">
              <a
                href="#about"
                className="block text-lg tracking-wider hover:text-gray-400 transition-colors"
              >
                ABOUT
              </a>
              <a
                href="#events"
                className="block text-lg tracking-wider hover:text-gray-400 transition-colors"
              >
                EVENTS
              </a>
              <a
                href="#competition"
                className="block text-lg tracking-wider hover:text-gray-400 transition-colors"
              >
                COMPETITION
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Hero />
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-32 px-6 bg-gradient-to-b from-black to-gray-950"
      >
        <About />
      </section>

      {/* T-Shirt Competition Section */}
      <section
        id="competition"
        className="py-32 px-6 bg-gradient-to-b from-black to-gray-950"
      >
        <Misc />
      </section>

      {/* Past Events Section */}
      <section id="events" className="py-32 px-6 bg-black">
        <PastEvents />
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 bg-black py-16 px-6">
        <Footer />
      </footer>
    </div>
  );
}
