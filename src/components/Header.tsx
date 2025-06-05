import { ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Header() {
  return (
    <header id="home" className="relative h-screen flex items-center navy-gradient">
      <div className="absolute inset-0 opacity-20 bg-[url('C:\Users\Flameblade\Downloads\NavyNest (1)\john.jpg')] bg-cover bg-center"></div>
      <div className="container mx-auto px-6 z-10">
        <div className="text-center">
          <h1 className="text-white text-4xl md:text-6xl font-serif font-bold mb-4 animate-fadeIn">
            John Paul Reyes
          </h1>
          <h2 className="text-navy-100 text-xl md:text-3xl font-light mb-8 animate-fadeIn" style={{animationDelay: '0.2s'}}>
            Web Developer & Designer
          </h2>
          <p className="text-navy-100 text-lg max-w-2xl mx-auto mb-12 animate-fadeIn" style={{animationDelay: '0.4s'}}>
            Creating beautiful, responsive websites with modern technologies
            that help businesses grow and succeed online.
          </p>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="inline-block bg-white text-navy-600 py-3 px-8 rounded-full font-medium hover:bg-navy-50 transition-colors duration-300 animate-fadeIn cursor-pointer"
            style={{animationDelay: '0.6s'}}
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer"
        >
          <ArrowDown size={30} />
        </Link>
      </div>
    </header>
  );
}
