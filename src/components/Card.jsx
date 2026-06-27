import React from "react";
import { motion } from "framer-motion";

const Card = ({ project }) => {
    return (
        <motion.div 
            className="mx-auto hover-card bg-dark-surface rounded-2xl shadow-lg transform transition-all duration-500 hover:shadow-2xl border border-[rgba(255,255,255,0.05)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <a href={project.link} target="_blank" rel="noreferrer">
                <div className="relative overflow-hidden rounded-t-2xl">
                    <motion.img 
                        className="rounded-t-2xl w-full h-56 object-cover transition-all" 
                        src={project.image} 
                        alt={project.title}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,23,42,0.9)] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-primary font-mono text-sm tracking-wider">VIEW PROJECT</span>
                    </div>
                </div>
            </a>
            <div className="p-6 bg-[rgba(30,41,59,0.8)] backdrop-blur-sm rounded-b-2xl">
                <a href={project.link} target="_blank" rel="noreferrer">
                    <h5 className="mb-3 text-xl font-bold tracking-tight text-primary font-heading hover:text-accent transition-colors duration-300">
                        {project.title}
                    </h5>
                </a>
                <p className="mb-4 font-normal text-muted-text line-clamp-3 text-sm">{project.description}</p>
                <div className="flex justify-between items-center">
                    <a
                        href={project.link}
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-light-text bg-primary rounded-lg hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary/30 transition-all duration-300"
                    >
                        View Project
                        <svg
                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </a>
                    <div className="flex space-x-2">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Card;