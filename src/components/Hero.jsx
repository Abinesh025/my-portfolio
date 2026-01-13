import { motion } from 'framer-motion'
import coder from "../assets/coder.png"
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";

import { useEffect, useState } from "react";

import { MdOutlineContactMail } from "react-icons/md";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const [showWelcome, setShowWelcome] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setShowWelcome(false);
  }, 5000); // 5 seconds

  return () => clearTimeout(timer);
}, []);


    const socialLinks = [
      {
        url: 'https://github.com/Abinesh025',
        icon: <AiFillGithub />,
      },
      {
        url: 'https://linkedin.com/in/rabinesh',
        icon: <FaLinkedin />,
      },
      {
        url: '#showcase',
        icon: <FaCode />,
      },
    ]

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
 
  <section className="relative min-h-screen flex items-center overflow-hidden z-10">
  <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-14 lg:gap-20 mt-16">

    {/* TEXT CONTENT */}
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="
        w-full lg:w-1/2
        flex flex-col
        items-center lg:items-start
        text-center lg:text-left
        p-6 sm:p-8 md:p-10
        order-2 lg:order-1
      "
    >
      <motion.h1
        variants={itemVariants}
        className="
          text-3xl sm:text-4xl md:text-5xl
          font-bold
          bg-gradient-to-r from-primary to-secondary
          bg-clip-text text-transparent
        "
      >
        Full-Stack
      </motion.h1>

      <motion.h2
        variants={itemVariants}
        className="
          text-2xl sm:text-3xl md:text-4xl
          font-bold mt-1
        "
      >
        Developer
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="
          text-xs sm:text-sm md:text-base
          text-base-content/70
          mt-3
        "
      >
        Computer Science & Business System
      </motion.p>

      <motion.p
        variants={itemVariants}
        className="
          text-sm sm:text-base md:text-lg
          text-base-content/60
          mt-4
          max-w-xl
        "
      >
        Passionate about building seamless user experiences and solving
        real-world problems through code.
      </motion.p>

      {/* TECH STACK */}
      <motion.div
        variants={itemVariants}
        className="
          mt-4
          flex flex-wrap
          justify-center lg:justify-start
          gap-2 sm:gap-3
        "
      >
        <span className="btn btn-outline btn-xs sm:btn-sm">React</span>
        <span className="btn btn-outline btn-xs sm:btn-sm">Tailwind CSS</span>
        <span className="btn btn-outline btn-xs sm:btn-sm">Framer Motion</span>
      </motion.div>

      {/* BUTTONS */}
      <motion.div
        variants={itemVariants}
        className="
          mt-6
          flex flex-col sm:flex-row
          gap-3 sm:gap-4
        "
      >
        <a href="#showcase" className="btn btn-primary btn-sm sm:btn-base rounded-none">
          View Projects <FaCode />
        </a>
        <a
          href="#contact"
          rel="noopener noreferrer"
          className="btn btn-outline btn-sm sm:btn-base rounded-none"
        >
          Contact Me <MdOutlineContactMail />
        </a>
      </motion.div>

      {/* SOCIAL ICONS */}
      <motion.div
        variants={itemVariants}
        className="
          mt-8
          flex gap-4
          justify-center lg:justify-start
        "
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target={link.url === "#showcase" ? "" :"_blank"}
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="
              p-3
              backdrop-blur-md
              bg-white/20 dark:bg-white/10
              rounded-lg
              border border-white/30
            "
          >
            <span className="text-2xl sm:text-3xl">{link.icon}</span>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
          {showWelcome && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1 }}
      className="absolute left-[43%] top-[20%] left-1/2   transform -translate-x-1/2 px-6 py-3 bg-black/50 text-white rounded-full backdrop-blur-md z-50"
    >
    ✨  Welcome, to my Portfolio 👋
    </motion.div>
  )}

    {/* IMAGE */}
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="
        w-full lg:w-1/2
        flex justify-center
        order-1 lg:order-2
      "
    >
      <img
        src={coder}
        alt="coder"
        className="
          w-[320px]
          sm:w-[300px]
          md:w-[400px]
          lg:w-[480px]
        "
      />
    </motion.div>

  </div>
</section>


  )
}

export default Hero
