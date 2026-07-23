import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Mail, 
  Code2, Palette, Camera, ExternalLink, ChevronRight, Server, Globe,
  Smartphone, Network, Briefcase, Award
} from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Experience', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const SKILLS = [
  'React / React Native', 'JavaScript / TypeScript', 'Python (Django)', 'HTML/CSS', 
  'Mobile App Development', 'Network Architecture', 'Cisco / Mikrotik', 'Containerization (Docker)',
  'UI/UX Design', 'Graphic Design', 'Photography', 'Business Strategy & Leadership'
];

const SERVICES = [
  {
    title: 'Software Engineering',
    icon: <Code2 className="w-8 h-8 mb-4 text-cyan-400" />,
    description: 'Full-stack development of robust, scalable applications. From complex enterprise web platforms to custom backend architectures.'
  },
  {
    title: 'Mobile App Development',
    icon: <Smartphone className="w-8 h-8 mb-4 text-blue-400" />,
    description: 'Building native and cross-platform mobile applications that deliver seamless user experiences across iOS and Android devices.'
  },
  {
    title: 'Network Architecture',
    icon: <Network className="w-8 h-8 mb-4 text-emerald-400" />,
    description: 'Designing, configuring, and managing secure and efficient network infrastructures for businesses of all sizes.'
  },
  {
    title: 'Digital Marketing & Strategy',
    icon: <Briefcase className="w-8 h-8 mb-4 text-orange-400" />,
    description: 'As CEO of Insignia Digital Marketing, I provide strategic technological direction and comprehensive digital marketing solutions.'
  },
  {
    title: 'Graphic Design & UI/UX',
    icon: <Palette className="w-8 h-8 mb-4 text-purple-400" />,
    description: 'Creating visually stunning pieces, intuitive user interfaces, and brand identities that capture your vision and engage users.'
  },
  {
    title: 'Photography',
    icon: <Camera className="w-8 h-8 mb-4 text-pink-400" />,
    description: 'Capturing the essence of your cherished moments and transforming them into lifelong memories with an artistic eye.'
  }
];

const PROJECTS = [
  {
    title: 'Insignia Digital Marketing',
    description: 'CEO and Lead Architect for a premier technology and digital marketing services company in Zimbabwe.',
    tags: ['Leadership', 'Tech Strategy', 'Web Dev'],
    link: 'https://insignia.co.zw',
    icon: <Award className="w-5 h-5" />
  },
  {
    title: 'Fortune Architecture',
    description: 'Digital presence for an award-winning architecture firm in Kokomo, Indiana, highlighting their portfolio and services.',
    tags: ['Web Development', 'UI/UX', 'React'],
    link: 'https://fortunearchitecture.com',
    icon: <Globe className="w-5 h-5" />
  },
  {
    title: 'Fortune Companies (FC-Inc)',
    description: 'Corporate platform for Fortune Companies Inc, integrating their various divisions and real estate portfolio.',
    tags: ['Full Stack', 'Django', 'Architecture'],
    link: 'https://fc-inc.com',
    icon: <Server className="w-5 h-5" />
  },
  {
    title: 'Solarpro Zimbabwe',
    description: 'E-commerce and service platform for structured home and commercial solar installations, featuring complex routing and quote systems.',
    tags: ['Web App', 'UI/UX', 'JavaScript'],
    link: 'https://solarpro.co.zw',
    icon: <Globe className="w-5 h-5" />
  },
  {
    title: 'Glowwheel',
    description: 'Custom web platform and digital solution tailored for a specific client requirement in Zimbabwe.',
    tags: ['Web Development', 'Hosting', 'Design'],
    link: 'https://glowwheel.co.zw',
    icon: <Globe className="w-5 h-5" />
  },
  {
    title: 'LonMG',
    description: 'Digital presence for a premier head-hunting firm based in the United Arab Emirates, featuring a WordPress frontend and Python backend.',
    tags: ['WordPress', 'Python', 'Web Dev'],
    link: '#',
    icon: <Globe className="w-5 h-5" />
  }
];

