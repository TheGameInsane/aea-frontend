import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Trophy, ChevronRight, Instagram, Facebook, Twitter, Linkedin, Github } from 'lucide-react';

export default function AEAHomepage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pastEvents = [
    {
      id: 1,
      title: "Aero Spectra",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=400&h=300&fit=crop",
      description: "Hands-on experience building model rockets"
    },
    {
      id: 2,
      title: "Aviation Symposium",
      date: "February 8, 2024",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop",
      description: "Industry experts discuss future of aviation"
    },
    {
      id: 3,
      title: "Drone Competition",
      date: "January 20, 2024",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop",
      description: "Annual inter-college drone racing event"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
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
              <a href="#about" className="text-sm tracking-wider hover:text-gray-400 transition-colors duration-300">ABOUT</a>
              <a href="#events" className="text-sm tracking-wider hover:text-gray-400 transition-colors duration-300">EVENTS</a>
              <a href="#competition" className="text-sm tracking-wider hover:text-gray-400 transition-colors duration-300">COMPETITION</a>
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
              <a href="#about" className="block text-lg tracking-wider hover:text-gray-400 transition-colors">ABOUT</a>
              <a href="#events" className="block text-lg tracking-wider hover:text-gray-400 transition-colors">EVENTS</a>
              <a href="#competition" className="block text-lg tracking-wider hover:text-gray-400 transition-colors">COMPETITION</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-80"></div>
        <div className="absolute inset-0">
          <img 
            src="/engine.png" 
            alt="Engine Background" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="mb-8">
            <img 
              src="/aea_logo.png" 
              alt="AEA Logo" 
              className="h-32 mx-auto mb-6 filter brightness-0 invert opacity-90"
            />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-widest mb-6 animate-fade-in">
            AEROSPACE ENGINEERING
          </h1>
          <h2 className="text-3xl md:text-4xl font-thin tracking-widest text-gray-300 mb-8">
            ASSOCIATION
          </h2>
          <div className="w-24 h-px bg-white mx-auto mb-8"></div>
          <p className="text-lg md:text-xl font-light tracking-wide text-gray-400 max-w-2xl mx-auto">
            Pioneering innovation in aerospace technology and fostering the next generation of aviation excellence
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="rotate-90 text-gray-400" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6">
                <span className="text-xs tracking-widest text-gray-500">WHO WE ARE</span>
                <h2 className="text-5xl md:text-6xl font-extralight tracking-wider mt-4 mb-8">About AEA</h2>
                <div className="w-16 h-px bg-white"></div>
              </div>
              
              <p className="text-lg font-light leading-relaxed text-gray-300 mb-6">
                The Aerospace Engineering Association stands at the forefront of student-led innovation in aviation and space exploration. We are a collective of passionate minds united by a singular vision: to push the boundaries of what's possible in aerospace technology.
              </p>
              
              <p className="text-lg font-light leading-relaxed text-gray-400">
                Through collaborative projects, cutting-edge workshops, and meaningful industry connections, we cultivate an environment where creativity meets engineering excellence.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-sm overflow-hidden border border-gray-800">
                <img 
                  src="https://aeamitindia.github.io/enginebg.jpg" 
                  alt="Jet Engine" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-4 gap-8 mt-24">
            {[
              { title: "Workshops", desc: "Technical excellence through hands-on learning" },
              { title: "Projects", desc: "Building tomorrow's aerospace solutions" },
              { title: "Network", desc: "Connecting with industry leaders" },
              { title: "Innovation", desc: "Pushing boundaries of possibility" }
            ].map((item, idx) => (
              <div key={idx} className="group">
                <div className="border-l border-gray-700 pl-6 py-4 group-hover:border-white transition-colors duration-300">
                  <h3 className="text-xl font-light tracking-wider mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section id="events" className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-xs tracking-widest text-gray-500">OUR LEGACY</span>
            <h2 className="text-5xl md:text-6xl font-extralight tracking-wider mt-4 mb-4">Past Events</h2>
            <div className="w-16 h-px bg-white"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event, idx) => (
              <div key={event.id} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-6 aspect-[4/3]">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-500"></div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center text-xs text-gray-500 tracking-wider">
                    <Calendar size={14} className="mr-2" />
                    {event.date}
                  </div>
                  <h3 className="text-2xl font-light tracking-wide group-hover:text-gray-400 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-light">{event.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a 
              href="/events" 
              className="inline-flex items-center text-sm tracking-widest border border-white px-8 py-4 hover:bg-white hover:text-black transition-all duration-300"
            >
              VIEW ALL EVENTS
              <ChevronRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* T-Shirt Competition Section */}
      <section id="competition" className="py-32 px-6 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <Trophy className="w-16 h-16 mx-auto mb-8 text-gray-400" />
            <span className="text-xs tracking-widest text-gray-500">ANNUAL COMPETITION</span>
            <h2 className="text-5xl md:text-6xl font-extralight tracking-wider mt-4 mb-8">T-Shirt Design Poll</h2>
            <div className="w-16 h-px bg-white mx-auto mb-8"></div>
          </div>

          <p className="text-lg font-light text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Our community has submitted exceptional designs for this year's official merchandise. Your vote shapes the identity we wear with pride.
          </p>

          <button className="group relative inline-flex items-center text-sm tracking-widest border border-white px-12 py-5 hover:bg-white hover:text-black transition-all duration-300 overflow-hidden">
            <span className="relative z-10">LOGIN WITH LDAP TO VOTE</span>
          </button>
          
          <p className="text-xs text-gray-600 mt-6 tracking-wide">
            Secure authentication required • One vote per member
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 bg-black py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/aea_logo.png" 
                  alt="AEA Logo" 
                  className="h-10 filter brightness-0 invert opacity-70"
                />
                <span className="text-xl font-light tracking-widest">AEA</span>
              </div>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                Aerospace Engineering Association<br />
                Indian Institute of Technology Madras,<br />
                Chennai, Tamil Nadu
              </p>
            </div>

            <div>
              <h3 className="text-sm tracking-widest mb-6 text-gray-400">CONNECT</h3>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm tracking-widest mb-6 text-gray-400">DEVELOPED BY</h3>
              <p className="text-sm text-gray-500 font-light">AEA Web Development Team</p>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-900 text-center">
            <p className="text-xs text-gray-600 tracking-wider">
              © 2025 AEROSPACE ENGINEERING ASSOCIATION • ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}