import React from "react";
import { motion } from "framer-motion";
import {
  SiOpenai,
  SiAnthropic,
  SiHuggingface,
  SiLangchain,
  SiGooglegemini,
  SiPytorch,
  SiOllama,
  SiTensorflow,
} from "react-icons/si";
import { FiLayers } from "react-icons/fi";

const AiExpertise = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const highlights = [
    {
      title: "LLM integration",
      text: "REST and streaming APIs, tool calling, structured outputs, retries, and production-minded error handling.",
    },
    {
      title: "RAG & data",
      text: "Chunking, embeddings, vector search, and wiring retrieval into apps so models use real documents safely.",
    },
    {
      title: "Prompting & quality",
      text: "Clear system prompts, eval patterns, and balancing cost, latency, and accuracy for your use case.",
    },
    {
      title: "Stack awareness",
      text: "Comfortable across major providers, open weights on Hugging Face, local runs with Ollama, and classic ML tooling.",
    },
  ];

  const tiles = [
    SiOpenai,
    SiAnthropic,
    SiHuggingface,
    SiLangchain,
    SiGooglegemini,
    SiPytorch,
    SiOllama,
    SiTensorflow,
    FiLayers,
  ];

  return (
    <section className="ai-expertise" id="ai">
      <div className="bg-grid"></div>
      <div className="bg-blur bg-blur-2"></div>

      <motion.div
        className="heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span>AI & LLMs</span>
        <h2>Large language models & intelligent features</h2>
      </motion.div>

      <motion.div
        className="ai-expertise-inner"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="ai-expertise-lead">
          I design and ship features powered by modern LLMs—chat experiences, agents, retrieval-augmented
          workflows, and integrations alongside familiar full-stack and blockchain work. I focus on clear
          prompts, observable behavior, and patterns that stay maintainable as models and APIs evolve.
        </p>

        <ul className="ai-expertise-highlights">
          {highlights.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              {item.text}
            </li>
          ))}
        </ul>

        <div className="ai-expertise-icon-wrap">
          <motion.div
            className="skills-grid ai-llm-icon-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {tiles.map((Icon, index) => (
              <motion.div className="bars-box compact" variants={fadeIn} key={index}>
                <div className="skill-icon">
                  <Icon />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AiExpertise;
