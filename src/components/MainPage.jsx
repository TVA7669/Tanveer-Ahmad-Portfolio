import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiMedium, SiUpwork } from "react-icons/si";
import AboutSkills from "./AboutSkills";
import AiExpertise from "./AiExpertise";
import "../assets/css/style.css";

// Images
import MyImg from "../assets/img/main.png";
import homeowner from "../assets/img/hoc.png";
import instaflow from "../assets/img/instaflow.png"; // Using agecalculator.png as placeholder for InstaFlow
import hocBackend from "../assets/img/hocbackend.png"; // Using socialmediabackend.png as placeholder for HOC Backend
import chessArena from "../assets/img/chess.png";
import iNoteBook from "../assets/img/iNoteBook.png"
import Weather from "../assets/img/Weather.png"  // Using ethermint.png as placeholder for Blockchain Chess Arena

import cv from "../assets/resume/resume.pdf";
import Card from "./Card";

const Portfolio = () => {
  const projects = [
    {
      image: instaflow,
      title: "Amazon-Style Product Page — Built with HTML & CSS (Static Layout)",
      description:
        "This project is a fixed-width, non-responsive static replica of an Amazon product page, built entirely using HTML5 and CSS3. It focuses on visual design, layout structure, and styling accuracy — without JavaScript or responsive breakpoints.",
      link: "https://github.com/jamtanveerab-web",
    },
    {
      image: hocBackend,
      title: "Rock Paper Scissors Game — Interactive Web Game with HTML, CSS & JavaScript",
      description:
        "This is a fully interactive Rock Paper Scissors game where players compete against the computer. Built with HTML, CSS, and JavaScript, it features a clean, modern interface with real-time gameplay, score tracking, and visual feedback — all within a single webpage.",
      link: "https://github.com/jamtanveerab-web",
    },
    {
      image: chessArena,
      title: "Tic Tac Toe Game — Classic Two-Player Game with HTML, CSS & JavaScript",
      description:
        "This is a fully functional Tic Tac Toe (Noughts and Crosses) game designed for two players. Built with HTML, CSS, and JavaScript, it features a clean, modern interface with real-time gameplay, win detection, move tracking, and an interactive 3x3 grid — all within a single webpage.",
      link: "https://github.com/jamtanveerab-web",
    },
    {
      image: homeowner,
      title: "TextUtils — Text Manipulation Web App Built with React.js",
      description:
        "Developed Home Owner Club, a platform built for everyone who wants to participate in the international property and real estate market. The platform connects property buyers, sellers, and investors worldwide, providing tools for property listing, searching, and investment analysis. Features include user authentication, property management, interactive maps, messaging system, and payment processing. Built with modern web technologies to ensure a seamless user experience.",
      link: "https://github.com/jamtanveerab-web",
    },
    {
      image: iNoteBook,
      title :"iNotebook – Full-Stack Notes App",
      description:"A full-stack MERN note-taking app with secure user authentication. Users can sign up, log in, and create, edit, and delete personal notes — all protected via JWT-based auth, with a React frontend and Express/MongoDB backend.",
      link: "https://github.com/jamtanveerab-web",
    },
     {
      image: Weather,
      title :"PkMausam — Pakistan Weather App",
      description:"PkMausam is a weather web app that displays real-time weather data for major Pakistani cities. Built with a clean, responsive UI for quick, at-a-glance forecasts.",
      link: "https://github.com/jamtanveerab-web",
    }
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-100px 0px -100px 0px"
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="overflow-x-hidden">
      {loading ? (
        <div className="flex items-center justify-center h-screen bg-dark-bg">
          <div className="loader ease-linear"></div>
        </div>
      ) : (
        <>
          <header>
            <motion.a 
              href="/" 
              className="logo"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary">Tanveer.</span>
              <span className="text-accent">Ahmad</span>
             {/* <span className="text-xs text-muted-text ml-2 font-mono">2025</span> */}
            </motion.a>
            
            <div
              className="bx bx-menu text-2xl"
              id="menu-icon"
              onClick={toggleMenu}
            ></div>
            
            <ul className={`navbar ${isMenuOpen ? "open" : ""}`}>
              <li>
                <a href="#home" className={activeSection === "home" ? "active" : ""}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className={activeSection === "about" ? "active" : ""}>
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className={activeSection === "skills" ? "active" : ""}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#ai" className={activeSection === "ai" ? "active" : ""}>
                  AI
                </a>
              </li>
              <li>
                <a href="#projects" className={activeSection === "projects" ? "active" : ""}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className={activeSection === "contact" ? "active" : ""}>
                  Contact
                </a>
              </li>
            </ul>
          </header>

          {/* HOME */}
          <section className="home" id="home">
            <div className="bg-grid"></div>
            <div className="bg-blur bg-blur-1"></div>
            <div className="bg-blur bg-blur-2"></div>
            
            <motion.div 
              className="social"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.a href="https://github.com/jamtanveerab-web" target="_blank" rel="noreferrer" variants={fadeIn}>
                <FiGithub />
              </motion.a>
              <motion.a href="https://medium.com/@jamtanveerab" target="_blank" rel="noreferrer" variants={fadeIn}>
                <SiMedium />
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/tanveer-ahmad-472555398/" target="_blank" rel="noreferrer" variants={fadeIn}>
                <FiLinkedin />
              </motion.a>
              <motion.a href="https://www.upwork.com/freelancers/~014ba2b250db42b75b" target="_blank" rel="noreferrer" variants={fadeIn}>
                <SiUpwork />
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="home-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span>Hello, I'm</span>
              <h1>Tanveer Ahmad</h1>
              <h2>Frontend Developer</h2>
                              <p className="about-text-expanded">
                  I am a passionate Frontend Developer with a strong foundation in modern web technologies, specializing in creating interactive, responsive, and user-centric web applications. My portfolio showcases five diverse projects that demonstrate my proficiency across the full spectrum of frontend development - from static websites built with pure HTML and CSS to dynamic single-page applications developed using React.js. Each project reflects my commitment to writing clean, maintainable code while delivering seamless user experiences.
                   </p>
              <div className="flex gap-4 mt-6">
              <a
                href={cv}
                target="_blank"
                rel="noreferrer"
                download="TanveerAhmad-Resume.pdf"
                  className="btn"
              >
                Download Resume
              </a>
                <a href="#contact" className="btn btn-secondary">
                  Contact Me
                </a>
            </div>
            </motion.div>
            
            <motion.div 
              className="home-img"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img 
                src={MyImg}
                  alt="Tanveer Ahmad"
                loading="eager" 
                className="enhanced-image"
                />
            </motion.div>
          </section>

          {/* ABOUT & SKILLS COMBINED */}
          <AboutSkills />

          {/* AI & LLMs */}
          <AiExpertise />

          {/* PROJECTS */}
          <section className="projects" id="projects">
            <div className="bg-grid"></div>
            <div className="bg-blur bg-blur-1"></div>
            
            <motion.div 
              className="heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span>Projects</span>
              <h2>Some of my work</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} project={project} />
              ))}
            </div>
          </section>

          {/* CONTACT */}
          <section className="contact" id="contact">
            <div className="bg-grid"></div>
            <div className="bg-blur bg-blur-2"></div>
            
            <motion.div 
              className="heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span>Contact</span>
              <h2>Connect With Me</h2>
            </motion.div>
            
            <motion.div 
              className="contact-form"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form action="https://api.web3forms.com/submit" method="POST">
                <input
                  type="hidden"
                  name="access_key"
                  value="5baa6804-5d48-4326-87f4-7c3e8533b623"
                />
                
                <div className="input-group">
                <input
                  type="text"
                  name="name"
                    placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
                
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  required
                ></textarea>
                
                <button
                  type="submit"
                  className="btn w-full sm:w-auto"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </section>

          {/* FOOTER */}
          <div className="copyright">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              © 2025 Tanveer Ahmad. All Rights Reserved
              <a href="https://github.com/jamtanveerab-web" target="_blank" rel="noreferrer">
                <FiGithub className="text-xl" />
              </a>
            </motion.p>
          </div>
        </>
      )}
    </div>
  );
};

export default Portfolio;