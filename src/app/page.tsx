"use client"

import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Github, Linkedin, ExternalLink, Menu, X } from 'lucide-react';

// Types
interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  gradient: string;
}

interface Skill {
  name: string;

}

// Components
const FloatingParticles: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white/10 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
};

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-white hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-110 capitalize relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-cyan-400 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white hover:text-cyan-400 block px-3 py-2 text-base font-medium transition-colors duration-300 capitalize w-full text-left"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20"></div>
      <FloatingParticles />

      <div className={`text-center z-10 px-4 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-400 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Muhammed Thaha
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Fullstack Developer
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Building modern and innovative digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border border-white/20 rounded-full text-white font-semibold transition-all duration-300 hover:bg-white/10 hover:border-cyan-400 hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>

        <div className="animate-bounce">
          <ChevronDown className="mx-auto text-white/50" size={32} />
        </div>
      </div>
    </section>
  );
};

const About: React.FC = () => {
  const skills: Skill[] = [
    { name: 'React/Next.js' },
    { name: 'TypeScript', },
    { name: 'Node.js' },
    { name: 'JavaScript' },
    { name: 'MongoDB' },
    { name: 'Vercel' },
  ];

  const [, setVisibleSkills] = useState<boolean[]>(new Array(skills.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSkills(prev => prev.map(() => true));
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I’m a self-taught web developer with a background in BBA. After completing my degree,
              I discovered my passion for coding and transitioned into tech.
              I specialized in the MERN stack through hands-on learning and guidance from Brototype Academy.
              Now, I enjoy building modern, responsive web applications and continuously improving my skills in full-stack development.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My approach combines technical expertise with creative problem-solving to deliver exceptional user experiences
              that drive business growth and user satisfaction.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'React/Next.js', 'Node.js', 'MongoDB', 'GitHub', , 'Vercel'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-cyan-400 text-sm font-medium hover:bg-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-cyan-400 text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: visibleSkills[index] ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 200}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Weather App',
      description: 'Full-stack e-commerce solution with real-time inventory, payment processing, and analytics dashboard.',
      tech: ['Next.js', 'TypeScript', 'TailwindCSS'],
      link: 'https://weather-app-virid-kappa.vercel.app/',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'Verve E-commerce',
      description: 'Collaborative project management tool with real-time updates, file sharing, and team analytics.',
      tech: ['Node.js', 'EJS', 'JavaScript', 'MongoDB'],
      link: 'https://verve-e-commerse-1.onrender.com',
      gradient: 'from-green-400 to-blue-500'
    }
    // ,
    // {
    //   id: 3,
    //   title: 'AI Content Generator',
    //   description: 'Machine learning powered content creation platform with natural language processing capabilities.',
    //   tech: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    //   link: '#',
    //   gradient: 'from-purple-500 to-pink-500'
    // }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/10"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
              }}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <ExternalLink className="text-white" size={24} />
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-cyan-400 text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors duration-300 font-medium"
                >
                  <span>View Project</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Let&apos;s Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Ready to bring your next project to life? I&apos;d love to hear about your ideas and discuss how we can create something amazing together.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          {[
            {
              icon: Mail,
              label: 'Email',
              href: 'https://mail.google.com/mail/?view=cm&to=thwaha323@gmail.com&subject=Hello&body=Hi%20there!',
              color: 'hover:text-blue-400',
            },
            {
              icon: Linkedin,
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/muhammed-thaha-tm-50a074241/',
              color: 'hover:text-blue-600',
            },
            {
              icon: Github,
              label: 'GitHub',
              href: 'https://github.com/TMThwaha',
              color: 'hover:text-gray-400',
            },
          ].map((contact, index) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center space-x-3 px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white ${contact.color} transition-all duration-300 hover:scale-105 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-400/10`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <contact.icon size={24} />
              <span className="font-medium">{contact.label}</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400">
          © 2025 Portfolio. Designed with passion and precision.
        </p>
      </div>
    </footer>
  );
};

// Main Portfolio Component
const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;