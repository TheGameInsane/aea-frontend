import {Instagram, Facebook, Twitter, Linkedin} from 'lucide-react'

const Footer = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/homepage/aea_logo.png"
                alt="AEA Logo"
                className="h-10 filter brightness-0 invert opacity-70"
              />
              <span className="text-xl font-light tracking-widest">AEA</span>
            </div>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              Aerospace Engineering Association
              <br />
              Indian Institute of Technology Madras,
              <br />
              Chennai, Tamil Nadu
            </p>
          </div>

          <div>
            <h3 className="text-sm tracking-widest mb-6 text-gray-400">
              CONNECT
            </h3>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              {/* <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  <Github size={20} />
                </a> */}
            </div>
          </div>

          <div>
            <h3 className="text-sm tracking-widest mb-6 text-gray-400">
              DEVELOPED BY
            </h3>
            <p className="text-sm text-gray-500 font-light">
              AEA Web Development Team
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-900 text-center">
          <p className="text-xs text-gray-600 tracking-wider">
            © 2025 AEROSPACE ENGINEERING ASSOCIATION • ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;