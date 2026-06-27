import React from 'react';
import './App.css';
import './index.css';
import Main from "../src/components/MainPage";
import ThemeToggle from "../src/components/ThemeToggle";
import ScrollToTop from "../src/components/ScrollToTop";
import { motion } from 'framer-motion';

// Add Boxicons CSS
import 'boxicons/css/boxicons.min.css';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="font-sans bg-dark-bg text-light-text"
    >
      <Main />
      <ThemeToggle />
      <ScrollToTop />
    </motion.div>
  );
}

export default App;