const Navbar = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (e, id) => {
    if (id.startsWith('#')) {
      e.preventDefault();
      setIsOpen(false);
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-md py-4 shadow-lg shadow-slate-900/20' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" onClick={(e) => scrollTo(e, '#home')} className="text-2xl font-bold text-white tracking-tighter">
            Nyasha<span className="text-cyan-400">.dev</span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-300" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 shadow-xl">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-base font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const NAMES = ['Nyashadzashe', 'Theophilus', 'Katsidzira'];

const Hero = () => {
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 75 : 150;
    const currentName = NAMES[currentNameIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(currentName.substring(0, currentText.length + 1));
        if (currentText === currentName) {
          // Pause when the word is fully typed before deleting
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        setCurrentText(currentName.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          // Move to the next name in the array
          setCurrentNameIndex((prev) => (prev + 1) % NAMES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentNameIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center z-10">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-slate-700 bg-slate-800/50 text-sm text-slate-300 backdrop-blur-sm">
          🚀 Architecting Digital Solutions
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 min-h-[140px] md:min-h-[180px] flex flex-col items-center justify-center">
          <span>Hi, I'm</span>
          <span className="mt-2 flex items-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {currentText}
            </span>
            {/* Blinking cursor */}
            <span className="w-1 md:w-1.5 h-10 md:h-16 bg-cyan-400 ml-1 md:ml-2 animate-pulse"></span>
          </span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-slate-300 font-medium mb-6 max-w-3xl leading-snug">
          Software Engineer <span className="text-cyan-500">&bull;</span> Mobile App Developer <span className="text-cyan-500">&bull;</span> Network Architect
        </h2>
        <h3 className="text-xl text-slate-400 font-medium mb-8">
          CEO of <span className="text-white">Insignia Digital Marketing Zimbabwe</span>
        </h3>
        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
          Bridging the gap between code, infrastructure, and business strategy. I design scalable software, architect robust networks, and lead digital transformations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#projects" className="px-8 py-4 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2">
            View My Experience <ChevronRight className="w-4 h-4" />
          </a>
          <a href="#contact" className="px-8 py-4 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold transition-all duration-300">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-cyan-400 font-semibold mb-2 uppercase tracking-wider text-sm">About Me</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">A Journey of Continuous Growth.</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed mb-8">
              <p>
                My journey began with a passion for web development, but my curiosity has driven me to master a much broader spectrum of technology. Today, I am a comprehensive Software Engineer, developing complex web platforms and intuitive mobile applications.
              </p>
              <p>
                Beyond writing code, I am deeply involved in the foundational infrastructure of tech. As a Network Architect, I design, deploy, and secure the networks that allow modern businesses to thrive. My technical expertise is complemented by a strong eye for UI/UX and graphic design, ensuring that what I build is not only functional but beautiful.
              </p>
              <p>
                Currently, I serve as the CEO of Insignia Digital Marketing Zimbabwe, where I merge my technical acumen with business strategy to deliver holistic digital solutions for my clients.
              </p>
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
              Download Full Resume <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          
          <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-6">My Tech Stack & Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {SKILLS.map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 text-sm font-medium hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h3 className="text-cyan-400 font-semibold mb-2 uppercase tracking-wider text-sm">What I Do</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Comprehensive Solutions</h2>
          <p className="text-slate-400">From code to cloud to business strategy, I offer end-to-end technological expertise.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="bg-slate-800/40 border border-slate-700/50 p-8 rounded-2xl hover:bg-slate-800 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="bg-slate-900/50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h3 className="text-cyan-400 font-semibold mb-2 uppercase tracking-wider text-sm">Experience & Portfolio</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Recent Endeavors</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <a 
              key={index} 
              href={project.link}
              target={project.link !== '#' ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="group bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/20 block h-full flex flex-col"
            >
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-slate-900 rounded-lg text-cyan-400">
                    {project.icon}
                  </div>
                  {project.link !== '#' && <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors" />}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium text-slate-300 bg-slate-900 px-3 py-1 rounded-full border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactAndFooter = () => {
  return (
    <>
      <section id="contact" className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-cyan-400 font-semibold mb-2 uppercase tracking-wider text-sm">Get In Touch</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Build the Future</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            Whether you need a complex software system, a resilient network architecture, or strategic digital leadership, I'm ready to help you achieve your goals.
          </p>
          
          <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl text-left max-w-xl mx-auto">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea 
                  rows="4"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                  placeholder="Tell me about your project or network needs..."
                ></textarea>
              </div>
              <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                Send Message <Mail className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-12 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Nyashadzashe T Katsidzira. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-slate-900 text-slate-400 hover:text-cyan-400 rounded-lg hover:bg-slate-800 transition-all" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="p-2 bg-slate-900 text-slate-400 hover:text-cyan-400 rounded-lg hover:bg-slate-800 transition-all" aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="#" className="p-2 bg-slate-900 text-slate-400 hover:text-cyan-400 rounded-lg hover:bg-slate-800 transition-all" aria-label="X (Twitter)">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 scroll-smooth">
      <Navbar isScrolled={isScrolled} />
      <main>
        <Hero />
        <About />
        <ServicesSection />
        <ProjectsSection />
        <ContactAndFooter />
      </main>
    </div>
  );
}