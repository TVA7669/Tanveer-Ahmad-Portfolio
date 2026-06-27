import React from "react";
import { motion } from "framer-motion";
import { FiUser, FiPhone, FiMail, FiBriefcase } from "react-icons/fi";
import {
  SiGithub,
  SiCss3,
} from "react-icons/si";

const AboutSkills = () => {
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
    <section className="about-skills-combined" id="about">
      <div className="bg-grid"></div>
      <div className="bg-blur bg-blur-2"></div>
      
      <div className="combined-sections-container">
        {/* ABOUT SECTION */}
        <div className="combined-section" id="about-section">
          <motion.div 
            className="heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span>About Me</span>
            <h2>Introduction</h2>
          </motion.div>
          
          <div className="about-container">
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p>
                This portfolio reflects my dedication to continuous learning and professional growth. I actively stay updated with emerging web technologies and industry best practices through documentation, courses, and community engagement. My next learning objectives include TypeScript adoption, Next.js for server-side rendering, Redux for complex state management, and testing frameworks like Jest and React Testing Library.
<br></br>
                My expertise spans building and developing modern web platforms that emphasize performance, security, and seamless user experience. I thrive on solving complex problems, optimizing workflows, and contributing to innovative projects that make an impact.
              </p>
              
              <motion.div 
                className="information"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div className="info-box" variants={fadeIn}>
                  <FiBriefcase className="info-box-icon text-primary text-xl" aria-hidden />
                  <span>
                    Undergraduate Student at Superior University
                  </span>
                </motion.div>

                <motion.div className="info-box" variants={fadeIn}>
                  <FiUser className="info-box-icon text-primary text-xl" aria-hidden />
                  <span>Tanveer Ahmad</span>
                </motion.div>
                
                <motion.div className="info-box" variants={fadeIn}>
                  <FiPhone className="info-box-icon text-primary text-xl" aria-hidden />
                  <span>+92-316-6791610</span>
                </motion.div>
                
                <motion.div className="info-box" variants={fadeIn}>
                  <FiMail className="info-box-icon text-primary text-xl" aria-hidden />
                  <span>
                    <a href="mailto:jamtanveerab@gmail.com">
                      jamtanveerab@gmail.com
                    </a>
                  </span>
                </motion.div>
                
                <motion.div className="info-box" variants={fadeIn}>
                  <FiBriefcase className="info-box-icon text-primary text-xl" aria-hidden />
                  <span>
                    Undergraduate Student at <a href="https://www.superior.edu.pk/" target="_blank" rel="noreferrer">Superior University Lahore</a>
                  </span>
                </motion.div>
              </motion.div>
              
              <a
                href="https://github.com/jamtanveerab-web"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                More About Me
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* SKILLS SECTION */}
        <div className="combined-section" id="skills">
          <motion.div 
            className="heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span>Skills</span>
            <h2>My Technical Expertise</h2>
          </motion.div>
          
          <div className="skills-container">
            <div className="bars">
              <motion.div 
                className="skills-grid"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div className="bars-box compact" variants={fadeIn}>
                  <div className="skill-icon">
                    <i className="bx bxl-html5"></i>
                  </div>
                </motion.div>

                <motion.div className="bars-box compact" variants={fadeIn}>
                  <div className="skill-icon">
                    <SiCss3 />
                  </div>
                </motion.div>
                
                <motion.div className="bars-box compact" variants={fadeIn}>
                  <div className="skill-icon">
                    <i className="bx bxl-javascript"></i>
                  </div>
                </motion.div>
                
                <motion.div className="bars-box compact" variants={fadeIn}>
                  <div className="skill-icon">
                    <i className="bx bxl-react"></i>
                  </div>
                </motion.div>

                <motion.div className="bars-box compact" variants={fadeIn}>
                  <div className="skill-icon">
                    <SiGithub />
                  </div>
                </motion.div>
                
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSkills;
