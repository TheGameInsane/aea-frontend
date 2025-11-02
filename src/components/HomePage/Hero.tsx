import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-80"></div>
      <div className="absolute inset-0">
        <img
          src="/aea-frontend/homepage/engine.png"
          alt="Engine Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className="mb-8">
          <img
            src="/aea-frontend/homepage/aea_logo.png"
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
          Pioneering innovation in aerospace technology and fostering the next
          generation of aviation excellence
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronRight className="rotate-90 text-gray-400" size={32} />
      </div>
    </>
  );
};

export default Hero;
