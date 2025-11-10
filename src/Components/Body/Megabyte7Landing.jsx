import React, { useState, useEffect, useRef } from 'react';
import {
  FaCode,
  FaMobile,
  FaGlobe,
  FaRocket,
  FaUsers,
  FaPaintBrush,
  FaChessKnight,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaBars,
  FaTimes,
  FaArrowRight,
  FaCheck,
  FaStar,
  FaShieldAlt,
  FaLightbulb,
  FaArrowDown
} from 'react-icons/fa';

const Megabyte7Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'team', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const services = [
    {
      title: "Mobile Apps",
      description: "User-friendly mobile applications that deliver exceptional user experiences.",
      icon: <FaMobile className="w-6 h-6" />,
      features: ["iOS & Android", "React Native", "Flutter", "Native Development"],
      delay: "100"
    },
    {
      title: "Web Platforms",
      description: "Robust and scalable web solutions that drive your business forward.",
      icon: <FaGlobe className="w-6 h-6" />,
      features: ["React.js", "Node.js", "Full Stack", "Cloud Deployment"],
      delay: "200"
    },
    {
      title: "Custom Software",
      description: "Tailored software solutions for your specific business requirements.",
      icon: <FaCode className="w-6 h-6" />,
      features: ["Custom Solutions", "API Integration", "Database Design", "Maintenance"],
      delay: "300"
    }
  ];

  const features = [
    { icon: <FaRocket className="w-5 h-5" />, text: "Fast Delivery" },
    { icon: <FaShieldAlt className="w-5 h-5" />, text: "Secure Solutions" },
    { icon: <FaLightbulb className="w-5 h-5" />, text: "Innovative Approach" },
    { icon: <FaStar className="w-5 h-5" />, text: "Premium Quality" }
  ];

  const stats = [
    { number: "11-50", label: "Expert Team", suffix: "+" },
    { number: "100", label: "Projects", suffix: "+" },
    { number: "98", label: "Client Satisfaction", suffix: "%" },
    { number: "24/7", label: "Support", suffix: "" }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav className={`bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-r from-[#f26122] to-[#ed1b24] rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                   <img src="/icon.jpg" alt="Logo" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-[#f26122] to-[#ed1b24] bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                  Megabyte7
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {['home', 'about', 'services', 'team', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item
                      ? 'text-white bg-gradient-to-r from-[#f26122] to-[#ed1b24] shadow-lg'
                      : 'text-gray-700 hover:text-[#f26122] hover:bg-orange-50'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
              <button
                onClick={scrollToContact}
                className="ml-4 bg-gradient-to-r from-[#f26122] to-[#ed1b24] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:animate-pulse"
              >
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-[#f26122] transition duration-300 transform hover:scale-110"
              >
                {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-100 py-4 animate-slideDown">
              <div className="flex flex-col space-y-2">
                {['home', 'about', 'services', 'team', 'contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className={`px-4 py-4 rounded-lg font-semibold transition-all duration-300 ${
                      activeSection === item
                        ? 'text-white bg-gradient-to-r from-[#f26122] to-[#ed1b24]'
                        : 'text-gray-600 hover:text-[#f26122] hover:bg-orange-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                ))}
                <button
                  onClick={() => {
                    scrollToContact();
                    setIsMenuOpen(false);
                  }}
                  className="bg-gradient-to-r from-[#f26122] to-[#ed1b24] text-white px-4 py-4 rounded-lg font-semibold text-center mt-2 hover:shadow-lg transition-all duration-300"
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#f26122] rounded-full opacity-10 animate-float"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-[#ed1b24] rounded-full opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-[#f26122] rounded-full opacity-10 animate-float" style={{animationDelay: '4s'}}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Animated Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white shadow-lg border border-orange-100 mb-8 transform hover:scale-105 transition-all duration-300 animate-pulse">
              <span className="w-3 h-3 bg-[#f26122] rounded-full mr-3 animate-ping"></span>
              <span className="text-[#f26122] font-semibold">Trusted by 100+ businesses worldwide</span>
            </div>

            {/* Main Heading with Animation */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className={`block transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                Crafting{' '}
                <span className="bg-gradient-to-r from-[#f26122] to-[#ed1b24] bg-clip-text text-transparent animate-gradient">
                  Digital Excellence
                </span>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300">
              Your trusty tech trailblazers turning wildest ideas into digital reality with innovative software solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
              <button
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-[#f26122] to-[#ed1b24] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:animate-pulse flex items-center space-x-3"
              >
                <span>Start Your Project</span>
                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-20 animate-bounce">
              <div className="flex flex-col items-center space-y-2 text-gray-500 hover:text-[#f26122] transition-colors duration-300 cursor-pointer" onClick={() => document.getElementById('about').scrollIntoView({behavior: 'smooth'})}>
                <span className="text-sm font-semibold">Explore More</span>
                <FaArrowDown className="text-lg" />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-orange-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#f26122] to-[#ed1b24] rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  {feature.icon}
                </div>
                <span className="text-gray-700 font-semibold text-sm">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#f26122] to-[#ed1b24] relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center text-white transform hover:scale-110 transition-all duration-500"
                style={{animationDelay: `${index * 150}ms`}}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">
                  {stat.number}<span className="text-orange-200">{stat.suffix}</span>
                </div>
                <div className="text-orange-100 font-semibold text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute -left-10 top-1/4 w-32 h-32 bg-[#f26122] rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute -right-10 bottom-1/4 w-40 h-40 bg-[#ed1b24] rounded-full opacity-5 animate-pulse" style={{animationDelay: '2s'}}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  About <span className="bg-gradient-to-r from-[#f26122] to-[#ed1b24] bg-clip-text text-transparent">Megabyte7</span>
                </h2>
                <div className="w-24 h-2 bg-gradient-to-r from-[#f26122] to-[#ed1b24] rounded-full mb-8 transform hover:scale-x-110 transition-transform duration-500"></div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-2xl border-l-4 border-[#f26122] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 group">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center space-x-3 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-10 h-10 bg-[#f26122] rounded-xl flex items-center justify-center">
                      <FaRocket className="text-white text-lg" />
                    </div>
                    <span>Our Mission</span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Simplify complexity through innovative software solutions. Empower businesses by harnessing
                    the latest technology to streamline processes, boost productivity, and drive growth.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-2xl border-l-4 border-[#ed1b24] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 group">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center space-x-3 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-10 h-10 bg-[#ed1b24] rounded-xl flex items-center justify-center">
                      <FaUsers className="text-white text-lg" />
                    </div>
                    <span>Our Vision</span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Empower businesses of all sizes to thrive in the digital era, driving sustainable growth
                    and shaping a brighter tomorrow through technology.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#f26122] to-[#ed1b24] p-8 rounded-3xl text-white transform rotate-2 hover:rotate-0 transition-all duration-500 hover:shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-8 border border-white/20">
                  <div className="flex items-start space-x-6 group transform hover:scale-105 transition-all duration-300">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                      <FaUsers className="text-2xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">Dynamic Team</h4>
                      <p className="text-white/90 text-lg">11-50 passionate professionals working together</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 group transform hover:scale-105 transition-all duration-300">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                      <FaCode className="text-2xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">Software Development</h4>
                      <p className="text-white/90 text-lg">Core expertise in cutting-edge technologies</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 group transform hover:scale-105 transition-all duration-300">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                      <FaRocket className="text-2xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">Digital Innovation</h4>
                      <p className="text-white/90 text-lg">Driving your success in the digital landscape</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#f26122] rounded-full opacity-5 -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ed1b24] rounded-full opacity-5 translate-y-32 -translate-x-32"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-[#f26122] to-[#ed1b24] bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From user-friendly mobile apps to robust web platforms, we've got the tools and talent
              to bring your ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f26122] to-[#ed1b24] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <div className="w-16 h-16 bg-gradient-to-r from-[#f26122] to-[#ed1b24] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:scale-105 transition-transform duration-300">{service.title}</h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3 group/item transform hover:translate-x-2 transition-transform duration-300">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaCheck className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-1/3 left-10 w-20 h-20 bg-[#f26122] rounded-full opacity-10 animate-ping" style={{animationDuration: '3s'}}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-[#f26122] to-[#ed1b24] bg-clip-text text-transparent">Expert Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A dynamic blend of coding wizards, design maestros, and strategic thinkers united by
              a passion for pushing boundaries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group transform hover:scale-105 transition-all duration-500">
              <div className="w-32 h-32 bg-gradient-to-r from-[#f26122] to-[#ed1b24] rounded-3xl mx-auto mb-6 flex items-center justify-center text-white shadow-2xl group-hover:rotate-12 transition-transform duration-500 relative">
                <FaCode className="text-4xl" />
                <div className="absolute inset-0 rounded-3xl bg-white/20 group-hover:bg-white/0 transition-all duration-500"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Coding Wizards</h3>
              <p className="text-[#f26122] font-bold text-lg mb-4">Technical Excellence</p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Experts in cutting-edge technologies and software development best practices.
              </p>
            </div>

            <div className="text-center group transform hover:scale-105 transition-all duration-500">
              <div className="w-32 h-32 bg-gradient-to-r from-[#f26122] to-[#ed1b24] rounded-3xl mx-auto mb-6 flex items-center justify-center text-white shadow-2xl group-hover:rotate-12 transition-transform duration-500 relative">
                <FaPaintBrush className="text-4xl" />
                <div className="absolute inset-0 rounded-3xl bg-white/20 group-hover:bg-white/0 transition-all duration-500"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Design Maestros</h3>
              <p className="text-[#f26122] font-bold text-lg mb-4">User Experience</p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Creative professionals who craft intuitive and visually stunning interfaces.
              </p>
            </div>

            <div className="text-center group transform hover:scale-105 transition-all duration-500">
              <div className="w-32 h-32 bg-gradient-to-r from-[#f26122] to-[#ed1b24] rounded-3xl mx-auto mb-6 flex items-center justify-center text-white shadow-2xl group-hover:rotate-12 transition-transform duration-500 relative">
                <FaChessKnight className="text-4xl" />
                <div className="absolute inset-0 rounded-3xl bg-white/20 group-hover:bg-white/0 transition-all duration-500"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Strategic Thinkers</h3>
              <p className="text-[#f26122] font-bold text-lg mb-4">Business Solutions</p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Visionaries who align technology with business goals for maximum impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#f26122] to-[#ed1b24] relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full opacity-5 -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full opacity-5 translate-x-32 translate-y-32"></div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Unleash Your Digital Potential?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's team up and transform your business in the digital universe. Your digital partners in crime await.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-white text-[#f26122] px-12 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:animate-pulse group flex items-center space-x-3 mx-auto"
          >
            <span>Start Your Journey Today</span>
            <FaRocket className="group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-10 right-10 w-24 h-24 bg-[#f26122] rounded-full opacity-10 animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-20 left-10 w-16 h-16 bg-[#ed1b24] rounded-full opacity-10 animate-bounce" style={{animationDuration: '4s'}}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Get In <span className="bg-gradient-to-r from-[#f26122] to-[#ed1b24] bg-clip-text text-transparent">Touch</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Ready to discuss your project? We'd love to hear from you. Let's create something amazing together.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-6 p-6 rounded-2xl bg-gradient-to-r from-orange-50 to-red-50 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 group">
                  <div className="w-14 h-14 bg-gradient-to-r from-[#f26122] to-[#ed1b24] rounded-2xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Email</h4>
                    <p className="text-gray-600 text-lg">hello@megabyte7.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 p-6 rounded-2xl bg-gradient-to-r from-orange-50 to-red-50 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 group">
                  <div className="w-14 h-14 bg-gradient-to-r from-[#f26122] to-[#ed1b24] rounded-2xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Location</h4>
                    <p className="text-gray-600 text-lg">Digital Innovation Hub</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-3xl p-8 shadow-xl border border-orange-100 hover:shadow-2xl transition-all duration-500">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3 text-lg">Name</label>
                    <input
                      type="text"
                      className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#f26122] focus:border-transparent transition duration-300 text-lg hover:shadow-lg"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3 text-lg">Email</label>
                    <input
                      type="email"
                      className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#f26122] focus:border-transparent transition duration-300 text-lg hover:shadow-lg"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-3 text-lg">Subject</label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#f26122] focus:border-transparent transition duration-300 text-lg hover:shadow-lg"
                    placeholder="Project discussion"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-3 text-lg">Message</label>
                  <textarea
                    rows="5"
                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#f26122] focus:border-transparent transition duration-300 text-lg hover:shadow-lg resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#f26122] to-[#ed1b24] text-white py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:animate-pulse"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#f26122] rounded-full opacity-10 -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#ed1b24] rounded-full opacity-10 translate-x-20 translate-y-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6 group cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-r from-[#f26122] to-[#ed1b24] rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition duration-300">
                   <img src="/icon.jpg" alt="Logo" />
                </div>
                <span className="text-2xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                  Megabyte7
                </span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Your trusty tech trailblazers guiding you through the digital wilderness with finesse and flair.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['home', 'about', 'services', 'team'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      className="text-gray-400 hover:text-white transition duration-300 text-lg transform hover:translate-x-2 block"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300 text-lg transform hover:translate-x-2 block">
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Connect</h4>
              <div className="flex space-x-4">
                {[FaTwitter, FaLinkedin, FaGithub].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-gradient-to-r hover:from-[#f26122] hover:to-[#ed1b24] transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                  >
                    <Icon className="text-xl" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-lg">
            <p>&copy; 2024 Megabyte7. All rights reserved. Crafting digital excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Megabyte7Landing;